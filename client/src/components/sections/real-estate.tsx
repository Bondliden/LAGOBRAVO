import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import lagoBravoLogo from "@assets/lago-bravo-logo_1753204556550.webp";

export default function RealEstate() {
  const villaFeatures = [
    {
      title: "Built in Crystal Lagoon",
      description: "Exclusive overwater villas constructed directly in the crystal-clear lagoon waters.",
      icon: "fas fa-water",
      color: "text-cyan-500"
    },
    {
      title: "Private Yacht Docking",
      description: "Each villa includes dedicated boat slip and direct marina access for your vessels.",
      icon: "fas fa-anchor",
      color: "text-blue-600"
    },
    {
      title: "Concierge Services",
      description: "24/7 dedicated concierge team for all villa and condominium residents.",
      icon: "fas fa-concierge-bell",
      color: "text-gold"
    },
    {
      title: "Resort Amenities",
      description: "Full access to all resort facilities including golf, spa, dining, and marina.",
      icon: "fas fa-key",
      color: "text-green-600"
    }
  ];

  const properties = [
    {
      type: "Aqua Villa - Overwater Crystal Lagoon",
      status: "Coming Soon",
      availability: "Fractional Available",
      area: "220 - 250 m² (2,370 - 2,690 sq ft)",
      levels: "3 levels + rooftop",
      bedrooms: "4 bedrooms",
      features: [
        "Multi-level overwater design built in lagoon",
        "Ground level: Open-plan living, dining & kitchen (55m²)",
        "First level: Master suite + 2 guest bedrooms",
        "Basement level: Entertainment room & wine storage",
        "Rooftop terrace with infinity pool",
        "Glass floor sections for underwater viewing",
        "Private floating dock with lagoon access",
        "Smart home automation throughout"
      ],
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      highlight: true
    },
    {
      type: "Marina Vista - Lagoon Edge Residence",
      status: "Coming Soon",
      availability: "Fractional Available",
      area: "180 - 200 m² (1,940 - 2,150 sq ft)",
      levels: "2 levels + terrace",
      bedrooms: "3 bedrooms",
      features: [
        "Positioned at lagoon's edge with water access",
        "Ground floor: Living area with covered terrace (50m²)",
        "Upper level: Bedrooms with lagoon-view balconies",
        "Private garden plot extending to lagoon",
        "Direct lagoon swimming access",
        "Covered parking for 2 vehicles",
        "24/7 concierge and housekeeping services",
        "Fractional ownership from 1/8 shares"
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlight: false
    }
  ];

  const amenities = [
    { name: "Private Beach Club", icon: "fas fa-umbrella-beach" },
    { name: "Residents' Golf Priority", icon: "fas fa-golf-ball" },
    { name: "Marina & Yacht Services", icon: "fas fa-ship" },
    { name: "Spa & Wellness Center", icon: "fas fa-spa" },
    { name: "Fine Dining Restaurants", icon: "fas fa-utensils" },
    { name: "Children's Activities", icon: "fas fa-child" },
    { name: "Fitness & Tennis Club", icon: "fas fa-dumbbell" },
    { name: "Business Center", icon: "fas fa-briefcase" }
  ];

  return (
    <section id="real-estate" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Exclusive Resort Residences"
          subtitle="Architecturally inspired multi-level overwater villas and lagoon-edge residences, featuring innovative designs built directly in and around our pristine crystal lagoon with fractional ownership opportunities."
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
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Luxury Resort Living</h3>
                <p className="text-gray-700">Experience the ultimate in integrated resort lifestyle</p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Exclusive Marina with Luxury Yachts" 
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-6 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Exclusive Marina Access</h3>
                <p className="text-gray-700">Private yacht docking and luxury waterfront living</p>
                <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
                  <span className="bg-blue-100 px-3 py-1 rounded-full">⛵ Private Marina</span>
                  <span className="bg-cyan-100 px-3 py-1 rounded-full">🛥️ Yacht Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Villa Features Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-primary mb-4">Architectural-Inspired Overwater Villas</h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">Multi-level designs built directly in crystal lagoon waters with exclusive marina access</p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
            <span className="bg-amber-100 px-4 py-2 rounded-full">🏗️ Coming Soon</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">🌊 Built in Lagoon</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">🔑 Fractional Available</span>
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {villaFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <i className={`${feature.icon} ${feature.color} text-3xl mb-4`}></i>
                <h4 className="text-lg font-serif font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {properties.map((property, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden ${
              property.highlight 
                ? 'bg-gradient-to-b from-amber-100 to-orange-100 border-2 border-amber-300' 
                : 'bg-white/70 backdrop-blur-sm'
            }`}>
              {property.highlight && (
                <div className="bg-amber-500 text-white px-4 py-2 text-center font-bold">
                  🏆 SIGNATURE COLLECTION
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={property.image}
                  alt={property.type} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {property.levels}
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-500/90 text-black px-3 py-1 rounded-full text-xs font-bold">
                  OVERWATER DESIGN
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">{property.type}</h4>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Area:</span>
                    <div className="font-medium">{property.area}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Bedrooms:</span>
                    <div className="font-medium">{property.bedrooms}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Levels:</span>
                    <div className="font-medium">{property.levels}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="font-bold text-amber-600">{property.status}</div>
                  </div>
                </div>
                <div className="text-sm text-amber-700 font-semibold mb-4 bg-amber-50 px-3 py-1 rounded-full text-center">{property.availability}</div>
                
                <ul className="space-y-2 mb-6">
                  {property.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="fas fa-check text-amber-600 w-4 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-amber-600 text-white hover:bg-amber-700">
                    Join Waitlist
                  </Button>
                  <Button variant="outline" className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                    Fractional Info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concierge Services Section */}
        <div className="mb-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold mb-4">Exclusive Concierge Services</h3>
            <p className="text-xl max-w-4xl mx-auto">
              Every villa and condominium owner enjoys 24/7 dedicated concierge service, ensuring 
              every aspect of resort living exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="fas fa-car text-3xl mb-3"></i>
              <div className="font-semibold">Transportation</div>
              <div className="text-sm opacity-90">Airport transfers & charters</div>
            </div>
            <div className="text-center">
              <i className="fas fa-utensils text-3xl mb-3"></i>
              <div className="font-semibold">Dining</div>
              <div className="text-sm opacity-90">Restaurant reservations</div>
            </div>
            <div className="text-center">
              <i className="fas fa-calendar text-3xl mb-3"></i>
              <div className="font-semibold">Events</div>
              <div className="text-sm opacity-90">Private event planning</div>
            </div>
            <div className="text-center">
              <i className="fas fa-home text-3xl mb-3"></i>
              <div className="font-semibold">Property</div>
              <div className="text-sm opacity-90">Maintenance & housekeeping</div>
            </div>
          </div>
        </div>

        {/* Resort Amenities */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-8">Included Resort Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white/60 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <i className={`${amenity.icon} text-2xl text-amber-600 mb-3`}></i>
                <div className="font-semibold text-gray-800 text-sm">{amenity.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Investment Opportunity</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Lago Bravo Integrated Resorts offers exceptional investment potential in one of the world's 
                most desirable luxury resort destinations.
              </p>
              <div className="bg-white/80 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-3">Key Investment Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-chart-line text-green-600 w-5 mr-3"></i>
                    Projected 8-12% annual appreciation
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-percent text-green-600 w-5 mr-3"></i>
                    Optional rental program with guaranteed returns
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-green-600 w-5 mr-3"></i>
                    Freehold ownership rights
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-passport text-green-600 w-5 mr-3"></i>
                    Residency qualification programs available
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
              alt="Luxury resort real estate investment" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">Own Paradise</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover the ultimate in luxury resort living with our exclusive crystal lagoon villas 
            and condominiums. Schedule a private viewing and experience the Lago Bravo lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-500 text-black hover:bg-amber-400 px-8 py-4 text-lg font-semibold">
              Join Exclusive Waitlist
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Fractional Ownership Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}