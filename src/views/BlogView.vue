<template>
  <div class="blog-page">
    <div class="container">
      <header class="blog-header">
        <h1 class="page-title">Blog</h1>
        <p class="page-desc">Explore articles on web development, design, and technology.</p>
      </header>

      <div class="blog-toolbar">
        <SearchBar
          v-model="searchQuery"
          :results="searchResults"
          :show-results="showSearchResults"
        />

        <div class="filter-section">
          <div class="category-filters">
            <button
              class="filter-btn"
              :class="{ active: !activeCategory }"
              @click="setCategory('')"
            >All</button>
            <button
              v-for="cat in categories"
              :key="cat.name"
              class="filter-btn"
              :class="{ active: activeCategory === cat.name }"
              @click="setCategory(cat.name)"
            >{{ cat.name }}</button>
          </div>
        </div>
      </div>

      <TagCloud
        :tags="allTags"
        :active-tag="activeTag"
        title="Popular Tags"
        class="blog-tags"
      />

      <div class="results-info" v-if="searchQuery || activeCategory || activeTag">
        <span>
          {{ filteredPosts.length }} post{{ filteredPosts.length !== 1 ? 's' : '' }} found
        </span>
        <button class="clear-filters" @click="clearFilters">Clear filters</button>
      </div>

      <PostList :posts="paginatedItems" />

      <div v-if="totalPages > 1" class="pagination">
        <button
          class="page-btn"
          :disabled="!hasPrev"
          @click="prevPage"
        >← Previous</button>

        <div class="page-numbers">
          <button
            v-for="page in totalPages"
            :key="page"
            class="page-num"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >{{ page }}</button>
        </div>

        <button
          class="page-btn"
          :disabled="!hasNext"
          @click="nextPage"
        >Next →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import { posts, getAllTags } from '../data/posts'
import { categories } from '../data/categories'
import { useSearch } from '../composables/useSearch'
import { usePagination } from '../composables/usePagination'

const route = useRoute()
const searchQuery = ref('')
const activeCategory = ref('')
const activeTag = ref('')
const showSearchResults = ref(false)

const { query, results: searchResults, setQuery: setSearchQuery } = useSearch()

const allTags = computed(() => getAllTags())

const filteredPosts = computed(() => {
  let list = [...posts]

  if (activeCategory.value) {
    list = list.filter(p => p.category === activeCategory.value)
  }

  if (activeTag.value) {
    list = list.filter(p => p.tags.includes(activeTag.value))
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(p => {
      const text = [p.title, p.excerpt, p.category, ...p.tags, p.author].join(' ').toLowerCase()
      return text.includes(q)
    })
  }

  return list
})

const {
  currentPage, totalPages, paginatedItems,
  hasPrev, hasNext, goToPage, nextPage, prevPage, reset
} = usePagination(filteredPosts)

function setCategory(cat) {
  activeCategory.value = cat
  activeTag.value = ''
  reset()
}

function clearFilters() {
  searchQuery.value = ''
  activeCategory.value = ''
  activeTag.value = ''
  reset()
}

watch(searchQuery, (val) => {
  showSearchResults.value = val.length > 0
  reset()
})

watch([activeCategory, activeTag], () => {
  reset()
})

onMounted(() => {
  if (route.query.category) {
    activeCategory.value = route.query.category
  }
  if (route.query.tag) {
    activeTag.value = route.query.tag
  }
})
</script>

<style scoped>
.blog-page {
  padding-top: 6rem;
  padding-bottom: 3rem;
}

.blog-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.25rem;
  margin-bottom: 0.5rem;
}

.page-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.blog-toolbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.filter-section {
  overflow-x: auto;
}

.category-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.4rem 1rem;
  border: 1px solid var(--border);
  border-radius: 9999px;
  background: var(--bg);
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--font-sans);
  white-space: nowrap;
}

.filter-btn:hover {
  border-color: var(--blue-500);
  color: var(--blue-500);
}

.filter-btn.active {
  background: var(--coral-500);
  color: white;
  border-color: var(--coral-500);
}

.blog-tags {
  margin-bottom: 1.5rem;
}

.results-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.clear-filters {
  background: none;
  border: none;
  color: var(--coral-500);
  font-size: 0.8rem;
  cursor: pointer;
  font-family: var(--font-sans);
}

.clear-filters:hover {
  text-decoration: underline;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text-primary);
  font-size: 0.85rem;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all 0.2s;
}

.page-btn:hover:not(:disabled) {
  border-color: var(--blue-500);
  color: var(--blue-500);
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 0.25rem;
}

.page-num {
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text-primary);
  font-size: 0.85rem;
  cursor: pointer;
  font-family: var(--font-sans);
  transition: all 0.2s;
}

.page-num:hover {
  border-color: var(--blue-500);
}

.page-num.active {
  background: var(--blue-500);
  color: white;
  border-color: var(--blue-500);
}
</style>
