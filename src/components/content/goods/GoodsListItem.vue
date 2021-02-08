<template>
  <div class="goods-item">
    <img :src="showImage" alt="guichch" @click="imgClick" />
    <div class="item-description">
      <p>{{ goodsItem.title }}</p>
      <div class="details">
        <span class="price">{{ goodsItem.price }}</span>
        <span class="star" v-if="!isClicked" @click="starClick">☆</span>
        <span class="star" v-else>★</span>
        <span class="collect">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    starClick() {
      this.isClicked = !this.isClicked;
      return false;
    },
    imgClick() {
      if (this.goodsItem.iid) {
        this.$router.push("/detail/" + this.goodsItem.iid);
      } else {
        this.$router.push("/detail/" + this.goodsItem.item_id);
      }
      
    },
  },

  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
  
};
</script>

<style scoped lang='less'>
.goods-item {
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}

.goods-item img {
  width: 100%;
  /* margin-bottom: 40px; */
  border-radius: 5px;
}

.item-description {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  text-align: center;
  font-size: 12px;
}

.item-description p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.details {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
  .price {
    color: var(--color-high-text);
  }
}
</style>