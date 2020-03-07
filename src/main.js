import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)


//钩子函数，用于在访问每一个路由前调用

/* eslint-disable no-new */
router.beforeEach((to,from,next) =>{
    if(to.meta.requireAuth){
      if(store.state.user.username){
        next()
      }else {
        next({
          path:'login',
          query: {redirect: to.fullPath}
        })
      }
    }else {
      next()
    }
} )


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



