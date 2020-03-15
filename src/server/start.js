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