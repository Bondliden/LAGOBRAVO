import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { useLanguage } from "@/i18n";

export default function Accommodations() {
  const { t } = useLanguage();

  const accommodations = [
    {
      nameKey: "accommodations.hotels.wedding.name",
      subtitleKey: "accommodations.hotels.wedding.subtitle",
      roomsKey: "accommodations.hotels.wedding.rooms",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
      descriptionKey: "accommodations.hotels.wedding.description",
      featuresKeys: [
        "accommodations.hotels.wedding.features.0",
        "accommodations.hotels.wedding.features.1",
        "accommodations.hotels.wedding.features.2",
        "accommodations.hotels.wedding.features.3"
      ],
      badgeColor: "lago-accent"
    },
    {
      nameKey: "accommodations.hotels.cabana.name",
      subtitleKey: "accommodations.hotels.cabana.subtitle",
      roomsKey: "accommodations.hotels.cabana.rooms",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      descriptionKey: "accommodations.hotels.cabana.description",
      featuresKeys: [
        "accommodations.hotels.cabana.features.0",
        "accommodations.hotels.cabana.features.1",
        "accommodations.hotels.cabana.features.2",
        "accommodations.hotels.cabana.features.3"
      ],
      badgeColor: "lago-orange"
    },
    {
      nameKey: "accommodations.hotels.centerParc.name",
      subtitleKey: "accommodations.hotels.centerParc.subtitle",
      roomsKey: "accommodations.hotels.centerParc.rooms",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      descriptionKey: "accommodations.hotels.centerParc.description",
      featuresKeys: [
        "accommodations.hotels.centerParc.features.0",
        "accommodations.hotels.centerParc.features.1",
        "accommodations.hotels.centerParc.features.2",
        "accommodations.hotels.centerParc.features.3"
      ],
      badgeColor: "text-primary"
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-gray-50 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('accommodations.title')}
          subtitle={t('accommodations.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={accommodation.image}
                alt={t(accommodation.nameKey)}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold ${accommodation.badgeColor} bg-current/10 px-3 py-1 rounded-full`}>
                    {t(accommodation.roomsKey)}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{t(accommodation.nameKey)}</h3>
                <p className="text-gray-600 mb-4">{t(accommodation.subtitleKey)}</p>
                <p className="text-gray-700 mb-6">{t(accommodation.descriptionKey)}</p>
                
                <ul className="space-y-2 mb-6">
                  {accommodation.featuresKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check lago-teal w-4 mr-2"></i>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  {t('accommodations.explore')} {t(accommodation.nameKey)}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
