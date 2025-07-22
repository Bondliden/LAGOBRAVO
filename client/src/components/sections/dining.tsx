import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Dining() {
  const restaurants = [
    {
      name: "La Perla del Mar",
      cuisine: "Mediterranean Fine Dining",
      price: "€€€€",
      chef: "Chef Miguel Santana",
      description: "Exquisite Mediterranean cuisine with panoramic sea views and an extensive wine cellar.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Fresh Seafood", "Wine Pairings", "Private Dining"],
      featureColor: "lago-teal",
      signature: true
    },
    {
      name: "Tapas y Más",
      cuisine: "Spanish Tapas",
      price: "€€",
      chef: "Chef Carmen López",
      description: "Authentic Spanish tapas and traditional dishes in a vibrant, welcoming atmosphere.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Traditional Tapas", "Paella", "Live Flamenco"],
      featureColor: "lago-accent"
    },
    {
      name: "Sunset Terrace",
      cuisine: "International Fusion",
      price: "€€€€",
      chef: "Chef Alessandro Romano",
      description: "Contemporary international cuisine served on a stunning terrace overlooking the sunset.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      features: ["Fusion Cuisine", "Sunset Views", "Romantic Setting"],
      featureColor: "lago-orange",
      signature: true
    },
    {
      name: "Beach Bar Oasis",
      cuisine: "Cocktails & Light Bites",
      price: "€€€",
      chef: "Master Mixologist David Chen",
      description: "Sophisticated cocktails and fresh sushi with direct beach access and infinity pool views.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Craft Cocktails", "Fresh Sushi", "Beach Access"],
      featureColor: "lago-teal"
    },
    {
      name: "La Bodega",
      cuisine: "Wine Bar & Bistro",
      price: "€€€",
      chef: "Sommelier Elena Ricci",
      description: "Curated wine selection from around the world paired with artisanal cheeses and charcuterie.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      features: ["Wine Tastings", "Artisan Cheeses", "Wine Education"],
      featureColor: "lago-gold"
    },
    {
      name: "Grill & Chill",
      cuisine: "International Grill",
      price: "€€€",
      chef: "Chef Marcus Thompson",
      description: "Relaxed dining with premium grilled meats, fresh salads, and tropical cocktails.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Grilled Specialties", "Fresh Salads", "Family Friendly"],
      featureColor: "lago-orange"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Culinary Excellence"
          subtitle="Collection of fine dining establishments featuring celebrity chefs and international cuisine."
        />
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">Restaurant Village</h3>
          <p className="text-xl text-gray-700 mb-4">A Culinary Journey Around the World</p>
          <p className="text-lg font-semibold text-primary">6 Restaurants & Bars</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {restaurant.signature && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-1 text-center">
                  <span className="text-xs font-bold text-black">Chef's Signature Restaurant</span>
                </div>
              )}
              <img 
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-primary">{restaurant.name}</h3>
                  <span className="lago-gold font-bold">{restaurant.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                <p className="text-sm text-gray-700 mb-4">{restaurant.description}</p>
                <p className="text-sm text-gray-600 mb-4">Chef: {restaurant.chef}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className={`${restaurant.featureColor} bg-current/10 px-2 py-1 rounded text-xs`}>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-primary text-white hover:bg-primary/90 text-sm">
                    Reserve Table
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white text-sm">
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Culinary Reservations</h3>
          <p className="text-gray-700 mb-6">Experience exceptional dining with our celebrity chefs and sommelier-selected wines. Reserve your table for an unforgettable culinary journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Make Reservation
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Menus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
