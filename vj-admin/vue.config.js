const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:7171/api/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      sass: {
        // 8版本用prependData:
        additionalData: ` @import "@/styles/variables.scss"; `
      }
    }
  }
})
