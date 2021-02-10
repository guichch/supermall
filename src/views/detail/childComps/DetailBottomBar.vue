<template>
  <div class="detail-bottom-bar">
    <div class="wrapper">      
      <div class="shop">
        <i class="iconfont icon-dianpu"></i>
        <br>
        <span>店铺</span>
      </div>
      <div class="coutomer-service">
        <i class="iconfont icon-kefu"></i>
        <br>
        <span>客服</span>
      </div>
      <div class="collection" @click="collect" v-if="isShow">
        <i class="iconfont icon-shoucang"></i>
        <br>
        <span>收藏</span>
      </div>
      <div class="collection" @click="collect" v-else>
        <i class="iconfont icon-yishoucang" style="color: #ff8198"></i>
        <br>
        <span>收藏</span>
      </div>
    </div>
    <div class="wrapper">
      <button class="add-to-cart" @click="addToCart">加入购物车</button>
      <button class="purchase">购买</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    collect() {
      this.isShow = !this.isShow
    },

    addToCart() {
      this.$emit('addToCart');
    }
  }
};
</script>

<style scoped lang='less'>
.detail-bottom-bar {
  display: flex;
  height: 49px;
  background-color: #fff;
  .wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    div {
      width: 30%;
      padding-top: 8px;
      // background-color: red;
      text-align: center;
      font-size: 14px;
    }
    .shop {
      i {
        color: var(--color-tint);
      }
    }
    button {
      width: 50%;
      font-size: 14px;
      outline: 0;
      border: 0;
    }
    .add-to-cart {
      background-color: yellow;
    }
    .purchase {
      background-color: var(--color-high-text);
      color: white;
    }
  }
}
</style>