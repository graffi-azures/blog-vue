const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   proxy:{
  //     //只要请求的前缀是/api就把请求发送给代理服务器,否则就是public的静态资源,不一定是/api,可以任意写
  //     '/api':{
  //       target:'http://localhost:3001',
  //       pathRewrite:{'^/api':''},//把/api替换为空字符,因为服务器中不一定有api文件夹
  //     },
  //     // '/foo':{
  //     //   target: 'otherurl'
  //     // }
  //   }
  // }
})
