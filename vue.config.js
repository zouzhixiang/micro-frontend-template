module.exports = {
  publicPath: '/vue2',
  outputDir: 'vue2',
  assetsDir: 'static',
  lintOnSave: true,
  configureWebpack: {
    externals: {
      tiltMap: 'tiltMap'
    },
    devtool: 'source-map'
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/style/common/var.scss";
          @import "@/style/mixin/utils.scss";
          @import "@/style/mixin/theme.scss";
        `
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    port: '7000'
  }
}
