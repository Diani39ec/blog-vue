export const categories = [
  {
    name: 'Desarrollo Web',
    description: 'React, Vue.js, y todo lo que corre en el navegador moderno.',
    color: '#3B82F6',
    icon: '🎨'
  },
  {
    name: 'Proyectos',
    description: 'Casos de estudio y proyectos completos de desarrollo de software.',
    color: '#10B981',
    icon: '⚙️'
  },
  {
    name: 'Tutoriales',
    description: 'Guias paso a paso para aprender tecnologias modernas.',
    color: '#8B5CF6',
    icon: '📚'
  },
  {
    name: 'Marketing Digital',
    description: 'Estrategias de marketing online, landing pages y conversiones.',
    color: '#F97316',
    icon: '📈'
  },
  {
    name: 'Herramientas',
    description: 'Aplicaciones de productividad y herramientas para equipos.',
    color: '#14B8A6',
    icon: '🔧'
  },
  {
    name: 'Cultura',
    description: 'Tecnologia aplicada a la cultura y tradiciones ecuatorianas.',
    color: '#EF4444',
    icon: '🇪🇨'
  }
]

export function getCategoryByName(name) {
  return categories.find(c => c.name === name) || null
}

export function getCategoryColor(name) {
  const cat = getCategoryByName(name)
  return cat ? cat.color : '#6B7280'
}
