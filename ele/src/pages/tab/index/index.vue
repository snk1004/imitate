<template>
  <div>
    <div class="address">
      <div class="address-left">
        <span>
          <img src="/static/index/address.svg" alt="">
        </span>
        <p class="address-change">
          地理位置地理位置地理位置地理位置地理位置
        </p>
      </div>
      <div class="login">
        <span>登录|</span>
        <span>注册</span>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索商家、产品名称">
    </div>
    <swiper indicator-dots={true}>
      <swiper-item v-for="(item,index) in list" :key="index">
        <div class="nav-list">
          <dl @click="gotoSwiperDetail(v.id,v.title)" v-for="(v,i) in item" :key="v.id">
            <dt>
              <img mode='widthFix' :src="v.image_url">
            </dt>
            <dd>
              {{v.title}}
            </dd>
          </dl>
        </div>
      </swiper-item>
    </swiper>
    <div class="shoplist">
      <header>
        <img src="/static/tabs/shop.png" alt="" class='img'>
        <span>附近商家</span>
      </header>

      <ShopList :shopList='shopList' />

      <Loading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Loading from '@/components/loading';
  import ShopList from '@/components/shopList';
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    async created() {
      await this.getCateList();
      await this.getshopList();
      this.isLoading = false;
    },
    computed: {
      ...mapState({
        list: state => state.index.list,
        shopList: state => state.index.shopList
      })
    },
    methods: {
      ...mapActions({
        getCateList: 'index/getCateList',
        getshopList: 'index/getshopList'
      }),
      gotoSwiperDetail(id, title) {
        wx.navigateTo({
          url: './swiperDetail/main?id=' + id + '&title=' + title,
        })
      }
    },
    components: {
      Loading,
      ShopList
    }
  }
</script>

<style scoped lang='scss'>
  .address {
    font-size: 14px;
    display: flex;
    background: #3190e8;
    box-sizing: border-box;
    color: #FFF;
    height: 30px;
    box-sizing: border-box;
    line-height: 0;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    .login {
      span {
        display: inline-block;
      }
    }
  }

  .address-left {
    display: flex;
    align-items: center;
  }

  .address img {
    height: 15px;
    width: 15px;
  }

  .address-change {
    line-height: 30px;
    max-width: 200px;
    padding-left: 5px;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .address-change::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #FFF;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -2px;
  }

  .search {
    background: #3190e8;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    padding-bottom: 10px;
  }

  .search input {
    height: 40px;
    flex: 1;
    border: none;
    outline: none;
    background: #FFF;
    font-size: 12px;
    border-radius: 20px;
    text-align: center;
  }

  swiper {
    border-bottom: 1px solid #e4e4e4;
    height: 180px;
    padding-bottom: 10px;
    background: #FFF;
  }

  .nav-list {
    display: flex;
    flex-wrap: wrap;
    height: 90%;
  }

  swiper-item dl {
    display: flex;
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  swiper-item dl dd {
    color: #666;
    font-size: 12px;
  }

  swiper img {
    width: 40px;
  }

  .shop-header {
    border-top: 10px solid #eee;
    height: 40px;
    font-size: 14px;
    color: #666666;
  }

  .shop-header span {
    line-height: 0;
  }

  .shop-header img {
    height: 20px;
    width: 20px;
    margin: 0 10px;
  }

  .shop-header p {
    height: 40px;
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
  }

  .shoplist {
    background: #FFF;
    width: 100%;
    flex: 1;
    border-top: 10px solid #eee;
    >header {
      border-top: 1px solid #e4e4e4;
      height: 38px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
      color: #999;
      >.img {
        width: 18px;
        height: 18px;
      }
      >span {
        font-size: 14px;
        margin-left: 10px;
      }
    }
    >section {
      width: 100%;
      >dl {
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
  }

  .shoplist {
    background: #FFF;
    width: 100%;
    height: 500px;
    border-top: 10px solid #eee;
    >header {
      border-top: 1px solid #e4e4e4;
      height: 38px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;
      color: #999;
      >.img {
        width: 18px;
        height: 18px;
      }
      >span {
        font-size: 14px;
        margin-left: 10px;
      }
    }

  }

  
</style>