import request from '@/utils/request'  // 使用绝对路径，不要使用相对路径

// 搜索关键
export const hotSearch = () => request({ 
  url:'/search/hot'
})

// 搜索结果
export const searchResult = params => request({
  url:'/cloudsearch',
  params
})



