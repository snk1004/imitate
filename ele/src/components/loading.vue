<template>
  <div class="loading">
    <img src="/static/index/loading.svg" alt="">
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: #FFF;
  }

  img {
    height: 100%;
    width: 100%;
    animation: imgLoading 1s infinite;
  }
  @keyframes imgLoading
  {
  0%   {opacity: 1;}
  100%  {opacity: 0.5;}
  }
</style>