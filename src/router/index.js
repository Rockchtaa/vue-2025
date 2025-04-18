import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue';
import ToggleJobsButton from '../components/ToggleJobsButton.vue'
import JobsViewWithID from '@/views/JobsViewWithID.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/jobs', name: 'Jobs', component: JobsView },
  { path: '/jobs/:id', name: 'JobsWithID', component: JobsViewWithID },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
