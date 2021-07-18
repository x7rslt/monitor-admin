<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.hotelId }}
        </template>
      </el-table-column>
      <el-table-column label="TeamName">
        <template slot-scope="scope">
          {{ scope.row.teamName }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


//  JSON展示
<script>
import { getList } from '@/api/test'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log("view done1")
        this.list = response.item.teamList
        console.log(this.list)
        this.listLoading = false
      })
    }
  }
}
</script>
