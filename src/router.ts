import { createWebHistory, createRouter } from "vue-router";
import ExercisePage from "./exercise/Exercise.vue";
import OverviewPage from "./overview/OverviewPage.vue"

const history = createWebHistory();
const routes = [
  { path: "/", component: OverviewPage },
  { path: "/go", component: ExercisePage },
];

const router = createRouter({ history, routes });
export default router;