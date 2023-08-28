import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../views/Site.vue'
import Welcome from '../views/Welcome.vue'
import i18n from '../i18n'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}/site`
  },
  {
    path: '/rs',
    redirect: `/rs/site`
  },
  {
    path: '/:lang',
    component: { render (c) { return c('router-view') }
    },
    children:[
      {
        path:'site',
        name:'site',
        component: Site
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
