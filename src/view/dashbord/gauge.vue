<template>
  <div>
    <h3>Current Avarage CPU Load</h3>
    <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
    <ul id="example-1">
      <li v-for="item in items" v-bind:key="item">
        {{ item.message }}
      </li>
    </ul>
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
            max: 1.25
          }
        }
      }
      return {
        chartData: {
          columns: ['type', 'value'],
          rows: [
            { type: 'percent', value: getCurrentCPULoad() }
          ]
        },
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    },
    mounted() {

      const sseSource = new EventSource('http://localhost:3000/event-stream')
      sseSource.addEventListener('message', (e) => {
        try {
          const parseBody = JSON.parse(e.data);
          if(parseBody.type === "exceed"){
            this.$noty.error( "<h3>Warning</h3><span>" + parseBody.message + "</span>")
          }
          else if(parseBody.type === "recovery")
          {
            this.$noty.success( "<h3>Success</h3><span>" + parseBody.message + "</span>")
          }
        } catch (e) {
          throw("Parsing error:", e.data); 
        }   
      })

      // When finished with the source close the connection
      // sseSource.close();
    }
  }


  function getCurrentCPULoad()
  {
  
    // get latest CPU load information:
    if(json&& json.length)
    {
      const length = json.length
      const cpuData = json[length-1]
      
      return cpuData.loadAverage
    }
    else
    {
      return 0
    }

  }
  
</script>