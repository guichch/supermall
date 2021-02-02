<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="shopInfo.logo" alt="" width="36px" />
      <span class="shop-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-desc">
      <div class="shop-sells">
        <p class="sells">{{ (shopInfo.sells / 10000).toFixed(2) }}万</p>
        <p>总销量</p>
      </div>
      <div class="shop-goods">
        <p class="goods">{{ shopInfo.goodsCount }}</p>
        <p>全部宝贝</p>
      </div>
      <div class="separate"></div>
      <div class="shop-score">
        <p v-for="(item, index) in shopInfo.score" :key="index" class="shop-score-item">
          <span class="item-name">{{item.name}}</span>
          <span class="item-score" :class="{'score-better': item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="item-evaluate" :class="{'better-more': item.isBetter}">高</span>
          <span v-else class="item-evaluate">低</span>
        </p>
      </div>
    </div>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    getColor(score) {
      score
    }
  }
};
</script>

<style scoped lang='less'>
.shop-info{
  padding: 10px 2px;
  .shop-title {
    padding: 20px 0;
    margin-left: 5px;
    position: relative;
    img {
      vertical-align: baseline;
    }
    .shop-name {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 10px;
    }
  }
  .shop-desc {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    .shop-sells {
      text-align: center;
      .sells {
        margin-bottom: 5px;
      }
    }
    .shop-goods {
      text-align: center;
      .goods {
        margin-bottom: 5px;
      }
    }
    .separate{
      width: 1px;
      height: 40px;
      background-color:rgba(100, 100, 100, .2);
    }
    .shop-score {
      transform: translateY(-10px);
      .shop-score-item {
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        span {
          padding: 0 5px;
        }
        .item-score{
          color: #5ea732
        }
        .item-evaluate {
          background-color: #5ea732;
          color: white;
        }
        .score-better {
          color: #f13e3a;
        }
        .better-more {
          background-color: #f13e3a;
        }
      }
    }

  }
}

.shop-info::after{
  content: '';
  display: table;
  clear: both;
}
</style>