import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Unicon from 'vue-unicons'
import { uniMultiply, uniPlus } from 'vue-unicons/dist/icons';

Unicon.add([uniMultiply, uniPlus])
/// https://antonreshetov.github.io/vue-unicons/
createApp(App).use(Unicon, {height: 12,
    width: 12}).mount('#app')
