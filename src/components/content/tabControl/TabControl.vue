<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: currentIndex == index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}

.tab-control-item span {
  border-bottom: 3px solid transparent;
  padding: 5px;
}

.active span{
  color: var(--color-high-text);
  border-bottom-color: var(--color-tint);
}
</style>