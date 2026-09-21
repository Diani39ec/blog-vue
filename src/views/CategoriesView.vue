<template>
  <div class="categories-page">
    <div class="container">
      <header class="page-header">
        <h1>Categories</h1>
        <p class="page-desc">Browse articles organized by topic.</p>
      </header>

      <div class="categories-grid">
        <router-link
          v-for="cat in categories"
          :key="cat.name"
          :to="`/blog?category=${cat.name}`"
          class="cat-card"
          :style="{ '--accent': cat.color }"
        >
          <div class="cat-icon">{{ cat.icon }}</div>
          <div class="cat-info">
            <h2 class="cat-name">{{ cat.name }}</h2>
            <p class="cat-desc">{{ cat.description }}</p>
            <span class="cat-count">{{ getCategoryCount(cat.name) }} article{{ getCategoryCount(cat.name) !== 1 ? 's' : '' }}</span>
          </div>
          <span class="cat-arrow">→</span>
        </router-link>
      </div>

      <section class="all-tags-section">
        <h2>All Tags</h2>
        <TagCloud :tags="allTags" />
      </section>

      <Newsletter />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TagCloud from '../components/TagCloud.vue'
import Newsletter from '../components/Newsletter.vue'
import { posts, getAllTags } from '../data/posts'
import { categories } from '../data/categories'

const allTags = computed(() => getAllTags())

function getCategoryCount(name) {
  return posts.filter(p => p.category === name).length
}
</script>

<style scoped>
.categories-page {
  padding-top: 6rem;
  padding-bottom: 3rem;
}

.page-header {
  margin-bottom: 2.5rem;
}

.page-header h1 {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.page-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.categories-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.cat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
  border-left: 4px solid var(--accent);
}

.cat-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
  border-left-color: var(--accent);
}

.cat-icon {
  font-size: 2rem;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: var(--radius);
}

.cat-info {
  flex: 1;
}

.cat-name {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.cat-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 0.375rem;
}

.cat-count {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--coral-500);
}

.cat-arrow {
  font-size: 1.25rem;
  color: var(--text-muted);
  transition: transform 0.2s;
}

.cat-card:hover .cat-arrow {
  transform: translateX(4px);
  color: var(--coral-500);
}

.all-tags-section {
  margin-bottom: 3rem;
}

.all-tags-section h2 {
  font-size: 1.375rem;
  margin-bottom: 1rem;
}
</style>
