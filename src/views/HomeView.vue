<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge badge badge-coral">Bienvenido a mi blog</span>
          <h1 class="hero-title">
            Ideas, tutoriales e insights para
            <span class="hero-highlight">desarrolladores web modernos</span>
          </h1>
          <p class="hero-desc">
            Explorando Vue.js, React, seguridad, y todo lo relacionado.
            Guias practicas para construir mejores aplicaciones en Ecuador.
          </p>
          <div class="hero-actions">
            <router-link to="/blog" class="btn btn-primary">Leer el Blog</router-link>
            <router-link to="/about" class="btn btn-outline">Acerca de Mi</router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">{{ totalPosts }}</span>
              <span class="stat-label">Articulos</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ totalCategories }}</span>
              <span class="stat-label">Categorias</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ totalTags }}</span>
              <span class="stat-label">Temas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-header">
        <h2>Publicaciones Destacadas</h2>
        <router-link to="/blog" class="btn btn-outline btn-sm">Ver todas →</router-link>
      </div>
      <PostList :posts="featuredPosts" />
    </section>

    <section class="section container">
      <div class="section-header">
        <h2>Explorar por Categoria</h2>
      </div>
      <div class="categories-grid">
        <router-link
          v-for="cat in categories"
          :key="cat.name"
          :to="`/blog?category=${cat.name}`"
          class="category-card"
        >
          <span class="category-icon">{{ cat.icon }}</span>
          <h3 class="category-name">{{ cat.name }}</h3>
          <p class="category-desc">{{ cat.description }}</p>
          <span class="category-count">{{ getCategoryCount(cat.name) }} articulos</span>
        </router-link>
      </div>
    </section>

    <section class="section container">
      <Newsletter />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PostList from '../components/PostList.vue'
import Newsletter from '../components/Newsletter.vue'
import { posts, getFeaturedPosts } from '../data/posts'
import { categories } from '../data/categories'

const featuredPosts = computed(() => getFeaturedPosts())
const totalPosts = computed(() => posts.length)
const totalCategories = computed(() => categories.length)
const totalTags = computed(() => {
  const tags = new Set()
  posts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return tags.size
})

function getCategoryCount(name) {
  return posts.filter(p => p.category === name).length
}
</script>

<style scoped>
.hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--blue-50) 0%, var(--white) 50%, var(--coral-100) 100%);
}

.dark-mode .hero {
  background: linear-gradient(135deg, rgba(30,64,175,0.08) 0%, rgba(15,23,42,1) 50%, rgba(249,115,22,0.06) 100%);
}

.hero-content {
  max-width: 700px;
}

.hero-badge {
  display: inline-block;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.hero-highlight {
  background: linear-gradient(135deg, var(--blue-500), var(--coral-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 560px;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section {
  margin-top: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;
}

.section-header h2 {
  font-size: 1.5rem;
}

.btn-sm {
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

.category-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.category-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--coral-400);
}

.category-icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.75rem;
}

.category-name {
  font-size: 1rem;
  margin-bottom: 0.375rem;
}

.category-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.category-count {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--coral-500);
}

@media (max-width: 768px) {
  .hero { padding: 6rem 0 3rem; }
  .hero-title { font-size: 2rem; }
  .hero-actions { flex-direction: column; }
  .hero-stats { gap: 2rem; }
  .categories-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .categories-grid { grid-template-columns: 1fr; }
}
</style>
