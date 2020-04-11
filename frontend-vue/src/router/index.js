import Vue from "vue";
import VueRouter from "vue-router";
import Pokemon from "../views/Pokemon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Pokemon",
    component: Pokemon
  }
];

const router = new VueRouter({
  routes
});

export default router;
