import Vue from 'vue'
import App from './App'
import './colorui/main.css'
import './colorui/icon.css'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
