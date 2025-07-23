import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Marina() {
  const marinaFeatures = [
    {
      title: "Full Moon Gatherings",
      description: "Exclusive monthly boat gatherings under the full moon with live music, premium dining, and celestial views.",
      icon: "fas fa-moon",
      color: "text-yellow-500",
      highlight: true
    },
    {
      title: "Private Yacht Charters",
      description: "Luxury yacht rentals with professional crew for day trips, sunset cruises, and multi-day adventures.",
      icon: "fas fa-ship",
      color: "text-blue-600"
    },
    {
      title: "Waterfront Dining",
      description: "Exclusive marina restaurant with fresh seafood, craft cocktails, and panoramic ocean views.",
      icon: "fas fa-utensils",
      color: "text-green-600"
    },
    {
      title: "Water Sports Center",
      description: "Complete water sports facility with jet skis, kayaks, paddleboards, and diving equipment.",
      icon: "fas fa-swimmer",
      color: "text-cyan-500"
    }
  ];

  const boatServices = [
    {
      name: "Luxury Yacht Charter",
      price: "From €2,500/day",
      description: "60-foot luxury yacht with crew",
      features: [
        "Professional captain and crew",
        "Gourmet catering available",
        "Full bar and entertainment system",
        "Up to 12 guests",
        "Snorkeling and fishing equipment"
      ]
    },
    {
      name: "Full Moon Experience",
      price: "€350/person",
      description: "Monthly exclusive gathering",
      features: [
        "Premium boat transportation",
        "5-course gourmet dinner",
        "Live acoustic music",
        "Champagne toast at moonrise",
        "Professional photography"
      ],
      highlight: true
    },
    {
      name: "Sunset Cruise",
      price: "From €180/person",
      description: "Romantic evening cruise",
      features: [
        "2-hour sunset cruise",
        "Cocktails and appetizers",
        "Blankets and seating",
        "Music and entertainment",
        "Perfect for couples"
      ]
    }
  ];

  const moonPhases = [
    { date: "January 2, 2027", name: "Wolf Moon Gathering" },
    { date: "January 31, 2027", name: "Snow Moon Celebration" },
    { date: "March 2, 2027", name: "Worm Moon Soirée" },
    { date: "March 31, 2027", name: "Pink Moon Festival" },
    { date: "April 30, 2027", name: "Flower Moon Gala" },
    { date: "May 30, 2027", name: "Strawberry Moon Evening" },
    { date: "June 28, 2027", name: "Buck Moon Experience" },
    { date: "July 28, 2027", name: "Sturgeon Moon Celebration" }
  ];

  return (
    <section id="marina" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Exclusive Marina & Yacht Club"
          subtitle="Experience luxury on the water with our private marina featuring yacht charters, waterside dining, and our signature Full Moon Gatherings - monthly celebrations under the stars."
        />
        
        {/* Hero Marina Image */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Exclusive Marina with luxury yachts" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-serif font-bold mb-2">Private Marina & Yacht Club</h3>
                <p className="text-xl">Exclusive waterfront luxury • Full Moon celebrations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marina Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marinaFeatures.map((feature, index) => (
            <Card key={index} className={`bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${
              feature.highlight ? 'ring-2 ring-yellow-400 transform scale-105' : ''
            }`}>
              <CardContent className="p-6 text-center">
                {feature.highlight && (
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                    🌙 SIGNATURE EXPERIENCE
                  </div>
                )}
                <i className={`${feature.icon} ${feature.color} text-3xl mb-4`}></i>
                <h4 className="text-lg font-serif font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Moon Gatherings Spotlight */}
        <div className="mb-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-20">
            <i className="fas fa-moon"></i>
          </div>
          <div className="relative">
            <h3 className="text-3xl font-serif font-bold mb-6 text-center">🌙 Full Moon Boat Gatherings</h3>
            <p className="text-xl text-center mb-8 max-w-4xl mx-auto">
              Join our exclusive monthly celebration under the full moon. Each gathering features luxury boat transportation, 
              gourmet dining, live music, and the magic of moonlight reflecting on the water.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {moonPhases.slice(0, 4).map((moon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl mb-2">🌕</div>
                  <div className="font-semibold text-yellow-400 text-sm">{moon.date}</div>
                  <div className="text-xs text-gray-300">{moon.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-6">
              <p className="text-gray-200 text-sm">
                Full year 2027 schedule available • Monthly celebrations throughout the year
              </p>
            </div>
            
            <div className="text-center">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold">
                Reserve Full Moon Experience
              </Button>
            </div>
          </div>
        </div>

        {/* Marina Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-12">Marina Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boatServices.map((service, index) => (
              <div key={index} className={`rounded-2xl p-8 ${
                service.highlight 
                  ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-400 transform scale-105' 
                  : 'bg-white/70 backdrop-blur-sm'
              }`}>
                {service.highlight && (
                  <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold text-center mb-4">
                    🌙 SIGNATURE EXPERIENCE
                  </div>
                )}
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">{service.name}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="fas fa-anchor text-blue-600 w-4 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${
                  service.highlight 
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Book Marina Service
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Marina Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">Marina Amenities</h3>
            
            <div className="space-y-6">
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-anchor text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">Premium Docking</div>
                  <div className="text-sm text-gray-600">50 luxury boat slips with full utilities</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-gas-pump text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">Fuel & Maintenance</div>
                  <div className="text-sm text-gray-600">Full-service fuel dock and repair facility</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-concierge-bell text-blue-600 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">Concierge Services</div>
                  <div className="text-sm text-gray-600">Boat cleaning, provisioning, and trip planning</div>
                </div>
              </div>
              
              <div className="flex items-center bg-white/60 p-4 rounded-xl">
                <i className="fas fa-moon text-yellow-500 text-2xl w-8 mr-4"></i>
                <div>
                  <div className="font-semibold text-gray-900">Full Moon Events</div>
                  <div className="text-sm text-gray-600">Monthly exclusive gatherings and celebrations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Marina dining and sunset views" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">Set Sail in Luxury</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the ultimate in waterfront luxury at our exclusive marina. From yacht charters to 
            our magical Full Moon Gatherings, create unforgettable memories on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold">
              Book Full Moon Experience
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Charter a Yacht
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}