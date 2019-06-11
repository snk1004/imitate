<template>
  <div>
    <section>
      <dl v-for='item in shopList' :key='item.id'>
        <dt>
          <img mode='widthFix' :src="item.image_path" alt="">
        </dt>
        <dd>
          <div class="list-top">
            <p>
              <span v-if="item.is_premium" class="brand">品牌</span>
              <span class="headline">{{item.name}}</span>
            </p>
            <p>
              <span v-for="(v,i) in item.supports" :key="i">
                {{v.icon_name}}
              </span>
            </p>
          </div>
          <div class="list-content">
            <p>
              <span>
                <Star :num='item.rating' />
              </span>
              <span class="rating">{{item.rating}}</span>
              <span class="recent-order-num">月售{{item.recent_order_num}}单</span>
            </p>
            <p>
              <span class="delivery-mode">{{item.delivery_mode.text}}</span>
              <span class="supports">{{item.supports[1].name}}</span>
            </p>
          </div>
          <div class="list-footer">
            <p>
              <span class="float-minimum-order-amount">￥{{item.float_minimum_order_amount}}起送 / </span>
              <span class="piecewise-agent-fee">{{item.piecewise_agent_fee.tips}}</span>
            </p>
            <p>
              <span class="distance">{{item.distance}} / </span>
              <span class="order-lead-time">{{item.order_lead_time}}</span>
            </p>
          </div>
        </dd>
      </dl>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import Star from './star';
  export default {
    props:['shopList'],
    // computed: {
    //   ...mapState({
    //     shopList:state=>state.index.shopList
    //   })
    // },
    components:{
      Star
    }
  }
</script>
<style lang="scss">
  section {
    width: 100%;
    background: #FFF;
    dl {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
      padding: 20px 10px;
      img {
        width: 62px;
      }
      dd {
        width: 100%;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .list-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    font-size: 12px;
    align-items: center;
    p:nth-child(2) {
      box-sizing: border-box;
      span {
        display: inline-block;
        margin: 0;
        padding: 0;
        color: #666;
        font-size: 10px;
      }
    }
    .brand {
      padding: 0 3px;
      background: #ffd930;
      font-weight: 600;
      line-height: 0;
    }
    .headline {
      margin-left: 5px;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .list-content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    p {
      height: 100%;
      font-size: 14px;
    }
    p:nth-child(1) {
      display: flex;
      align-items: center;
    }
    p:nth-child(2) {
      display: flex;
      height: 12px;
    }
    .rating {
      height: 12px;
      padding: 0 5px;
      box-sizing: border-box;
      color: #ff6000;
      font-size: 10px;
    }
    .recent-order-num {
      font-size: 10px;
      color: #666666;
    }
    .delivery-mode {
      font-size: 10px;
      background: #3190e8;
      color: #FFF;
      line-height: 0;
      padding: 1px 0;
      box-sizing: border-box;
      margin-right: 2px;
      border-radius: 3px;
      line-height: 10px;
    }
    .supports {
      font-size: 10px;
      border: 1px solid #3190e8;
      color: #3190e8;
      line-height: 0;
      box-sizing: border-box;
      border-radius: 3px;
      line-height: 10px;
    }
  }
  .list-footer {
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    .float-minimum-order-amount {
      font-size: 10px;
      color: #666;
    }
    .piecewise-agent-fee {
      font-size: 10px;
      color: #666;
    }
    .distance {
      font-size: 10px;
      color: #666666;
    }
    .order-lead-time {
      font-size: 10px;
      color: #3190e8;
    }
  }
</style>