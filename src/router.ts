import { createWebHistory, createRouter } from "vue-router";
import ExercisePage from "./exercise/Exercise.vue";
import OverviewPage from "./overview/OverviewPage.vue"
import SprintPage from "./sprint/SprintPage.vue"

const history = createWebHistory();
const routes = [
  { path: "/", component: OverviewPage },
  { path: "/go", component: ExercisePage },
  { path: "/sprint", component: SprintPage },
];

const router = createRouter({ history, routes });
export default router;