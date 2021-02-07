<template>
  <div class="detail-params">
    <table>
      <tr v-for="(item, index) in detailParams.tables" :key="index">
        <td v-for="(trItem, trIndex) in item" :key="trIndex">{{ trItem }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    detailParams: {
      type: Object,
      default() {
        return {};
      },
    },

    itemInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang='less'>
.detail-params {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
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
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
    td {
      text-align: center;
      height: 30px;
    }
  }
}
</style>