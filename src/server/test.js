const fs = require('fs')

const filePath = '../data/testResult.json'

// Create a JSON file, which will serves as a simple kind of data base, to persist data in the project
fs.appendFile(filePath, '', function (err) {
  if (err) throw err
})

const monitoringData = [
  {
    "loadAverage": 0.22156456299730903,
    "loadAvgUser": 0.08659412004873258,
    "loadAvgSys": 0.12918830056983244,
    "time": 1584911756758,
    "timeUTC": "Sun, 22 Mar 2020 21:15:56 GMT"
  },
  {
    "loadAverage": 0.1277599899528588,
    "loadAvgUser": 0.04983114303390112,
    "loadAvgSys": 0.0739354109534946,
    "time": 1584911766758,
    "timeUTC": "Sun, 22 Mar 2020 21:16:06 GMT"
  },
  {
    "loadAverage": 0.15315871455567379,
    "loadAvgUser": 0.0736619521189703,
    "loadAvgSys": 0.07496514430190136,
    "time": 1584911776759,
    "timeUTC": "Sun, 22 Mar 2020 21:16:16 GMT"
  },
  {
    "loadAverage": 0.2062657113419364,
    "loadAvgUser": 0.0951188053188027,
    "loadAvgSys": 0.1039781938753173,
    "time": 1584911786759,
    "timeUTC": "Sun, 22 Mar 2020 21:16:26 GMT"
  },
  {
    "loadAverage": 0.3643280852340849,
    "loadAvgUser": 0.1481950704865906,
    "loadAvgSys": 0.20734403011099145,
    "time": 1584911796759,
    "timeUTC": "Sun, 22 Mar 2020 21:16:36 GMT"
  },
  {
    "loadAverage": 0.3618371755938605,
    "loadAvgUser": 0.1858129790399188,
    "loadAvgSys": 0.17083386647164825,
    "time": 1584911806759,
    "timeUTC": "Sun, 22 Mar 2020 21:16:46 GMT"
  },
  {
    "loadAverage": 0.19631710531398164,
    "loadAvgUser": 0.09781251316418313,
    "loadAvgSys": 0.09370368865597672,
    "time": 1584911816760,
    "timeUTC": "Sun, 22 Mar 2020 21:16:56 GMT"
  },
  {
    "loadAverage": 0.14586902552427075,
    "loadAvgUser": 0.05502044001746678,
    "loadAvgSys": 0.08544567752111441,
    "time": 1584911826761,
    "timeUTC": "Sun, 22 Mar 2020 21:17:06 GMT"
  },
  {
    "loadAverage": 0.18402510676788647,
    "loadAvgUser": 0.0827394609426271,
    "loadAvgSys": 0.09798260608431177,
    "time": 1584911836762,
    "timeUTC": "Sun, 22 Mar 2020 21:17:16 GMT"
  },
  {
    "loadAverage": 0.1604204831932433,
    "loadAvgUser": 0.06867440151954995,
    "loadAvgSys": 0.08450113237744604,
    "time": 1584911846762,
    "timeUTC": "Sun, 22 Mar 2020 21:17:26 GMT"
  },
  {
    "loadAverage": 0.15782504056405486,
    "loadAvgUser": 0.06838923635182052,
    "loadAvgSys": 0.0834707044429582,
    "time": 1584911856762,
    "timeUTC": "Sun, 22 Mar 2020 21:17:36 GMT"
  },
  {
    "loadAverage": 0.24400802675195762,
    "loadAvgUser": 0.11233295966712961,
    "loadAvgSys": 0.12200410328075081,
    "time": 1584911866764,
    "timeUTC": "Sun, 22 Mar 2020 21:17:46 GMT"
  },
  {
    "loadAverage": 0.15135942856787432,
    "loadAvgUser": 0.05150006337655214,
    "loadAvgSys": 0.0903712649029344,
    "time": 1584911876763,
    "timeUTC": "Sun, 22 Mar 2020 21:17:56 GMT"
  },
  {
    "loadAverage": 0.1946256581639847,
    "loadAvgUser": 0.08219373739154237,
    "loadAvgSys": 0.10466190226243052,
    "time": 1584911886764,
    "timeUTC": "Sun, 22 Mar 2020 21:18:06 GMT"
  },
  {
    "loadAverage": 0.23025260638514397,
    "loadAvgUser": 0.10641678523819398,
    "loadAvgSys": 0.11768285072288905,
    "time": 1584911896763,
    "timeUTC": "Sun, 22 Mar 2020 21:18:16 GMT"
  },
  {
    "loadAverage": 0.2103039736617268,
    "loadAvgUser": 0.09971449314779074,
    "loadAvgSys": 0.10460264437488202,
    "time": 1584911906765,
    "timeUTC": "Sun, 22 Mar 2020 21:18:26 GMT"
  },
  {
    "loadAverage": 0.29232417635345237,
    "loadAvgUser": 0.14500545221354108,
    "loadAvgSys": 0.13933180741794773,
    "time": 1584911916766,
    "timeUTC": "Sun, 22 Mar 2020 21:18:36 GMT"
  },
  {
    "loadAverage": 0.16796834335079905,
    "loadAvgUser": 0.07329455517850246,
    "loadAvgSys": 0.08782385475027173,
    "time": 1584911926766,
    "timeUTC": "Sun, 22 Mar 2020 21:18:46 GMT"
  },
  {
    "loadAverage": 0.21340003891658396,
    "loadAvgUser": 0.0922721347100295,
    "loadAvgSys": 0.11554946516022727,
    "time": 1584911936767,
    "timeUTC": "Sun, 22 Mar 2020 21:18:56 GMT"
  },
  {
    "loadAverage": 0.22495040239716718,
    "loadAvgUser": 0.10979749871953706,
    "loadAvgSys": 0.10741757748988012,
    "time": 1584911946768,
    "timeUTC": "Sun, 22 Mar 2020 21:19:06 GMT"
  },
  {
    "loadAverage": 0.16618868106601326,
    "loadAvgUser": 0.07496061845089887,
    "loadAvgSys": 0.08565287544749978,
    "time": 1584911956768,
    "timeUTC": "Sun, 22 Mar 2020 21:19:16 GMT"
  },
  {
    "loadAverage": 0.20435624789697948,
    "loadAvgUser": 0.09579923066418189,
    "loadAvgSys": 0.10319391446798398,
    "time": 1584911966769,
    "timeUTC": "Sun, 22 Mar 2020 21:19:26 GMT"
  },
  {
    "loadAverage": 0.202046805195574,
    "loadAvgUser": 0.10383364601369248,
    "loadAvgSys": 0.0935823054042293,
    "time": 1584911976769,
    "timeUTC": "Sun, 22 Mar 2020 21:19:36 GMT"
  },
  {
    "loadAverage": 0.19533981367697636,
    "loadAvgUser": 0.08844035004118748,
    "loadAvgSys": 0.10177097527040722,
    "time": 1584911986769,
    "timeUTC": "Sun, 22 Mar 2020 21:19:46 GMT"
  },
  {
    "loadAverage": 0.16434583907075134,
    "loadAvgUser": 0.06526197257024804,
    "loadAvgSys": 0.09061527085739948,
    "time": 1584911996769,
    "timeUTC": "Sun, 22 Mar 2020 21:19:56 GMT"
  },
  {
    "loadAverage": 0.21340663640687896,
    "loadAvgUser": 0.09886405972212617,
    "loadAvgSys": 0.1084317048481351,
    "time": 1584912006769,
    "timeUTC": "Sun, 22 Mar 2020 21:20:06 GMT"
  },
  {
    "loadAverage": 0.17564594816513449,
    "loadAvgUser": 0.07455579945068821,
    "loadAvgSys": 0.09261953136471689,
    "time": 1584912016769,
    "timeUTC": "Sun, 22 Mar 2020 21:20:16 GMT"
  },
  {
    "loadAverage": 0.2199804775849621,
    "loadAvgUser": 0.11121789512672976,
    "loadAvgSys": 0.10437113965373937,
    "time": 1584912026770,
    "timeUTC": "Sun, 22 Mar 2020 21:20:26 GMT"
  },
  {
    "loadAverage": 0.1870850197927474,
    "loadAvgUser": 0.08282024680225238,
    "loadAvgSys": 0.09945158192049489,
    "time": 1584912036770,
    "timeUTC": "Sun, 22 Mar 2020 21:20:36 GMT"
  },
  {
    "loadAverage": 0.17924397818965013,
    "loadAvgUser": 0.08247901327854731,
    "loadAvgSys": 0.08954971171993885,
    "time": 1584912046771,
    "timeUTC": "Sun, 22 Mar 2020 21:20:46 GMT"
  },
  {
    "loadAverage": 0.21928838174656914,
    "loadAvgUser": 0.0789076935444392,
    "loadAvgSys": 0.13574738667530398,
    "time": 1584912056772,
    "timeUTC": "Sun, 22 Mar 2020 21:20:56 GMT"
  },
  {
    "loadAverage": 0.16721431085616284,
    "loadAvgUser": 0.06130552537827184,
    "loadAvgSys": 0.09923991871716435,
    "time": 1584912066772,
    "timeUTC": "Sun, 22 Mar 2020 21:21:06 GMT"
  },
  {
    "loadAverage": 0.17641697144341342,
    "loadAvgUser": 0.08119950849380342,
    "loadAvgSys": 0.0903955828649592,
    "time": 1584912076773,
    "timeUTC": "Sun, 22 Mar 2020 21:21:16 GMT"
  },
  {
    "loadAverage": 0.20199205049064137,
    "loadAvgUser": 0.10263794509440002,
    "loadAvgSys": 0.09441388195797401,
    "time": 1584912086773,
    "timeUTC": "Sun, 22 Mar 2020 21:21:26 GMT"
  },
  {
    "loadAverage": 0.19599301814694087,
    "loadAvgUser": 0.08944927387698293,
    "loadAvgSys": 0.10247407636858488,
    "time": 1584912096774,
    "timeUTC": "Sun, 22 Mar 2020 21:21:36 GMT"
  },
  {
    "loadAverage": 0.16416114488834876,
    "loadAvgUser": 0.07824306982497699,
    "loadAvgSys": 0.08206066754125303,
    "time": 1584912106775,
    "timeUTC": "Sun, 22 Mar 2020 21:21:46 GMT"
  },
  {
    "loadAverage": 0.16252426727358926,
    "loadAvgUser": 0.07144300960403636,
    "loadAvgSys": 0.08687352975775962,
    "time": 1584912116774,
    "timeUTC": "Sun, 22 Mar 2020 21:21:56 GMT"
  },
  {
    "loadAverage": 0.15924873223354058,
    "loadAvgUser": 0.06866702435893011,
    "loadAvgSys": 0.0863467494618076,
    "time": 1584912126775,
    "timeUTC": "Sun, 22 Mar 2020 21:22:06 GMT"
  },
  {
    "loadAverage": 0.2216424960967441,
    "loadAvgUser": 0.10557683753603439,
    "loadAvgSys": 0.1095164021955378,
    "time": 1584912136775,
    "timeUTC": "Sun, 22 Mar 2020 21:22:16 GMT"
  },
  {
    "loadAverage": 0.18194419726355462,
    "loadAvgUser": 0.07762553625681075,
    "loadAvgSys": 0.0996909763122834,
    "time": 1584912146776,
    "timeUTC": "Sun, 22 Mar 2020 21:22:26 GMT"
  },
  {
    "loadAverage": 0.15813539771533763,
    "loadAvgUser": 0.06364396953763998,
    "loadAvgSys": 0.09067413686787401,
    "time": 1584912156775,
    "timeUTC": "Sun, 22 Mar 2020 21:22:36 GMT"
  },
  {
    "loadAverage": 0.15301259733514036,
    "loadAvgUser": 0.07079606763417588,
    "loadAvgSys": 0.07779368330232704,
    "time": 1584912166776,
    "timeUTC": "Sun, 22 Mar 2020 21:22:46 GMT"
  },
  {
    "loadAverage": 0.17692651096332934,
    "loadAvgUser": 0.06908745123572041,
    "loadAvgSys": 0.10415720106601953,
    "time": 1584912176779,
    "timeUTC": "Sun, 22 Mar 2020 21:22:56 GMT"
  },
  {
    "loadAverage": 0.14487067034039414,
    "loadAvgUser": 0.047924640539532715,
    "loadAvgSys": 0.09079551482333226,
    "time": 1584912186777,
    "timeUTC": "Sun, 22 Mar 2020 21:23:06 GMT"
  },
  {
    "loadAverage": 0.18844602853338305,
    "loadAvgUser": 0.07216568282762946,
    "loadAvgSys": 0.10921602921332507,
    "time": 1584912196778,
    "timeUTC": "Sun, 22 Mar 2020 21:23:16 GMT"
  },
  {
    "loadAverage": 0.1863251817028276,
    "loadAvgUser": 0.0825113505511956,
    "loadAvgSys": 0.09677166106765331,
    "time": 1584912206778,
    "timeUTC": "Sun, 22 Mar 2020 21:23:26 GMT"
  },
  {
    "loadAverage": 0.19239760897878072,
    "loadAvgUser": 0.09021940317277168,
    "loadAvgSys": 0.09545671086024825,
    "time": 1584912216779,
    "timeUTC": "Sun, 22 Mar 2020 21:23:36 GMT"
  },
  {
    "loadAverage": 0.14542806714067116,
    "loadAvgUser": 0.055847605556617885,
    "loadAvgSys": 0.08457568991746182,
    "time": 1584912226780,
    "timeUTC": "Sun, 22 Mar 2020 21:23:46 GMT"
  },
  {
    "loadAverage": 0.21344058196157864,
    "loadAvgUser": 0.10665923677798382,
    "loadAvgSys": 0.10099667147892001,
    "time": 1584912236781,
    "timeUTC": "Sun, 22 Mar 2020 21:23:56 GMT"
  },
  {
    "loadAverage": 0.21876762610868603,
    "loadAvgUser": 0.11056976057754081,
    "loadAvgSys": 0.10453882750775759,
    "time": 1584912246782,
    "timeUTC": "Sun, 22 Mar 2020 21:24:06 GMT"
  },
  {
    "loadAverage": 0.22532296614522934,
    "loadAvgUser": 0.11520029263138501,
    "loadAvgSys": 0.10419830412270713,
    "time": 1584912256781,
    "timeUTC": "Sun, 22 Mar 2020 21:24:16 GMT"
  },
  {
    "loadAverage": 0.26153143944831136,
    "loadAvgUser": 0.1309640506022651,
    "loadAvgSys": 0.12179749788809677,
    "time": 1584912266782,
    "timeUTC": "Sun, 22 Mar 2020 21:24:26 GMT"
  },
  {
    "loadAverage": 0.13777098458743198,
    "loadAvgUser": 0.04764395664537394,
    "loadAvgSys": 0.0854950932271974,
    "time": 1584912276782,
    "timeUTC": "Sun, 22 Mar 2020 21:24:36 GMT"
  },
  {
    "loadAverage": 0.28412263862032655,
    "loadAvgUser": 0.16865522037228087,
    "loadAvgSys": 0.10878948435997009,
    "time": 1584912286783,
    "timeUTC": "Sun, 22 Mar 2020 21:24:46 GMT"
  },
  {
    "loadAverage": 0.2413760458552008,
    "loadAvgUser": 0.12369221400738122,
    "loadAvgSys": 0.11158370653208773,
    "time": 1584912296782,
    "timeUTC": "Sun, 22 Mar 2020 21:24:56 GMT"
  },
  {
    "loadAverage": 0.23716233274792908,
    "loadAvgUser": 0.10568938705156504,
    "loadAvgSys": 0.12763032955975168,
    "time": 1584912306783,
    "timeUTC": "Sun, 22 Mar 2020 21:25:06 GMT"
  },
  {
    "loadAverage": 0.1167002054294514,
    "loadAvgUser": 0.04008474308390014,
    "loadAvgSys": 0.07258463609219716,
    "time": 1584912316784,
    "timeUTC": "Sun, 22 Mar 2020 21:25:16 GMT"
  },
  {
    "loadAverage": 0.12477454969820864,
    "loadAvgUser": 0.05328294242577695,
    "loadAvgSys": 0.06648070826387299,
    "time": 1584912326784,
    "timeUTC": "Sun, 22 Mar 2020 21:25:26 GMT"
  },
  {
    "loadAverage": 0.16271723156845802,
    "loadAvgUser": 0.0703287330531428,
    "loadAvgSys": 0.08776721709083084,
    "time": 1584912336784,
    "timeUTC": "Sun, 22 Mar 2020 21:25:36 GMT"
  },
  {
    "loadAverage": 0.129288106276502,
    "loadAvgUser": 0.05701565593600338,
    "loadAvgSys": 0.06879963970255927,
    "time": 1584912346784,
    "timeUTC": "Sun, 22 Mar 2020 21:25:46 GMT"
  }
]

monitoringData.forEach((data)=>{
  monitor(data)
})

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
      console.log("CPU load average of your computer has exceeded for the " + monitoringResult.exceed.length + "th times, at: "+ iCPULoadData.timeUTC);
      const jsonStringData = JSON.stringify(monitoringResult, null, 2)
      fs.writeFile(filePath, jsonStringData, function (err) {
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
        console.log("CPU load average of your computer has been recovered for the " + monitoringResult.recovery.length + "th times, at: "+ iCPULoadData.timeUTC);
        const jsonStringData = JSON.stringify(monitoringResult, null, 2)
        fs.writeFile(filePath, jsonStringData, function (err) {
            if (err) throw err
        })
        recoveryTimeInfo = {}
      }
    }
    counterExceed = 0
  }
}

// --------------------                   End                       ----------------------------

