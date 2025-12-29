import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Weddings() {
  const { t } = useLanguage();

  return (
    <section id="weddings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('weddings.title')}
          subtitle={t('weddings.subtitle')}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
              alt={t('weddings.title')} 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{t('weddings.planning.title')}</h3>
                <p className="text-gray-700 mb-4">{t('weddings.planning.description')}</p>
                <ul className="space-y-2">
                  {[0,1,2,3].map(i => (
                    <li key={i} className="flex items-center text-gray-700">
                      <i className="fas fa-check lago-accent w-4 mr-3"></i>
                      {t(`weddings.planning.features.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{t('weddings.services.title')}</h3>
                <p className="text-gray-700 mb-4">{t('weddings.services.description')}</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-music lago-accent w-4 mr-3"></i>
                    {t('weddings.services.features.0')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-seedling lago-accent w-4 mr-3"></i>
                    {t('weddings.services.features.1')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-car lago-accent w-4 mr-3"></i>
                    {t('weddings.services.features.2')}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-spa lago-accent w-4 mr-3"></i>
                    {t('weddings.services.features.3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wedding Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-xl font-serif font-bold text-primary mb-4">{t('weddings.packages.silver.name')}</h4>
            <p className="text-gray-600 mb-6">{t('weddings.packages.silver.guests')}</p>
            <ul className="space-y-3">
              {[0,1,2].map(i => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check lago-teal w-4 mr-2"></i>
                  {t(`weddings.packages.silver.features.${i}`)}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 p-8 rounded-2xl">
            <h4 className="text-xl font-serif font-bold text-primary mb-4">{t('weddings.packages.gold.name')}</h4>
            <p className="text-gray-600 mb-6">{t('weddings.packages.gold.guests')}</p>
            <ul className="space-y-3">
              {[0,1,2,3].map(i => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check lago-teal w-4 mr-2"></i>
                  {t(`weddings.packages.gold.features.${i}`)}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/15 p-8 rounded-2xl">
            <h4 className="text-xl font-serif font-bold text-primary mb-4">{t('weddings.packages.platinum.name')}</h4>
            <p className="text-gray-600 mb-6">{t('weddings.packages.platinum.guests')}</p>
            <ul className="space-y-3">
              {[0,1,2,3,4].map(i => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <i className="fas fa-check lago-teal w-4 mr-2"></i>
                  {t(`weddings.packages.platinum.features.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">{t('weddings.cta.title')}</h3>
          <p className="text-gray-700 mb-6">{t('weddings.cta.description')}</p>
          <div className="space-y-2 mb-8">
            <div>
              <p className="font-semibold text-primary">info@lagobravo.com</p>
              <p className="text-sm text-gray-600">{t('weddings.cta.email')}</p>
            </div>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            {t('weddings.cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
