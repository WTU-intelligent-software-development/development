// 统一管理api

import requests from "./ajax";

// 登录
export const reqLogin = (params) => {
  return requests({
    url: '/login',
    method: 'post',
    data: params
  })
}

//注册 添加用户
export const reqRegister = (params) => {
  return requests({
    url: '/user',
    method: 'post',
    data: params
  })
}

// 找回密码
export const reqRePwd = (params) => {
  return requests({
    url: '/userPwd',
    method: 'put',
    data: params
  })
}

// 更新用户信息
export const reqUpdateUser = (params) => {
  return requests({
    url: '/user',
    method: 'put',
    data: params
  })
}

// 发送验证码
export const reqSendMail = (params) => {
  return requests({
    url: '/mail',
    method: 'post',
    data: params
  })
}

// 根据token获取用户
export const reqGetUserByToken = () => {
  return requests({
    url: '/user',
    method: 'get',
  })
}

// 根据token获取用户
export const reqToken = () => {
  return requests({
    url: '/token',
    method: 'get',
  })
}

// 根据id获取用户
export const reqGetUserById = (id) => {
  return requests({
    url: `/user/${id}`,
    method: 'get',
  })
}



// 获取用户关注列表/粉丝列表
export const reqGetFollowingInfo = (params) => {
  return requests({
    url: '/follow',
    method: 'post',
    data: params
  })
}

// 关注用户
export const reqFollowing = (userId, followerId) => {
  return requests({
    url: `/attention/${userId}`,
    method: 'post',
    data: followerId
  })
}

//确认系统通知
export const reqConfirmNotify = (params) => {
  return requests({
    url: '/notify/confirm',
    method: 'post',
    data: params
  })
}

// 获取私信
export const reqGetChat = (params) => {
  return requests({
    url: '/notify/getChat',
    method: 'post',
    data: params
  })
}

// 发送私信
export const reqSendChat = (params) => {
  return requests({
    url: '/notify/chat',
    method: 'post',
    data: params
  })
}