<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template #center> 购物车({{$store.state.cart.length}}) </template>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cartList='cartList'></cart-list>
    </scroll>
    <cart-buttom-bar />
  </div>

</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import CartList from './childComps/CartList.vue';
import CartButtomBar from './childComps/CartButtomBar'
export default {
  name: "",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartButtomBar
  },

  computed: {
    cartList() {
      return this.$store.state.cart
    }
  },

  activated() {
    this.$refs.scroll.scroll.refresh()
  }
};
</script>
<style scoped lang='less'>
  .cart {
    .cart-nav {
      background-color: var(--color-tint);
      color: white;
    }
    .content {
      height: calc(100vh - var(--vh-offset, 0px) - 44px - 49px - 40px);
      // height: 100px;
      overflow: hidden;
    }
  }
</style>
