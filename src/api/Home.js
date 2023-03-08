// 封装要发起的请求
import request from '@/utils/request'


// 封装网络请求方法 （相当于工具）
// 推荐歌单
export const recommendMusic = params => request({
  url: '/personalized',
  params
  // 将来外面可能传入params的值 {limit: 30}
})

// 最新音乐
export const hotMusic = params => request({
  url: '/personalized/newsong',
  params
})

