// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuelazyload from 'vue-lazyload'
import store from './store'
Vue.use(Vuelazyload,{
	loading:require('common/image/default.png')
})
Vue.use(VueAwesomeSwiper)
require('swiper/dist/css/swiper.css')
import 'common/stylus/index.styl'
Vue.config.productionTip = false

fastclick.attach(document.body)  //body下面的点击事件都不会有这300毫秒的延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
   store,
    VueAwesomeSwiper,
  template: '<App/>',
  components: { App }
})
