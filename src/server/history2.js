const si = require('systeminformation')
const fs = require('fs')

const filePath = '../data/history.json'

// Create a JSON file, which will serves as a simple kind of data base, to persist data in the project
fs.appendFile(filePath, '', function (err) {
  if (err) throw err
})

const arrayOfObjects = []
setInterval(() => {
  si.currentLoad().then(data => {
    
      // add a TimeStamp
      data.time = Date.now()
      arrayOfObjects.push(data)
      if(arrayOfObjects.length>60)
      {
        arrayOfObjects.splice(0,1)
      }

      // write JSON File
      const jsonStringData = JSON.stringify(arrayOfObjects, null, 2)
      fs.writeFile(filePath, jsonStringData, function (err) {
          if (err) throw err
      })
  })
}, 10000)

let exceed = false
let monitoringResult = {
  exceed:[],
  recovery:[]
}

const exceedTimeInfo = {
  startTime: "",
  endTime: ""
}

const recoveryTimeInfo = {
  startTime: "",
  endTime: ""
}
// (10%), the real value should be 100%
const exceedMax = 10 // (10%)
let counterExceed = 0
let counterRecovery = 0
// if we load every 10,000 miliseconds once a CPU load, in order to monitor 2 minitues
// continuous exceeding state, we need to increment the counterExceed to 12.
const totalTimes = 120000/100000
if(data.currentload > exceedMax){
  exceed = true
  counterExceed ++
  if(counterExceed === totalTimes){
    // TBD
    // notify user that CPU load has exceeded
    exceedTimeInfo.endTime = data.time
    monitoringResult.exceed.push(exceedTimeInfo)
    exceedTimeInfo.startTime = ""
    recoveryTimeInfo.endTime = ""
  }else if(counterExceed === 1){
    exceedTimeInfo.startTime = data.time
  }
}else{
  exceed = false
  if(counterExceed >= totalTimes)
  {
    // this means that we have notify user of high CPU load, once it get below than exceedMax,
    // we need to start monitor if it get recovered from exceeding state
    counterRecovery = 1
    recoveryTimeInfo.startTime = data.time
  }
  else if(counterExceed === 0)
  {
    counterRecovery ++
  }

  if(counterRecovery === totalTimes)
  {
    // when CPU load get recover from exceed state for two minutes or longer
    // TBD
    // notify user that CPU load has been recovered
    recoveryTimeInfo.endTime = data.time
    monitoringResult.recovery.push(recoveryTimeInfo)
    recoveryTimeInfo.startTime = ""
    recoveryTimeInfo.endTime = ""
  }
  counterExceed = 0
}