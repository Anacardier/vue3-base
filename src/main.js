import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/base.css';
import ElementPlus from "element-plus";
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/css/resets.scss';
import router from "./router";

createApp(App).use(router).use(ElementPlus, {size: 'small'}).mount('#app')
