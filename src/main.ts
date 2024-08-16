import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 路由配置
import router from '@/router/index'

// 状态管理工具 Pinia
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

// -----------------
const app = createApp(App)
// 创建 pinia 实例
const pinia = createPinia()

// 挂载路由配置
app.use(router)
// 使用持久化存储插件
pinia.use(persistedstate)
app.use(pinia)

app.use(ElementPlus, { zIndex: 1,locale: zhCn })
// app.use(ElementPlus)
app.mount('#app')
