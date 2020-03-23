import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../views/MainPage/MainPage.vue";
import EditPage from "../views/EditPage/EditPage.vue";
import CreatePage from "../views/CreatePage/CreatePage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/workzone/todo/",
    component: MainPage
  },
  {
    path: "/workzone/todo/create",
    component: CreatePage
  },
  {
    path: "/workzone/todo/edit",
    component: EditPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
