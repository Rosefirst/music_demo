<template>
  <div>
    <!-- 标题 -->
    <p class="title">推荐歌单</p>
    <!-- 内容页面 -->
    <div>
      <!-- 通过gutter属性可以设置列元素之间的间距，默认间距为 0 -->
      <van-row gutter="5">
        <van-col
          span="8"
          v-for="obj in reList"
          :key="obj.id"
        >
          <van-image
            fit="cover"
            width="3rem"
            height="3rem"
            :src="obj.picUrl"
          />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
    </div>
    <p class="title">最新音乐</p>
    <!-- 循环数组对象 -->
    <SongItem
      v-for="obj in hotList"
      :key="obj.id"
      :id="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name + ' - ' + obj.name"
      center
    >
    </SongItem>
  </div>
</template>

<script>
// 导入获取数据的包
import { recommendMusicAPI, hotMusicAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";

// 使用promise方法
export default {
  data() {
    return {
      reList: [], // 推荐歌单
      hotList: [], // 最新音乐
    };
  },
  async created() {
    // 拿到结果
    const res = await recommendMusicAPI({ limit: 6 });
    // 打印输出，是否接收到结果信息
    console.log(res);
    this.reList = res.data.result;

    const songRes = await hotMusicAPI({ limit: 30 });
    console.log(songRes);
    this.hotList = songRes.data.result;
  },
  components: {
    SongItem,
  },
};
</script>

<style scoped>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 1px 0;
  background: #eee;
  color: #333;
  font-size: 15px;
}
.song_name {
  font-size: 0.3rem;
  padding: 0 0.8rem;
  margin-bottom: 0.2666rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素排列方式 */
  -webkit-line-clamp: 2; /* 显示的行数 */
  overflow: hidden; /* 隐藏超出的内容 */
}
/*  */
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>

