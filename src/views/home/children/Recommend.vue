<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" >
        <br>
        {{item.title}}
      </a>
    </div>
  </div>
</template>
<script>
export default {
   name:'Recommend',
   props: {
     recommends: {
       type: Array,
       default() {
         return [];
       }
     }
   }
}
</script>
<style scoped>
  .recommend{
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    width: 80%;
  }
</style>
