import request from '@/utils/request'

export const getCommentList = params => request({
  url: '/comment/music',  
  params
})