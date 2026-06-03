/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Clickjacking protection
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Stop sending referrer to external sites
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Force HTTPS for 1 year (enable once deployed on HTTPS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Disable browser features not needed on a portfolio
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Block XSS via browser's built-in filter (legacy browsers)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // DNS prefetch control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js needs 'unsafe-inline' for its runtime styles + our inline styles
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Scripts: Next.js chunks only
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      // Images: self + data URIs (for SVG inline)
      "img-src 'self' data: blob:",
      // Canvas/WebWorker blobs
      "worker-src 'self' blob:",
      // Frames: none
      "frame-ancestors 'none'",
      // External links open in new tab — no embedding of external frames
      "frame-src 'none'",
      // Connect: self only (no external API calls)
      "connect-src 'self'",
      // Object/embed: blocked
      "object-src 'none'",
      // Base URI: self only
      "base-uri 'self'",
      // Form: none (no forms)
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
