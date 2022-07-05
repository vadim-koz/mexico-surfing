module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/mexico-surfing/'
  : '/'
  
}
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({

lintOnSave:false

})
