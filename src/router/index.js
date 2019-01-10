import Vue from 'vue'
import Router from 'vue-router'
import Cache from '@/pages/cache/Cache.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cache',
      component: Cache
    }
  ]
})
