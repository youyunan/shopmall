import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Button,
  NavBar,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Icon,
  List,
  Cell,
  CellGroup,
  PullRefresh,
  Toast
} from 'vant'
import {Lazyload} from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(List)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(PullRefresh)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
