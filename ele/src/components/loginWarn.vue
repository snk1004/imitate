<template>
  <div class="mask">
    <div class="mask_box">
      <icon type="warn" size="60" color="orange"/>
      <p>{{tipsV}}</p>
      <span @click="()=>this.$emit('offMask', false)">确认</span>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data(){
    return{
      tipsV: ''
    }
  },
  props: {
    Tips: String,
    required: true
  },
  computed: {
    ...mapState({
      
    })
  },
  methods: {
    ...mapActions({
      
    })
  },
  mounted() {
    this.tipsV = this.Tips
  },
}
</script>

<style lang="scss">
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
  }
  .mask_box{
    width: 75%;
    height: 180px;
    background: #fff;
    margin-top: 38%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    p{
      font-size: 16px;
    }
    span{
      width: 100%;
      height: 45px;
      background-color: #4cd964;
      color: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: center;
      line-height: 45px;
    }
  }
</style>

