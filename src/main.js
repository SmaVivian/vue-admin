import Vue from 'vue'

import 'babel-polyfill'

import ElementUI from 'element-ui'
// import VueQuillEditor  from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
 
// import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
// import './assets/css/mixin.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
import request from '@/utils/request'
Vue.prototype.$http = request

Vue.use(ElementUI)
// Vue.use(VueQuillEditor);

Vue.config.productionTip = false

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
  if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/form/index') {
    Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
      confirmButtonText: '确定'
    });
  } else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
