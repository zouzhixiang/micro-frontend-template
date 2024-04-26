const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { TDesignResolver } = require('unplugin-vue-components/resolvers')
const CompressionPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: './',
  assetsDir: 'main',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      AutoImport.default({
        resolvers: [TDesignResolver()]
      }),
      Components.default({
        resolvers: [TDesignResolver()]
      }),
      new CompressionPlugin({
        test: /\.(js|css)$/,
        threshold: 10240
      })
      // new BundleAnalyzerPlugin()
    ]
  },
  devServer: {
    port: '8000'
  }
}
