import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title={t('about.title')}
              className="text-left mb-6"
            />
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.stats.premium.value')}</div>
                <div className="text-sm text-gray-600">{t('about.stats.premium.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.stats.global.value')}</div>
                <div className="text-sm text-gray-600">{t('about.stats.global.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{t('about.stats.exclusive.value')}</div>
                <div className="text-sm text-gray-600">{t('about.stats.exclusive.label')}</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fas fa-water lago-teal text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('about.features.lagoons.title')}</h4>
                  <p className="text-gray-600">{t('about.features.lagoons.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-building text-primary text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('about.features.resort.title')}</h4>
                  <p className="text-gray-600">{t('about.features.resort.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-star lago-gold text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('about.features.porcelanosa.title')}</h4>
                  <p className="text-gray-600">{t('about.features.porcelanosa.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('about.imageAlt')} 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
