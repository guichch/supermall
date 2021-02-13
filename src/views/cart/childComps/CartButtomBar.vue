<template>
  <div class="cart-buttom-bar">
     
    <div class="select-all" @click="selectAllClick">
      <check-button :isChecked='isChecked' class="check-button" />          
      <span>全选</span>
    </div>
    <div>
      <span>合计￥{{totalPrice}}</span>      
    </div>
    <div class="settle-accounts">
      <span>去结算({{totalNumber}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  components: {
    CheckButton
  },

  computed: {
    totalPrice() {
      return this.$store.state.cart.filter(item => {
        return item.isChecked;
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },

    totalNumber() {
      return this.$store.state.cart.filter(item => {
        return item.isChecked;
      }).length
    },
    isChecked() {
      return !!this.$store.state.cart.length && 
      this.$store.state.cart.every(item => item.isChecked)
    }
  },

  methods: {
    selectAllClick() {
      this.isChecked ? 
      this.$store.commit('deCheckedAll') : 
      this.$store.commit('checkedAll')
    }
  }
}
</script>

<style scoped lang='less'>
  .cart-buttom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .select-all {
      margin: 0 24px;
      font-size: 16px;
      .check-button {
        left: 10px;
      }
    }
    .settle-accounts {
      width: 30%;
      height: 100%;
      background-color: orangered;
      text-align: center;
      line-height: 38px;
      font-size: 16px;
      color: white;
      margin-left: auto;
    }
  }
</style>