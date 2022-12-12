import { defineStore } from 'pinia' // pinia
import type { CategoryList } from '@/types' // 返回类型自定义
import { reactive } from 'vue'
import { http } from '@/utils/request'

const useHomeStore = defineStore('home', {
  state: () => ({
    categoryList: [] as CategoryList,
    userLists: [],
    user: {
      token: '',
    },
    userInfo: reactive({
      success: '',
      code: 0,
      token: '',
      message: '',
    }),
  }),
  actions: {
    // 测试获取信息
    async info() {
      await http('GET', '/user/info').then((res: any) => {
        console.log('info:', res.data)
      })
    },
  },
  persist: {
    enabled: true,
  },
})

export default useHomeStore
