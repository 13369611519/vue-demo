import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    //端口号
    port:3000,
    //自动打开浏览器
    open:true,
    proxy:{
      '/api':{
        target:'http://www.baidu.com',
        changeOrigin:true,

      }
    }
  }
})
