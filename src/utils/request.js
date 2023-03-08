// 网络请求方法---- 二次封装
// 封装好处1：便于修改
// 好处2：便于更换(以后不用axios，你只要换这个即可)，逻辑页面都不用 
import axios from 'axios'

// const ajax = axios.create({
//   baseURL: "http://localhost:3000"
// })
axios.defaults.baseURL = "http://localhost:3000"

// 导出
export default axios;  // 相当于导出了一个axios函数src/api/Home.js