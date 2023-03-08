<template>
  <div>
    <!-- 调用路由对象中.back()方法，进行返回上一层目录 -->
    <van-nav-bar
      title="评论"
      left-arrow
      @click-left="$router.back()"
      fixed
    />
    <div class="main">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <template>
            <van-cell
              v-for="obj in list"
              :key="obj.id"
            >
              <div class="wrap">
                <div class="img_wrap">
                  <img
                    :src="obj.user.avatarUrl"
                    alt=""
                  />
                </div>
                <div class="content_wrap">
                  <div class="header_wrap">
                    <div class="info_wrap">
                      <p>{{ obj.user.nickname }}</p>
                      <p>{{ obj.time }}</p>
                    </div>
                    <div>{{ obj.likedCount }}点赞</div>
                  </div>
                  <div class="footer_wrap">
                    {{ obj.content }}
                  </div>
                </div>
              </div>
            </van-cell>
          </template>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
// 导入路由接口
import { getCommentListAPI } from "@/api";

//  使用 Promise接收数据
export default {
  data() {
    return {
      list: [],
      count: 0,
      isLoading: false,
      finished: false,
      loading: false,
      page: 1,
    };
  },
  methods: {
    // 下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，
    // 操作完成后将 v-model 设置为 false，表示加载完成。
    async onRefresh() {
      this.list = [];
      this.page = 1;
      this.getList();
    },
    async getList() {
      const res = await getCommentListAPI({
        // 必选参数
        id: this.$route.query.id, // 接收id值
        // 可选参数
        limit: 20,
        // 分页：offset
        offset: (this.page - 1) * 20, // 这里数字必须要和 limit一致
      });
      res.data.comments.forEach((obj) => this.list.push(obj));
      this.list = res.data.comments;
      this.isLoading = false;
      this.loading = false;
    },
    onLoad() {
      // 触底了，要加载下一页数据
      // 加载后要关闭 loading:false
      this.page++;
      this.getList();
      console.log("onload执行了");
    },
  },
  // created() {
  //   this.getList();
  // },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
}
.wrap {
  display: flex;
}
.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
}
.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.content_wrap {
  flex: 1;
}
/*  */
.hader_wrap {
  display: flex;
}
.info_wrap {
  flex: 1;
}
.info_wrap p:first-child {
  font-size: 0.37333rem;
  color: #666;
}
.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999;
}
.header_wrap div:last-of-type {
  color: #999;
  font-size: 0.293333rem;
}
/*  */
.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>