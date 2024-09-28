import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import Auth from '../views/auth/Auth.vue'
import WorkerLayout from '../layouts/WorkerLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import ReceptionLayout from '../layouts/ReceptionLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/auth',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () =>
          import(
            /* webpackChunkName: "Orders" */ '@/views/orders/Orders.vue'
          ),
      },
      {
        path: 'workers',
        name: 'Workers',
        component: () =>
          import(
            /* webpackChunkName: "workers" */ '@/views/workers/Workers.vue'
          ),
      },
      {
        path: 'add-admin',
        name: 'Add Admin',
        component: () =>
          import(
            /* webpackChunkName: "addAdmin" */ '@/views/admin/addAdmin.vue'
          ),
      },
      {
        path: 'receptions',
        name: 'Receptions',
        component: () =>
          import(
            /* webpackChunkName: "receptions" */ '@/views/reception/Reception.vue'
          ),
      },
      {
        path: '/cars',
        name: 'Cars',
        component: () =>
          import(
            /* webpackChunkName: "Cars" */ '@/views/cars/Cars.vue'
          ),
      }
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminLayout,
    redirect: '/admin/dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'Admin Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "admin_dashboard" */ '@/views/admins/dashboard/Dashboard.vue'
          ),
      },
      {
        path: 'orders',
        name: 'Admin Orders',
        component: () =>
          import(
            /* webpackChunkName: "admin_dashboard" */ '@/views/admins/order/Order.vue'
          ),
      },
      {
        path: 'workers',
        name: 'Admin Workers',
        component: () =>
          import(
            /* webpackChunkName: "admin_workers" */ '@/views/admins/worker/Worker.vue'
          ),
      },
      {
        path: 'reception',
        name: 'Admin Reception',
        component: () =>
          import(
            /* webpackChunkName: "admin_reception" */ '@/views/admins/reception/Reception.vue'
          ),
      },
      {
        path: 'cars',
        name: 'Admin Cars',
        component: () =>
          import(
            /* webpackChunkName: "admin_cars" */ '@/views/admins/cars/Cars.vue'
          ),
      },
    ]
  },
  {
    path: '/worker',
    name: 'Worker',
    component: WorkerLayout,
    redirect: '/worker/dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'Worker Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "worker_dashboard" */ '@/views/worker/dashboard/Dashboard.vue'
          ),
      }
    ]
  },
  {
    path: '/reception',
    name: 'Reception',
    component: ReceptionLayout,
    redirect: '/reception/dashboard',
    children:[
      {
        path: 'dashboard',
        name: 'Reception Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "reception_dashboard" */ '@/views/receptions/dashboard/Dashboard.vue'
          ),
      },
      {
        path: 'orders',
        name: 'Reception Orders',
        component: () =>
          import(
            /* webpackChunkName: "reception_dashboard" */ '@/views/receptions/order/Order.vue'
          ),
      },
    ]
  },
  

  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
