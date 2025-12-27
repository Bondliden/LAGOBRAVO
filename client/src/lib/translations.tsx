import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = 'en' | 'es';

interface Translations {
  nav: {
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
  };
  hero: {
    subtitle: string;
    description: string;
    exploreButton: string;
    contactButton: string;
  };
  home: {
    discoverTitle: string;
    discoverSubtitle: string;
    bookExperience: string;
  };
  experiences: {
    luxuryHotels: string;
    luxuryHotelsDesc: string;
    golf: string;
    golfDesc: string;
    marina: string;
    marinaDesc: string;
    residences: string;
    residencesDesc: string;
    accommodations: string;
    accommodationsDesc: string;
    weddings: string;
    weddingsDesc: string;
    casino: string;
    casinoDesc: string;
    dining: string;
    diningDesc: string;
    events: string;
    eventsDesc: string;
    nightlife: string;
    nightlifeDesc: string;
    explore: string;
  };
  hotels: {
    collectionTitle: string;
    collectionSubtitle: string;
    palace: string;
    casinoResort: string;
    lagunaCabanas: string;
    palaceTitle: string;
    palaceSubtitle: string;
    palaceDesc: string;
    ultraLuxury: string;
    suites: string;
    dreamsTitle: string;
    dreamsDesc: string;
    casinoTitle: string;
    casinoSubtitle: string;
    casinoDesc: string;
    vegasStyle: string;
    rooms: string;
    worldClassCasino: string;
    casinoFloorDesc: string;
    nightlyEntertainment: string;
    entertainmentDesc: string;
    fortuneTitle: string;
    fortuneDesc: string;
    cabanaTitle: string;
    cabanaSubtitle: string;
    tulumStyle: string;
    cabanas: string;
    concertsTitle: string;
    concertsDesc: string;
    lagoonFront: string;
    lagoonFrontDesc: string;
    directAccess: string;
    concertViews: string;
    gardenCabana: string;
    gardenCabanaDesc: string;
    rooftopTerrace: string;
    privateHammock: string;
    overwaterSuite: string;
    overwaterDesc: string;
    glassFloor: string;
    swimPlatform: string;
    crystalLagoonsTitle: string;
    crystalLagoonsDesc: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
  };
  amenities: {
    spa: string;
    spaDesc: string;
    pools: string;
    poolsDesc: string;
    dining: string;
    diningDesc: string;
    concierge: string;
    conciergeDesc: string;
    helipad: string;
    helipadDesc: string;
    beach: string;
    beachDesc: string;
    fleet: string;
    fleetDesc: string;
    wine: string;
    wineDesc: string;
    casinoAmenity: string;
    casinoAmenityDesc: string;
    shows: string;
    showsDesc: string;
    lounges: string;
    loungesDesc: string;
    liveMusic: string;
    liveMusicDesc: string;
    highRoller: string;
    highRollerDesc: string;
    lagoon: string;
    lagoonDesc: string;
    waterConcerts: string;
    waterConcertsDesc: string;
    ecoLuxury: string;
    ecoLuxuryDesc: string;
    bonfires: string;
    bonfiresDesc: string;
    pier: string;
    pierDesc: string;
    stargazing: string;
    stargazingDesc: string;
  };
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
    },
    hero: {
      subtitle: "INTEGRATED RESORTS",
      description: "Experience the pinnacle of luxury living where crystal lagoons meet championship golf, world-class entertainment, and unparalleled hospitality.",
      exploreButton: "Explore Our World",
      contactButton: "Contact Us"
    },
    home: {
      discoverTitle: "Discover Our Experiences",
      discoverSubtitle: "Explore the finest offerings in luxury hospitality, entertainment, and lifestyle",
      bookExperience: "Book Your Experience"
    },
    experiences: {
      luxuryHotels: "Luxury Hotels",
      luxuryHotelsDesc: "5-star palace, Vegas casino resort & Tulum cabanas",
      golf: "Championship Golf",
      golfDesc: "18-hole championship course with stunning views",
      marina: "Exclusive Marina",
      marinaDesc: "Private yacht club and Full Moon experiences",
      residences: "Luxury Residences",
      residencesDesc: "Crystal lagoon villas and condominiums",
      accommodations: "Accommodations",
      accommodationsDesc: "World-class hotel suites and villas",
      weddings: "Dream Weddings",
      weddingsDesc: "Unforgettable ceremonies in paradise",
      casino: "Sophisticated Casino",
      casinoDesc: "World-class gaming and VIP lounges",
      dining: "Fine Dining",
      diningDesc: "Celebrity chef restaurants and cuisine",
      events: "Sports & Events",
      eventsDesc: "Concerts, sports, and entertainment",
      nightlife: "Vibrant Nightlife",
      nightlifeDesc: "Exclusive clubs and beach parties",
      explore: "Explore"
    },
    hotels: {
      collectionTitle: "Our Hotels Collection",
      collectionSubtitle: "Three distinctive experiences, each designed to create unforgettable memories in their own unique style.",
      palace: "The Palace",
      casinoResort: "Casino Resort",
      lagunaCabanas: "Laguna Cabanas",
      palaceTitle: "The Lago Bravo Palace",
      palaceSubtitle: "The pinnacle of ultra-luxury hospitality. An exclusive sanctuary where every desire is anticipated and every moment is perfection.",
      palaceDesc: "Experience the world's finest amenities with dedicated butler service, private helipad, Michelin-starred dining, and an exclusive spa sanctuary. Each suite offers breathtaking views of the crystal lagoon.",
      ultraLuxury: "ULTRA LUXURY",
      suites: "Suites",
      dreamsTitle: "Where Dreams Become Reality",
      dreamsDesc: "Experience the world's finest amenities with dedicated butler service, private helipad, Michelin-starred dining, and an exclusive spa sanctuary.",
      casinoTitle: "The Lago Bravo Casino Resort",
      casinoSubtitle: "Vegas-style glamour meets Caribbean paradise. The ultimate destination for entertainment, gaming, and unforgettable nights.",
      casinoDesc: "Experience the thrill of Las Vegas in paradise. From high-stakes gaming to spectacular shows, enjoy 24/7 entertainment with premium accommodations and world-class dining.",
      vegasStyle: "VEGAS STYLE",
      rooms: "Rooms",
      worldClassCasino: "World-Class Casino",
      casinoFloorDesc: "50,000 sq ft of premium gaming with VIP high-roller lounges",
      nightlyEntertainment: "Nightly Entertainment",
      entertainmentDesc: "World-famous performers, shows, and exclusive parties",
      fortuneTitle: "Where Fortune Meets Luxury",
      fortuneDesc: "Experience the thrill of Las Vegas in paradise. From high-stakes gaming to spectacular shows, enjoy 24/7 entertainment with premium accommodations and world-class dining.",
      cabanaTitle: "Laguna Cabanas by Crystal Lagoons",
      cabanaSubtitle: "Tulum-inspired bohemian luxury on the shores of our stunning artificial Crystal Lagoon. Where nature, music, and magic unite.",
      tulumStyle: "TULUM STYLE",
      cabanas: "Cabanas",
      concertsTitle: "Concerts on the Water",
      concertsDesc: "Imagine watching world-class artists perform on a floating stage while you relax in the crystal-clear waters of our artificial lagoon built with Crystal Lagoons technology.",
      lagoonFront: "Lagoon-Front Cabana",
      lagoonFrontDesc: "Step directly into the crystal waters from your private terrace.",
      directAccess: "Direct lagoon access",
      concertViews: "Concert views",
      gardenCabana: "Garden Cabana",
      gardenCabanaDesc: "Nestled in tropical gardens with rooftop stargazing terrace.",
      rooftopTerrace: "Rooftop terrace",
      privateHammock: "Private hammock",
      overwaterSuite: "Overwater Suite",
      overwaterDesc: "Floating bungalow with glass floor and swim platform.",
      glassFloor: "Glass floor panels",
      swimPlatform: "Swim platform",
      crystalLagoonsTitle: "The Magic of Crystal Lagoons",
      crystalLagoonsDesc: "Our stunning artificial lake is built using Crystal Lagoons® technology, creating Caribbean-blue waters in the heart of the resort. Enjoy water sports, floating concerts, and sunset yoga sessions in pristine, crystal-clear waters."
    },
    footer: {
      description: "A world-class integrated resort destination featuring luxury hotels, championship golf, exclusive marina, and unparalleled entertainment.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved."
    },
    amenities: {
      spa: "Exclusive Spa",
      spaDesc: "World-renowned treatments",
      pools: "Infinity Pools",
      poolsDesc: "Panoramic lagoon views",
      dining: "Michelin Dining",
      diningDesc: "Award-winning restaurants",
      concierge: "24/7 Concierge",
      conciergeDesc: "Personal butler service",
      helipad: "Helipad",
      helipadDesc: "Private arrivals",
      beach: "Private Beach",
      beachDesc: "Exclusive crystal waters",
      fleet: "Luxury Fleet",
      fleetDesc: "Rolls Royce transfers",
      wine: "Wine Cellar",
      wineDesc: "Rare vintage collection",
      casinoAmenity: "Casino",
      casinoAmenityDesc: "World-class gaming",
      shows: "Shows",
      showsDesc: "Nightly entertainment",
      lounges: "Lounges",
      loungesDesc: "VIP nightlife",
      liveMusic: "Live Music",
      liveMusicDesc: "Top performers",
      highRoller: "High Roller",
      highRollerDesc: "Exclusive gaming suites",
      lagoon: "Crystal Lagoon",
      lagoonDesc: "Crystal Lagoons technology",
      waterConcerts: "Water Concerts",
      waterConcertsDesc: "Floating stage shows",
      ecoLuxury: "Eco-Luxury",
      ecoLuxuryDesc: "Sustainable design",
      bonfires: "Beach Bonfires",
      bonfiresDesc: "Nightly gatherings",
      pier: "Private Pier",
      pierDesc: "Kayaks & paddleboards",
      stargazing: "Stargazing",
      stargazingDesc: "Rooftop terraces"
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
    },
    hero: {
      subtitle: "RESORTS INTEGRADOS",
      description: "Experimente el pináculo del lujo donde lagunas cristalinas se encuentran con golf de campeonato, entretenimiento de clase mundial y hospitalidad incomparable.",
      exploreButton: "Explorar Nuestro Mundo",
      contactButton: "Contáctenos"
    },
    home: {
      discoverTitle: "Descubra Nuestras Experiencias",
      discoverSubtitle: "Explore las mejores ofertas en hospitalidad de lujo, entretenimiento y estilo de vida",
      bookExperience: "Reserve Su Experiencia"
    },
    experiences: {
      luxuryHotels: "Hoteles de Lujo",
      luxuryHotelsDesc: "Palacio 5 estrellas, casino estilo Vegas y cabañas Tulum",
      golf: "Golf de Campeonato",
      golfDesc: "Campo de 18 hoyos con vistas impresionantes",
      marina: "Marina Exclusiva",
      marinaDesc: "Club de yates privado y experiencias de Luna Llena",
      residences: "Residencias de Lujo",
      residencesDesc: "Villas y condominios en laguna cristalina",
      accommodations: "Alojamiento",
      accommodationsDesc: "Suites y villas de clase mundial",
      weddings: "Bodas de Ensueño",
      weddingsDesc: "Ceremonias inolvidables en el paraíso",
      casino: "Casino Sofisticado",
      casinoDesc: "Juegos de clase mundial y salones VIP",
      dining: "Alta Cocina",
      diningDesc: "Restaurantes de chefs famosos",
      events: "Deportes y Eventos",
      eventsDesc: "Conciertos, deportes y entretenimiento",
      nightlife: "Vida Nocturna",
      nightlifeDesc: "Clubes exclusivos y fiestas en la playa",
      explore: "Explorar"
    },
    hotels: {
      collectionTitle: "Nuestra Colección de Hoteles",
      collectionSubtitle: "Tres experiencias distintivas, cada una diseñada para crear recuerdos inolvidables con su propio estilo único.",
      palace: "El Palacio",
      casinoResort: "Casino Resort",
      lagunaCabanas: "Cabañas Laguna",
      palaceTitle: "El Palacio Lago Bravo",
      palaceSubtitle: "El pináculo de la hospitalidad ultra lujosa. Un santuario exclusivo donde cada deseo es anticipado y cada momento es perfección.",
      palaceDesc: "Experimente las mejores comodidades del mundo con servicio de mayordomo dedicado, helipuerto privado, gastronomía con estrellas Michelin y un exclusivo santuario spa. Cada suite ofrece vistas impresionantes de la laguna cristalina.",
      ultraLuxury: "ULTRA LUJO",
      suites: "Suites",
      dreamsTitle: "Donde los Sueños se Hacen Realidad",
      dreamsDesc: "Experimente las mejores comodidades del mundo con servicio de mayordomo dedicado, helipuerto privado, gastronomía Michelin y un exclusivo santuario spa.",
      casinoTitle: "El Casino Resort Lago Bravo",
      casinoSubtitle: "El glamour de Las Vegas se encuentra con el paraíso caribeño. El destino definitivo para entretenimiento, juegos y noches inolvidables.",
      casinoDesc: "Experimente la emoción de Las Vegas en el paraíso. Desde juegos de alto riesgo hasta espectáculos increíbles, disfrute entretenimiento 24/7 con alojamiento premium y gastronomía de clase mundial.",
      vegasStyle: "ESTILO VEGAS",
      rooms: "Habitaciones",
      worldClassCasino: "Casino de Clase Mundial",
      casinoFloorDesc: "50,000 pies cuadrados de juegos premium con salones VIP",
      nightlyEntertainment: "Entretenimiento Nocturno",
      entertainmentDesc: "Artistas famosos, shows y fiestas exclusivas",
      fortuneTitle: "Donde la Fortuna se Encuentra con el Lujo",
      fortuneDesc: "Experimente la emoción de Las Vegas en el paraíso. Desde juegos de alto riesgo hasta espectáculos increíbles, disfrute entretenimiento 24/7 con alojamiento premium y gastronomía de clase mundial.",
      cabanaTitle: "Cabañas Laguna by Crystal Lagoons",
      cabanaSubtitle: "Lujo bohemio inspirado en Tulum a orillas de nuestra impresionante laguna artificial Crystal Lagoon. Donde la naturaleza, la música y la magia se unen.",
      tulumStyle: "ESTILO TULUM",
      cabanas: "Cabañas",
      concertsTitle: "Conciertos en el Agua",
      concertsDesc: "Imagine ver artistas de clase mundial actuar en un escenario flotante mientras se relaja en las aguas cristalinas de nuestra laguna artificial construida con tecnología Crystal Lagoons.",
      lagoonFront: "Cabaña Frente a la Laguna",
      lagoonFrontDesc: "Acceda directamente a las aguas cristalinas desde su terraza privada.",
      directAccess: "Acceso directo a la laguna",
      concertViews: "Vistas a conciertos",
      gardenCabana: "Cabaña Jardín",
      gardenCabanaDesc: "En jardines tropicales con terraza para ver estrellas.",
      rooftopTerrace: "Terraza en azotea",
      privateHammock: "Hamaca privada",
      overwaterSuite: "Suite Sobre el Agua",
      overwaterDesc: "Bungalow flotante con piso de vidrio y plataforma para nadar.",
      glassFloor: "Paneles de piso de vidrio",
      swimPlatform: "Plataforma para nadar",
      crystalLagoonsTitle: "La Magia de Crystal Lagoons",
      crystalLagoonsDesc: "Nuestro impresionante lago artificial está construido con tecnología Crystal Lagoons®, creando aguas azul caribeño en el corazón del resort. Disfrute deportes acuáticos, conciertos flotantes y sesiones de yoga al atardecer en aguas prístinas y cristalinas."
    },
    footer: {
      description: "Un destino de resort integrado de clase mundial con hoteles de lujo, golf de campeonato, marina exclusiva y entretenimiento incomparable.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados."
    },
    amenities: {
      spa: "Spa Exclusivo",
      spaDesc: "Tratamientos de renombre mundial",
      pools: "Piscinas Infinity",
      poolsDesc: "Vistas panorámicas a la laguna",
      dining: "Gastronomía Michelin",
      diningDesc: "Restaurantes premiados",
      concierge: "Concierge 24/7",
      conciergeDesc: "Servicio de mayordomo personal",
      helipad: "Helipuerto",
      helipadDesc: "Llegadas privadas",
      beach: "Playa Privada",
      beachDesc: "Aguas cristalinas exclusivas",
      fleet: "Flota de Lujo",
      fleetDesc: "Traslados en Rolls Royce",
      wine: "Bodega de Vinos",
      wineDesc: "Colección de vinos raros",
      casinoAmenity: "Casino",
      casinoAmenityDesc: "Juegos de clase mundial",
      shows: "Shows",
      showsDesc: "Entretenimiento nocturno",
      lounges: "Salones",
      loungesDesc: "Vida nocturna VIP",
      liveMusic: "Música en Vivo",
      liveMusicDesc: "Artistas top",
      highRoller: "High Roller",
      highRollerDesc: "Suites de juego exclusivas",
      lagoon: "Laguna Cristalina",
      lagoonDesc: "Tecnología Crystal Lagoons",
      waterConcerts: "Conciertos en el Agua",
      waterConcertsDesc: "Shows en escenario flotante",
      ecoLuxury: "Eco-Lujo",
      ecoLuxuryDesc: "Diseño sostenible",
      bonfires: "Fogatas en la Playa",
      bonfiresDesc: "Reuniones nocturnas",
      pier: "Muelle Privado",
      pierDesc: "Kayaks y paddleboards",
      stargazing: "Observación de Estrellas",
      stargazingDesc: "Terrazas en azotea"
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
      return (stored === 'es' || stored === 'en') ? stored : 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    document.documentElement.lang = language;
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
