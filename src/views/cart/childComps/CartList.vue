<template>
  <div class="cart-list">
    <div class="product" v-for="(item, index) in cartList" :key="index">
      <input type="radio" id="radio">
      <label for="radio">123</label>
      <img :src="item.img" width="40px">
      <div class="content">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        <p>
          <span>￥{{item.price}}</span>
          <span>×{{item.count}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>