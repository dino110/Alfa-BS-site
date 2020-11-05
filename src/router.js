import { createRouter, createWebHistory } from "vue-router";

import NaslovnaPage from "./pages/NaslovnaPage.vue";
import PonudaPage from "./pages/PonudaPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import KontaktPage from "./pages/KontaktPage.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/naslovna" },
    { path: "/naslovna", component: NaslovnaPage },
    { path: "/ponuda", component: PonudaPage },
    { path: "/blog", component: BlogPage },
    { path: "/kontakt", component: KontaktPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
