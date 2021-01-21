<template>
  <div class="main-tab-bar">
    <tabbar>
      <tabbar-item path="/home">
        <i class="iconfont icon-htmal5icon06"></i>
        <div>主页</div>
      </tabbar-item>
      <tabbar-item path="/categary">
        <i class="iconfont icon-fenlei"></i>
        <div>分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <i class="iconfont icon-gouwuchekong"></i>
        <div>购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <i class="iconfont icon-weibiaoti2fuzhi12"></i>
        <div>我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/common/tabbar/Tabbar';
import TabbarItem from '@/components/common/tabbar/TabbarItem';

export default {
  name: "",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>
<style scoped>
</style>
