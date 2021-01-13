import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import HelloWorld from './components/HelloWorld.vue'

import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

// app.component('tab-home', {
//     template: `
//         <div>
//             home
//         <div>
//     `
// })

// app.component('hello', HelloWorld)

app.use(Antd).use(store).use(router).mount('#app')
