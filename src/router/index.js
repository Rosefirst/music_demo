// 导入包
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 导入路由包
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import Comment from '@/views/Comment' 


// 配置路由路径
const routes = [
  {
    path: "/",
    redirect: "/layout"
  },
  {
    path:'/layout',
    // 去重定向到二级路由
    redirect: '/layout/home',  
    component: Layout,
    children: [
      {
        path:"home",
        component: Home,
        meta: {
          // 元信息- 给当前路由对象绑定值
          title: "首页"
        }
      },
      {
        path: "search",
        component: Search,
        meta: {
          title: "搜索"
        }
      }
    ]
  },
  {
    path: '/play',
    component: Play
  },
  {
    path:'/comment',
    component: Comment
  }
]

// 配置服务器的地址
// const createRouter = () => new Router({
//   base: '/vue/',
//   mode:'history',
//   scrollBehavior: () => ({ y:0 }),
//   routes: constanRoutes
//     // ...
// })

// 定义路由对象
const router = new VueRouter({
  mode:'history',
  base: '/vue-test/',
  routes
})

export default router