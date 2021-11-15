import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AOS from "aos";
import "aos/dist/aos.css"
import 'leaflet/dist/leaflet.css';
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
