<template>
  <div>
    <!-- 热门搜索 -->
    <van-search
      placeholder="请输入搜索关键词"
      v-model="searchValue"
      shape="round"
    />
    <div
      class="search_wrap"
      v-if="resultList.length === 0"
    >
      <p class="hot_title">热门搜索</p>
      <!-- 关键字 -->
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(obj,index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <div
      class="hot_search"
      v-else
    >
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :id="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
        center
      >
      </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";

export default {
  data() {
    return {
      searchValue: "",
      hotList: [], // 热搜关键字
      resultList: [], // 搜索列表
      timer: null,
    };
  },
  async created() {
    const res = await hotSearchAPI();
    console.log(res);
    this.hotList = res.data.result.hots;
  },
  methods: {
    async btn(str) {
      // 点击关键字赋予给输入框显示
      this.searchValue = str;
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer);
      });
    },
  },
  // 侦听
  watch: {
    async searchValue(val) {
      clearTimeout(this.timer);
      // 判断输入框无值
      if (val.length === 0) return (this.resultList = []);
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }, 500);
    },
  },
  components: {
    SongItem,
  },
  // 防抖：n
};
</script>

<style scoped>
/* 覆盖vant组件样式，除了用less文件以外，还可以直接找到类名，直接覆盖 */
/* deep控制scoped加入的随意属性，放到选择器前面，确保能够选中组件内的标签类名 */
/deep/ .van-field__control {
  font-size: 14px !important;
}

.search_wrap {
  padding: 0.266667rem 0;
}

/* 热门搜索样式部分 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

.hot_item {
  display: inline-block;
  height: 0.8rem;
  margin-right: 0.1233rem;
  margin-bottom: 0.21333rem;
  padding: 0.32rem;
  font-size: 0.37rem;
  line-height: 0.8533rem;
  color: #333;
  border-color: #d3d3d3;
  border-radius: 0.853333rem;
  border: 1px solid #d3d3d3;
}
</style>