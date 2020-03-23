<template>
  <div class="test-container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="Monitoring state">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Date">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Start: {{ scope.row.start }}</p>
            <p>End: {{ scope.row.end }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.start }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import json from './../../data/monitor.json'
export default {
  data() {
    return {
      dialogFormVisible: false,
      tableData: getData(),
      formLabelWidth: '120px',
      currentPage: 1,
      total: getData().length
    }
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
}

function getData()
{
  const oData = []
  if(json.exceed)
  {
    json.exceed.forEach((data)=>{
      oData.push({
          date: "Exceed",
          start: data.startTime,
          end: data.endTime
      })
    })
  }
  if(json.recovery)
  {
    json.recovery.forEach((data)=>{
      oData.push({
          date: "Recovery",
          start: data.startTime,
          end: data.endTime
      })
    })
  }
  return oData
}
</script>