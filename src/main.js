import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Catalog  from './components/Catalog';
import Buy from './components/Buy';

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [{path:'/',name:'catalog',component:Catalog},{path:'/buy/:title',name:'buy',component:Buy}];
const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
