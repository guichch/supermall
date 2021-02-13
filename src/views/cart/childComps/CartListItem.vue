<template>
  <div class="cart-list-item" >
    <div class="check-button">
      <check-button :isChecked="product.isChecked" @click.native="checkClick"/>
    </div>
    <img :src="product.img" width="80px" height="123px"/>
    <div class="content">
      <p class="title">{{ product.title }}</p>
      <p class="desc">{{ product.desc }}</p>
      <p class="price-number">
        <span class="left price">￥{{ product.price }}</span>
        <span class="right">×{{ product.count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },

/*   data() {
    return {
      isChecked: false
    }
  }, */

  components: {
    CheckButton
  },

  methods: {
    checkClick() {
      this.$store.commit('isChecked', this.product.iid)
      // this.product.isChecked = !this.product.isChecked
    }
  }
};
</script>

<style scoped lang='less'>
  .cart-list-item {
    padding: 5px 3px;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(100, 100, 100, .2);
    .check-button {
      flex-shrink: 0;
      width: 20px;
      // height: 100px;
      // height: 100%;
      position: relative;
      // background-color: #bfa;
      margin-right: 3px;
    }
    img {
      border-radius: 5px;
      flex-shrink: 0;
    }
    .content {
      width: calc(100% - 80px - 23px);
      padding: 0 10px;
      flex-shrink: 10;
      .title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 16px;
        font-weight: 520;
        color: #000;
        margin-bottom: 30px;
      }
      .desc {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        margin-bottom: 40px;
      }
      .price-number {
        .price {
          color: var(--color-high-text);
        }
      }
    }
  }
</style>