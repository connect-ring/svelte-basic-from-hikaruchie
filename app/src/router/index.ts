import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Index from "../pages/Index.vue";
import NotFound from "../pages/NotFound.vue";

const routers: RouteRecordRaw[] = [
	{
		path: "/",
		component: MainLayout,
		children: [
			{
				path: "",
				component: Index
			}
		]
	},
	{
		path: "/:catchAll(.*)*",
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes: routers
});

export default router;
