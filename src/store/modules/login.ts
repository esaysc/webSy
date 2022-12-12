import { defineStore } from 'pinia' // pinia
import type { CategoryList } from '@/types' // 返回类型自定义
import type { Info } from '@/types' // 返回类型自定义
import type { Universal, UserInfo } from '@/types' // 返回类型自定义

import { reactive } from 'vue'
import jwt_decode from 'jwt-decode' //解析token
import { useAuthStore } from '@/store/counter' // 自定义的登录判断仓库
import { http } from '@/utils/request'

const store = useAuthStore()

const useLoginStore = defineStore('login', {
  state: () => ({
    categoryList: [] as CategoryList,
    userLists: [],
    registerInfo: reactive({}) as Universal,
    token: '',
    userInfo: reactive({}) as UserInfo,
    logoutInfo: 0,
  }),
  actions: {
    //  登录请求
    async login(data: any) {
      await http('POST', '/login', data).then((res: any) => {
        const temp = res.data
        if (this.userInfo) {
          this.userInfo = {}
        }
        for (let key in temp) {
          this.userInfo[key] = temp[key]
        }

        this.token = temp.data.token
        sessionStorage.setItem('token', this.token)
        localStorage.setItem('token', this.token)
        if (temp.data.code == 200) {
          console.log('成功')

          return 'temp.data.code'
        } else {
          console.log('失败')

          return 'temp.data.code'
        }

        // const decode = jwt_decode(this.user.token)
        // console.log('decode', decode) //decode是一个对象
      })
    },
    // 注册请求
    async register(data: any) {
      await http('POST', '/login/register', data).then((res: any) => {
        console.log('info0:', res.data)
        const temp = res.data
        if (this.registerInfo) {
          console.log('infos1:', this.registerInfo)
        }
        this.registerInfo = temp
        console.log('infos2:', this.registerInfo)
      })
    },
    // 登出请求
    async logout(data: any) {
      await http('POST', '/logout', data).then((res: any) => {
        console.log('登出结果:', res.data)
        this.logoutInfo = res.data.code
      })
    },
    clearnUserInfo(temp: any) {
      if (this.userInfo) {
        this.userInfo = {}
      }
      for (let key in temp) {
        this.userInfo[key] = temp[key]
      }
    },
  },
  persist: {
    enabled: true,
  },
})

export default useLoginStore
