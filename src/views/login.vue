<template>
  <el-container>
    <el-form :model="form" label-position="top" :rules="rules" ref="loginForm" size="medium">
      <h3>vue2模块自定义登录</h3>

      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"> </el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" show-password v-model="form.password" placeholder="请输入密码"> </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin" :loading="loading">登 录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {

  data () {
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
    handleLogin () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true

          // eslint-disable-next-line no-unused-expressions
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

<style lang="scss" scoped>
.el-form {
  width: 350px;
  height: 300px;
  margin: 25vh auto;
  padding: $--space-base;
  border-radius: var(--td-radius-medium);
  box-shadow: var(--td-shadow-1);
  @include background-color(color-white);
}
</style>
