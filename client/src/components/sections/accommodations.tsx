import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Accommodations() {
  const accommodations = [
    {
      name: "Wedding Hotel",
      subtitle: "Luxury Wedding Venue",
      rooms: "120 Rooms",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
      description: "Elegant accommodations designed specifically for weddings and romantic getaways, featuring exquisite ballrooms and ceremony spaces.",
      features: [
        "Luxury ballrooms",
        "Ceremony gardens",
        "Bridal suites",
        "Wedding coordination services"
      ],
      badgeColor: "lago-accent"
    },
    {
      name: "Cabana Village",
      subtitle: "Tropical Paradise",
      rooms: "80 Rooms",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Intimate cabana-style accommodations nestled in lush tropical gardens, perfect for a private retreat.",
      features: [
        "Private terraces",
        "Tropical gardens",
        "Beach access",
        "Intimate setting"
      ],
      badgeColor: "lago-orange"
    },
    {
      name: "Center Parc",
      subtitle: "Business & Conference",
      rooms: "150 Rooms",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Modern business hotel with state-of-the-art conference facilities and executive amenities.",
      features: [
        "Conference centers",
        "Business lounges",
        "Executive floors",
        "Meeting facilities"
      ],
      badgeColor: "text-primary"
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-gray-50 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Luxury Accommodations"
          subtitle="Choose from our collection of world-class hotels and exclusive villas, each offering unique experiences and unparalleled luxury."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold ${accommodation.badgeColor} bg-current/10 px-3 py-1 rounded-full`}>
                    {accommodation.rooms}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{accommodation.name}</h3>
                <p className="text-gray-600 mb-4">{accommodation.subtitle}</p>
                <p className="text-gray-700 mb-6">{accommodation.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {accommodation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check lago-teal w-4 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Explore {accommodation.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
