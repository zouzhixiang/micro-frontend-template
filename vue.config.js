module.exports = {
  publicPath: './',
  assetsDir: 'main',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    externals: [
      function (context, request, callback) {
        if (!/node_modules|packages\\main/g.test(context)) {
          return callback(null, 'window')
        }
        callback()
      }
    ]
  },
  devServer: {
    port: '8000'
  }
}
