<template>
  <div class="post-list">
    <TransitionGroup name="list" tag="div" class="posts-grid">
      <PostCard
        v-for="post in posts"
        :key="post.slug"
        :post="post"
        :featured="post.featured"
      />
    </TransitionGroup>
    <div v-if="posts.length === 0" class="empty-state">
      <p>No posts found.</p>
    </div>
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue'

defineProps({
  posts: { type: Array, required: true }
})
</script>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.list-move {
  transition: transform 0.4s ease;
}

.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: var(--text-muted);
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
