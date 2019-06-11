<template>
  <div>
    <header>
      <div>
        <div>{{title}}
          <span :class="title!=='分类'?'':'cur'" @click="setflagstuts"></span>
          <ul v-if="flag" class="type">
            <div>
              <div class="type_left">
                <li :class="ind===index?'active':''" @click="setIndex(ind)" v-for="(item,ind) in typeList" :key="item.id">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span> >
                </li>
              </div>
              <div v-if="typeList.length" class="type_right">
                <li v-for="v in typeList[index].sub_categories" :key="v.id">
                  <span>{{v.name}}</span>
                  <span>{{v.count}}</span>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div>排序
          <span></span>
        </div>
        <div>筛选
          <span></span>
        </div>
      </div>
    </header>
    <ShopList :shopList='shopList' />
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import ShopList from '@/components/shopList';
  export default {
    data() {
      return {
        title: "",
        index: 0,
        flag: false
      };
    },
    computed: {
      ...mapState({
        shopList: state => state.index.shopList, //店铺列表
        typeList: state => state.index.typeList //分类
      })
    },
    async mounted() {
      this.title = this.$mp.query.title;
      wx.setNavigationBarTitle({
        title: this.$mp.query.title
      });
      let obj = {
        latitude: 31.22299,
        longitude: 121.36025,
        restaurant_category_id: this.$mp.query.id
      };
      let obj2 = {
        latitude: 31.22299,
        longitude: 121.36025
      };
      await this.getshopList(obj); //获取店铺列表
      await this.getType(obj2); //获取分类
    },
    methods: {
      ...mapActions({
        getshopList: "index/getshopList"
      }),
      ...mapActions({
        getType: "index/getType"
      }),
      setIndex(ind) {
        this.index = ind
      },
      setflagstuts() {
        this.flag = !this.flag;//显示下面内容
        if (!this.flag) {
          this.title = this.$mp.query.title;
        } else {
          this.title = '分类';
        }
      }
    },
    components:{
      ShopList
    }
  };
</script>

<style scoped lang='scss'>
  header {
    width: 100%;
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    background: #fff;
    >div {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      >div {
        flex: 1;
        font-size: 14px;
        margin: 10px 0;
        box-sizing: border-box;
        text-align: center;
        border-right: 1px solid #ccc;
        >span {
          position: relative;
        }
        >span:before {
          content: '';
          position: absolute;
          top: 5px;
          left: 7px;
          border-top: 8px solid transparent;
          border-left: 8px solid #666;
          transform: rotate(-45deg);

        }
        >span.cur:before {
          content: '';
          position: absolute;
          top: 8px;
          left: 7px;
          border-top: 8px solid transparent;
          border-left: 8px solid #666;
          transform: rotate(135deg);

        }
      }
      >div:nth-child(3) {
        border: 0;
      }
    }
  }

  .type {
    position: fixed;
    left: 0;
    top: 38px;
    width: 100%;
    height: 100%;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.3);
    >div {
      width: 100%;
      height: 400px;
      display: flex;
      overflow: hidden;
      background: #fff;
    }
  }

  .type_left {
    flex: 1;
    background: #f2f2f2;
    >li {
      width: 100%;
      padding: 12px 10px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      justify-content: space-between;
      color: #666;
      background: #f2f2f2;
      >span:nth-child(1) {
        width: 50%;
      }
      >span:nth-child(2) {
        width: 40px;
        margin-left: 1px;
        background: #ccc;
        font-size: 10px;
        color: #fff;
        padding: 2px 3px;
        border: 1px solid #ccc;
        border-radius: 15px;
        box-sizing: border-box;
        text-align: center;
      }
    }
    li.active {
      background: #fff;
    }
  }

  .type_right {
    flex: 1;
    background: #fff;
    overflow: auto;
    >li {
      width: 100%;
      padding: 12px 10px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      color: #666;
      >span:nth-child(1) {
        width: 80%;
      }

    }
  }
</style>