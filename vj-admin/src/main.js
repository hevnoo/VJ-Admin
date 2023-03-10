import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//全局引入icons
import * as ELIcons from '@element-plus/icons-vue'
import '@/styles/index.scss'
// import '@/utils/storage'
import '@/assets/iconfont/iconfont.css'
import i18n from '@/i18n'
import request from '@/utils/request.js'
import '@/router/permission'
import echarts from '@/utils/echarts.js'
import directives from '@/directives/index'

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn
})
//全局使用icons
for (let iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
app.use(i18n)
app.config.globalProperties.$request = request //方法挂载到全局
app.config.globalProperties.$echarts = echarts
app.use(directives)

app.mount('#app')
