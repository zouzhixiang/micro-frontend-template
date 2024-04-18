<template>
  <el-container direction="vertical">
    <el-row>
      <!-- <el-button size="small" v-permission="'ADD'">默认按钮</el-button> -->
      <el-button type="primary" size="small">主要按钮</el-button>
      <el-button type="success" size="small">成功按钮</el-button>
      <el-button type="info" size="small">信息按钮</el-button>
      <el-button type="warning" size="small">警告按钮</el-button>
      <!-- <el-button type="danger" size="small" v-permission="'DEL'">危险按钮</el-button> -->
    </el-row>
    <el-row>
      {{ 2512518181.1515 }}
    </el-row>
    <!-- <el-row>
      {{ hashCode }}
    </el-row> -->
    <el-row>
      <el-select v-model="value" placeholder="请选择" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </el-row>
    <el-row>

    </el-row>
  </el-container>
</template>

<script>
import { options } from '@/config'
// import { getHashCode } from '@mono/core/libs/utils'

export default {

  data () {
    return {
      value: '',
      options
      // hashCode: getHashCode('微前端模板')
    }
  }

}
</script>

<style lang="scss" scoped>
.el-container {
  border-radius: var(--td-radius-medium);
  box-shadow: var(--td-shadow-1);
  @include background-color(color-white);
}
.el-row {
  padding: $--space-base;
}
</style>
