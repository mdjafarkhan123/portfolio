import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Works from "../pages/Works.vue";
const routes = [
    { path: "/", component: Home },
    { path: "/works", component: Works },
    { path: "/contact", component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
