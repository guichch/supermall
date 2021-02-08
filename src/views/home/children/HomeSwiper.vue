<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load='imgLoad'>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'
  export default {
    name:'homeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return [];
        }
      }
    },

    methods: {
      imgLoad() {
        this.$emit('swiperImgLoad')
      }
    }
  }
</script>
<style scoped>

</style>
