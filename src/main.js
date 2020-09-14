import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from "./router"
import store from './store'
import { init as initializeDatabase } from './database/database'


initializeDatabase();

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
