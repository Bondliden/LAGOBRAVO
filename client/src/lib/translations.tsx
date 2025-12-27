import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = 'en' | 'es' | 'fr' | 'sv' | 'pt' | 'de' | 'nl' | 'it' | 'zh' | 'ru' | 'ar';

export const languageNames: Record<Language, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇬🇧" },
  es: { name: "Español", flag: "🇪🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  sv: { name: "Svenska", flag: "🇸🇪" },
  pt: { name: "Português", flag: "🇵🇹" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  nl: { name: "Nederlands", flag: "🇳🇱" },
  it: { name: "Italiano", flag: "🇮🇹" },
  zh: { name: "中文", flag: "🇨🇳" },
  ru: { name: "Русский", flag: "🇷🇺" },
  ar: { name: "العربية", flag: "🇸🇦" }
};

interface NavTranslations {
  hotel: string;
  golf: string;
  marina: string;
  residences: string;
  accommodations: string;
  weddings: string;
  casino: string;
  dining: string;
  events: string;
  nightlife: string;
  bookNow: string;
}

interface Translations {
  nav: NavTranslations;
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      hotel: "Hotel",
      golf: "Golf",
      marina: "Marina",
      residences: "Residences",
      accommodations: "Accommodations",
      weddings: "Weddings",
      casino: "Casino",
      dining: "Dining",
      events: "Events",
      nightlife: "Nightlife",
      bookNow: "Book Now"
    }
  },
  es: {
    nav: {
      hotel: "Hotel",
      golf: "Golf",
      marina: "Marina",
      residences: "Residencias",
      accommodations: "Alojamiento",
      weddings: "Bodas",
      casino: "Casino",
      dining: "Restaurantes",
      events: "Eventos",
      nightlife: "Vida Nocturna",
      bookNow: "Reservar"
    }
  },
  fr: {
    nav: {
      hotel: "Hôtel",
      golf: "Golf",
      marina: "Marina",
      residences: "Résidences",
      accommodations: "Hébergement",
      weddings: "Mariages",
      casino: "Casino",
      dining: "Restaurants",
      events: "Événements",
      nightlife: "Vie Nocturne",
      bookNow: "Réserver"
    }
  },
  sv: {
    nav: {
      hotel: "Hotell",
      golf: "Golf",
      marina: "Marina",
      residences: "Bostäder",
      accommodations: "Boende",
      weddings: "Bröllop",
      casino: "Kasino",
      dining: "Restauranger",
      events: "Evenemang",
      nightlife: "Nattliv",
      bookNow: "Boka Nu"
    }
  },
  pt: {
    nav: {
      hotel: "Hotel",
      golf: "Golfe",
      marina: "Marina",
      residences: "Residências",
      accommodations: "Acomodações",
      weddings: "Casamentos",
      casino: "Cassino",
      dining: "Restaurantes",
      events: "Eventos",
      nightlife: "Vida Noturna",
      bookNow: "Reservar"
    }
  },
  de: {
    nav: {
      hotel: "Hotel",
      golf: "Golf",
      marina: "Marina",
      residences: "Residenzen",
      accommodations: "Unterkünfte",
      weddings: "Hochzeiten",
      casino: "Kasino",
      dining: "Restaurants",
      events: "Veranstaltungen",
      nightlife: "Nachtleben",
      bookNow: "Jetzt Buchen"
    }
  },
  nl: {
    nav: {
      hotel: "Hotel",
      golf: "Golf",
      marina: "Marina",
      residences: "Residenties",
      accommodations: "Accommodaties",
      weddings: "Bruiloften",
      casino: "Casino",
      dining: "Restaurants",
      events: "Evenementen",
      nightlife: "Nachtleven",
      bookNow: "Boek Nu"
    }
  },
  it: {
    nav: {
      hotel: "Hotel",
      golf: "Golf",
      marina: "Marina",
      residences: "Residenze",
      accommodations: "Alloggi",
      weddings: "Matrimoni",
      casino: "Casinò",
      dining: "Ristoranti",
      events: "Eventi",
      nightlife: "Vita Notturna",
      bookNow: "Prenota Ora"
    }
  },
  zh: {
    nav: {
      hotel: "酒店",
      golf: "高尔夫",
      marina: "码头",
      residences: "住宅",
      accommodations: "住宿",
      weddings: "婚礼",
      casino: "赌场",
      dining: "餐饮",
      events: "活动",
      nightlife: "夜生活",
      bookNow: "立即预订"
    }
  },
  ru: {
    nav: {
      hotel: "Отель",
      golf: "Гольф",
      marina: "Марина",
      residences: "Резиденции",
      accommodations: "Размещение",
      weddings: "Свадьбы",
      casino: "Казино",
      dining: "Рестораны",
      events: "События",
      nightlife: "Ночная жизнь",
      bookNow: "Забронировать"
    }
  },
  ar: {
    nav: {
      hotel: "الفندق",
      golf: "الجولف",
      marina: "المارينا",
      residences: "المساكن",
      accommodations: "الإقامة",
      weddings: "الأعراس",
      casino: "الكازينو",
      dining: "المطاعم",
      events: "الفعاليات",
      nightlife: "الحياة الليلية",
      bookNow: "احجز الآن"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-language');
      if (stored && Object.keys(languageNames).includes(stored)) {
        return stored as Language;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
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
