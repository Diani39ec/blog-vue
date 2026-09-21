<template>
  <div class="app-wrapper" :class="{ 'dark-mode': isDark }">
    <NavBar :is-dark="isDark" @toggle-dark="toggleDark" />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/Footer.vue'

const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', JSON.stringify(isDark.value))
}

onMounted(() => {
  const stored = localStorage.getItem('darkMode')
  if (stored !== null) {
    isDark.value = JSON.parse(stored)
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
})
</script>
