<template>
  <el-form :model="form" label-position="top" :rules="rules" ref="loginForm">

    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名"> </el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" show-password v-model="form.password" placeholder="请输入密码"> </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" block @click="handleLogin" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {

  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true

          window.$wujie?.props.login(this.form).then(() => {
            this.loading = false
            this.$router.replace({ path: '/' })
          })
          .catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style>
</style>