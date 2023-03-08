// 1. 封装出口
import { hotMusic, recommendMusic } from "@/api/Home";
import { hotSearch,searchResult } from '@/api/Search';
import {getSongById, getLyricById} from '@/api/Play';
import {getCommentList} from '@/api/Comment';


// 2.将方法导出
// 把网络请求方法拿过来 导出
export const recommendMusicAPI = recommendMusic  
// 把h获取最新音乐的，网络请求方法导出
export const hotMusicAPI = hotMusic
// 热搜
export const hotSearchAPI = hotSearch 
// 搜索列表结果
export const searchResultAPI = searchResult


export const getSongByIdAPI = getSongById          // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById        // 歌曲 - 歌词数据
export const getCommentListAPI = getCommentList    // 歌曲 - 评论信息