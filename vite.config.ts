import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import axios from 'axios'
import { resolve } from 'path'
vue.prototype.$http = axios // Axios绑定在Vue上面
// const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 代理访问
  server: {
    proxy: {
      '/api': {
        target: 'http://43.136.179.5:8049', //
        // target: 'http://localhost:8049',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // pathRewrite:{
        //   '^/api':''
        // }
      },
    },
  },

  // 起个别名，在引用资源时，可以用‘@/资源路径’直接访问
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
