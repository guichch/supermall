<template>
  <div class="check-button">
    <img src="@/assets/img/cart/tick.svg" :class="{check: isChecked}">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang='less'>
.check-button {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  padding-top: 4px;
  
  img {
    // background-color: #f00;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check {
    background-color: red;
    border-color: red;
  }
}
</style>