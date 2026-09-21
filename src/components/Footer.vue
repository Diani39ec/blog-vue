<template>
  <footer class="footer">
    <div class="footer-inner container">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <span class="logo-icon">◆</span> TechBlog<span class="logo-accent">.</span>
          </router-link>
          <p class="footer-tagline">Articulos sobre desarrollo web, diseno y construccion para la web moderna en Ecuador.</p>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Navegacion</h4>
          <router-link to="/">Inicio</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/categories">Categorias</router-link>
          <router-link to="/about">Acerca de</router-link>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Categorias</h4>
          <router-link to="/blog?category=Desarrollo Web">Desarrollo Web</router-link>
          <router-link to="/blog?category=Proyectos">Proyectos</router-link>
          <router-link to="/blog?category=Tutoriales">Tutoriales</router-link>
          <router-link to="/blog?category=Marketing Digital">Marketing Digital</router-link>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Conectar</h4>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:diana@techblog.dev">Email</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">&copy; 2026 Diana Trujillo Desarrolladora de Software. Todos los derechos reservados.</p>
        <div class="footer-legal">
          <a href="#">Politica de Privacidad</a>
          <a href="#">Terminos de Servicio</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--dark-800);
  color: #CBD5E1;
  margin-top: 5rem;
}

.footer-inner {
  padding: 3.5rem 1.5rem 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.footer-logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.logo-icon { color: var(--coral-500); }
.logo-accent { color: var(--coral-500); }

.footer-tagline {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #94A3B8;
  max-width: 280px;
}

.footer-heading {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: white;
  margin-bottom: 1rem;
}

.footer-links-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links-group a {
  color: #94A3B8;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links-group a:hover {
  color: var(--coral-400);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid #334155;
}

.footer-copy {
  font-size: 0.8rem;
  color: #64748B;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  font-size: 0.8rem;
  color: #64748B;
  text-decoration: none;
}

.footer-legal a:hover {
  color: #94A3B8;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
