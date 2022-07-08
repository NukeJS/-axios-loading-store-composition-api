import { createApp } from 'vue';
import App from './App.vue';

/**
 * Stores needs to be registered for
 * the axios interceptors to be added
 */
import './stores/loading';

createApp(App).mount('#app');
