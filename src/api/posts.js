
import requests from "./ajax";

export const reqGetAllPost = (params) => {
  const queryParams = Object.entries(params || {})//对象转为key-value形式
    .map(([key, value]) => value && `${key}=${encodeURIComponent(value)}`)//字符转义
    .filter(Boolean)//过滤掉空的
    .join('&')//连接
  const url = `/posts${queryParams ? `?${queryParams}` : ''}`
  return requests({
    url,
    method: 'get',
  })
}

export const reqGetHotPost = () => {
  return requests({
    url: `/posts/hot`,
    method: 'post',
  })
}

export const reqGetPostById = (id) => {
  return requests({
    url: `/posts/${id}`,
    method: 'get',
  })
}

export const reqReplyPost = (params) => {
  return requests({
    url: '/replies',
    method: 'post',
    data: params
  })
}

export const reqLikePost = (params) => {
  return requests({
    url: '/posts/like',
    method: 'post',
    data: params
  })
}

export const reqGetAllTag = () => {
  return requests({
    url: '/tags',
    method: 'get',
  })
}

export const reqAddPost = (params) => {
  return requests({
    url: '/posts',
    method: 'post',
    data: params
  })
}

export const reqDeletePost = (id) => {
  return requests({
    url: `/posts/${id}`,
    method: 'delete'
  })
}
