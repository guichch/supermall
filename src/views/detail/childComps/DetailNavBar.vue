<template>
  <div class="detail-nav-bar">
    <NavBar>
      <template #left>
        <img src="@/assets/img/common/back.svg" alt="guichch" class="back" @click="imgClick">
      </template>
      <template #center>
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    imgClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index);
    }
  },
};
</script>

<style>
.back{
  vertical-align: middle;
}
.center {
  display: flex;
  justify-content: space-around;
}

.active {
  color: var(--color-high-text);
}
</style>