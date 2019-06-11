import { getVerCode,toLogin,getServer } from "@/api/mine"

const state = {
  codeUrl: '',
  serData: {}
}

const mutations = {

}

const actions = {
  async getVerCode(){
    let data = await getVerCode()
    state.codeUrl = await data.data.code
    return data.code
  },
  async toLogin(obj){
    toLogin(obj).then(res=>{
      console.log(res)
    })
  },
  async getServer(){
    await getServer().then(res=>{
      state.serData = res.data
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
