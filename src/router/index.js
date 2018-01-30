import Vue from 'vue'
import Router from 'vue-router'
import CollectQuestion from '@/components/CollectQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CollectQuestion',
      component: CollectQuestion
    }
  ]
})
