import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";
import beachClubImage from "@assets/generated_images/luxury_beach_club_resort.png";

export default function Events() {
  const { t } = useLanguage();

  const events = [
    { key: "jazz", date: "Thu, Aug 14, 2025", time: "20:00", venue: "Arena", categoryKey: "concerts", categoryColor: "lago-accent", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featured: true },
    { key: "boxing", date: "Thu, Aug 21, 2025", time: "21:00", venue: "Arena", categoryKey: "sports", categoryColor: "lago-orange", image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", featured: true },
    { key: "flamenco", date: "Wed, Aug 27, 2025", time: "19:30", venue: "Arena", categoryKey: "shows", categoryColor: "lago-teal", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" },
    { key: "electronic", date: "Thu, Sep 4, 2025", time: "22:00", venue: "Beach Club", categoryKey: "concerts", categoryColor: "lago-accent", image: beachClubImage, featured: true },
    { key: "tennis", date: "Thu, Sep 11, 2025", time: "16:00", venue: "Arena", categoryKey: "sports", categoryColor: "lago-orange", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
    { key: "cirque", date: "Wed, Sep 17, 2025", time: "20:30", venue: "Arena", categoryKey: "shows", categoryColor: "lago-teal", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('events.title')}
          subtitle={t('events.subtitle')}
        />
        
        <div className="text-center mb-12">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt={t('events.arena.title')} 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-6"
          />
          <h3 className="text-3xl font-serif font-bold text-primary mb-2">{t('events.arena.title')}</h3>
          <p className="text-xl text-gray-700 mb-4">{t('events.arena.tagline')}</p>
          <p className="text-lg font-semibold text-primary">{t('events.arena.capacity')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.key} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {event.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-1 text-center">
                  <span className="text-xs font-bold text-black">⭐ {t('events.featured')}</span>
                </div>
              )}
              <img 
                src={event.image}
                alt={t(`events.upcoming.${event.key}.title`)}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <span className={`${event.categoryColor} bg-current/10 px-3 py-1 rounded-full text-xs font-semibold`}>
                  {t(`events.categories.${event.categoryKey}`)}
                </span>
                <h3 className="text-xl font-serif font-bold text-primary mt-3 mb-2">{t(`events.upcoming.${event.key}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`events.upcoming.${event.key}.description`)}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-500">
                    <p>{event.date}</p>
                    <p>{event.time} - {event.venue}</p>
                  </div>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  {t('events.getTickets')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
