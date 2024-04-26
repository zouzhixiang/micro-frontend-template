<template>
  <div class="container">
    <t-card :title="title" subtitle="登录" shadow>
      <t-form :data="formData" ref="form" @submit="onSubmit" :colon="true" :labelWidth="0">
        <t-form-item name="username" :rules="[{ required: true, message: '用户名不能为空' }]">
          <t-input clearable v-model="formData.username" placeholder="请输入用户名" autocomplete="off">
            <desktop-icon slot="prefix-icon" />
          </t-input>
        </t-form-item>
        <t-form-item name="password" :rules="[{ required: true, message: '密码不能为空' }]">
          <t-input type="password" clearable v-model="formData.password" placeholder="请输入密码" autocomplete="off">
            <lock-on-icon slot="prefix-icon" />
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit" block :loading="loading">登录</t-button>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script>
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue'

export default {

  components: { DesktopIcon, LockOnIcon },

  data () {
    return {
      title: this.name,
      loading: false,
      formData: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    onSubmit ({ validateResult }) {
      if (validateResult === true) {
        this.$store.dispatch('app/login', this.formData).then(() => {
          this.loading = false
          this.$router.replace({ path: '/' })
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(120deg, #ebedfa 0%, #c3cdf0 100%);
}
.t-card {
  width: 300px;
}
</style>
