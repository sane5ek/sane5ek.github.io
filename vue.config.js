const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  outputDir: './dist/',
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  chainWebpack: config => {
    config.optimization
      .splitChunks(false)

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }])

    config.resolve.alias
      .set('__STATIC__', 'static')

    config.devServer
      .public('http://0.0.0.0:1111')
      .host('0.0.0.0')
      .port(1111)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ 'Access-Control-Allow-Origin': ['\*']})
  }
}
