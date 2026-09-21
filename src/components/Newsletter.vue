<template>
  <section class="newsletter">
    <div class="newsletter-inner">
      <div class="newsletter-content">
        <h3 class="newsletter-title">Mantente informado</h3>
        <p class="newsletter-desc">Recibe los ultimos articulos directamente en tu correo. Sin spam, cancela cuando quieras.</p>
      </div>
      <form @submit.prevent="handleSubmit" class="newsletter-form" novalidate>
        <div class="honeypot" aria-hidden="true">
          <input type="text" v-model="honeypot" tabindex="-1" autocomplete="off" name="website" />
        </div>
        <input type="hidden" :value="csrfToken" name="csrf_token" />
        <div class="form-row">
          <input
            type="email"
            v-model="email"
            placeholder="you@example.com"
            class="newsletter-input"
            :class="{ error: error }"
            :disabled="submitted"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            class="btn btn-primary newsletter-btn"
            :disabled="submitted || loading"
          >
            {{ loading ? 'Suscribiendo...' : submitted ? 'Suscrito!' : 'Suscribirme' }}
          </button>
        </div>
        <Transition name="fade">
          <p v-if="error" class="error-msg">{{ error }}</p>
        </Transition>
        <Transition name="fade">
          <p v-if="success" class="success-msg">{{ success }}</p>
        </Transition>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { validateEmail, generateCSRFToken, rateLimiter, sanitizeInput } from '../utils/security'

const email = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)
const submitted = ref(false)
const honeypot = ref('')
const csrfToken = ref('')

onMounted(() => {
  csrfToken.value = generateCSRFToken()
})

async function handleSubmit() {
  error.value = ''
  success.value = ''

  if (honeypot.value) return

  const cleanEmail = sanitizeInput(email.value)
  if (!validateEmail(cleanEmail)) {
    error.value = 'Por favor ingresa un correo electronico valido.'
    return
  }

  if (!rateLimiter('newsletter', 3, 60000)) {
    error.value = 'Demasiados intentos. Por favor intenta de nuevo mas tarde.'
    return
  }

  loading.value = true
  try {
    await new Promise(r => setTimeout(r, 1000))
    submitted.value = true
    success.value = 'Gracias por suscribirte!'
    email.value = ''
  } catch {
    error.value = 'Algo salio mal. Por favor intenta de nuevo.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.newsletter {
  background: linear-gradient(135deg, var(--blue-700) 0%, var(--blue-500) 100%);
  border-radius: var(--radius-lg);
  padding: 3rem;
  margin: 3rem 0;
}

.newsletter-inner {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.newsletter-title {
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
}

.newsletter-desc {
  color: rgba(255,255,255,0.85);
  font-size: 0.95rem;
}

.newsletter-form {
  flex: 1;
  min-width: 0;
}

.honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  width: 0;
  overflow: hidden;
}

.form-row {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: var(--radius);
  background: rgba(255,255,255,0.12);
  color: white;
  font-size: 0.9rem;
  font-family: var(--font-sans);
  outline: none;
  transition: border-color 0.2s;
}

.newsletter-input::placeholder {
  color: rgba(255,255,255,0.55);
}

.newsletter-input:focus {
  border-color: rgba(255,255,255,0.6);
}

.newsletter-input.error {
  border-color: #F87171;
}

.newsletter-btn {
  white-space: nowrap;
}

.error-msg {
  color: #FCA5A5;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.success-msg {
  color: #86EFAC;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.fade-enter-active { transition: all 0.2s ease; }
.fade-leave-active { transition: all 0.15s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(-4px); }

@media (max-width: 768px) {
  .newsletter { padding: 2rem 1.5rem; }
  .newsletter-inner { flex-direction: column; gap: 1.5rem; text-align: center; }
  .form-row { flex-direction: column; }
}
</style>
