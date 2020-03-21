const si = require('systeminformation')
const fs = require('fs')

const filePath = '../data/history.json'
const filePathMonitor = '../data/monitor.json'

// Create a JSON file, which will serves as a simple kind of data base, to persist data in the project
fs.appendFile(filePath, '', function (err) {
  if (err) throw err
})

// Create a JSON file, which will serves as a simple kind of data base, to persist data in the project
fs.appendFile(filePathMonitor, '', function (err) {
  if (err) throw err
})

const arrayOfObjects = []
setInterval(() => {
  si.currentLoad().then(data => {
    
      // add a TimeStamp
      data.time = Date.now()
      arrayOfObjects.push(data)
      monitor(data)
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

const monitoringResult = {
  exceed:[],
  recovery:[]
}

let exceedTimeInfo = {}
let recoveryTimeInfo = {}

// (10%), the real value should be 100%
const exceedMax = 25 // (10%)
let counterExceed = 0
let counterRecovery = 0
// if we load every 10,000 miliseconds once a CPU load, in order to monitor 2 minitues
// continuous exceeding state, we need to increment the counterExceed to 12.
const totalTimes = 2


function monitor(iCPULoadData)
{
  if(iCPULoadData.currentload > exceedMax){
    counterExceed ++
    if(counterExceed === totalTimes){
      // TBD
      // notify user that CPU load has exceeded
      exceedTimeInfo.endTime = iCPULoadData.time.toString()
      monitoringResult.exceed.push(exceedTimeInfo)
      const jsonStringData = JSON.stringify(monitoringResult, null, 2)
      fs.writeFile(filePathMonitor, jsonStringData, function (err) {
          if (err) throw err
      })
      console.log("it ended exceed from for the " + monitoringResult.exceed.length + " times, end at date: "+ iCPULoadData.time.toString());
      exceedTimeInfo = {}
    }else if(counterExceed === 1){
      exceedTimeInfo.startTime = iCPULoadData.time.toString()
      console.log("it started exceed from for the " + (monitoringResult.exceed.length+1) + " times, begins at date: "+ iCPULoadData.time.toString());
    }
  }else{
    if(counterExceed >= totalTimes)
    {
      // this means that we have notify user of high CPU load, once it get below than exceedMax,
      // we need to start monitor if it get recovered from exceeding state
      counterRecovery = 1
      recoveryTimeInfo.startTime = iCPULoadData.time.toString()
      console.log("it started recovery from for the " + (monitoringResult.recovery.length+1) + " times, begins at date: "+ iCPULoadData.time.toString());
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
      recoveryTimeInfo.endTime = iCPULoadData.time.toString()
      if(recoveryTimeInfo.startTime && recoveryTimeInfo.endTime)
      {
        monitoringResult.recovery.push(recoveryTimeInfo)
        const jsonStringData = JSON.stringify(monitoringResult, null, 2)
        fs.writeFile(filePathMonitor, jsonStringData, function (err) {
            if (err) throw err
        })
        console.log("it ended recovery from for the " + monitoringResult.recovery.length + " times, ends at date: "+ iCPULoadData.time.toString());
        recoveryTimeInfo = {}
      }
    }
    counterExceed = 0
  }
}