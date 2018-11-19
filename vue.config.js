/**
 * Created by gaoying on 2018/11/19.
 */
module.exports = {
    baseUrl:process.env.NODE_ENV === 'production'?'//st01.chrstatic.com':'',
    filenameHashing:false,
    pages: {
      index: {
        entry: 'src/main.js',
        // the source template
        template: process.env.NODE_ENV === 'production'?'public/index_pro.html':'public/index_dev.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: '直面',
        chunks:['chunk-vendors', 'chunk-common', 'index'],
      }
    },
    configureWebpack:{
        externals:function externals(){
            return process.env.NODE_ENV === 'production'?{
              'vue': 'Vue',
              'vue-router':'VueRouter',
              'vuex': 'Vuex',
              'vue-resource': 'VueResource'
            }:{}      
        }(),
    },
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8011,
        // 设置代理
        proxy: {
            '/mock': {
                // 目标 API 地址
                target: 'http://10.132.20.14:8083/mockjsdata/73',
                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false
            }
        }
    }
}