import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import DemoBlock from './components/demo-block'
import Component from '../src'
import 'vue-dotmd-loader/dist/css/default.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import './assets/main.less'

Vue.use(VueRouter)
Vue.use(DemoBlock)
Vue.use(Component)

const router = new VueRouter({
  mode: 'history',
  routes: []
})

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

window.app = app
