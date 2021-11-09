import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
const Components = require('unplugin-vue-components/vite')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname,'./src'),
    }
},
})
// export default {
//   plugins: [
//     // ...
//     vue(),
//   ],
// }