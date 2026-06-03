'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { LANGS, translations, type Dict, type Lang } from './translations'

const STORAGE_KEY = 'portfolio-lang'

interface I18nValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  setLang: (l: Lang) => void
  t: Dict
}

const I18nContext = createContext<I18nValue | null>(null)

function dirFor(lang: Lang): 'ltr' | 'rtl' {
  return LANGS.find(l => l.code === lang)?.dir ?? 'ltr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Restore persisted choice after mount (avoids hydration mismatch).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved && translations[saved]) setLangState(saved)
  }, [])

  // Reflect the active language on <html> for a11y + RTL layout flipping.
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dirFor(lang)
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem(STORAGE_KEY, l)
  }

  return (
    <I18nContext.Provider value={{ lang, dir: dirFor(lang), setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
