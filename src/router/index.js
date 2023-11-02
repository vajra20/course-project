import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: 'class.index' */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: 'class.index' */ "../views/Login.vue"),
  },
  {
    path: "/all-course",
    name: "AllCourse",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Course/AllCourse.vue"
      ),
  },
  {
    path: "/detail-course",
    name: "DetailCourse",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Course/DetailCourse.vue"
      ),
  },
  {
    path: "/open-course",
    name: "OpenCourse",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Course/OpenCourse.vue"
      ),
  },
  {
    path: "/all-blog",
    name: "AllBlog",
    component: () =>
      import(/* webpackChunkName: 'class.index' */ "../views/Blog/AllBlog.vue"),
  },
  {
    path: "/detail-blog",
    name: "DetailBlog",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Blog/DetailBlog.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Dashboard/Dashboard.vue"
      ),
  },
  {
    path: "/dashboard-learn",
    name: "DashboardLearn",
    component: () =>
      import(
        /* webpackChunkName: 'class.index' */ "../views/Dashboard/DashboardLearn.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
