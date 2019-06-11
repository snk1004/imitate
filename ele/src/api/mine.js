import request from '@/utils/request'

// 获取验证码
export let getVerCode = params=>{
    return request.post('https://elm.cangdu.org/v1/captchas')
}
// 登录
export let toLogin = params=>{
    return request.post('https://elm.cangdu.org/v2/login',{
        params: {...params}
    })
}

// 获取服务
export let getServer = params=>{
    return request.get('https://elm.cangdu.org/v3/profile/explain')
}