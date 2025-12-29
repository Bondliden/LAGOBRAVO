import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Dining() {
  const { t } = useLanguage();

  const restaurants = [
    { key: "laPerla", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featureColor: "lago-teal", signature: true },
    { key: "tapas", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featureColor: "lago-accent" },
    { key: "sunset", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80", featureColor: "lago-orange", signature: true },
    { key: "beach", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featureColor: "lago-teal" },
    { key: "bodega", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", featureColor: "lago-gold" },
    { key: "grill", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featureColor: "lago-orange" }
  ];

  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('dining.title')}
          subtitle={t('dining.subtitle')}
        />
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">{t('dining.village.title')}</h3>
          <p className="text-xl text-gray-700 mb-4">{t('dining.village.tagline')}</p>
          <p className="text-lg font-semibold text-primary">{t('dining.village.count')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.key} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {restaurant.signature && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-1 text-center">
                  <span className="text-xs font-bold text-black">{t('dining.signature')}</span>
                </div>
              )}
              <img 
                src={restaurant.image}
                alt={t(`dining.restaurants.${restaurant.key}.name`)}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary">{t(`dining.restaurants.${restaurant.key}.name`)}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t(`dining.restaurants.${restaurant.key}.cuisine`)}</p>
                <p className="text-sm text-gray-700 mb-4">{t(`dining.restaurants.${restaurant.key}.description`)}</p>
                <p className="text-sm text-gray-600 mb-4">{t('dining.chef')}: {t(`dining.restaurants.${restaurant.key}.chef`)}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {[0,1,2].map(i => (
                    <span key={i} className={`${restaurant.featureColor} bg-current/10 px-2 py-1 rounded text-xs`}>
                      {t(`dining.restaurants.${restaurant.key}.features.${i}`)}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-primary text-white hover:bg-primary/90 text-sm">
                    {t('dining.cta.reserveTable')}
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white text-sm">
                    {t('dining.cta.viewMenu')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">{t('dining.cta.title')}</h3>
          <p className="text-gray-700 mb-6">{t('dining.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-white hover:bg-primary/90">
              {t('dining.cta.reserve')}
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              {t('dining.cta.viewMenus')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
