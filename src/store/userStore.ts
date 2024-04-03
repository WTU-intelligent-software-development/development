import { defineStore } from 'pinia'
import { setToken, getToken, clearToken } from '@/utils/token'
import { reqLogin, reqRegister, reqSendMail, reqRePwd, reqGetUserByToken } from '@/api/user.js'
import { reqSendChat, reqGetChat, reqConfirmNotify, reqToken, reqUpdateUser, reqGetFollowingInfo, reqFollowing, reqGetUserById } from '@/api/user.js'
export const userStore = defineStore('user', {
  state: () => {
    return {
      userInfo: { avatar: '', likes: [], posts: [], followers: [], following: [] },
      userHeaderInfo: { likes: [], posts: [], followers: [], following: [], unread: [], read: [], chatSend: [], chatReceive: [] },
      token: getToken('LAKE_Token'),
      isToken: false,
      followingInfo: {},
      followersInfo: {},
      followingHeaderInfo: {},
      followersHeaderInfo: {},
      chatsInfo: [],
      tempTo: '',
    }
  },
  getters: {
    posts: (state) => state.userInfo.posts || [],
    followers: (state) => state.userInfo.followers || [],
    following: (state) => state.userInfo.following || [],

    userWhoHasChat: (state) => {
      // 合并
      const allChats = [
        ...state.userHeaderInfo.chatSend,
        ...state.userHeaderInfo.chatReceive,
      ];

      // 使用 Set uniqueIdsSet 来跟踪已经出现过的用户 ID，确保不重复添加相同的用户 ID
      const uniqueIdsSet = new Set();
      const uniqueChats = [];

      // 将唯一的用户对象添加到 uniqueChats 数组中
      for (const chat of allChats) {
        if (!uniqueIdsSet.has(chat.sender._id)) {
          uniqueIdsSet.add(chat.sender._id);
          uniqueChats.push(chat.sender);
        }

        if (!uniqueIdsSet.has(chat.to._id)) {
          uniqueIdsSet.add(chat.to._id);
          uniqueChats.push(chat.to);
        }
      }

      //  过滤掉与当前用户 ID 相同的对象
      // const filteredChats = uniqueChats.filter((chat) => chat._id !== state.userHeaderInfo._id);

      return uniqueChats;
    },
  },

  actions: {
    // 登录
    async userLogin(data) {
      let result = await reqLogin(data)
      console.log(result)
      if (result.code == '0000') {
        this.userInfo = result
        setToken(result.token);
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 注册
    async userRegister(data) {
      let result = await reqRegister(data)
      console.log(result)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 退出登录
    logout() {
      clearToken()
    },

    // 发送邮件
    async userSendMail(data) {
      let result = await reqSendMail(data)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 找回密码
    async userRePwd(data) {
      let result = await reqRePwd(data)
      console.log(result)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取用户信息
    async getUserInfoByToken() {
      let result = await reqGetUserByToken()
      if (result.code == '0000') {
        this.userHeaderInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    async verifyToken() {
      let result = await reqToken()
      if (result.code == '0000') {
        this.isToken = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    async getUserInfoById(id) {
      let result = await reqGetUserById(id)
      if (result.code == '0000') {
        this.userInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //  更新用户信息
    async updateUser(data) {
      let result = await reqUpdateUser(data)
      console.log(result)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取关注列表
    async getFollowingInfo(data) {
      let result = await reqGetFollowingInfo(data)
      if (result.code == '0000') {
        this.followingInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取粉丝列表
    async getFollowersInfo(data) {
      let result = await reqGetFollowingInfo(data)
      if (result.code == '0000') {
        this.followersInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取本人关注列表
    async getFollowingHeaderInfo(data) {
      let result = await reqGetFollowingInfo(data)
      if (result.code == '0000') {
        this.followingHeaderInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取本人粉丝列表
    async getFollowersHeaderInfo(data) {
      let result = await reqGetFollowingInfo(data)
      if (result.code == '0000') {
        this.followersHeaderInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 关注/取关
    async followUser(userId, followerId) {
      let result = await reqFollowing(userId, followerId)
      console.log(result)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 确认通知
    async confirmNotify(params) {
      let result = await reqConfirmNotify(params)
      console.log(result)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 获取私信
    async getChats(params) {
      let result = await reqGetChat(params)
      if (result.code == '0000') {
        this.chatsInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    // 发送私信
    async sendChat(params) {
      let result = await reqSendChat(params)
      if (result.code == '0000') {
        return result.data
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },
  }
})