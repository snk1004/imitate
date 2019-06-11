import request from "@/utils/request"

// 搜索商家信息
export let getMerchant = params=>{
    return request.get('https://elm.cangdu.org/v4/restaurants',{
      ...params
    })
  } 
  

//获取店铺详情
export let getshopdetail=params=>{
    return request.get('https://elm.cangdu.org/shopping/restaurant/'+params)
}
