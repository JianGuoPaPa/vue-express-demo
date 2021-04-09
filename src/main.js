import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Field, Collapse, CollapseItem, Cell, Icon, Calendar } from 'hl-ui'
import './utils/rem'

Vue.use(Button)
Vue.use(Field)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cell)
Vue.use(Icon)
Vue.use(Calendar)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
