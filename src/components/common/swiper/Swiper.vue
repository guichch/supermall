<template>
  <div class="swiper-container">
    <div class="swiper" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <div
        v-for="(item, index) in slideCount"
        :key="index"
        class="indicator-item"
        :class="{ active: index == currentIndex - 1 }"
      ></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0,
        swiperStyle: {},
        swiperWidth: 0,
        scrolling: false,
        currentIndex: 1,
      }
    },
    mounted() {
      window.setTimeout(() => {
        this.handleDom();
      }, 1000);
      window.setTimeout(() => {
        this.startTimer();
      }, 3000);
    },
    methods: {
      // 初始化
      handleDom() {
        const swiperEl = document.querySelector('.swiper');
        const slideEls = document.getElementsByClassName('slide');
        this.slideCount = slideEls.length;
        if (this.slideCount > 1) {
          const cloneFirst = slideEls[0].cloneNode(true);
          const cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slideEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.swiperWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
          this.setTransform(-this.swiperWidth);
        }
      },

      // 开始轮播
      startTimer() {
        this.Timer = setInterval(() => {
          this.currentIndex++;
          this.scrollContent();
        }, this.interval)
      },

      // 停止轮播
      stopTimer() {
        window.clearInterval(this.Timer);
      },

      // 轮播事件
      scrollContent() {
        this.scrolling = true;
        this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms';
        this.setTransform(-this.currentIndex * this.swiperWidth);
        this.checkPosition();
        this.scrolling = false;
        
      },

      // 移动
      setTransform(position) {
        this.swiperStyle.transform = `translateX(${position}px)`;
        this.swiperStyle['--webkit--transform'] = `translateX(${position}px)`;
        this.swiperStyle['--ms--transform'] = `translateX(${position}px)`;
      },

      // 检查是否是第一张或最后一张
      checkPosition() {
        window.setTimeout(() => {
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex == 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.swiperWidth);
          }else if (this.currentIndex == this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.swiperWidth);
          }
        }, this.animDuration)

      },
      
      // 触摸事件
      touchStart(event) {
        if (this.scrolling) return;
        this.stopTimer();
        this.startX = event.touches[0].pageX;
      },
      touchMove(event) {
        let currentX = event.touches[0].pageX;
        this.distance = currentX - this.startX;
        let position = -this.currentIndex * this.swiperWidth;
        let showPosition = this.distance + position;
        this.setTransform(showPosition);
      },
      touchEnd() {
        const distanceAbs = Math.abs(this.distance);
        if (this.distance == 0) {
          return;
        }else if (this.distance > 0 && distanceAbs > this.moveRatio * this.swiperWidth) {
          this.currentIndex--;
        }else if (this.distance < 0 && distanceAbs > this.moveRatio * this.swiperWidth) {
          this.currentIndex++;
          
        }
        this.scrollContent();
        this.startTimer();
      }
    }
  };
</script>
<style scoped>
  .swiper-container{
    position: relative;
    overflow: hidden;
  }
  .swiper{
    display: flex;
  }
  .indicator{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    display: flex;
    justify-content: center;
  }

  .indicator .indicator-item{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    margin: 0 5px;
  }
  .indicator .active {
    background-color: red;
  }
</style>
