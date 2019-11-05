import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import son from '@/components/son'
import son1 from '@/components/son1'
import son2 from '@/components/son2'



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
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log("全局路由");
  // console.log(from);
  next()
})

export default router;