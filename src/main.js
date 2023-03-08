import Vue from 'vue'
import App from './App.vue'

// 补充点：相对路径不好?
// 原因：文件如果以后改变位置，路径代码也要改变
// 解决: 绝对路径, vue脚手架内置的webpack定义了一些路径变量


// 注："@" 符号表示绝对路径  
import "@/mobile/flexible"    // 自动适应宽度，改变html 的font-size
import "@/style/reset.css"   // 初始化标签默认的样式
import router from '@/router' // 导入路由对象



// 全局注册组件vant组件 (自动按需引入)
import { NavBar,Tabbar,TabbarItem,Row,Col,Image as VanImage,Cell,CellGroup,Icon,Search, PullRefresh,List  } from 'vant'; 
// import { Tabbar, TabbarItem } from 'vant';
// import { Icon } from 'vant';


Vue.use(NavBar);
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)
Vue.use(PullRefresh)  // 下拉刷新
Vue.use(List)         // 列表

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


