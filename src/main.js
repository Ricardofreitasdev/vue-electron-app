import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.provide('$electron', window.api);
app.mount('#app');
