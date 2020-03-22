const si                  = require('systeminformation')
const fs                  = require('fs')
const express             = require('express')
const app                 = express()

// ------   Set-Up the port for handling Server-Sent Events (SSE)  ---- 
app.listen(3000)

// ------   Declare json file path to store history & monitor data  ----
const historyFilePath     = '../data/history.json'
const monitorFilePath     = '../data/monitor.json'

// Create a history JSON file, which will serves as a simple data base, to persist data in the project
fs.appendFile(historyFilePath, '', function (err) {
  if (err) throw err
})

// Create a monitor Json file, which will store information of monitoring result, history of exceed/recovery process
fs.appendFile(monitorFilePath, '', function (err) {
  if (err) throw err
})

// --------------------         1. retrieve CPU data                ----------------------------
// --------------------         2. monitoring CPU data              ----------------------------
// --------------------         3. save useful CPU date for UI visualization in history.json      ----------------------------
const historyDataArray = []
setInterval(() => {
  si.currentLoad().then(iRawData => {

      // normalize CPU average load, save the result of every iteration in an object 
      const data = {
        loadAverage: getNormalized(iRawData, "load"),
        loadAvgUser: getNormalized(iRawData, "load_user"),
        loadAvgSys: getNormalized(iRawData, "load_system"),
        time: Date.now(),
        timeUTC: getFormatedDate()
      }
    
      // push the result of every iteration to the history array
      historyDataArray.push(data)

      // only keep history of 60 iteration, thus 60 * 10000 miliseconds = 10 minutes
      if(historyDataArray.length>60)
      {
        historyDataArray.splice(0,1)
      }

      // write history JSON File
      const jsonStringData = JSON.stringify(historyDataArray, null, 2)
      fs.writeFile(historyFilePath, jsonStringData, function (err) {
          if (err) throw err
      })

      // at each interation, monitor the CPU load information at real time
      monitor(data)
  })
}, 10000)


// --------------------    END     ----------------------------


/**
 * get normalize load average to account for multiple CPUs
 * 
 * @param {object} iRawData raw data retrieved by system information
 * @param {string} iType , could be either "load", "load_user", "load_system"
 * @returns {number}
 */
function getNormalized(iRawData, iType)
{

  // get the number of CPUs on the computer:
  const cpusCount = iRawData.cpus.length

  // make a sum of total CPU load :
  let totalLoad = 0
  iRawData.cpus.forEach((cpu)=>{
    totalLoad += cpu[iType]
  })

  // normalize the CPU load average with:
  const loadAverage = totalLoad / cpusCount * 0.01

  return loadAverage
}

/**
 * transform current time to a UTC string
 */
function getFormatedDate()
{
  const curDate = Date.now()
  const date = new Date(curDate); 
  return date.toUTCString(); 
}


// ---------------------------------------------------------------------------------------------
// --------------------            monitoring CPU data              ----------------------------
// ---------------------------------------------------------------------------------------------

const monitoringResult = {
  exceed:[],
  recovery:[]
}

let exceedTimeInfo = {}
let recoveryTimeInfo = {}

// the real value should be 100%
const exceedMax = 0.25 // (25%)
let counterExceed = 0
let counterRecovery = 0
// if we load every 10,000 miliseconds once a CPU load, in order to monitor 2 minitues
// continuous exceeding state, we need to increment the counterExceed to 12.
const totalTimes = 2

function monitor(iCPULoadData)
{
  if(iCPULoadData.loadAverage > exceedMax){
    counterExceed ++
    if(counterExceed === totalTimes){
      // notify user that CPU load has exceeded
      exceedTimeInfo.endTime = iCPULoadData.timeUTC
      monitoringResult.exceed.push(exceedTimeInfo)
      sendMessage("CPU load average of your computer has exceeded for the " + monitoringResult.exceed.length + "th times, at: "+ iCPULoadData.timeUTC, "exceed")
      console.log("CPU load average of your computer has exceeded for the " + monitoringResult.exceed.length + "th times, at: "+ iCPULoadData.timeUTC);
      const jsonStringData = JSON.stringify(monitoringResult, null, 2)
      fs.writeFile(monitorFilePath, jsonStringData, function (err) {
          if (err) throw err
      })
      exceedTimeInfo = {}
    }else if(counterExceed === 1){
      exceedTimeInfo.startTime = iCPULoadData.timeUTC
      console.log("load average might exceed for the " + (monitoringResult.exceed.length+1) + "th times, from: "+ iCPULoadData.timeUTC);
    }
  }else{
    if(counterExceed >= totalTimes)
    {
      // this means that we have notify user of high CPU load, once it get below than exceedMax,
      // we need to start monitor if it get recovered from exceeding state
      counterRecovery = 1
      recoveryTimeInfo.startTime = iCPULoadData.timeUTC
      console.log("load average might recover for the " + (monitoringResult.recovery.length+1) + "th times, from: "+ iCPULoadData.timeUTC);
    }
    else if(counterExceed === 0)
    {
      counterRecovery ++
    }
  
    if(counterRecovery === totalTimes)
    {
      recoveryTimeInfo.endTime = iCPULoadData.timeUTC
      if(recoveryTimeInfo.startTime && recoveryTimeInfo.endTime)
      {
        // when CPU load get recover from exceed state for two minutes or longer, notify user that CPU load has been recovered
        monitoringResult.recovery.push(recoveryTimeInfo)
        sendMessage("CPU load average of your computer has been recovered for the " + monitoringResult.recovery.length + "th times, at: "+ iCPULoadData.timeUTC, "recovery")
        console.log("CPU load average of your computer has been recovered for the " + monitoringResult.recovery.length + "th times, at: "+ iCPULoadData.timeUTC);
        const jsonStringData = JSON.stringify(monitoringResult, null, 2)
        fs.writeFile(monitorFilePath, jsonStringData, function (err) {
            if (err) throw err
        })
        recoveryTimeInfo = {}
      }
    }
    counterExceed = 0
  }
}

// --------------------                   End                       ----------------------------


// ---------------------------------------------------------------------------------------------
// -------------- handle realtime information flowing from server to client --------------------
// ---------------------------------------------------------------------------------------------

/**
 * 
 * sending event to to localhost, on port 3000, path "/event-stream", notify the client of the server data changes
 * 
 * @param {string} iMessage message body
 * @param {string} iType, possible values are "exceed", and "recovery"
 */
function sendMessage(iMessage, iType){
  app.get('/event-stream', (req, res) => {
    // --- SSE Setup --- 
    // set headers and http status to keep connection open
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });
    res.write('\n')
    const iData = JSON.stringify({
      message: iMessage,
      type: iType
    })
    res.write(`data: ${iData}\n\n`)
  })
}

// --------------------                   End                       ----------------------------