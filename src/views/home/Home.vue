<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center> 购物街 </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommend"></recommend>
    <feature></feature>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home.js";
import HomeSwiper from "./children/HomeSwiper.vue";
import Recommend from "./children/Recommend.vue";
import Feature from "./children/Feature.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
  },
  data() {
    return {
      banners: null,
      recommend: null,
      dKeyword: null,
      keywords: null,
    };
  },
  created() {
    // 1、请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
    });
  },
};
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
