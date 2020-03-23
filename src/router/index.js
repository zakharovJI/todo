import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../views/MainPage/MainPage.vue";
import EditPage from "../views/EditPage/EditPage.vue";
import CreatePage from "../views/CreatePage/CreatePage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: MainPage
  },
  {
    path: "/create",
    component: CreatePage
  },
  {
    path: "/edit",
    component: EditPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
