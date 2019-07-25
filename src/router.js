import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: () =>
        import("./views/Projects.vue")
    },
    {
      path: "/books",
      name: "books",
      component: () =>
        import("./views/Books.vue")
    },
    {
      path: "/travel",
      name: "travel",
      component: () =>
        import("./views/Travel.vue")
    },
    {
      path: "/resources",
      name: "resources",
      component: () =>
        import("./views/Resources.vue")
    },
  ]
});
