// 程序的主入口文件,ts文件
// 引入createApp函数，创建对应的应用，产生实例对象
import { createApp } from 'vue'
// 引入App组件，所有组件的父级组件
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 创建App应用，返回对应的实例对象,调用mount方法进行挂载
createApp(App).use(router).use(ElementPlus).mount('#app')
