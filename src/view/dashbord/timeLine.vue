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
    if(json && json.length)
    {
      json.forEach((data)=>{
        oData.push({
          'date': data.time,
          'Load Average': data.loadAverage ,
          'Load User': data.loadAvgUser,
          'Load System': data.loadAvgSys
        })
      })
    }
    return oData
  }
</script>