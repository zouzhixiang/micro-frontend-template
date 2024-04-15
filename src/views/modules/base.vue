<template>
  <WujieVue width="100%" height="100%" name="base" :url="url" :props="props" :plugins="plugins" :sync="true"></WujieVue>
</template>

<script>
export default {
  data () {
    return {
      url: '/base/#' + this.$route.fullPath.split('/base')[1],
      props: {
        baseUrl: this.baseUrl,
        metroViewBaseUrl: this.metroViewBaseUrl,
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
    jump (route) {
      this.$router.push(route)
    }
  }
}
</script>
