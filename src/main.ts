import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import styleImport from '@/utils/style-import'
import store from './store'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
styleImport(app).use(router).use(store).mount('#app')
