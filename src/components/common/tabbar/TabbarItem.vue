<template>
  <div class="tab-bar-item" @click="itemClick" :class="{active: isActive}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>

<style scoped>
  @import url("../../../assets/css/iconfont/iconfont.css");
  .tab-bar-item {
    text-align: center;
  }

.active{
  color:red;
}
</style>
