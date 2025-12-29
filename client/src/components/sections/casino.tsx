import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Casino() {
  const { t } = useLanguage();

  return (
    <section id="casino" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('casino.title')}
          subtitle={t('casino.subtitle')}
          className="text-white"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t('casino.title')} 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-serif font-bold mb-6">{t('casino.experience.title')}</h3>
            <p className="text-xl text-gray-300 mb-8">{t('casino.experience.tagline')}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">{t('casino.games.tableGames.title')}</h4>
                <p className="text-sm text-gray-400">{t('casino.games.tableGames.description')}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">{t('casino.games.slots.title')}</h4>
                <p className="text-sm text-gray-400">{t('casino.games.slots.description')}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">{t('casino.games.vip.title')}</h4>
                <p className="text-sm text-gray-400">{t('casino.games.vip.description')}</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">{t('casino.games.responsible.title')}</h4>
                <p className="text-sm text-gray-400">{t('casino.games.responsible.description')}</p>
              </div>
            </div>
            
            <div className="bg-primary/20 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4">{t('casino.hours.title')}</h4>
              <div className="space-y-2 text-sm">
                <p>{t('casino.hours.monThu')}</p>
                <p>{t('casino.hours.friSat')}</p>
                <p>{t('casino.hours.sun')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gaming Tables */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h4 className="text-xl font-serif font-bold mb-2">{t('casino.tables.blackjack.name')}</h4>
            <p className="text-gray-300">{t('casino.tables.blackjack.count')}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h4 className="text-xl font-serif font-bold mb-2">{t('casino.tables.roulette.name')}</h4>
            <p className="text-gray-300">{t('casino.tables.roulette.count')}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h4 className="text-xl font-serif font-bold mb-2">{t('casino.tables.poker.name')}</h4>
            <p className="text-gray-300">{t('casino.tables.poker.count')}</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl text-center">
            <h4 className="text-xl font-serif font-bold mb-2">{t('casino.tables.baccarat.name')}</h4>
            <p className="text-gray-300">{t('casino.tables.baccarat.count')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
