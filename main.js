import Vue from 'vue';
import App from './App.vue'; // Replace with the path to your main Vue component
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

// Vue Router setup
Vue.use(VueRouter);

// Import your Vue components and configure your routes here
import Home from './views/Home.vue'; // Adjust the path as needed
import Expenses from './views/Expenses.vue'; // Adjust the path as needed
import Budget from './views/Budget.vue'; // Adjust the path as needed
import Reports from './views/Reports.vue'; // Adjust the path as needed
import UserProfile from './views/UserProfile.vue'; // Adjust the path as needed
import Settings from './views/Settings.vue'; // Adjust the path as needed

const routes = [
  { path: '/', component: Home },
  { path: '/expenses', component: Expenses },
  { path: '/budget', component: Budget },
  { path: '/reports', component: Reports },
  { path: '/profile', component: UserProfile },
  { path: '/settings', component: Settings },
];

const router = new VueRouter({
  routes,
  mode: 'history', // Use history mode for cleaner URLs (requires server configuration)
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
