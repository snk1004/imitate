import {getMerchant,getshopdetail} from "@/api/search"
const state={
    searchList:[],
    getshopList:[]
}
const mutations={
    getsearchList(state,payload){
        state.searchList=[...payload]
    },
    getshopList(state,payload){
        state.getshopList=[...payload]
    }
}
const actions={
    async getMerchants({commit},payload){//通过关键字搜索店铺
        let data=await getMerchant(payload)
        commit('getsearchList',data)
    },
    async getshopdetail({commit},payload){//获取店铺详情
        let data=await getshopdetail(payload)
        commit('getshopList',data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  