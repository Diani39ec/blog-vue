<template>
  <div class="markdown-body" v-html="renderedContent"></div>
</template>

<script setup>
import { computed } from 'vue'
import { renderMarkdown } from '../utils/security'

const props = defineProps({
  content: { type: String, required: true }
})

const renderedContent = computed(() => renderMarkdown(props.content))
</script>

<style>
.markdown-body {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-primary);
}

.markdown-body h1 { margin-top: 2rem; margin-bottom: 1rem; }
.markdown-body h2 {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.markdown-body h3 { margin-top: 2rem; margin-bottom: 0.75rem; }

.markdown-body p {
  margin-bottom: 1.25rem;
}

.markdown-body ul,
.markdown-body ol {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.markdown-body li {
  margin-bottom: 0.375rem;
}

.markdown-body a {
  color: var(--blue-500);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.markdown-body a:hover {
  color: var(--coral-500);
}

.markdown-body pre {
  background: var(--dark-800);
  color: #E2E8F0;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 1.5rem 0;
}

.markdown-body code {
  font-family: var(--font-mono);
  background: var(--bg-secondary);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.875em;
}

.markdown-body pre code {
  background: none;
  padding: 0;
  border-radius: 0;
}

.markdown-body blockquote {
  border-left: 4px solid var(--coral-500);
  padding: 0.75rem 1.25rem;
  margin: 1.5rem 0;
  background: var(--bg-secondary);
  border-radius: 0 var(--radius) var(--radius) 0;
  color: var(--text-secondary);
}

.markdown-body hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2rem 0;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.markdown-body th,
.markdown-body td {
  padding: 0.625rem 1rem;
  border: 1px solid var(--border);
  text-align: left;
}

.markdown-body th {
  background: var(--bg-secondary);
  font-weight: 600;
}

.markdown-body img {
  border-radius: var(--radius);
  margin: 1.5rem 0;
}

.markdown-body strong {
  font-weight: 600;
}
</style>
