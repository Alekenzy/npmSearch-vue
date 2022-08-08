import MainPage from "@/pages/MainPage.vue";
import CurrentPackage from "@/pages/CurrentPackage.vue";
import ResultPackages from "@/pages/ResultPackages.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: MainPage,
        props: false
    },
    {
        path: '/search',
        component: ResultPackages,
        props: true,
    },
    {
        path: "/package/:name",
        component: CurrentPackage,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router