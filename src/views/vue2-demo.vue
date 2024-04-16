<template>
  <el-container v-loading="loading">
    <el-table :data="data" size="small" border stripe height="100%" highlight-current-row>
      <el-table-column label="申请人" prop="user" align="center"></el-table-column>
      <el-table-column label="编码" prop="code" align="center"></el-table-column>
      <el-table-column label="id" prop="id" align="center"></el-table-column>
      <el-table-column label="备注" prop="name" align="center"></el-table-column>
      <el-table-column label="用户名" prop="username" align="center"></el-table-column>
      <el-table-column label="数量" prop="value" align="center"></el-table-column>
    </el-table>
  </el-container>
</template>

<script>
import request from '@mono/core/libs/request'

export default {

  data () {
    return {
      loading: false,
      data: []
    }
  },

  mounted () {
    this.loading = true
    request.get('/getData').then(res => {
      this.data = res.data
      this.loading = false
    })
  }

}
</script>

<style lang="scss" scoped>
.el-table--small {
  font-size: var(--td-font-size-body-medium);
}
</style>
