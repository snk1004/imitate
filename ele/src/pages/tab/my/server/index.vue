<template>
  <div class="cont">
    <header>
      <div class="line">
        <img src="../../../../../static/mine/kefu.png" mode="aspectFit" alt>
        <span>在线客服</span>
      </div>
      <div class="tel">
        <img src="../../../../../static/mine/tubiao210.png" mode="aspectFit" alt>
        <span>在线客服</span>
      </div>
    </header>
    <section>
      <div class="hot-question">热门问题</div>
      <div class="ques-list">
        <li v-for="(item, index) in quesList" :key="index" @click="toCont">
          <span>{{item}}</span>
          <img src="../../../../../static/mine/you.png" mode="aspectFit" alt>
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      quesList: [],
      contList: []
    };
  },
  computed: {
    ...mapState({
      serData: state => state.mine.serData
    })
  },
  components: {},
  methods: {
    ...mapActions({
      getServer: "mine/getServer"
    })
  },
  async mounted() {
    // 计算属性
    await this.getServer();
    const data = [];
    for (var key in this.serData) {
      if (key.slice(-1) == "n") {
        data.push(this.serData[key]);
      }
    }
    this.quesList = await data;
  }
};
</script>

<style lang="scss" scoped>
.cont {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    div:first-child {
      border-right: 1px solid #f5f5f5;
    }
    > div {
      width: 50%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #666;
      font-size: 14px;
      img {
        width: 16%;
        height: 50%;
      }
    }
  }
  section {
    width: 100%;
    height: 100%;
    .hot-question {
      width: 100%;
      height: 70px;
      color: #333;
      background: #fff;
      padding-left: 15px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }
    .ques-list {
      width: 100%;
      li:nth-child(even) {
        display: none;
      }
      li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #666;
        padding: 0 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f5f5;
        img {
          width: 18px;
          height: 20px;
        }
      }
    }
  }
}
</style>

