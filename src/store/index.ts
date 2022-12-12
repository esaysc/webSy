import type { App } from 'vue'
import { createPinia } from 'pinia' // pinia
import piniaPluginPersist from 'pinia-plugin-persist' // pinia 持久化插件
const store = createPinia() // 创建pinia仓库
store.use(piniaPluginPersist) // 使用持久化插件
// 导出函数 在main.ts中调用 用以启用仓库
export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
