import { ref, computed } from 'vue'
import { posts } from '../data/posts'

export function useSearch() {
  const query = ref('')
  const debounceTimer = ref(null)

  const results = computed(() => {
    const q = query.value.toLowerCase().trim()
    if (!q) return []

    return posts.filter(post => {
      const searchable = [
        post.title,
        post.excerpt,
        post.category,
        ...post.tags,
        post.author
      ].join(' ').toLowerCase()

      return searchable.includes(q)
    })
  })

  function setQuery(value) {
    if (debounceTimer.value) clearTimeout(debounceTimer.value)
    debounceTimer.value = setTimeout(() => {
      query.value = value
    }, 200)
  }

  function clearSearch() {
    query.value = ''
  }

  return {
    query,
    results,
    setQuery,
    clearSearch
  }
}
