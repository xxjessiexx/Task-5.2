import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The page comes from Vite (:5175) in development, not the Express API (:4000).
// An API response's CSP doesn't cover a document delivered from another port.
// Mirror Helmet's script restrictions on Vite-served pages for local testing.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' http://localhost:4000 ws://localhost:5175",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'"
].join('; ')

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    headers: { 'Content-Security-Policy': contentSecurityPolicy }
  },
  preview: {
    headers: { 'Content-Security-Policy': contentSecurityPolicy }
  }
})
