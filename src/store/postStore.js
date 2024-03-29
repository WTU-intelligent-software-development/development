import { defineStore } from 'pinia'
import { reqDeletePost, reqAddPost, reqGetHotPost, reqGetAllPost, reqGetAllTag, reqGetPostById, reqReplyPost, reqLikePost } from '../api/posts'
export const postStore = defineStore('posts', {
  state: () => {
    return {
      postsInfo: {
        posts: []
      },
      post: {
        tag: { name: '' },
        author: { nickname: '', following: [], followers: [] },
        replies: [],
        likes: [],
      },
      tagInfo: {},
      postHot: []
    }
  },
  getters: {

  },

  actions: {
    // 获取20条帖子
    async getLatestPosts(params) {
      let result = await reqGetAllPost(params)
      if (result.code == '0000') {
        this.postsInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //根据id获取帖子
    async getPostById(id) {
      let result = await reqGetPostById(id)
      if (result.code == '0000') {
        this.post = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //获取全部标签
    async getAllTag() {
      let result = await reqGetAllTag()
      if (result.code == '0000') {
        this.tagInfo = result.data
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //回复帖子
    async replyPost(params) {
      let result = await reqReplyPost(params)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //点赞帖子
    async likePost(params) {
      let result = await reqLikePost(params)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //获取每周热门帖子
    async getHotPost() {
      let result = await reqGetHotPost()
      if (result.code == '0000') {
        this.postHot = result.data.posts
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //新建帖子
    async addPost(params) {
      let result = await reqAddPost(params)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },

    //删除帖子
    async deletePost(id) {
      let result = await reqDeletePost(id)
      if (result.code == '0000') {
        return 'ok'
      } else {
        return Promise.reject(new Error(result.msg))
      }
    },
  }
})