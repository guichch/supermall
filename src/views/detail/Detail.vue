<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scrolling="scrolling">
      <detail-swiper :topImgs="topImgs"></detail-swiper>
      <goods-info :goods="goods"></goods-info>
      <shop-info :shopInfo="shop"></shop-info>
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-info>
      <detail-params :detailParams="detailParams" ref="params"></detail-params>
      <detail-item-info :itemInfo="itemInfo.tables"></detail-item-info>
      <user-evaluation
        :userEval="userEvaluation"
        ref="comment"
      ></user-evaluation>
      <goods-list :goodsList="recommend" ref="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
let timer = null;
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  Params,
  ItemInfo,
} from "@/network/detail";
import Scroll from "@/components/common/scroll/Scroll.vue";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import GoodsInfo from "./childComps/GoodsInfo.vue";
import ShopInfo from "./childComps/ShopInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailItemInfo from "./childComps/DetailItemInfo.vue";
import UserEvaluation from "./childComps/UserEvaluation.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    Scroll,
    DetailInfo,
    DetailParams,
    DetailItemInfo,
    UserEvaluation,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParams: {},
      itemInfo: [],
      userEvaluation: {},
      recommend: [],
      themeTopY: [],
      navCurrentIndex: 0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 获取顶部图片
      this.topImgs = res.result.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      // 获取店铺信息
      this.shop = new Shop(res.result.shopInfo);

      // 获取详情信息
      this.detailInfo = res.result.detailInfo;

      // 获取参数信息
      this.detailParams = new Params(res.result.itemParams);

      // 获取item信息
      this.itemInfo = new ItemInfo(res.result.itemParams);

      // 获取用户评价信息
      if (res.result.rate.cRate !== 0) {
        this.userEvaluation = res.result.rate.list[0];
      }
    });

    // 请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommend = res.data.list;
    });
  },

  methods: {
    /* 
      图片加载相关的方法
    */
    imgLoad() {
      if (!timer) {
        timer = window.setTimeout(() => {
          this.$refs.scroll.scroll.refresh();
          this.themeTopY = [];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.params.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        }, 200);
      } else {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          this.$refs.scroll.scroll.refresh();
          this.themeTopY = [];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.params.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        }, 200);
      }
    },

    /* 
      点击相关的方法
    */
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index], 100);
    },

    /* 
      滚动相关的方法
    */
    scrolling(position) {
      // 不能用防抖，可以用节流来做
      if (-position.y < this.themeTopY[1]) {
        this.$refs.nav.currentIndex = 0
      } else if (-position.y >= this.themeTopY[1] && -position.y < this.themeTopY[2]) {
        this.$refs.nav.currentIndex = 1
      } else if (-position.y >= this.themeTopY[2] && -position.y < this.themeTopY[3]) {
        this.$refs.nav.currentIndex = 2
      } else {
        this.$refs.nav.currentIndex = 3
      }

/*       for (let index in this.themeTopY) {
        if (-position.y == this.themeTopY[index]) {
          this.navCurrentIndex = index;
          this.$refs.nav.currentIndex = this.navCurrentIndex
        }
      } */
    }
  },

/*   mounted() {
    console.log(this.$refs.scroll.scroll);
    this.$refs.scroll.scroll.on("scorll", (position) => {
      console.log(position);
      if (position.y < -1000) {
        this.isShow = false;
      }
    });
  }, */
};
</script>

<style scoped lang='less'>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 44px);
  }
}
</style>  