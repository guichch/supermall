<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center> 购物街 </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import { getHomeMultidata } from "@/network/home.js";

  export default {
    name: "Home",
    components: {
      NavBar,
    },
    data() {
      return {
        banners: null,
        recommend: null,
        dKeyword: null,
        keywords: null
      }
    },
    created() {
      // 1、请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        this.dKeyword = res.data.dKeyword;
        this.keywords = res.data.keywords;
      })
    }
  };

</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
