<template>
  <div>
    <h3>Current Avarage CPU Load</h3>
    <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
  </div>
</template>

<script>
import json from './../../data/history.json'
  export default {
    data () {
      this.chartSettings = {
        dataType: {
          'percent': 'percent'
        },
        seriesMap: {
          'percent': {
            min: 0,
            max: 1
          }
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: 'percent', value: getCurrentCPULoad() }
          ]
        }
      }
    }
  }

  function getCurrentCPULoad()
  {

    // get latest CPU load information:
    const length = json.length
    const cpuData = json[length-1]
    // get the number of CPUs on the computer:
    const cpusCount = cpuData.cpus.length

    let loadAll = 0

    cpuData.cpus.forEach((cpu)=>{
      loadAll += cpu.load
    })

    // normalize the CPU load average with:
    const loadAverage = loadAll / cpusCount * 0.01
    return loadAverage

  }
  
</script>