import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/main.css'

import { createApp } from 'vue' /*从已安装的软件包（vue）中导入调用函数*/
import App from './App.vue' /*不带花括号则导入整个组件*/

createApp(App).mount('#app') /*函数功能：创建一个App #标志去index.html中寻找id为App的标记*/