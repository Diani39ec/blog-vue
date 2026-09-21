import { ref, computed } from 'vue'

export function usePagination(items, perPage = 6) {
  const currentPage = ref(1)

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / perPage)
  })

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return items.value.slice(start, start + perPage)
  })

  const hasPrev = computed(() => currentPage.value > 1)
  const hasNext = computed(() => currentPage.value < totalPages.value)

  function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  function nextPage() {
    if (hasNext.value) currentPage.value++
  }

  function prevPage() {
    if (hasPrev.value) currentPage.value--
  }

  function reset() {
    currentPage.value = 1
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    hasPrev,
    hasNext,
    goToPage,
    nextPage,
    prevPage,
    reset
  }
}
