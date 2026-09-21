const submissions = new Map()

const RATE_LIMIT = 3
const RATE_WINDOW = 60000

function validateEmail(email) {
  if (!email || typeof email !== 'string') return false
  const trimmed = email.trim()
  if (trimmed.length < 5 || trimmed.length > 254) return false
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)
}

function rateLimit(ip) {
  const now = Date.now()
  const attempts = submissions.get(ip) || []
  const recent = attempts.filter(t => now - t < RATE_WINDOW)
  if (recent.length >= RATE_LIMIT) return false
  recent.push(now)
  submissions.set(ip, recent)
  return true
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) }
  }

  const { email, honeypot, csrf_token } = body

  if (honeypot) {
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) }
  }

  if (!csrf_token) {
    return { statusCode: 403, headers, body: JSON.stringify({ error: 'Missing CSRF token' }) }
  }

  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown'
  if (!rateLimit(ip)) {
    return { statusCode: 429, headers, body: JSON.stringify({ error: 'Too many requests. Please try again later.' }) }
  }

  if (!validateEmail(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Please provide a valid email address.' }) }
  }

  const key = email.trim().toLowerCase()
  if (submissions.has(`sub:${key}`)) {
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: 'You are already subscribed!' }) }
  }

  submissions.set(`sub:${key}`, Date.now())

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      message: 'Successfully subscribed to the newsletter!'
    })
  }
}
