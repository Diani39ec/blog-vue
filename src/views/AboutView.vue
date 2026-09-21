<template>
  <div class="about-page">
    <div class="container">
      <div class="about-grid">
        <div class="about-main">
          <h1 class="about-title">Acerca de Mi</h1>

          <div class="about-intro">
            <div class="about-avatar">
              <span>D</span>
            </div>
            <div>
              <h2>Diana Trujillo</h2>
              <p class="about-role">Desarrolladora de Software Full Stack</p>
            </div>
          </div>

          <div class="about-bio">
            <p>
              Soy una desarrolladora de software full stack con pasion por crear aplicaciones web elegantes, performantes y seguras. Con anos de experiencia, me especializo en React, Vue.js, Python y arquitectura en la nube.
            </p>
            <p>
              Este blog es donde comparto lo que aprendo — tutoriales practicos, analisis profundos de frameworks modernos, y reflexiones sobre como construir software que respete el tiempo y la privacidad de los usuarios.
            </p>
            <p>
              Cuando no estoy programando, me encontraras explorando nuevas tecnologias, contribuyendo a proyectos de codigo abierto, o disfrutando de la gastronomia ecuatoriana. Creo en construir una web accesible, rapida y disfrutable para todos.
            </p>
          </div>

          <section class="about-section">
            <h2>Habilidades y Experiencia</h2>
            <div class="skills-grid">
              <div class="skill-group" v-for="group in skillGroups" :key="group.title">
                <h3>{{ group.title }}</h3>
                <div class="skill-tags">
                  <span v-for="skill in group.skills" :key="skill" class="skill-tag">{{ skill }}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="about-section">
            <h2>Sobre Que Escribo</h2>
            <div class="topics-grid">
              <div class="topic-card" v-for="topic in topics" :key="topic.title">
                <span class="topic-icon">{{ topic.icon }}</span>
                <h3>{{ topic.title }}</h3>
                <p>{{ topic.desc }}</p>
              </div>
            </div>
          </section>

          <section class="about-section">
            <h2>Conecta Conmigo</h2>
            <div class="connect-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="connect-card">
                <strong>GitHub</strong>
                <span>Proyectos de codigo abierto</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="connect-card">
                <strong>Twitter</strong>
                <span>Pensamientos y hilos</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="connect-card">
                <strong>LinkedIn</strong>
                <span>Actualizaciones profesionales</span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <Newsletter />
    </div>
  </div>
</template>

<script setup>
import Newsletter from '../components/Newsletter.vue'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Nuxt']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'REST APIs']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'Netlify', 'CI/CD', 'Linux', 'GitHub Actions']
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Terminal', 'Vim']
  }
]

const topics = [
  { icon: '🎨', title: 'Arquitectura Frontend', desc: 'Patrones de componentes, gestion de estado y UIs escalables.' },
  { icon: '🔒', title: 'Seguridad Web', desc: 'Medidas de seguridad practicas que todo desarrollador debe conocer e implementar.' },
  { icon: '⚡', title: 'Rendimiento', desc: 'Tecnicas de optimizacion para experiencias web ultrarapidas.' },
  { icon: '🎯', title: 'Sistemas de Diseno', desc: 'Creando sistemas de diseno consistentes, accesibles y hermosos.' }
]
</script>

<style scoped>
.about-page {
  padding-top: 6rem;
  padding-bottom: 3rem;
}

.about-grid {
  max-width: 760px;
  margin: 0 auto;
}

.about-title {
  font-size: 2.25rem;
  margin-bottom: 2rem;
}

.about-intro {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.about-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue-500), var(--coral-500));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 800;
  flex-shrink: 0;
}

.about-intro h2 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.about-role {
  color: var(--coral-500);
  font-weight: 500;
  font-size: 0.95rem;
}

.about-bio {
  margin-bottom: 3rem;
}

.about-bio p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.about-section {
  margin-bottom: 3rem;
}

.about-section h2 {
  font-size: 1.375rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.skill-group h3 {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.skill-tag {
  padding: 0.3rem 0.7rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.topics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.topic-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
}

.topic-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.topic-card h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.topic-card p {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.connect-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.connect-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}

.connect-card:hover {
  border-color: var(--coral-400);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.connect-card strong {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.connect-card span {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .skills-grid,
  .topics-grid,
  .connect-links {
    grid-template-columns: 1fr;
  }
}
</style>
