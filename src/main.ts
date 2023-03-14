import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UnIcon from './plugins/icons';

createApp(App).use(UnIcon, {
    height: 12,
    width: 12
}).mount('#app')
