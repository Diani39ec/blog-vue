<template>
  <nav v-if="headings.length > 0" class="toc" aria-label="Table of contents">
    <h4 class="toc-title">On this page</h4>
    <ul class="toc-list">
      <li
        v-for="heading in headings"
        :key="heading.id"
        :class="['toc-item', `toc-level-${heading.level}`]"
      >
        <a
          :href="`#${heading.id}`"
          class="toc-link"
          :class="{ active: activeId === heading.id }"
          @click.prevent="scrollTo(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  contentSelector: { type: String, default: '.markdown-body' }
})

const headings = ref([])
const activeId = ref('')

function extractHeadings() {
  setTimeout(() => {
    const container = document.querySelector(props.contentSelector)
    if (!container) return
    const elements = container.querySelectorAll('h1, h2, h3')
    headings.value = Array.from(elements).map((el, i) => {
      const id = el.id || `heading-${i}`
      el.id = id
      return {
        id,
        text: el.textContent,
        level: parseInt(el.tagName.charAt(1))
      }
    })
  }, 100)
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function handleScroll() {
  const items = headings.value.map(h => ({
    id: h.id,
    top: document.getElementById(h.id)?.getBoundingClientRect().top || 0
  }))
  const current = items.find(item => item.top > 80)
  activeId.value = current ? current.id : (items[items.length - 1]?.id || '')
}

onMounted(() => {
  extractHeadings()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.toc {
  position: sticky;
  top: 100px;
  padding: 1rem 0;
}

.toc-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: 0.125rem;
}

.toc-level-2 { padding-left: 0; }
.toc-level-3 { padding-left: 1rem; }

.toc-link {
  display: block;
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: all 0.2s;
  line-height: 1.4;
}

.toc-link:hover {
  color: var(--text-primary);
}

.toc-link.active {
  color: var(--coral-500);
  border-left-color: var(--coral-500);
  font-weight: 500;
}
</style>
