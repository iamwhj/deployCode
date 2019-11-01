import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import son from '@/components/son'
import son1 from '@/components/son1'
import son2 from '@/components/son2'



Vue.use(Router)

var bar = { template: "<div>foot</div>" }

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      children: [{
        path: 'son',
        name: 'son',
        component: son
      },{
        path: 'son1',
        component: son1
      },{
        path: 'son2',
        component: son2
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
