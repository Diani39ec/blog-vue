import DOMPurify from 'dompurify'
import { marked } from 'marked'

const ENTITY_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;'
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/[&<>"'/]/g, s => ENTITY_MAP[s])
}

export function sanitizeHTML(dirty) {
  if (typeof dirty !== 'string') return ''
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 'code', 'pre', 'blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'hr', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target', 'rel'],
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'textarea', 'button', 'select'],
    FORBID_ATTR: ['onerror', 'onclick', 'onload', 'onmouseover']
  })
}

export function sanitizeMarkdown(markdown) {
  if (typeof markdown !== 'string') return ''
  const cleaned = markdown
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
  return cleaned
}

export function renderMarkdown(content) {
  if (!content) return ''
  const sanitized = sanitizeMarkdown(content)
  const rawHtml = marked.parse(sanitized, {
    breaks: true,
    gfm: true
  })
  return DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'ul', 'ol', 'li', 'code', 'pre', 'blockquote', 'a', 'strong', 'em', 'span', 'div', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'img'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel']
  })
}

const csrfTokens = new Map()

export function generateCSRFToken() {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  const token = Array.from(array, b => b.toString(16).padStart(2, '0')).join('')
  csrfTokens.set(token, Date.now())
  return token
}

export function validateCSRFToken(token) {
  if (!token || !csrfTokens.has(token)) return false
  const created = csrfTokens.get(token)
  csrfTokens.delete(token)
  return Date.now() - created < 3600000
}

export function validateEmail(email) {
  if (typeof email !== 'string') return false
  const trimmed = email.trim()
  if (trimmed.length < 5 || trimmed.length > 254) return false
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)
}

const rateLimitStore = new Map()

export function rateLimiter(key, limit = 5, windowMs = 60000) {
  const now = Date.now()
  const attempts = rateLimitStore.get(key) || []
  const recent = attempts.filter(t => now - t < windowMs)
  if (recent.length >= limit) return false
  recent.push(now)
  rateLimitStore.set(key, recent)
  return true
}

export function sanitizeInput(input) {
  if (typeof input !== 'string') return ''
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .substring(0, 1000)
}

export function sanitizeUrl(url) {
  if (typeof url !== 'string') return ''
  const trimmed = url.trim()
  if (/^(https?:\/\/|mailto:|\/)/i.test(trimmed)) {
    return trimmed.replace(/javascript:/gi, '')
  }
  return ''
}
