<template>
  <div class="cont">
    <div class="login-list">
      <li>
        <input type="text" placeholder="账号" @input="changeUser">
      </li>
      <li class="password">
        <input :type="pas_show" placeholder="密码" @input="changePass">
        <switch class="show-pas" @change="switchChange"/>
      </li>
      <li class="ver-code">
        <input type="text" placeholder="验证码" @input="changeVerc">
        <dl>
          <img class="imgss" :src="codeUrl" alt="">
          <div>
            <span>看不清</span>
            <span @click="Another">换一张</span>
          </div>
        </dl>
      </li>
    </div>
    <div class="reminder">
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
    </div>
    <div class="login-btn" @click="toLogin">登录</div>
    <Maskde v-if="showMask" v-on:offMask="offMask" :Tips="tips"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Maskde from '@/components/loginWarn'
export default {
  data() {
    return {
      pas_show: "password",
      user: "",
      pass: "",
      verc: "",
      showMask: false,
      tips: ""
    }
  },
  computed: {
    ...mapState({
      codeUrl: state => state.mine.codeUrl
    })
  },
  components: {
    Maskde
  },
  methods: {
    ...mapActions({
      getVerCode: "mine/getVerCode",
      toLogin: "mine/toLogin"
    }),
    // 切换 密码显示or隐藏
    switchChange(e){
      if(e.mp.detail.value){
        this.pas_show = "text"
      }else{
        this.pas_show = "password"
      }
    },
    // 获取input值
    changeUser(e){
      let userV = e.mp.detail.value;
      this.user = userV
    },
    changePass(e){
      let passV = e.mp.detail.value;
      this.pass = passV
    },
    changeVerc(e){
      let vercV = e.mp.detail.value;
      this.verc = vercV
    },
    // 换验证码
    Another(){
      this.getVerCode();
    },
    // 登录
    async toLogin(){
      if(this.user && this.pass && this.verc ){
        let obj = {
          username: await this.user,
          password: await this.pass,
          captcha_code: await this.verc
        }
        // await this.toLogin(obj)
      }else{
        if(!this.user){
          this.tips = '请输入手机号/邮箱/用户名'
        }else if(!this.pass){
          this.tips = '请输入密码'
        }else if(!this.verc){
          this.tips = '请输入验证码'
        }
        this.showMask = true
      }
    },
    offMask(v){
       this.showMask = v
    }
  },
  async mounted() {
    this.getVerCode();
  }
};
</script>

<style lang="scss" scoped>
.imgss{
  width: 75px;
  height: 45px;
  margin-right: 10px;
  margin-top: 15px;
}
.cont {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding-top: 15px;
  .login-list {
    width: 100%;
    > li {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      line-height: 50px;
      padding: 0 15px;
      box-sizing: border-box;
      color: #333;
      font-weight: 400;
      background: #fff;
      input {
        font-size: 16px;
      }
    }
    .password {
      position: relative;
      .show-pas {
        position: absolute;
        right: 0;
      }
    }
    .ver-code {
      position: relative;
      > dl {
        width: 130px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: -12px;
        right: 25px;
        font-size: 13px;
        p {
          font-size: 24px;
          margin-top: 10%;
        }
        > div {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          > span {
            height: 50%;
          }
          span:last-child {
            color: #3b95e9;
          }
        }
      }
    }
  }
  .reminder {
    margin-top: 10px;
    p {
      font-size: 12px;
      color: red;
      padding: 5px 10px;
      line-height: 10px;
      margin-top: 5px;
    }
  }
  .login-btn {
    margin: 10px 10px;
    padding: 10px 0;
    font-size: 18px;
    color: #fff;
    background-color: #4cd964;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }
}
</style>

