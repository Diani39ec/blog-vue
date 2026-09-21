<template>
  <div class="search-bar">
    <div class="search-input-wrap">
      <span class="search-icon">⌕</span>
      <input
        type="text"
        :value="modelValue"
        @input="handleInput"
        placeholder="Search posts..."
        class="search-input"
        aria-label="Search posts"
      />
      <button
        v-if="modelValue"
        class="search-clear"
        @click="$emit('update:modelValue', '')"
        aria-label="Clear search"
      >×</button>
    </div>
    <Transition name="dropdown">
      <div v-if="showResults && modelValue && results.length > 0" class="search-results">
        <router-link
          v-for="result in results.slice(0, 5)"
          :key="result.slug"
          :to="`/blog/${result.slug}`"
          class="search-result"
          @click="$emit('update:modelValue', '')"
        >
          <span class="result-title">{{ result.title }}</span>
          <span class="result-meta">{{ result.category }} · {{ result.readTime }} min read</span>
        </router-link>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: { type: String, default: '' },
  results: { type: Array, default: () => [] },
  showResults: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

let timer = null

function handleInput(e) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    emit('update:modelValue', e.target.value)
  }, 250)
}
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: var(--text-muted);
  font-size: 1.1rem;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.75rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.9rem;
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}

.search-input:focus {
  border-color: var(--blue-500);
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

.search-clear {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.search-clear:hover {
  color: var(--coral-500);
}

.search-results {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  z-index: 50;
}

.search-result {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
}

.search-result:last-child {
  border-bottom: none;
}

.search-result:hover {
  background: var(--bg-secondary);
}

.result-title {
  font-weight: 600;
  font-size: 0.9rem;
}

.result-meta {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.125rem;
}

.dropdown-enter-active { transition: all 0.2s ease; }
.dropdown-leave-active { transition: all 0.15s ease; }
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
