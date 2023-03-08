const { defineConfig } = require('@vue/cli-service')

const path = require("path")
const lessPath = path.resolve(__dirname + "/src/style/cover.less")
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭校验
  lintOnSave:false,
  css:{ 
    loaderOptions: {
      less:{
        modifyVars: {
          // 'cell-font-size':'24px',
          // 'border-color': '#eee',
          //
          hack:`true; @import "${lessPath}";`,
        }
      }
    }
  }
})
