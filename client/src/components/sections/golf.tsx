import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Golf() {
  const { t } = useLanguage();

  return (
    <section id="golf" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('golf.title')}
          subtitle={t('golf.subtitle')}
        />
        
        {/* Hero Golf Image */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('golf.title')} 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-serif font-bold mb-2">{t('golf.heroTitle')}</h3>
                <p className="text-xl">{t('golf.heroSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-trophy lago-gold text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('golf.features.championship.title')}</h4>
              <p className="text-gray-600 text-sm">{t('golf.features.championship.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-graduation-cap lago-teal text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('golf.features.instruction.title')}</h4>
              <p className="text-gray-600 text-sm">{t('golf.features.instruction.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-bullseye lago-accent text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('golf.features.practice.title')}</h4>
              <p className="text-gray-600 text-sm">{t('golf.features.practice.description')}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <i className="fas fa-building lago-orange text-3xl mb-4"></i>
              <h4 className="text-lg font-serif font-bold text-primary mb-3">{t('golf.features.clubhouse.title')}</h4>
              <p className="text-gray-600 text-sm">{t('golf.features.clubhouse.description')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Golf Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-12">{t('golf.packages.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('golf.packages.getaway.name')}</h4>
              <p className="text-gray-600 mb-6">{t('golf.packages.getaway.description')}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.getaway.features.0')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.getaway.features.1')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.getaway.features.2')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.getaway.features.3')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.getaway.features.4')}</li>
              </ul>
              <Button className="w-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                {t('golf.cta.bookPackage')}
              </Button>
            </div>
            
            <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary transform scale-105">
              <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-4">
                ⭐ {t('golf.packages.master.popular')}
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('golf.packages.master.name')}</h4>
              <p className="text-gray-600 mb-6">{t('golf.packages.master.description')}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.0')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.1')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.2')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.3')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.4')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.master.features.5')}</li>
              </ul>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                {t('golf.cta.bookPackage')}
              </Button>
            </div>

            <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm">
              <h4 className="text-2xl font-serif font-bold text-primary mb-2">{t('golf.packages.corporate.name')}</h4>
              <p className="text-gray-600 mb-6">{t('golf.packages.corporate.description')}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.corporate.features.0')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.corporate.features.1')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.corporate.features.2')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.corporate.features.3')}</li>
                <li className="flex items-center text-sm text-gray-700"><i className="fas fa-check lago-teal w-4 mr-3"></i>{t('golf.packages.corporate.features.4')}</li>
              </ul>
              <Button className="w-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                {t('golf.cta.bookPackage')}
              </Button>
            </div>
          </div>
        </div>

        {/* Course Stats & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">{t('golf.info.title')}</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{t('golf.info.par')}</div>
                <div className="text-sm text-gray-600">{t('golf.info.parLabel')}</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{t('golf.info.yards')}</div>
                <div className="text-sm text-gray-600">{t('golf.info.yardsLabel')}</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{t('golf.info.holes')}</div>
                <div className="text-sm text-gray-600">{t('golf.info.holesLabel')}</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{t('golf.info.rating')}</div>
                <div className="text-sm text-gray-600">{t('golf.info.ratingLabel')}</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-clock lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('golf.info.hours')}</div>
                  <div className="text-sm text-gray-600">{t('golf.info.hoursValue')}</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('golf.info.reservations')}</div>
                  <div className="text-sm text-gray-600">{t('golf.info.reservationsValue')}</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shirt lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">{t('golf.info.dressCode')}</div>
                  <div className="text-sm text-gray-600">{t('golf.info.dressCodeValue')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('golf.features.clubhouse.title')}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">{t('golf.cta.title')}</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('golf.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              {t('golf.cta.bookTee')}
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              {t('golf.cta.lessonInquiry')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
