import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegistrationType from '@/components/RegistrationType'
import wait from '@/components/wait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'RegistrationType',
      component: RegistrationType
    },
    {
      path: '/wait',
      name: 'wait',
      component: wait
    }
  ]
})
