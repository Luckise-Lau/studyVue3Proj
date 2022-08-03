import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gxmariEslintplugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  plugins: [
    vue(),
    gxmariEslintplugin({
      // 配置选项
      cache: false
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/styles/variables.less";'
      }
    }
  }
})
