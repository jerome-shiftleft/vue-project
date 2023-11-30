import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

app.component('friend-contact', FriendContact);

createApp(App).mount('#app');
