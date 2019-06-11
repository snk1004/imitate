import { getCateList, getshopList,getType } from "@/api/index"

const state = {
  list: [],
  shopList: [],
  typeList:[]
}

const mutations = {
  upDataState(state, payload) {
    for (let key in payload) {
      if(payload[key].constructor == Object){
        state[key] = {...payload[key]}
      }else{
        state[key] = payload[key]
      }
    }
  },
  gettypelist(state,payload){//获取分类
    state.typeList=[...payload.typeList]
  }
}

const actions = {
  // swiper list
  async getCateList({ commit }, payload) {
    let { data } = await getCateList();
    let arr = [];
    let newArr = []
    for (let i = 1; i <= data.length; i++) {
      data[i - 1].image_url = 'https://fuss10.elemecdn.com' + data[i - 1].image_url
      if (i % 8 === 0) {
        arr.push(newArr)
        newArr.push(data[i - 1])
        newArr = [];

      } else {
        newArr.push(data[i - 1])
      }
    }
    commit('upDataState', { list: arr })

  },
  // shop list
  async getshopList({ commit }) {
    let shoplist = await getshopList({
      latitude: 40.041898,
      longitude: 116.300096
    })
    shoplist.data.forEach(item => {
      item.image_path = `https://elm.cangdu.org/img/${item.image_path}`
    })
    commit('upDataState', {shopList: shoplist.data})
  },
  //获取分类
  async getType({commit},payload){
    let data=await getType()
    commit('gettypelist',{typeList:data.data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
