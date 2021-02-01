<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center> 购物街 </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommends="recommend"></recommend>
      <feature></feature>

      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl1"
      ></tab-control>
      <goods-list :goodsList="goods[currentType].list"></goods-list>
    </scroll>
    <tab-control :titles="titles" @tabClick="tabClick" class="tab-control" v-show="isTabFixed" ref="tabControl2"></tab-control>  
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <!--     <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goodsList="goods[currentType].list"></goods-list> -->
  </div>
</template>

<script>
import HomeSwiper from "./children/HomeSwiper.vue";
import Recommend from "./children/Recommend.vue";
import Feature from "./children/Feature.vue";

import GoodsList from "@/components/content/goods/GoodsList.vue";
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: null,
      recommend: null,
      dKeyword: null,
      keywords: null,
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlTop: 0,
      isTabFixed: false,
      scrollY: 0
    };
  },
  created() {
    // 1、请求多个数据
    this.getHomeMultidata();
    // 2、请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /* 
      请求数据相关的方法
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        window.setTimeout(() => {
          this.tabControlTop = this.$refs.tabControl1.$el.offsetTop;
        }, 100);
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.refresh();
      });
    },

    /* 
      点击事件相关的方法
    */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  mounted() {
    this.$refs.scroll.scroll.on("scroll", (position) => {
      // 1、backTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2、tabControl吸顶
      this.isTabFixed = -position.y > this.tabControlTop
    });
    this.$refs.scroll.scroll.on("pullingUp", () => {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
    });
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: calc(100vh - 49px);
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /* position: fixed; */
}

.content {
  /* height: 600px; */
  overflow: hidden;
  /* background-color: #bfa; */
  position: absolute;
  top: 44px;
  bottom: 0;
}

.tab-control{
  position: relative;
  z-index: 9;
}
</style>
