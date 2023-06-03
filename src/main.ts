import { createApp } from 'vue'
import App from '@/App.vue'

import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})

// svg插件配置代码
import 'virtual:svg-icons-register'

// 引入自定义插件对象：注册整个项目的全局组件
import globalComponents from '@/components'
// 安装自定义插件
app.use(globalComponents);

// 引入模板的全局样式
import '@/styles/index.scss'

// 将应用挂载到挂载点上
app.mount('#app')
