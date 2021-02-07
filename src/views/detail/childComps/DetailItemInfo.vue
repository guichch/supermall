<template>
  <div class="detail-item-info">
    <table>
      <tr v-for="(item, index) in itemInfo" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .detail-item-info {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(100, 100, 100, .1);
  }
  table {
    width: 96%;
    margin: 0 auto;
    box-sizing: border-box;
    border-collapse: collapse;

    // margin: 0 4px;
    tr {
      width: 100%;
      height: 32px;
      border-bottom: 1px solid rgba(100, 100, 100, .2);
      td:first-child {
        text-align: center;
        height: 30px;
        width: 30%
      }
      td:last-child {
        text-align: left;
        color: var(--color-high-text);
      }
    }
  }
</style>