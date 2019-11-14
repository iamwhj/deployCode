import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import son from '@/components/son'
import son1 from '@/components/son1'
import son2 from '@/components/son2'
import second from '@/components/second'
import person from '@/components/person'
import person1 from '@/components/person1'
import echarts from '@/components/echarts'
import home from '@/view/home'



Vue.use(Router)

var bar = { template: "<div>foot</div>" }

var router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    console.log("锚点函数")
    if(to.hash) {
      return {
        selector: to.hash
      }
    }else{
      return {
        x : 0,
        y : 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar,
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      children: [{
        path: 'son/:id?',
        name: 'son',
        component: son
      },{
        path: 'son1',
        component: son1,
      },{
        path: 'son2',
        component: son2,
        beforeEnter(to, from, next){
          console.log("单个路由")
          next()
        }
      }]
    },
    {
      path: '/second',
      component: second,
      meta: {title:"123"},
      children: [{
        path: 'person',
        component: person
      },{
        path: 'person1',
        component: person1
      }]
    },
    {
      path: '/echarts',
      component: echarts
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router;