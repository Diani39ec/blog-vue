import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
  { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue'), meta: { title: 'Blog' } },
  { path: '/blog/:slug', name: 'post', component: () => import('../views/PostView.vue'), meta: { title: 'Post' } },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'About' } },
  { path: '/categories', name: 'categories', component: () => import('../views/CategoriesView.vue'), meta: { title: 'Categories' } },
  { path: '/tags', name: 'tags', component: () => import('../views/BlogView.vue'), meta: { title: 'Tags' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  const base = import.meta.env.VITE_SITE_TITLE || 'Vue Blog'
  document.title = to.meta.title ? `${to.meta.title} | ${base}` : base
})

export default router
