import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home"
import Login from "@/pages/Login"
import Admin from '@/pages/Admin'
import OrderMenu from '@/components/Order/OrderMenu'
import MyMsg from "@/components/Order/MyMsg"
import Index from "@/pages/Index"
import xijv from "@/pages/xijv"
import InterfaceTest from "@/pages/InterfaceTest"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: InterfaceTest
    },{
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
