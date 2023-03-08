<template>
  <van-cell
    center
    :title="name"
    :label="author + '  ' + name"
    @click="$router.push({path:'/comment',query: {id:id}})"
  >
    <template #right-icon>
      <van-icon
        name="play-circle-o"
        class="search-icon"
        @touchstart="playFn"
      />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number, // 歌曲id
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          // 歌曲id, 通过路由跳转传递过去
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
/* 给单元格设置底部边框 */
.search-icon {
  border-bottom: 1px solid lightgray;
}
</style>