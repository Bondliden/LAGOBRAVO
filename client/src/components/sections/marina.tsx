import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Marina() {
  const { t } = useLanguage();

  const moonPhases = [
    { date: "January 2, 2027", name: "Wolf Moon Gathering" },
    { date: "January 31, 2027", name: "Snow Moon Celebration" },
    { date: "March 2, 2027", name: "Worm Moon Soirée" },
    { date: "March 31, 2027", name: "Pink Moon Festival" }
  ];

  return (
    <section id="marina" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('marina.title')}
          subtitle={t('marina.subtitle')}
        />
        
        {/* Hero Marina Image */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('marina.title')} 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-serif font-bold mb-2">{t('marina.heroTitle')}</h3>
                <p className="text-xl">{t('marina.heroSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marina Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ring-2 ring-yellow-400 transform scale-105">
            <CardContent className="p-6 text-center">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                🌙 {t('marina.features.fullMoon.signature')}
              </div>
              <i className="fas fa-moon text-yellow-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('marina.features.fullMoon.title')}</h4>
              <p className="text-gray-600 text-sm">{t('marina.features.fullMoon.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-ship text-blue-600 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('marina.features.yachtCharter.title')}</h4>
              <p className="text-gray-600 text-sm">{t('marina.features.yachtCharter.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-utensils text-green-600 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('marina.features.dining.title')}</h4>
              <p className="text-gray-600 text-sm">{t('marina.features.dining.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-swimmer text-cyan-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('marina.features.waterSports.title')}</h4>
              <p className="text-gray-600 text-sm">{t('marina.features.waterSports.description')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Full Moon Gatherings Spotlight */}
        <div className="mb-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-20">
            <i className="fas fa-moon"></i>
          </div>
          <div className="relative">
            <h3 className="text-3xl font-serif font-bold mb-6 text-center">🌙 {t('marina.fullMoonSection.title')}</h3>
            <p className="text-xl text-center mb-8 max-w-4xl mx-auto">{t('marina.fullMoonSection.description')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {moonPhases.map((moon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl mb-2">🌕</div>
                  <div className="font-semibold text-yellow-400 text-sm">{moon.date}</div>
                  <div className="text-xs text-gray-300">{moon.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-6">
              <p className="text-gray-200 text-sm">{t('marina.fullMoonSection.schedule')}</p>
            </div>
            
            <div className="text-center">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold">
                {t('marina.fullMoonSection.reserve')}
              </Button>
            </div>
          </div>
        </div>

        {/* Marina Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-12">{t('marina.services.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('marina.services.yacht.name')}</h4>
              <p className="text-gray-600 mb-6">{t('marina.services.yacht.description')}</p>
              <ul className="space-y-3 mb-8">
                {[0,1,2,3,4].map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-anchor text-blue-600 w-4 mr-3"></i>
                    {t(`marina.services.yacht.features.${i}`)}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                {t('marina.cta.bookService')}
              </Button>
            </div>
            
            <div className="rounded-2xl p-8 bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400 transform scale-105">
              <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold text-center mb-4">
                🌙 {t('marina.features.fullMoon.signature')}
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('marina.services.fullMoon.name')}</h4>
              <p className="text-gray-600 mb-6">{t('marina.services.fullMoon.description')}</p>
              <ul className="space-y-3 mb-8">
                {[0,1,2,3,4].map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-anchor text-blue-600 w-4 mr-3"></i>
                    {t(`marina.services.fullMoon.features.${i}`)}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                {t('marina.cta.bookService')}
              </Button>
            </div>

            <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('marina.services.sunset.name')}</h4>
              <p className="text-gray-600 mb-6">{t('marina.services.sunset.description')}</p>
              <ul className="space-y-3 mb-8">
                {[0,1,2,3,4].map(i => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-anchor text-blue-600 w-4 mr-3"></i>
                    {t(`marina.services.sunset.features.${i}`)}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                {t('marina.cta.bookService')}
              </Button>
            </div>
          </div>
        </div>

        {/* Marina Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">{t('marina.amenities.title')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-anchor text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('marina.amenities.docking.title')}</div>
                  <div className="text-sm text-gray-600">{t('marina.amenities.docking.description')}</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-gas-pump text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('marina.amenities.fuel.title')}</div>
                  <div className="text-sm text-gray-600">{t('marina.amenities.fuel.description')}</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-concierge-bell text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('marina.amenities.concierge.title')}</div>
                  <div className="text-sm text-gray-600">{t('marina.amenities.concierge.description')}</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-moon text-yellow-500 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('marina.amenities.events.title')}</div>
                  <div className="text-sm text-gray-600">{t('marina.amenities.events.description')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('marina.features.dining.title')}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">{t('marina.cta.title')}</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('marina.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold">
              {t('marina.cta.bookFullMoon')}
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              {t('marina.cta.charterYacht')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
