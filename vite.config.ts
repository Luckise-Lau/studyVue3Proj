import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gxmariEslintplugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    gxmariEslintplugin({
      // 配置选项
      cache: false
    })
  ]
})
