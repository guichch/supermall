import BackTop from '@/components/content/backTop/BackTop'

export const backTop = {
  data() {
    return {
      isShowBackTop: false
    }
  },

  mounted() {
    this.$refs.scroll.scroll.on("scroll", (position) => {
      // 1、backTop是否显示
      this.isShowBackTop = -position.y > 1000;
    });
  },

  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },

  components: {
    BackTop
  }
}