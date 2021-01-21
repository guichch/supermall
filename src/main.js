import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/* 
  新项目：
    1、划分目录结构
      components文件夹用于放下的，公共的组件
        common文件夹用于放所有项目的公共组件
        content文件夹用于放当前项目中的公共组件
      views文件夹用于放大的页面组件
      src下面的common用于放公共的js文件
    2、引入css文件
    3、vue.config.js和.editconfig
    4、项目的模块划分tabbar -> 路由映射关系
*/