<template>
  <WujieVue width="100%" height="100%" name="vue2" :url="url" :props="props" :plugins="plugins" :sync="true"></WujieVue>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      url: '/vue2/#' + this.$route.fullPath.split('/vue2')[1],
      props: {
        login: this.login,
        baseUrl: this.baseUrl,
        permissions: this.$store.state.app.permissionCodes,
        userInfo: this.$store.state.app.userInfo,
        platformConfig: this.$store.state.app.platformConfig,
        props: this.$route.meta.props,
        jump: this.jump
      },
      plugins: [
        {
          // 在子应用所有的css之前
          cssBeforeLoaders: [
            // 强制使子应用body定位是relative
            { content: 'body{position: relative !important}' }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions({ login: 'app/login' }),
    jump (route) {
      this.$router.push(route)
    }
  }
}
</script>
