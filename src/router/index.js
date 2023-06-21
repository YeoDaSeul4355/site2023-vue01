import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroView from "../views/IntroView.vue";
import CardView from "../views/CardView.vue";
import MovieView from "../views/MovieView.vue";
import UnsplashView from "../views/UnsplashView.vue";
import YoutubeView from "../views/YoutubeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
  },
  {
    path: "/card",
    name: "card",
    component: CardView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/unsplash",
    name: "unsplash",
    component: UnsplashView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
