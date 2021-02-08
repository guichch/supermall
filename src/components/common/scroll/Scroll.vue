<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: 3,
      pullUpLoad: true,
      pullDownRefresh: false,
      useTransition: false
    })

    this.scroll.on('scroll', position => {
      this.$emit('scrolling', position);
    })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
}
</script>

<style>

</style>