<template>
  <div class="good-list">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  components: { GoodsListItem },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style>
  .good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>