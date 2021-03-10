import Vue from 'vue'
import VueRouter from 'vue-router'

// amplify configuration
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'
import PrimeVue from 'primevue/config';

Amplify.configure(aws_exports);

Amplify.configure({
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
});

// Vue components
import Auth from './components/Auth.vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Protected from './components/Protected.vue'
import Profile from './components/Profile.vue'
import Tasks from './components/Tasks.vue'
import Family from './components/Family.vue'
import Calendar from './components/Calendar.vue'

// Vuex store
import store from './store'

// Primeflex
import 'primeflex/primeflex.css';


// global styles
require('./assets/main.css')

// route configuration
const routes = [
  { path: '/', component: Auth },
  { path: '/home', component: Home },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} },
  { path: '/tasks', component: Tasks, meta: { requiresAuth: true} },
  { path: '/family', component: Family, meta: { requiresAuth: true} },
  { path: '/calendar', component: Calendar, meta: { requiresAuth: true} },
]

// router definition
const router = new VueRouter({
  routes
})

// implement protected routes for only signed in users
router.beforeResolve((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        next()
      } 
    }).catch((e) => {
      console.log('You are trying to access a protected route. Please sign in.')
      next({
        path: '/',
        query: {
          redirect: to.fullPath,
        }
      });
    });
  }
  next()
})

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(PrimeVue)

new Vue({
  render: v => v(App),
  router: router,
  store
}).$mount('#app')