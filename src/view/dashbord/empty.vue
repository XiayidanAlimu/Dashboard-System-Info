<style>
.data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .7);
  color: #888;
  font-size: 14px;
}
</style>

<template>
<ve-line :data="chartData" :settings="chartSettings">
  <div class="data-empty">You should run the server to start monitoring your CPU Load</div>
</ve-line>
</template>

<script>
  import json from './../../data/empty.json'
  export default {
    data () {
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
    if(!json.isEmpty()&& json.length)
    {
      json.forEach((data)=>{
        oData.push({
          'date': data.time,
          'Load Average': data.currentload * 0.01 ,
          'Load User': data.currentload_user * 0.01,
          'Load System': data.currentload_system * 0.01
        })
      })
    }

    return oData
  }

</script>