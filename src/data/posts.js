export const posts = [
  {
    slug: 'mi-portafolio-profesional-tecnologias-y-diseno',
    title: 'Mi Portafolio Profesional: Tecnologias y Diseno',
    excerpt: 'Como construi mi portafolio personal con React y Vite, integrando seguridad, diseno responsivo y una experiencia de usuario moderna.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-07-25',
    category: 'Desarrollo Web',
    tags: ['React', 'Portafolio', 'Diseno Web'],
    featured: true,
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop',
    content: `
## Por que crear un portafolio profesional

En el competitivo mercado laboral de Ecuador y Latinoamerica, tener un portafolio profesional es indispensable para cualquier desarrollador de software. No solo demuestra tus habilidades tecnicas, sino que tambien comunica tu capacidad de diseno, atencion al detalle y enfoque hacia la experiencia del usuario. En este articulo comparto como construi mi portafolio utilizando tecnologias modernas y las mejores practicas de seguridad.

## Stack Tecnologico

Para el desarrollo de mi portafolio elegi **React** junto con **Vite** como herramienta de construccion. Esta combinacion ofrece un tiempo de desarrollo increiblemente rapido gracias al Hot Module Replacement (HMR) de Vite, y la amplia ecosistema de React permite crear interfaces de usuario dinamicas y reactivas.

Las principales tecnologias que utilizo son:

- **React 18** para la construccion de componentes reutilizables
- **Vite** como bundler moderno con soporte nativo para ESM
- **CSS Modules** para estilos encapsulados por componente
- **React Router** para la navegacion del lado del cliente

\`\`\`javascript
// Ejemplo de estructura de componentes del portafolio
import { useState, useEffect } from 'react'

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Ver menos' : 'Ver mas'}
      </button>
    </div>
  )
}
\`\`\`

## Caracteristicas de Seguridad

La seguridad es una prioridad en todos mis proyectos. En el portafolio implemente las siguientes medidas:

- **Content Security Policy (CSP)** para prevenir ataques XSS
- **Headers de seguridad** como X-Content-Type-Options y X-Frame-Options
- **Sanitizacion de entradas** para cualquier formulario de contacto
- **Rate limiting** para proteger contra abuso de formularios

## Diseno Responsivo y Accesibilidad

El diseno del portafolio sigue un enfoque mobile-first, garantizando una experiencia optima en cualquier dispositivo. Utilice CSS Grid y Flexbox para crear layouts flexibles, y me asegure de cumplir con los estandares de accesibilidad WCAG 2.1, incluyendo contraste de colores adecuado, etiquetas ARIA y navegacion por teclado.

## Personalizacion para Cualquier Negocio

Este portafolio puede ser facilmente adaptado para cualquier empresa o profesional que desee mostrar sus servicios y proyectos. La arquitectura modular permite agregar nuevas secciones, cambiar colores y contenido sin modificar la estructura base. Si necesitas un portafolio personalizado para tu negocio en Ecuador, este proyecto es un excelente punto de partida.

## Conclusion

Construir un portafolio profesional es una inversion en tu carrera. Utilizar tecnologias modernas como React y Vite garantiza que tu sitio sea rapido, mantenible y escalable. La seguridad y la accesibilidad no deben ser adicionales, sino parte fundamental del desarrollo desde el primer dia.
`
  },
  {
    slug: 'greenmart-ecuador-creando-tienda-online-segura',
    title: 'GreenMart Ecuador: Creando una Tienda Online Segura',
    excerpt: 'Como desarrrolle una plataforma de e-commerce para el mercado ecuatoriano con autenticacion segura, pasarela de pagos y gestion de inventario.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-07-20',
    category: 'Proyectos',
    tags: ['E-commerce', 'Seguridad', 'React'],
    featured: true,
    readTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    content: `
## El desafio del e-commerce en Ecuador

El comercio electronico en Ecuador ha crecido exponencialmente en los ultimos anos. Sin embargo, muchas PyMEs carecen de plataformas seguras y funcionales para vender sus productos en linea. **GreenMart Ecuador** nacio como una solucion a esta problematica: una tienda online completa, segura y adaptada al mercado ecuatoriano.

## Arquitectura del Proyecto

GreenMart esta construido con **React** en el frontend y utiliza un backend robusto con **Python** y **FastAPI**. La base de datos esta en **PostgreSQL**, lo que garantiza integridad de datos y rendimiento en consultas complejas.

Las funcionalidades principales incluyen:

- **Catalogo de productos** con busqueda y filtros avanzados
- **Carrito de compras** persistente con sincronizacion en tiempo real
- **Pasarela de pagos** integrada con plataformas ecuatorianas
- **Panel de administracion** para gestion de inventario, pedidos y clientes
- **Sistema de notificaciones** por email y SMS para actualizaciones de pedidos

## Medidas de Seguridad Implementadas

La seguridad en una tienda online es critica. Implemente multiples capas de proteccion:

\`\`\`javascript
// Autenticacion con JWT y refresh tokens
async function authenticateUser(credentials) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  if (response.ok) {
    const { accessToken, refreshToken } = await response.json()
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    return true
  }
  return false
}
\`\`\`

- **Autenticacion JWT** con refresh tokens para sesiones seguras
- **Encriptacion AES-256** para datos sensibles de clientes
- **Validacion de entradas** en todos los endpoints de la API
- **Proteccion CSRF** en formularios de pago
- **HTTPS obligatorio** con certificados SSL/TLS actualizados

## Experiencia de Usuario

El diseno de GreenMart prioriza la conversion y la facilidad de uso. El proceso de checkout fue optimizado para completarse en menos de 3 pasos, reduciendo la tasa de abandono del carrito. El diseno responsivo garantiza que los clientes puedan comprar desde cualquier dispositivo.

## Adaptacion al Mercado Ecuatoriano

GreenMart incluye funcionalidades especificas para Ecuador:

- Soporte para **dolares estadounidenses** como moneda oficial
- Integracion con **bancos locales** para pagos en linea
- Calculo automatico de **IVA del 15%** segun la normativa ecuatoriana
- Direcciones de envio con **provincias y cantones** del Ecuador

## Escalabilidad y Personalizacion

Esta plataforma esta disenada para crecer con tu negocio. Puede ser personalizada para cualquier tipo de producto o industria, desde tiendas de ropa hasta restaurantes que ofrecen delivery. El codigo esta documentado y modularizado para facilitar futuras extensiones.

## Conclusion

GreenMart demuestra que es posible crear soluciones de e-commerce seguras, modernas y accesibles para el mercado ecuatoriano. La combinacion de React, Python y PostgreSQL proporciona una base solida para escalar a miles de productos y usuarios simultaneos.
`
  },
  {
    slug: 'blog-corporativo-vuejs-3-guia-completa',
    title: 'Blog Corporativo con Vue.js 3: Guia Completa',
    excerpt: 'Tutorial paso a paso para construir un blog corporativo moderno con Vue.js 3, Composition API, sistema de seguridad y diseno responsivo.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-07-15',
    category: 'Tutoriales',
    tags: ['Vue.js', 'Blog', 'Tutorial'],
    featured: true,
    readTime: 12,
    coverImage: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=400&fit=crop',
    content: `
## Por que Vue.js 3 para un blog corporativo?

Vue.js 3 se ha consolidado como uno de los frameworks frontend mas populares y versatiles del ecosistema JavaScript. Su Composition API, mejor rendimiento y excelente documentacion lo convierten en la opcion ideal para construir blogs corporativos modernos. En este tutorial te muestro como construir este mismo blog desde cero.

## Configuracion del Proyecto

Comenzamos creando el proyecto con Vite, que es la herramienta de construccion recomendada para Vue.js:

\`\`\`bash
npm create vite@latest tech-blog -- --template vue
cd tech-blog
npm install vue-router@4
npm install
\`\`\`

## Estructura del Proyecto

La arquitectura del blog sigue un patron de carpetas limpio y organizado:

\`\`\`
src/
  components/    # Componentes reutilizables (NavBar, Footer, Newsletter)
  views/         # Paginas principales (Home, Blog, About, Categories)
  data/          # Datos de posts y categorias
  composables/   # Logica reutilizable (useTheme, useSearch)
  utils/         # Utilidades de seguridad y helpers
  router/        # Configuracion de rutas con Vue Router
\`\`\`

## Composition API en Accion

La Composition API de Vue.js 3 permite organizar la logica de los componentes de forma mas clara:

\`\`\`javascript
import { ref, computed, onMounted } from 'vue'
import { posts, getFeaturedPosts } from '../data/posts'

export function useBlog() {
  const searchQuery = ref('')
  const selectedCategory = ref('')

  const filteredPosts = computed(() => {
    return posts.filter(post => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
      const matchesCategory = !selectedCategory.value ||
        post.category === selectedCategory.value
      return matchesSearch && matchesCategory
    })
  })

  return { searchQuery, selectedCategory, filteredPosts }
}
\`\`\`

## Seguridad en el Blog

Un blog corporativo no es inmune a amenazas de seguridad. Implemente las siguientes protecciones:

- **Content Security Policy** para prevenir inyeccion de scripts maliciosos
- **Sanitizacion de HTML** en el contenido de los posts para evitar XSS
- **Headers de seguridad** configurados en el servidor
- **Proteccion contra scraping** con rate limiting en la API

## Sistema de Newsletter Seguro

El componente de newsletter incluye proteccion contra bots con honeypot fields, tokens CSRF y validacion de correo electronico del lado del cliente y del servidor.

## Despliegue

El blog esta optimizado para desplegarse en **Netlify** o **Vercel** con configuracion minima. Tambien se puede hostear en cualquier servidor estatico con soporte para HTML, CSS y JavaScript.

## Personalizacion Empresarial

Este blog puede ser adaptado para cualquier empresa o corporacion. Los datos de posts y categorias estan centralizados en archivos JavaScript, lo que facilita la actualizacion de contenido sin conocimientos tecnicos avanzados. Cambia los colores, logos y contenido para reflejar la identidad de tu marca.

## Conclusion

Vue.js 3 y Vite proporcionan todas las herramientas necesarias para construir un blog corporativo profesional, seguro y escalable. La Composition API hace que el codigo sea mantenible y la arquitectura modular permite crecer sin problemas.
`
  },
  {
    slug: 'dashboard-administrativo-panel-control-empresas',
    title: 'Dashboard Administrativo: Panel de Control para Empresas',
    excerpt: 'Como disene y desarrolle un dashboard administrativo completo con React, graficos interactivos y control de acceso basado en roles.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-07-10',
    category: 'Proyectos',
    tags: ['Dashboard', 'React', 'Administracion'],
    featured: true,
    readTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    content: `
## La necesidad de dashboards en empresas ecuatorianas

Las empresas ecuatorianas, desde pequenas PyMEs hasta corporaciones, necesitan herramientas de visualizacion de datos para tomar decisiones informadas. Un dashboard administrativo bien disenado transforma datos crudos en informacion accionable. Este proyecto fue desarrollado para resolver esa necesidad especifica del mercado latinoamericano.

## Tecnologias Utilizadas

El dashboard esta construido con las siguientes tecnologias:

- **React 18** como base del frontend
- **Recharts** para la visualizacion de datos con graficos interactivos
- **React Router** para la navegacion entre secciones
- **Context API** para el manejo global del estado de autenticacion
- **CSS Modules** para estilos modulares

## Panel de Control Completo

El dashboard incluye multiples secciones disenadas para diferentes roles de usuario:

\`\`\`javascript
// Configuracion de rutas con control de acceso
const protectedRoutes = [
  {
    path: '/dashboard',
    element: <ProtectedRoute requiredRole="admin" />,
    children: [
      { path: 'analytics', element: <AnalyticsPanel /> },
      { path: 'users', element: <UserManagement /> },
      { path: 'settings', element: <SystemSettings /> }
    ]
  }
]
\`\`\`

Las secciones principales incluyen:

- **Panel de Analiticas**: Graficos de ventas, trafico web, usuarios activos y metricas de negocio en tiempo real
- **Gestion de Usuarios**: CRUD completo de usuarios con asignacion de roles y permisos
- **Gestion de Inventario**: Control de stock, alertas de reposicion y reportes de productos
- **Reportes Financieros**: Resumenes de ingresos, gastos y proyecciones

## Control de Acceso Basado en Roles

La seguridad del dashboard se basa en un sistema de roles jerarquicos:

- **Administrador**: Acceso total a todas las funcionalidades
- **Gerente**: Acceso a reportes y gestion de usuarios
- **Empleado**: Acceso limitado a operaciones diarias

Cada ruta esta protegida y verifica el rol del usuario antes de renderizar el componente correspondiente. Si un usuario intenta acceder a una seccion no autorizada, se redirige automaticamente a una pagina de acceso denegado.

## Visualizacion de Datos con Recharts

Los graficos del dashboard estan construidos con Recharts, una libreria de React para graficos declarativos:

\`\`\`javascript
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function SalesChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
\`\`\`

## Seguridad del Dashboard

El dashboard implementa las siguientes medidas de seguridad:

- **Autenticacion JWT** con expiracion de tokens
- **Validacion de permisos** en cada endpoint del backend
- **Encriptacion de datos sensibles** en transito y en reposo
- **Logs de auditoria** para todas las acciones administrativas
- **Rate limiting** para prevenir ataques de fuerza bruta

## Personalizacion para tu Empresa

Este dashboard puede ser personalizado para cualquier tipo de negocio. Los graficos, metricas y secciones se pueden adaptar a las necesidades especificas de tu empresa en Ecuador. La arquitectura modular permite agregar nuevas funcionalidades sin modificar las existentes.

## Conclusion

Un dashboard administrativo bien construido es una herramienta fundamental para la gestion empresarial. Con React y Recharts, es posible crear paneles de control intuitivos, seguros y visualmente atractivos que ayudan a los tomadores de decisiones a tener una vision clara de su negocio.
`
  },
  {
    slug: 'landing-pages-que-convierten-estrategia-y-codigo',
    title: 'Landing Pages que Convierten: Estrategia y Codigo',
    excerpt: 'Como crear landing pages efectivas con HTML, CSS y JavaScript puro, enfocadas en conversion y optimizacion para el mercado ecuatoriano.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-07-05',
    category: 'Marketing Digital',
    tags: ['Landing Page', 'Marketing', 'CSS'],
    featured: false,
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
    content: `
## Por que las landing pages importan?

Una landing page efectiva es la herramienta mas poderosa del marketing digital. Es la primera impresion que tiene un cliente potencial de tu negocio, y en el mercado ecuatoriano, donde el comercio electronico crece rapidamente, tener una landing page que convierta puede marcar la diferencia entre el exito y el fracaso de una campana de marketing.

## Fundamentos de una Landing Page de Alta Conversion

Las landing pages que convierten siguen principios fundamentales:

1. **Propuesta de valor clara**: El visitante debe entender en menos de 5 segundos que ofreces y por que deberia importarle
2. **Diseno visual atractivo**: Uso estrategico de colores, tipografia y espaciado
3. **Prueba social**: Testimonios, logos de clientes y estadisticas de satisfaccion
4. **Call-to-action prominente**: Botones visibles con texto accionable
5. **Optimizacion movil**: Mas del 60% del trafico en Ecuador viene de dispositivos moviles

## Desarrollo con HTML, CSS y JavaScript

Para este proyecto utilice las tecnologias base de la web para garantizar el maximo rendimiento:

\`\`\`html
<section class="hero-landing">
  <div class="container">
    <h1 class="hero-title">
      Transforma tu negocio con
      <span class="highlight">tecnologia inteligente</span>
    </h1>
    <p class="hero-subtitle">
      Soluciones digitales disenadas para empresas ecuatorianas
    </p>
    <a href="#contacto" class="btn btn-primary btn-large">
      Solicita tu Cotizacion Gratis
    </a>
  </div>
</section>
\`\`\`

## Optimizacion de Conversion

Cada elemento de la landing page fue disenado para guiar al visitante hacia la accion deseada:

- **Formulario simplificado**: Solo nombre, email y mensaje. Menos campos = mas conversiones
- **Tiempo de carga optimizado**: Imagenes comprimidas, CSS inline para above-the-fold, lazy loading
- **A/B testing**: Diferentes versiones del headline y CTAs para medir rendimiento
- **Analytics integrado**: Seguimiento de clicks, scrolls y abandono de formulario

## Seguridad en Formularios

Los formularios de contacto son objetivo de bots y spammers. Implemente:

- **Honeypot fields** invisibles para detectar bots
- **Rate limiting** del lado del cliente
- **Validacion HTML5** combinada con validacion JavaScript
- **Sanitizacion de entradas** antes de procesar

## CSS Moderno y Rendimiento

Utilice CSS personalizado sin frameworks pesados para mantener el tamano minimo:

\`\`\`css
.hero-landing {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e40af 100%);
  color: white;
  text-align: center;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
\`\`\`

## Adaptacion al Mercado Ecuatoriano

La landing page fue disenada considerando las particularidades del mercado ecuatoriano: imagenes locales, contenido en espanol, referencias culturales relevantes y CTAs que resonan con los valores y necesidades de los empresarios ecuatorianos.

## Personalizacion para Cualquier Negocio

Este template de landing page puede ser adaptado para cualquier industria: restaurantes, clinicas medicas, tiendas de tecnologia, servicios profesionales. La estructura modular permite cambiar colores, contenido e imagenes sin modificar el codigo base.

## Conclusion

Una landing page efectiva combina diseno, estrategia de marketing y codigo limpio. Invertir en una landing page profesional es una de las mejores inversiones que puede hacer una empresa para captar clientes en el mundo digital.
`
  },
  {
    slug: 'gestor-tareas-kanban-organiza-negocio',
    title: 'Gestor de Tareas con Kanban: Organiza tu Negocio',
    excerpt: 'Como desarrrole una aplicacion de gestion de tareas con tableros Kanban, drag and drop y funcionalidades de productividad para equipos.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-06-28',
    category: 'Herramientas',
    tags: ['Productividad', 'Vue.js', 'Kanban'],
    featured: false,
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    content: `
## La importancia de la productividad empresarial

En el entorno empresarial actual, la organizacion y productividad son factores criticos para el exito. Las metodologias agiles como Kanban han revolucionado la forma en que los equipos gestionan sus proyectos. Este gestor de tareas fue disenado para ayudar a los equipos ecuatorianos a organizar su trabajo de manera visual e intuitiva.

## Que es Kanban?

Kanban es un metodo de gestion visual originado en Toyota que organiza el trabajo en columnas que representan etapas del flujo de trabajo:

- **Por hacer**: Tareas pendientes que esperan ser comenzadas
- **En progreso**: Tareas actualmente en desarrollo
- **En revision**: Tareas esperando retroalimentacion o aprobacion
- **Completado**: Tareas finalizadas

## Stack Tecnologico

Para construir este gestor de tareas elegi:

- **Vue.js 3** con Composition API para la interfaz reactiva
- **HTML5 Drag and Drop API** para mover tarjetas entre columnas
- **localStorage** para persistencia de datos local
- **CSS Grid** para el layout del tablero

## Implementacion del Drag and Drop

El corazon de la aplicacion es el sistema de drag and drop que permite mover tarjetas entre columnas:

\`\`\`javascript
import { ref } from 'vue'

export function useKanban(columns) {
  const draggedTask = ref(null)

  function onDragStart(task, column) {
    draggedTask.value = { task, sourceColumn: column }
  }

  function onDragOver(event) {
    event.preventDefault()
  }

  function onDrop(targetColumn) {
    if (!draggedTask.value) return

    const { task, sourceColumn } = draggedTask.value
    const sourceIndex = sourceColumn.tasks.indexOf(task)

    sourceColumn.tasks.splice(sourceIndex, 1)
    targetColumn.tasks.push(task)
    draggedTask.value = null
  }

  return { draggedTask, onDragStart, onDragOver, onDrop }
}
\`\`\`

## Funcionalidades del Gestor

El gestor incluye las siguientes caracteristicas:

- **Multiples tableros**: Crea tableros separados para diferentes proyectos o equipos
- **Etiquetas de color**: Categoriza tareas por prioridad, tipo o responsable
- **Fechas limite**: Establece deadlines y recibe notificaciones visuales
- **Busqueda y filtrado**: Encuentra tareas rapidamente por texto o etiquetas
- **Vista de estadisticas**: Graficos de productividad y tiempo por columna

## Seguridad de Datos

Aunque es una aplicacion local, la seguridad sigue siendo importante:

- **Validacion de entradas** para prevenir inyeccion de codigo
- **Sanitizacion de contenido** en titulos y descripciones
- **Exportacion de datos** en formato JSON cifrado
- **Respaldos automaticos** del estado de la aplicacion

## Beneficios para Equipos Ecuatorianos

Este gestor de tareas es especialmente util para:

- **Startups** que estan comenzando a implementar metodologias agiles
- **Equipos remotos** que necesitan una herramienta visual de seguimiento
- **Freelancers** que manejan multiples proyectos simultaneamente
- **Empresas tradicionales** que dan el paso hacia la transformacion digital

## Personalizacion

La aplicacion puede ser extendida para incluir integracion con servicios externos como Google Calendar, Slack o WhatsApp Business, que son ampliamente utilizados en Ecuador. La arquitectura modular facilita agregar nuevas funcionalidades.

## Conclusion

Una herramienta de gestion de tareas bien disenada puede transformar la productividad de un equipo. Con Vue.js y un diseno centrado en el usuario, creamos una aplicacion que es tanto funcional como agradable de usar.
`
  },
  {
    slug: 'app-clima-ecuador-api-y-diseno',
    title: 'App del Clima para Ecuador: API y Diseno',
    excerpt: 'Como desarrrole una aplicacion del clima con React que integra APIs meteorologicas y ofrece pronosticos precisos para ciudades ecuatorianas.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-06-20',
    category: 'Tutoriales',
    tags: ['API', 'React', 'Clima'],
    featured: false,
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop',
    content: `
## Construyendo una app del clima para Ecuador

El clima en Ecuador es unico y variado: desde la costa tropical hasta la sierra andina y la selva amazonica. Construir una aplicacion del clima especificamente para Ecuador permite ofrecer informacion meteorologica relevante y precisa para cada region del pais.

## API de Datos Meteorologicos

Para obtener datos climaticos en tiempo real, integro la **OpenWeatherMap API**, que ofrece informacion confiable y accesible:

\`\`\`javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function getWeatherByCity(city) {
  const response = await fetch(
    \`${BASE_URL}/weather?q=${city},EC&appid=${API_KEY}&units=metric&lang=es\`
  )

  if (!response.ok) {
    throw new Error('Error al obtener datos del clima')
  }

  return await response.json()
}
\`\`\`

## Ciudades Ecuatorianas Soportadas

La aplicacion incluye datos preconfigurados para las principales ciudades:

- **Guayaquil**: Costa, clima tropical humedo
- **Quito**: Sierra, clima templado de montana
- **Cuenca**: Sierra, clima agradable todo el ano
- **Ambato**: Sierra, clima frio de montana
- **Manta**: Costa, clima tropical seco
- **Loja**: Sur, clima semi-arido

## Diseno de la Interfaz

El diseno de la aplicacion prioriza la claridad y rapidez de informacion:

\`\`\`jsx
function WeatherCard({ weather }) {
  const getWeatherIcon = (code) => {
    if (code >= 200 && code < 300) return 'storm'
    if (code >= 300 && code < 500) return 'rain'
    if (code >= 500 && code < 600) return 'rain'
    if (code >= 600 && code < 700) return 'snow'
    if (code >= 700 && code < 800) return 'fog'
    if (code === 800) return 'sun'
    return 'cloud'
  }

  return (
    <div className="weather-card">
      <h3>{weather.name}</h3>
      <span className="weather-icon">
        {getWeatherIcon(weather.weather[0].id)}
      </span>
      <p className="temperature">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="description">
        {weather.weather[0].description}
      </p>
    </div>
  )
}
\`\`\`

## Caracteristicas de Seguridad

La aplicacion implementa:

- **Variables de entorno** para proteger la API key (nunca en el codigo fuente)
- **Rate limiting** del lado del cliente para evitar exceder los limites de la API
- **Manejo de errores** robusto para cuando la API no esta disponible
- **Cache de datos** para reducir llamadas innecesarias a la API

## Funcionalidades Adicionales

- **Pronostico a 5 dias**: Prevision extendida para planificar actividades
- **Indice de UV**: Recomendaciones de proteccion solar
- **Humedad y viento**: Datos detallados para cada ciudad
- **Modo oscuro**: Para consulta nocturna del clima

## Personalizacion Regional

La app puede ser extendida para incluir alertas climaticas especificas del Ecuador, como el fenomeno de El Nino, alertas de lluvias intensas en la costa, o prevencion de heladas en la sierra. Esta informacion es vital para sectores como la agricultura y el turismo.

## Conclusion

Desarrollar una aplicacion del clima para Ecuador demuestra como las APIs publicas pueden combinarse con React para crear herramientas utiles y atractivas. La app puede ser personalizada para incluir cualquier ciudad o region del pais.
`
  },
  {
    slug: 'recetas-ecuatorianas-tradicion-y-tecnologia',
    title: 'Recetas Ecuatorianas: Tradicion y Tecnologia',
    excerpt: 'Como creé una aplicacion de busqueda de recetas con JavaScript vanilla que celebra la gastronomia ecuatoriana y facilita encontrar platos tipicos.',
    author: 'Diana Trujillo',
    authorBio: 'Desarrolladora de Software Full Stack especializada en React, Vue.js y Python. Apasionada por crear soluciones tecnologicas para empresas en Ecuador y Latinoamerica.',
    date: '2026-06-15',
    category: 'Cultura',
    tags: ['Recetas', 'JavaScript', 'Ecuador'],
    featured: false,
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
    content: `
## Gastronomia ecuatoriana y tecnologia

La gastronomia ecuatoriana es una de las mas diversas y ricas de Sudamerica. Desde el ceviche de camaron de la costa hasta el locro de papas de la sierra, pasando por el encebado de la region amazonica, cada region ofrece sabores unicos. Esta aplicacion nacio del deseo de preservar y difundir estas tradiciones culinarias a traves de la tecnologia.

## Desarrollo con JavaScript Vanilla

Para este proyecto decidi usar **JavaScript vanilla** (sin frameworks) para demostrar que es posible crear aplicaciones funcionales y atractivas con las tecnologias base de la web:

\`\`\`javascript
class RecipeFinder {
  constructor(recipes) {
    this.recipes = recipes
    this.filteredRecipes = [...recipes]
    this.searchInput = document.getElementById('search-input')
    this.categoryFilter = document.getElementById('category-filter')
    this.recipesContainer = document.getElementById('recipes-grid')
    this.init()
  }

  init() {
    this.searchInput.addEventListener('input', () => this.filterRecipes())
    this.categoryFilter.addEventListener('change', () => this.filterRecipes())
    this.render()
  }

  filterRecipes() {
    const query = this.searchInput.value.toLowerCase()
    const category = this.categoryFilter.value
    this.filteredRecipes = this.recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(query) ||
        recipe.ingredients.some(i => i.toLowerCase().includes(query))
      const matchesCategory = !category || recipe.region === category
      return matchesSearch && matchesCategory
    })
    this.render()
  }

  render() {
    this.recipesContainer.innerHTML = this.filteredRecipes
      .map(recipe => this.createRecipeCard(recipe))
      .join('')
  }

  createRecipeCard(recipe) {
    return \`
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <p class="region">${recipe.region}</p>
        <p class="time">${recipe.prepTime} minutos</p>
        <p class="description">${recipe.description}</p>
      </div>
    \`
  }
}
\`\`\`

## Tipos de Recetas

La aplicacion incluye recetas de las tres regiones principales del Ecuador:

### Costa
- **Ceviche de Camaron**: El clasico plato costeno con camaron fresco, limon y cebolla
- **Arroz con Camaron**: Arroz sazonado con camaron y especias
- **Seco de Chivo**: Carne de chivo guisada con naranja agria

### Sierra
- **Locro de Papas**: Sopa espesa de papas con queso y aguacate
- **Hornado**: Cerdo horneado lentamente, tipico de Ambato
- **Llapingachos**: Tortillas de papa con queso y huevo frito

### Amazonia
- **Maito**: Pescado envuelto en hojas de bijao asado al carbon
- **Chontacuro**: Larva de palma, delicia amazonica
- **Tamales de Uvilla**: Tamales de frutas de la region

## Funcionalidades de la App

- **Busqueda por ingrediente**: Encuentra recetas que contengan cualquier ingrediente
- **Filtrado por region**: Costa, Sierra o Amazonia
- **Tiempos de preparacion**: Planifica tus comidas segun tu disponibilidad
- **Lista de ingredientes**: Cada receta incluye todos los ingredientes necesarios

## Seguridad

Aunque es una aplicacion de presentacion, implemente:

- **Sanitizacion de contenido** para prevenir inyeccion de HTML
- **Validacion de entradas** en el formulario de busqueda
- **Carga segura de imagenes** con lazy loading y atributos alt

## Personalizacion

Esta aplicacion puede ser adaptada para restaurantes, tiendas de alimentos o cualquier negocio que quiera destacar productos gastronomicos. Los datos de recetas se pueden cargar desde una API o base de datos para mantener el contenido actualizado.

## Conclusion

La tecnologia y la tradicion van de la mano. Esta aplicacion demuestra que es posible honrar la rica gastronomia ecuatoriana mientras se crean herramientas modernas y funcionales. Cada plato cuenta una historia, y la tecnologia nos ayuda a compartirla con el mundo.
`
  }
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) || null
}

export function getFeaturedPosts() {
  return posts.filter(p => p.featured)
}

export function getPostsByCategory(category) {
  return posts.filter(p => p.category === category)
}

export function getPostsByTag(tag) {
  return posts.filter(p => p.tags.includes(tag))
}

export function getAllTags() {
  const tagSet = new Set()
  posts.forEach(p => p.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export function getAllCategories() {
  const catSet = new Set()
  posts.forEach(p => catSet.add(p.category))
  return Array.from(catSet).sort()
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = posts.find(p => p.slug === currentSlug)
  if (!current) return []
  return posts
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      ...p,
      relevance: p.tags.filter(t => current.tags.includes(t)).length +
                 (p.category === current.category ? 2 : 0)
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
}
