<template>
  <div class="goods-info">
    <p class="info-title">{{ goods.title }}</p>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span
        v-if="goods.discount"
        class="discount"
        :style="{ backgroundColor: goods.discountBgColor }"
        >{{ goods.discount }}</span
      >
    </div>
    <div class="info-other" v-if="goods.columns && goods.services">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" width="12px" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='less' scoped>
.info-title {
  color: #222;
  font-size: 18px;
}
.info-price {
  margin-top: 10px;
  .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    margin-left: 5px;
    border-radius: 16px;
    color: #fff;
    padding: 0 8px;
    font-size: 16px;
  }
}
.info-other {
  padding: 10px 2px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
  border-bottom: 1px solid rgba(100, 100, 100, .2);
}

.info-service{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 20px 2px;
  border-bottom: 2px solid rgba(100, 100, 100, .1);
}
</style>