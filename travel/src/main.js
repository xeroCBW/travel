// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入清除css样式
import './assets/styles/reset.css'
// 解决一个像素问题
import './assets/styles/border.css'
// 结局300ms延迟的问题npm install fast clcik
import fastclick from 'fastclick'
// 引入字体文件
import  './assets/styles/iconfont.css'
//  引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

//  这个是入口,配置好了怎么使用vue
})
