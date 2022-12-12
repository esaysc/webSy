import { defineStore } from 'pinia' // pinia
import type { Universal } from '@/types' // 返回类型自定义
import { reactive } from 'vue'
import { http } from '@/utils/request'
import { userInfo } from 'os'

const useUserStore = defineStore('user', {
  state: () => ({
    user: reactive({}) as Universal,
    result: reactive({}) as Universal,
  }),
  actions: {
    // 获取用户详细信息 (通过用户名)
    async getUserInfo(data: any) {
      await http('POST', '/user/info', data).then((res: any) => {
        const temp = res.data
        if (this.user) {
          this.user = {}
        }
        for (let key in temp) {
          this.user[key] = temp[key]
        }
      })
    },
    // 获取用户详细信息 (通过用户ID)
    async getUserInfoByUserId(data: any) {
      await http('POST', '/user/info/userId', data).then((res: any) => {
        const temp = res.data
        if (this.user) {
          this.user = {}
        }
        for (let key in temp) {
          this.user[key] = temp[key]
        }
      })
    },
    // 保存用户修改信息
    async saveUserInfo(data: any) {
      await http('POST', '/user/saveInfo', data).then((res: any) => {
        const temp = res.data
        if (this.result) {
          this.result = {}
        }
        for (let key in temp) {
          this.result[key] = temp[key]
        }
      })
    },
  },
  persist: {
    enabled: true,
  },
})

export default useUserStore
