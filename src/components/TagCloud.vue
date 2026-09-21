<template>
  <div class="tag-cloud">
    <h3 v-if="title" class="tag-cloud-title">{{ title }}</h3>
    <div class="tags">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="`/blog?tag=${encodeURIComponent(tag)}`"
        class="tag-item"
        :class="{ active: activeTag === tag }"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tags: { type: Array, required: true },
  activeTag: { type: String, default: '' },
  title: { type: String, default: '' }
})
</script>

<style scoped>
.tag-cloud-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-item {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  text-decoration: none;
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.tag-item:hover,
.tag-item.active {
  background: var(--coral-500);
  color: var(--white);
  border-color: var(--coral-500);
}
</style>
