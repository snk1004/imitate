<template>
  <div class="cont">
    <header @click="toLogin">
      <div class="head" v-if="this.headFlag">
        <img src="../../../../static/mine/touxiang.png" mode='aspectFit' alt="">
      </div>
      <div class="login">
        <span>登录/注册</span>
        <p><img src="../../../../static/mine/shouji.png" mode='aspectFit' alt="">暂无绑定手机号</p>
      </div>
      <div class="login_de">
        <img src="../../../../static/mine/you-copy.png" mode='aspectFill' alt="">
      </div>
    </header>
    <section>
      <div class="user-info">
        <dl>
          <dd><em>0.00</em>元</dd>
          <dt>我的余额</dt>
        </dl>
        <dl>
          <dd><em>0</em>个</dd>
          <dt>我的优惠</dt>
        </dl>
        <dl>
          <dd><em>0</em>分</dd>
          <dt>我的积分</dt>
        </dl>
      </div>
      <div class="user-list">
        <li @click="toOrder">
          <span><img src="../../../../static/mine/shiliangzhinengduixiang.png" mode='aspectFill' alt="">我的订单</span>
          <span><img src="../../../../static/mine/you.png" mode='aspectFill' alt=""></span>
        </li>
        <li>
          <span><img src="../../../../static/mine/shangcheng.png" mode='aspectFill' alt="">积分商城</span>
          <span><img src="../../../../static/mine/you.png" mode='aspectFill' alt=""></span>
        </li>
        <li>
          <span><img src="../../../../static/mine/huangguan.png" mode='aspectFill' alt="">饿了么会员卡</span>
          <span><img src="../../../../static/mine/you.png" mode='aspectFill' alt=""></span>
        </li>
      </div>
      <div class="user-ser" @click="toServer">
        <li>
          <span><img src="../../../../static/mine/kefu-.png" mode='aspectFill' alt="">服务中心</span>
          <span><img src="../../../../static/mine/you.png" mode='aspectFill' alt=""></span>
        </li>
        <li @click="toDown">
          <span><img src="../../../../static/mine/app.png" mode='aspectFill' alt="">下载饿了么APP</span>
          <span><img src="../../../../static/mine/you.png" mode='aspectFill' alt=""></span>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data(){
    return{
      headFlag: false
    }
  },
  computed: {
    ...mapState({
      
    })
  },
  methods: {
    ...mapActions({
      getCateList: 'index/getCateList'
    }),
    toLogin(){
      wx.navigateTo({
        url: './login/main'
      })
    },
    toDown(){
      wx.navigateTo({
        url: './downApp/main'
      })
    },
    toOrder(){
      wx.switchTab({
        url: '../order/main'
      })
    },
    toServer(){
      wx.navigateTo({
        url: './server/main'
      })
    }
  },
  mounted() {
    
  },
}
</script>
<style lang="scss" scoped>
  .cont {
    width: 100%;
    height: 100%;
  }
  header {
    width: 100%;
    height: 90px;
    background: #3190e8;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0 15px;
    box-sizing: border-box;
    .head {
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      width: 210px;
      height: 100%;
      p {
        width: 100%;
        height: 60%;
        display: flex;
        align-items: center;
        font-size: 15px;
        image {
          width: 20px;
          height: 100%;
        }
      }
    }
    .login_de {
      width: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 10px;
        height: 15px;
      }
    }
  }
  section{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .user-info{
      width: 100%;
      height: 85px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      dl{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #666;
        width: 100%;
        height: 100%;
        padding: 0!important;
        dd{
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          em{
            margin-right: 5px;
          }
          em:first-child{
            font-size: 28px;
            color: #f90;
            font-weight: 700;
          }
        }
      }
      dl:first-child{
        border-right: 1px solid #eee;
      }
      dl:nth-child(2){
        border-right: 1px solid #eee;
        >dd{
          em:first-child{
            color: #ff5f3e;
          }
        }
      }
      dl:nth-child(3){
        >dd{
          em:first-child{
            color: #6ac20b;
          }
        }
      }
    }
    .user-list,
    .user-ser{
      width: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      li{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        line-height: 50px;
        padding: 0 15px;
        box-sizing: border-box;
        color: #333;
        font-weight: 400;
        span{
          display: flex;
          align-items: center;
          img{
            width: 18px;
            height: 18px;
            margin-right: 6px;
          }
        }
        span:nth-child(2){
          img{
            width: 10px;
            height: 15px;
          }
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
  }
</style>

