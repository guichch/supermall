<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template #center> 购物车({{$store.state.cart.length}}) </template>
    </nav-bar>
    <scroll>
      <cart-list :cartList='cartList'></cart-list>
    </scroll>
  </div>

</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import CartList from './childComps/CartList.vue';
export default {
  name: "",
  components: {
    NavBar,
    Scroll,
    CartList
  },

  computed: {
    cartList() {
      return this.$store.state.cart
    }
  }
};
</script>
<style scoped lang='less'>
  .cart {
    .cart-nav {
      background-color: var(--color-tint);
      color: white;
    }
  }
</style>
