import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "PJ Oschmann - Home"
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: {
        title: "PJ Oschmann - Experience"
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: "PJ Oschmann - Projects"
      }
    }
  ],
});

export default router
