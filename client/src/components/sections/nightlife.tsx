import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Nightlife() {
  const { t } = useLanguage();

  const venues = [
    {
      key: "vip",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
      icons: ["fas fa-star", "fas fa-cocktail", "fas fa-music", "fas fa-lock"],
      buttonClass: "bg-yellow-500 text-black hover:bg-yellow-400"
    },
    {
      key: "nightclub",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icons: ["fas fa-headphones", "fas fa-volume-up", "fas fa-palette", "fas fa-crown"],
      buttonClass: "bg-pink-600 text-white hover:bg-pink-500"
    }
  ];

  const weeklyEvents = [
    { key: "saturday", buttonClass: "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black" },
    { key: "sunset", buttonClass: "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white" },
    { key: "midnight", buttonClass: "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white" }
  ];

  return (
    <section id="nightlife" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('nightlife.title')}
          subtitle={t('nightlife.subtitle')}
          dark
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {venues.map((venue) => (
            <div key={venue.key} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
              <img 
                src={venue.image}
                alt={t(`nightlife.venues.${venue.key}.name`)}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-serif font-bold mb-2">{t(`nightlife.venues.${venue.key}.name`)}</h3>
              <p className="text-gray-300 mb-4">{t(`nightlife.venues.${venue.key}.subtitle`)}</p>
              <p className="text-gray-400 mb-6">{t(`nightlife.venues.${venue.key}.description`)}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[0,1,2,3].map(i => (
                  <div key={i} className="flex items-center text-sm">
                    <i className={`${venue.icons[i]} lago-gold w-4 mr-2`}></i>
                    {t(`nightlife.venues.${venue.key}.features.${i}`)}
                  </div>
                ))}
              </div>
              
              <Button className={`w-full font-semibold ${venue.buttonClass}`}>
                {t('nightlife.buttons.reserveVip')}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Weekly Events */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">{t('nightlife.events.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weeklyEvents.map((event) => (
              <div key={event.key} className="bg-gray-800/50 rounded-2xl p-6">
                <h4 className="text-xl font-serif font-bold mb-2">{t(`nightlife.events.${event.key}.title`)}</h4>
                <p className="text-sm text-gray-400 mb-4">{t(`nightlife.events.${event.key}.schedule`)}</p>
                <p className="text-gray-300 mb-4">{t(`nightlife.events.${event.key}.description`)}</p>
                <Button className={`w-full ${event.buttonClass} transition-colors`}>
                  {t('nightlife.buttons.guestList')}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <i className="fas fa-cocktail text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">{t('nightlife.features.cocktails.title')}</h4>
            <p className="text-sm text-gray-400">{t('nightlife.features.cocktails.description')}</p>
          </div>
          <div className="text-center">
            <i className="fas fa-music text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">{t('nightlife.features.djs.title')}</h4>
            <p className="text-sm text-gray-400">{t('nightlife.features.djs.description')}</p>
          </div>
          <div className="text-center">
            <i className="fas fa-crown text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">{t('nightlife.features.vip.title')}</h4>
            <p className="text-sm text-gray-400">{t('nightlife.features.vip.description')}</p>
          </div>
          <div className="text-center">
            <i className="fas fa-gem text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">{t('nightlife.features.atmosphere.title')}</h4>
            <p className="text-sm text-gray-400">{t('nightlife.features.atmosphere.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
