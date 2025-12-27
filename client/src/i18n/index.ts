import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from './en.json';
import esTranslations from './es.json';
import frTranslations from './fr.json';
import svTranslations from './sv.json';
import ptTranslations from './pt.json';
import deTranslations from './de.json';
import nlTranslations from './nl.json';
import itTranslations from './it.json';

export type Language = 'en' | 'es' | 'fr' | 'sv' | 'pt' | 'de' | 'nl' | 'it';

const translations: Record<Language, typeof enTranslations> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  sv: svTranslations,
  pt: ptTranslations,
  de: deTranslations,
  nl: nlTranslations,
  it: itTranslations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL parameter first
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang') as Language;
    if (langParam && translations[langParam]) {
      return langParam;
    }
    // Check localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    // Default to Spanish
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update URL parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url.toString());
  };

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang') as Language;
      if (langParam && translations[langParam]) {
        setLanguageState(langParam);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];