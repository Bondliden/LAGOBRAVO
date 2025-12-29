import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import lagoBravoLogo from "@assets/lago-bravo-logo_1753204556550.webp";
import { useLanguage } from "@/i18n";

export default function RealEstate() {
  const { t } = useLanguage();

  return (
    <section id="real-estate" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('residences.title')}
          subtitle={t('residences.subtitle')}
        />
        
        {/* Hero Real Estate Images */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-2xl">
            <img 
              src={lagoBravoLogo}
              alt="Lago Bravo Resort Logo" 
              className="w-full h-auto rounded-xl max-h-48 object-contain"
            />
            <div className="mt-6 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{t('residences.luxury.title')}</h3>
                <p className="text-gray-700">{t('residences.luxury.description')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt={t('residences.marina.title')} 
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-6 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{t('residences.marina.title')}</h3>
                <p className="text-gray-700">{t('residences.marina.description')}</p>
                <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
                  <span className="bg-blue-100 px-3 py-1 rounded-full">⛵ {t('residences.marina.privateMarina')}</span>
                  <span className="bg-cyan-100 px-3 py-1 rounded-full">🛥️ {t('residences.marina.yachtServices')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Villa Features Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">{t('residences.villaTitle')}</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">{t('residences.villaSubtitle')}</p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <span className="bg-amber-100 px-4 py-2 rounded-full">🏗️ {t('residences.comingSoon')}</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">🌊 {t('residences.builtInLagoon')}</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">🔑 {t('residences.fractionalAvailable')}</span>
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-water text-cyan-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('residences.features.lagoon.title')}</h4>
              <p className="text-gray-600 text-sm">{t('residences.features.lagoon.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-anchor text-blue-600 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('residences.features.yacht.title')}</h4>
              <p className="text-gray-600 text-sm">{t('residences.features.yacht.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-concierge-bell text-gold text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('residences.features.concierge.title')}</h4>
              <p className="text-gray-600 text-sm">{t('residences.features.concierge.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-key text-green-600 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('residences.features.amenities.title')}</h4>
              <p className="text-gray-600 text-sm">{t('residences.features.amenities.description')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Aqua Villa */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-amber-100 to-orange-100 border-2 border-amber-300">
            <div className="bg-amber-500 text-white px-4 py-2 text-center font-bold">
              🏆 {t('residences.properties.aquaVilla.signature')}
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt={t('residences.properties.aquaVilla.type')} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {t('residences.properties.aquaVilla.levels')}
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500/90 text-black px-3 py-1 rounded-full text-xs font-bold">
                {t('residences.properties.aquaVilla.overwaterDesign')}
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('residences.properties.aquaVilla.type')}</h4>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div><span className="text-gray-500">{t('residences.properties.labels.area')}:</span><div className="font-medium">{t('residences.properties.aquaVilla.area')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.bedrooms')}:</span><div className="font-medium">{t('residences.properties.aquaVilla.bedrooms')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.levels')}:</span><div className="font-medium">{t('residences.properties.aquaVilla.levels')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.status')}:</span><div className="font-bold text-amber-600">{t('residences.comingSoon')}</div></div>
              </div>
              <div className="text-sm text-amber-700 font-semibold mb-4 bg-amber-50 px-3 py-1 rounded-full text-center">{t('residences.fractionalAvailable')}</div>
              <ul className="space-y-2 mb-6">
                {[0,1,2,3,4,5,6,7].map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-check text-amber-600 w-4 mr-3"></i>
                    {t(`residences.properties.aquaVilla.features.${i}`)}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button className="flex-1 bg-amber-600 text-white hover:bg-amber-700">{t('residences.buttons.joinWaitlist')}</Button>
                <Button variant="outline" className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">{t('residences.buttons.fractionalInfo')}</Button>
              </div>
            </div>
          </div>

          {/* Marina Vista */}
          <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt={t('residences.properties.marinaVista.type')} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {t('residences.properties.marinaVista.levels')}
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-500/90 text-black px-3 py-1 rounded-full text-xs font-bold">
                {t('residences.properties.aquaVilla.overwaterDesign')}
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('residences.properties.marinaVista.type')}</h4>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div><span className="text-gray-500">{t('residences.properties.labels.area')}:</span><div className="font-medium">{t('residences.properties.marinaVista.area')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.bedrooms')}:</span><div className="font-medium">{t('residences.properties.marinaVista.bedrooms')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.levels')}:</span><div className="font-medium">{t('residences.properties.marinaVista.levels')}</div></div>
                <div><span className="text-gray-500">{t('residences.properties.labels.status')}:</span><div className="font-bold text-amber-600">{t('residences.comingSoon')}</div></div>
              </div>
              <div className="text-sm text-amber-700 font-semibold mb-4 bg-amber-50 px-3 py-1 rounded-full text-center">{t('residences.fractionalAvailable')}</div>
              <ul className="space-y-2 mb-6">
                {[0,1,2,3,4,5,6,7].map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-check text-amber-600 w-4 mr-3"></i>
                    {t(`residences.properties.marinaVista.features.${i}`)}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button className="flex-1 bg-amber-600 text-white hover:bg-amber-700">{t('residences.buttons.joinWaitlist')}</Button>
                <Button variant="outline" className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">{t('residences.buttons.fractionalInfo')}</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Concierge Services Section */}
        <div className="mb-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold mb-4">{t('residences.conciergeSection.title')}</h3>
            <p className="text-xl max-w-4xl mx-auto">{t('residences.conciergeSection.description')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="fas fa-car text-3xl mb-3"></i>
              <div className="font-semibold">{t('residences.conciergeSection.transportation.title')}</div>
              <div className="text-sm opacity-90">{t('residences.conciergeSection.transportation.description')}</div>
            </div>
            <div className="text-center">
              <i className="fas fa-utensils text-3xl mb-3"></i>
              <div className="font-semibold">{t('residences.conciergeSection.dining.title')}</div>
              <div className="text-sm opacity-90">{t('residences.conciergeSection.dining.description')}</div>
            </div>
            <div className="text-center">
              <i className="fas fa-calendar text-3xl mb-3"></i>
              <div className="font-semibold">{t('residences.conciergeSection.events.title')}</div>
              <div className="text-sm opacity-90">{t('residences.conciergeSection.events.description')}</div>
            </div>
            <div className="text-center">
              <i className="fas fa-home text-3xl mb-3"></i>
              <div className="font-semibold">{t('residences.conciergeSection.property.title')}</div>
              <div className="text-sm opacity-90">{t('residences.conciergeSection.property.description')}</div>
            </div>
          </div>
        </div>

        {/* Resort Amenities */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-8">{t('residences.amenitiesSection.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[0,1,2,3,4,5,6,7].map(i => (
              <div key={i} className="bg-white/60 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <i className={`fas ${['fa-umbrella-beach','fa-golf-ball','fa-ship','fa-spa','fa-utensils','fa-child','fa-dumbbell','fa-briefcase'][i]} text-2xl text-amber-600 mb-3`}></i>
                <div className="font-semibold text-gray-800 text-sm">{t(`residences.amenitiesSection.items.${i}`)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">{t('residences.investment.title')}</h3>
            <div className="space-y-4 text-gray-700">
              <p>{t('residences.investment.description')}</p>
              <div className="bg-white/80 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-3">{t('residences.investment.benefitsTitle')}</h4>
                <ul className="space-y-2">
                  {[0,1,2,3].map(i => (
                    <li key={i} className="flex items-center">
                      <i className={`fas ${['fa-chart-line','fa-percent','fa-shield-alt','fa-passport'][i]} text-green-600 w-5 mr-3`}></i>
                      {t(`residences.investment.benefits.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
              alt={t('residences.investment.title')} 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">{t('residences.cta.title')}</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('residences.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 text-black hover:bg-amber-400 px-8 py-4 text-lg font-semibold">
              {t('residences.cta.joinWaitlist')}
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              {t('residences.cta.fractionalInfo')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
