<template>
  <div class="box">
    <div class="star">
      <img src="/static/index/sl_star.svg" alt="">
      <img src="/static/index/sl_star.svg" alt="">
      <img src="/static/index/sl_star.svg" alt="">
      <img src="/static/index/sl_star.svg" alt="">
      <img src="/static/index/sl_star.svg" alt="">
    </div>
    <div class="star-num" :style="{width: widthPx}">
      <img src="/static/index/star.svg" alt="">
      <img src="/static/index/star.svg" alt="">
      <img src="/static/index/star.svg" alt="">
      <img src="/static/index/star.svg" alt="">
      <img src="/static/index/star.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['num'],
    data() {
      return {
        widthPx: ''
      }
    },
    mounted() {
      this.widthPx = this.num * 19.7 + '%'
    },
  }
</script>

<style lang="scss" scoped>
  .box {
    width: 50px;
    position: relative;
  }

  .star {
    width: 50px;
    img {
      height: 10px;
      width: 10px;
      padding: 0;
      margin: 0;
      display: inline-block;
    }
  }

  .star-num {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    width: 50px;
    white-space: nowrap;
    img {
      height: 10px;
      width: 10px;
      padding: 0;
      margin: 0;
      display: inline-block;
    }
  }
</style>