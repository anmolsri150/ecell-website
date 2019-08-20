// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import vheader from './components/header.vue'
import vfooter from './components/footer.vue'
// import '../static/js/functions.js'

const fb = require('./firebase')
Vue.config.productionTip = false
Vue.component('vheader', vheader)
Vue.component('vfooter', vfooter)
/* eslint-disable no-new */
let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }
})
