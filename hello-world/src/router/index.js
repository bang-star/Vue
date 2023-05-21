import Vue from 'vue'
import VueRouter from 'vue-router'

import Routes from './route'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    routes: Routes,
})

export default Router