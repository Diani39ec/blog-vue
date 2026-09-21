<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner container">
      <router-link to="/" class="logo">
        <span class="logo-icon">◆</span>
        <span class="logo-text">TechBlog<span class="logo-accent">.</span></span>
      </router-link>

      <div class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="closeMenu">Inicio</router-link>
        <router-link to="/blog" @click="closeMenu">Blog</router-link>
        <router-link to="/categories" @click="closeMenu">Categorias</router-link>
        <router-link to="/about" @click="closeMenu">Acerca de</router-link>
      </div>

      <div class="nav-actions">
        <button class="dark-toggle" @click="$emit('toggleDark')" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <span v-if="isDark">☀</span>
          <span v-else>☾</span>
        </button>
        <button class="menu-toggle" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  isDark: Boolean
})

defineEmits(['toggleDark'])

const menuOpen = ref(false)
const isScrolled = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: var(--bg);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,0.9);
}

.dark-mode .navbar.scrolled {
  background: rgba(15,23,42,0.9);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
}

.logo-icon {
  color: var(--coral-500);
  font-size: 1.25rem;
}

.logo-accent {
  color: var(--coral-500);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--coral-500);
}

.nav-links a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--coral-500);
  border-radius: 1px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dark-toggle {
  width: 40px;
  height: 40px;
  border: none;
  background: var(--bg-secondary);
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: var(--text-primary);
}

.dark-toggle:hover {
  background: var(--coral-100);
  transform: scale(1.05);
}

.dark-mode .dark-toggle:hover {
  background: rgba(249,115,22,0.15);
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s;
  position: absolute;
  left: 10px;
}

.menu-toggle span { top: 19px; }
.menu-toggle span::before { content: ''; top: -6px; }
.menu-toggle span::after { content: ''; top: 6px; }

.menu-toggle span.open { background: transparent; }
.menu-toggle span.open::before { top: 0; transform: rotate(45deg); }
.menu-toggle span.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 768px) {
  .menu-toggle { display: block; }

  .nav-links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .nav-links a {
    font-size: 1.1rem;
    padding: 0.5rem 0;
  }
}
</style>
