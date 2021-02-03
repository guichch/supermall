<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImgs="topImgs"></detail-swiper>
      <goods-info :goods="goods"></goods-info>
      <shop-info :shopInfo="shop"></shop-info>
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-info>
      <detail-params :detailParams='detailParams'></detail-params>
    </scroll>
  </div>
</template>

<script>
let timer = null;
import { getDetail, Goods, Shop, Params } from "@/network/detail";
import Scroll from "@/components/common/scroll/Scroll.vue";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import GoodsInfo from "./childComps/GoodsInfo.vue";
import ShopInfo from "./childComps/ShopInfo.vue";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailParams from './childComps/DetailParams.vue';

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
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {},
      detailInfo: {},
      detailParams: {}
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
      this.detailParams = new Params(res.result.itemParams)
    });
  },

  methods: {
    imgLoad() {
      if (!timer) {
        timer = window.setTimeout(() => {
          this.$refs.scroll.scroll.refresh();
        }, 200);
      } else {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          this.$refs.scroll.scroll.refresh();
        }, 200);
      }
    },
  },
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