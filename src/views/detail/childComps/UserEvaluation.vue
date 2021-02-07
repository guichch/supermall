<template>
  <div class="user-evaluation" v-if="Object.keys(userEval).length !== 0">
    <div class="title clear-fix">
      <span class="text">用户评价</span>
      <span class="load-more">更多</span>
    </div>

    <div class="separation"></div>

    <div class="user" v-if="userEval.user">
      <img :src="userEval.user.avatar" width="30px"> 
      <span class="user-name">{{userEval.user.uname}}</span>
    </div>

    <div class="evaluation">
      <p>{{userEval.content}}</p>
      <span class="time">{{new Date(parseInt(userEval.created) * 1000).toLocaleDateString().replace(/\//g, '-')}}</span>
      <span class="style">{{userEval.style}}</span>
      <br>
      <img :src="item" v-for="(item, index) in userEval.images" :key="index" width="130px" height="130px">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userEval: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang='less'>
  .user-evaluation {
    width: 96%;
    margin: 0 auto 20px;
    padding: 20px 0;
    border-bottom: 2px solid rgba(100, 100, 100, .1);
    .title {
      width: 90%;
      margin: 0 auto;
      font-size: 14px;
      .text {
        float: left;
        transform: translateX(-10px);
      }
      .load-more {
        float: right;
      }
    }
    .separation {
      width: 90%;
      margin: 10px auto;
      border-top: 1px solid rgba(100, 100, 100, .1);
    }
    .user {
      width: 90%;
      // padding-top: 10px;
      margin: 10px auto;
      position: relative;
      img {
        margin-right: 10px;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .evaluation {
      width: 90%;
      margin: 10px auto;
      font-size: 14px;
      p {
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
        margin-right: 5px;
        color: rgba(100, 100, 100, .6)
      }
      img {
        margin-top: 10px;
        margin-left: 6px;
      }
    }
  }
</style>