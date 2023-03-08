<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      :title="activeTitle"
      fixed
    />

    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item
        icon="home-o"
        replace
        to="/layout/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        replace
        to="/layout/search"
      >搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // active: 0,   // 默认第一个
      activeTitle: this.$route.meta.title, // 导航标签： 拿到当前路由所在信息对象里 meta里title使用
    };
  },
  // methods: {
  //   changeFn(str) {
  //     this.activeTitle = str;
  //   }
  // }
  // 侦听路由
  watch: {
    $route() {
      // 路由改变
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
  padding-bottom: 150px;
}
</style>