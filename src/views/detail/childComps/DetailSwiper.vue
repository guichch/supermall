<template>
  <div>
    <swiper class="detail-swiper" :interval='Math.pow(2, 31) - 1'>
      <swiper-item v-for="(item, index) in topImgs" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  props: {
    topImgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.detail-swiper {
  height: 200px;
  overflow: hidden;
}
</style>