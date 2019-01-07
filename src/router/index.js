import Vue from "vue";
import Router from "vue-router";
const Login = () => import("@/views/Login.vue");
const UserList = () => import("@/views/UserList.vue");
const Error = () => import("@/views/Error.vue");

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", redirect: "/index" },
      {
        path: "/index",
        component: Login,
        meta: {}
      },
      {
        path: "/users",
        component: UserList,
        meta: {}
      },
      {
        path: "*",
        component: Error,
        meta: {}
      }
    ]
  });
}
