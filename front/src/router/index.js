import Vue from 'vue'
import Router from 'vue-router'
import CollectQuestion from '@/components/CollectQuestion'
import ListView from '@/components/ListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/collect',
      name: 'CollectQuestion',
      component: CollectQuestion
    }
  ]
})
