
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);





import DashboardView from "./components/DashboardView"
import DashboardViewDetail from "./components/DashboardViewDetail"



export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [



            {
                path: '/dashboards/dashboards',
                name: 'DashboardView',
                component: DashboardView
            },
            {
                path: '/dashboards/dashboards/:id',
                name: 'DashboardViewDetail',
                component: DashboardViewDetail
            },




    ]
})
