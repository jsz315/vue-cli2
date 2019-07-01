// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store'
import 'mint-ui/lib/style.css'
Vue.use(Vuex)
// Vue.use(MintUI)

axios.defaults.headers.common['token'] = 'jjj';
axios.defaults.headers.post['Content-type'] = 'application/json';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
/*
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    total: state=>{
      return state.count * 10 + 2;
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    add:(context,payload)=>{
      setTimeout(() => {
        console.log(payload);
        context.commit("increment")
      }, 3000);
      
    }
  }
})
*/

Vue.mixin({
  created: function(){
    // console.log("okko");
    // console.log(this);
  }
})

Vue.filter(
  "formatTime", (val)=>{
    return val + "--";
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App num="100"/>'
})




router.beforeEach((to, from, next) => {
  // console.log("====");
  // console.log(to);
  // console.log(from);
  // console.log(next);
  next();
})

function ff(obj){
  window.ggg = obj.result.item;
  window.ggg.forEach(item=>{
    delete item.AUCTION_TAG;
    delete item.EURL;
    delete item.ACT_TAGS;
  })
  document.body.innerHTML = JSON.stringify(window.ggg);
}
