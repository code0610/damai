import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Login from "@/pages/Login"
import Admin from '@/pages/Admin'
import OrderMenu from '@/components/Order/OrderMenu'
import MyMsg from "@/components/Order/MyMsg"
import Index from "@/pages/Index"
<<<<<<< HEAD
import Qinzi from "@/pages/qinzi"
=======
import xijv from "@/pages/xijv"
import InterfaceTest from "@/pages/InterfaceTest"
import Register from "@/pages/Register"

>>>>>>> 109df10d37e7e073e35d27ae74ff3b1a672ef434
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/login',
      name: 'Login',
      component: Index
    },
    {
      path: '/',
      name: 'Qinzi',
      component: Qinzi
    },
    
    {
=======
      path: '/',
      name: 'Register',
      component: Register
    },{
      path: '/',
      name: 'Login',
      component: InterfaceTest
    },{
>>>>>>> 109df10d37e7e073e35d27ae74ff3b1a672ef434
      path: '/admin',
      name: "Admin",
      component: Admin,
      children:[{
        path:"",
        name:"OrderMenu",
        component:OrderMenu
      },{
        path: 'ordermenu',
        name: 'OrderMenu',
        component: OrderMenu
      },{
        path:"mymsg",
        name: 'MyMsg',
        component: MyMsg
      }]
    },
    {
      path:'/xijv',
      name:"xijv",
      component:xijv
    }
  ]
})
