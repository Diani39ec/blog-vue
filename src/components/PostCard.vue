<template>
  <article class="post-card" :class="{ featured }">
    <router-link :to="`/blog/${post.slug}`" class="card-image">
      <img :src="post.coverImage" :alt="sanitizeAlt(post.title)" loading="lazy" />
      <span class="card-category badge badge-coral">{{ post.category }}</span>
    </router-link>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-date">{{ formatDate(post.date) }}</span>
        <span class="card-sep">·</span>
        <span class="card-read">{{ post.readTime }} min read</span>
      </div>
      <router-link :to="`/blog/${post.slug}`" class="card-title-link">
        <h3 class="card-title">{{ post.title }}</h3>
      </router-link>
      <p class="card-excerpt">{{ post.excerpt }}</p>
      <div class="card-tags">
        <span v-for="tag in post.tags.slice(0, 3)" :key="tag" class="badge">{{ tag }}</span>
      </div>
      <div class="card-author">
        <div class="author-avatar">{{ post.author.charAt(0) }}</div>
        <span class="author-name">{{ post.author }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { formatDate } from '../utils/date'

defineProps({
  post: { type: Object, required: true },
  featured: { type: Boolean, default: false }
})

function sanitizeAlt(text) {
  return text ? text.replace(/[<>]/g, '') : ''
}
</script>

<style scoped>
.post-card {
  background: var(--bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  display: block;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.post-card:hover .card-image img {
  transform: scale(1.05);
}

.card-category {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.card-title-link {
  text-decoration: none;
  color: inherit;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-title-link:hover .card-title {
  color: var(--coral-500);
}

.card-excerpt {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
}

.card-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-500), var(--coral-500));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
}

.author-name {
  font-weight: 500;
}
</style>
