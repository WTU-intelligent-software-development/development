//暴露函数
//本地存储持家化存储token
export const setToken = (token) => {
  localStorage.setItem('LAKE_TOKEN', token);
}

//清除token
export const clearToken = () => {
  localStorage.removeItem('LAKE_TOKEN');
}


export const getToken = () => {
  return localStorage.getItem('LAKE_TOKEN');
}