<template>
  <div class="detail" name='Detail'>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImgs="topImgs"></detail-swiper>
    <goods-info :goods='goods'></goods-info>
    <shop-info :shopInfo='shop'></shop-info>
  </div>
</template>

<script>

import {getDetail, Goods, Shop} from '@/network/detail'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper.vue'
import GoodsInfo from './childComps/GoodsInfo.vue'
import ShopInfo from './childComps/ShopInfo.vue'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    ShopInfo
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      goods: {},
      shop: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid; 
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImgs = res.result.itemInfo.topImages
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      this.shop = new Shop(res.result.shopInfo);
    })
  }
}
</script>

<style>

</style>