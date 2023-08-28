import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AOS from "aos";
import "aos/dist/aos.css"
import 'leaflet/dist/leaflet.css';
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import i18n from './i18n'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueI18n)

router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

  new Vue({
    created(){
      AOS.init();
    },
    router,
    vuetify,
    i18n,
    render: h => h(App)
  }).$mount('#app')
