<template>
  <div class="post-page" v-if="post">
    <div class="reading-progress" :style="{ width: readingProgress + '%' }"></div>

    <header class="post-header">
      <div class="container-narrow">
        <router-link to="/blog" class="back-link">← Back to Blog</router-link>
        <span class="post-category badge badge-coral">{{ post.category }}</span>
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-excerpt">{{ post.excerpt }}</p>

        <div class="post-meta">
          <div class="author-info">
            <div class="author-avatar">{{ post.author.charAt(0) }}</div>
            <div>
              <span class="author-name">{{ post.author }}</span>
              <span class="meta-detail">{{ formatDate(post.date) }} · {{ post.readTime }} min read</span>
            </div>
          </div>
        </div>

        <div class="post-tags">
          <router-link
            v-for="tag in post.tags"
            :key="tag"
            :to="`/blog?tag=${encodeURIComponent(tag)}`"
            class="badge"
          >{{ tag }}</router-link>
        </div>
      </div>
    </header>

    <div class="post-cover" v-if="post.coverImage">
      <img :src="post.coverImage" :alt="post.title" />
    </div>

    <div class="post-layout container">
      <aside class="post-sidebar">
        <TableOfContents />
      </aside>

      <article class="post-content">
        <MarkdownRenderer :content="post.content" />

        <div class="share-section">
          <h4>Share this post</h4>
          <div class="share-buttons">
            <a :href="twitterUrl" target="_blank" rel="noopener noreferrer" class="share-btn twitter">Twitter</a>
            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="share-btn linkedin">LinkedIn</a>
            <button class="share-btn copy" @click="copyLink">Copy Link</button>
          </div>
        </div>
      </article>
    </div>

    <section class="related-posts container" v-if="related.length > 0">
      <h2>Related Posts</h2>
      <PostList :posts="related" />
    </section>

    <section class="container">
      <Newsletter />
    </section>
  </div>

  <div v-else class="not-found container">
    <h1>Post not found</h1>
    <p>The post you're looking for doesn't exist.</p>
    <router-link to="/blog" class="btn btn-primary">Back to Blog</router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'
import TableOfContents from '../components/TableOfContents.vue'
import PostList from '../components/PostList.vue'
import Newsletter from '../components/Newsletter.vue'
import { getPostBySlug, getRelatedPosts } from '../data/posts'
import { formatDate } from '../utils/date'
import { sanitizeUrl } from '../utils/security'

const route = useRoute()
const readingProgress = ref(0)
const copied = ref(false)

const post = computed(() => getPostBySlug(route.params.slug))
const related = computed(() => post.value ? getRelatedPosts(route.params.slug) : [])

const postUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return sanitizeUrl(window.location.href)
  }
  return ''
})

const twitterUrl = computed(() =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.value?.title || '')}&url=${encodeURIComponent(postUrl.value)}`
)

const linkedinUrl = computed(() =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl.value)}`
)

function updateProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
}

function copyLink() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(postUrl.value)
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  }
}

onMounted(() => window.addEventListener('scroll', updateProgress, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', updateProgress))
</script>

<style scoped>
.post-page {
  padding-top: 5rem;
}

.container-narrow {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  text-decoration: none;
}

.back-link:hover {
  color: var(--coral-500);
}

.post-category {
  margin-bottom: 1rem;
}

.post-title {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.post-excerpt {
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.post-meta {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-500), var(--coral-500));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.author-name {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
}

.meta-detail {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 2rem;
}

.post-tags .badge {
  text-decoration: none;
}

.post-cover {
  max-width: 960px;
  margin: 0 auto 2.5rem;
  padding: 0 1.5rem;
}

.post-cover img {
  width: 100%;
  border-radius: var(--radius-lg);
  aspect-ratio: 16/7;
  object-fit: cover;
}

.post-layout {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 3rem;
  max-width: 960px;
}

.post-sidebar {
  display: block;
}

.share-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.share-section h4 {
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.share-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.share-btn {
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  transition: all 0.2s;
}

.share-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.share-btn.twitter { border-color: #1DA1F2; color: #1DA1F2; }
.share-btn.linkedin { border-color: #0A66C2; color: #0A66C2; }

.related-posts {
  margin-top: 4rem;
}

.related-posts h2 {
  margin-bottom: 1.5rem;
}

.not-found {
  padding-top: 8rem;
  text-align: center;
}

.not-found h1 { margin-bottom: 0.75rem; }
.not-found p { color: var(--text-secondary); margin-bottom: 1.5rem; }

@media (max-width: 900px) {
  .post-layout {
    grid-template-columns: 1fr;
  }

  .post-sidebar {
    display: none;
  }

  .post-title {
    font-size: 1.875rem;
  }
}
</style>
