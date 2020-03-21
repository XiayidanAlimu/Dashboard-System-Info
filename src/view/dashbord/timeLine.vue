<template>
  <div>
    <h3>Average CPU load change over a 10 minute window</h3>
    <ve-line
      :data="chartData"
      :settings="chartSettings"
      :toolbox="toolbox">
    </ve-line>
  </div>
</template>

<script>
  import 'echarts/lib/component/toolbox'
  import json from './../../data/history.json'

  export default {
    data () {
      this.toolbox = {
        feature: {
          magicType: {type: ['line', 'bar']},
          saveAsImage: {}
        }
      }
      this.chartSettings = {
        xAxisType: 'time',
        area: true,
        yAxisType: ['percent']
      }
      return {
        chartData: {
          columns: ['date', 'Load Average', 'Load User', 'Load System'],
          rows: getData()
        }
      }
    }
  }

  function getData()
  {
    const oData = []
    json.forEach((data)=>{
      oData.push({
        'date': data.time,
        'Load Average': data.currentload * 0.01 ,
        'Load User': data.currentload_user * 0.01,
        'Load System': data.currentload_system * 0.01
      })
    })
    return oData
  }
</script>