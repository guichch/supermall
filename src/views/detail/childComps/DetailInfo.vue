<template>
  <div class="detail-info">
    <div class="info-desc clear-fix">
      <div class="start"><div class="point"></div></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"><div class="point"></div></div>
    </div>
    <div class="detail-image" v-if="detailInfo.detailImage">
      <div style="margin-bottom: 5px">{{ detailInfo.detailImage[0].key }}</div>
      <img
        :src="item"
        alt="guichch"
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        width="100%"
        @load='imgOnload'
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    imgOnload() {
      this.$emit('imgLoad')
    }
  }
};
</script>

<style scoped lang='less'>
.info-desc {
  padding: 10px 8px 5px;
  font-size: 14px;
  .start {
    width: 20%;
    height: 4px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.8);
    margin-bottom: 10px;
    .point {
      width: 4px;
      height: 4px;
      background-color: #000;
    }
  }
  .end {
    float: right;
    width: 20%;
    height: 4px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.8);
    margin-top: 10px;
    .point {
      float: right;
      width: 4px;
      height: 4px;
      background-color: #000;
    }
  }
}
.detail-image {
  padding: 10px 8px 5px;
}
</style>