import request from '@/utils/request'
  
// 获取首页分类
export let getCateList = params=>{
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}

//获取附近商家

export let getshopList=params=>{
  return request.get('https://elm.cangdu.org/shopping/restaurants',{
   ...params
  })
}

//获取分列的数据
export let getType=params=>{
  return request.get('https://elm.cangdu.org/shopping/v2/restaurant/category',{
    ...params
  })
}