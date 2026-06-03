import type { Metadata, Viewport } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// Derived automatically from Vercel's production URL (no custom domain needed).
// Falls back to localhost for local dev.
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000'
const TITLE = 'Wassim Lazim — Engineer · Founder · Builder'
const DESCRIPTION =
  'Full-stack engineer fluent across every layer — web, mobile, IoT, AI, systems. Solo founder of a live B2B platform.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F2E9',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Wassim Lazim — Portfolio',
  authors: [{ name: 'Wassim Lazim', url: 'https://www.linkedin.com/in/wassim-lazim-124aa935b' }],
  creator: 'Wassim Lazim',
  keywords: [
    'Wassim Lazim', 'full-stack engineer', 'software engineer', 'founder',
    'Next.js', 'React', 'Laravel', 'Symfony', 'Kotlin', 'Python', 'IoT', 'AI', 'RAG',
    'portfolio', 'Morocco', 'EMSI',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Wassim Lazim',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'ar_MA'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
