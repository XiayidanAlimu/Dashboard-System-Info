<template>
  <div>
     <notifications group="custom-style"
                    position="top center"
                    classes="n-light" 
                    :width="400"/>
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
    },
    mounted() {
      const sseSource = new EventSource('http://localhost:3000/event-stream');

      sseSource.addEventListener('message', (e) => {
          this.$notify({
            group: 'custom-style',
            title: 'Important message',
            text: e.data
          });
      });

      // When finished with the source close the connection
      // sseSource.close();
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