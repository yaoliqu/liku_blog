import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

function baseUrl({ mode, command }) {
  const env = loadEnv(mode, __dirname)
  let base = './'
  if (command === 'build' && env.VITE_API_ENV === 'test') {
    base = './'
  } else if (command === 'build' && env.VITE_API_ENV === 'prod') {
    base = './'
  } else if (command === 'build' && env.VITE_API_ENV === 'dev') {
    base = './'
  } else {
    base = './'
  }
  return base
}

// https://vitejs.dev/config/

export default defineConfig(({ mode, command }) => ({
  plugins: [vue(), Components({ resolvers: [AntDesignVueResolver()] })],
  base: baseUrl({ mode, command }),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  server: {
    port: 4500, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: '0.0.0.0'
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:7001',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
}))
