import Vue from 'vue'
import Router from 'vue-router'
import Memo from '@/components/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Memo',
      component: Memo
    }
  ]
})
