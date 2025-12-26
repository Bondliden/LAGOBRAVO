import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Hotel() {
  const fiveStarAmenities = [
    { icon: "fa-spa", title: "Exclusive Spa", description: "World-renowned treatments" },
    { icon: "fa-swimming-pool", title: "Infinity Pools", description: "Panoramic lagoon views" },
    { icon: "fa-utensils", title: "Michelin Dining", description: "Award-winning restaurants" },
    { icon: "fa-concierge-bell", title: "24/7 Concierge", description: "Personal butler service" },
    { icon: "fa-helicopter", title: "Helipad", description: "Private arrivals" },
    { icon: "fa-gem", title: "Private Beach", description: "Exclusive crystal waters" },
    { icon: "fa-car", title: "Luxury Fleet", description: "Rolls Royce transfers" },
    { icon: "fa-wine-glass-alt", title: "Wine Cellar", description: "Rare vintage collection" }
  ];

  const vegasAmenities = [
    { icon: "fa-dice", title: "Casino", description: "World-class gaming" },
    { icon: "fa-theater-masks", title: "Shows", description: "Nightly entertainment" },
    { icon: "fa-cocktail", title: "Lounges", description: "VIP nightlife" },
    { icon: "fa-music", title: "Live Music", description: "Top performers" },
    { icon: "fa-crown", title: "High Roller", description: "Exclusive gaming suites" },
    { icon: "fa-concierge-bell", title: "Concierge", description: "24/7 service" }
  ];

  const tulumAmenities = [
    { icon: "fa-water", title: "Crystal Lagoon", description: "Crystal Lagoons technology" },
    { icon: "fa-music", title: "Water Concerts", description: "Floating stage shows" },
    { icon: "fa-leaf", title: "Eco-Luxury", description: "Sustainable design" },
    { icon: "fa-fire", title: "Beach Bonfires", description: "Nightly gatherings" },
    { icon: "fa-umbrella-beach", title: "Private Pier", description: "Kayaks & paddleboards" },
    { icon: "fa-moon", title: "Stargazing", description: "Rooftop terraces" }
  ];

  return (
    <section id="hotel" className="py-20 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Hotels Collection"
          subtitle="Three distinctive experiences, each designed to create unforgettable memories in their own unique style."
        />

        <Tabs defaultValue="palace" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto">
            <TabsTrigger value="palace" className="flex flex-col py-4 px-2 data-[state=active]:bg-yellow-50" data-testid="tab-palace">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-xs mx-0.5"></i>
                ))}
              </div>
              <span className="font-serif font-bold text-sm md:text-base">The Palace</span>
            </TabsTrigger>
            <TabsTrigger value="casino" className="flex flex-col py-4 px-2 data-[state=active]:bg-red-50" data-testid="tab-casino">
              <div className="flex mb-1">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-red-500 text-xs mx-0.5"></i>
                ))}
              </div>
              <span className="font-serif font-bold text-sm md:text-base">Casino Resort</span>
            </TabsTrigger>
            <TabsTrigger value="cabanas" className="flex flex-col py-4 px-2 data-[state=active]:bg-teal-50" data-testid="tab-cabanas">
              <div className="flex mb-1">
                {[...Array(3)].map((_, i) => (
                  <i key={i} className="fas fa-star text-teal-500 text-xs mx-0.5"></i>
                ))}
              </div>
              <span className="font-serif font-bold text-sm md:text-base">Laguna Cabanas</span>
            </TabsTrigger>
          </TabsList>

          {/* 5-STAR SUPER LUXURY HOTEL */}
          <TabsContent value="palace" className="mt-0">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-3xl mx-1"></i>
                ))}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                The Lago Bravo Palace
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The pinnacle of ultra-luxury hospitality. An exclusive sanctuary where every desire is anticipated and every moment is perfection.
              </p>
            </div>

            <div className="relative mb-12">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="The Lago Bravo Palace - 5 Star Super Luxury"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">ULTRA LUXURY</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">150 Suites</span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4">Where Dreams Become Reality</h4>
                  <p className="text-lg md:text-xl text-white/90">
                    Experience the world's finest amenities with dedicated butler service, private helipad, Michelin-starred dining, and an exclusive spa sanctuary. Each suite offers breathtaking views of the crystal lagoon.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8">
              {fiveStarAmenities.map((amenity, index) => (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-3 bg-yellow-400/20 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                    <i className={`fas ${amenity.icon} text-xl text-yellow-600 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{amenity.title}</h4>
                  <p className="text-xs text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* 4-STAR VEGAS STYLE CASINO HOTEL */}
          <TabsContent value="casino" className="mt-0">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fas fa-star text-red-500 text-3xl mx-1"></i>
                ))}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                The Lago Bravo Casino Resort
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vegas-style glamour meets Caribbean paradise. The ultimate destination for entertainment, gaming, and unforgettable nights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Casino Gaming Floor"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-serif font-bold mb-2">World-Class Casino</h4>
                  <p className="text-white/90">50,000 sq ft of premium gaming with VIP high-roller lounges</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Entertainment and Shows"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-serif font-bold mb-2">Nightly Entertainment</h4>
                  <p className="text-white/90">World-famous performers, shows, and exclusive parties</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-500 px-4 py-1 rounded-full text-sm font-bold">VEGAS STYLE</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">300 Rooms</span>
                  </div>
                  <h4 className="text-3xl font-serif font-bold mb-4">Where Fortune Meets Luxury</h4>
                  <p className="text-lg text-white/90">
                    Experience the thrill of Las Vegas in paradise. From high-stakes gaming to spectacular shows, enjoy 24/7 entertainment with premium accommodations and world-class dining.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {vegasAmenities.map((amenity, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center">
                        <i className={`fas ${amenity.icon} text-lg text-white`}></i>
                      </div>
                      <h5 className="font-semibold text-sm">{amenity.title}</h5>
                      <p className="text-xs text-white/70">{amenity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* 3-STAR TULUM STYLE CABANAS */}
          <TabsContent value="cabanas" className="mt-0">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(3)].map((_, i) => (
                  <i key={i} className="fas fa-star text-teal-500 text-3xl mx-1"></i>
                ))}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Laguna Cabanas by Crystal Lagoons
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tulum-inspired bohemian luxury on the shores of our stunning artificial Crystal Lagoon. Where nature, music, and magic unite.
              </p>
            </div>

            <div className="relative mb-12">
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Crystal Lagoon with Floating Stage"
                className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-teal-500 px-4 py-1 rounded-full text-sm font-bold">TULUM STYLE</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">80 Cabanas</span>
                    <span className="bg-cyan-400/30 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
                      <i className="fas fa-water mr-1"></i> Crystal Lagoons®
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif font-bold mb-4">Concerts on the Water</h4>
                  <p className="text-lg md:text-xl text-white/90">
                    Imagine watching world-class artists perform on a floating stage while you relax in the crystal-clear waters of our artificial lagoon built with Crystal Lagoons technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border-2 border-teal-100">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Beachfront Cabana"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">Lagoon-Front Cabana</h4>
                  <p className="text-gray-600 mb-4">Step directly into the crystal waters from your private terrace.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Direct lagoon access
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Concert views
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border-2 border-teal-100">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Garden Cabana"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">Garden Cabana</h4>
                  <p className="text-gray-600 mb-4">Nestled in tropical gardens with rooftop stargazing terrace.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Rooftop terrace
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Private hammock
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border-2 border-teal-100">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80"
                    alt="Overwater Suite"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">Overwater Suite</h4>
                  <p className="text-gray-600 mb-4">Floating bungalow with glass floor and swim platform.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Glass floor panels
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check text-teal-600 mr-2"></i> Swim platform
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-3 gap-4">
                  {tulumAmenities.map((amenity, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 mx-auto mb-2 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                        <i className={`fas ${amenity.icon} text-lg text-teal-600 group-hover:text-white transition-colors duration-300`}></i>
                      </div>
                      <h5 className="font-semibold text-gray-800 text-sm">{amenity.title}</h5>
                      <p className="text-xs text-gray-600">{amenity.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-primary mb-4">The Magic of Crystal Lagoons</h4>
                  <p className="text-gray-700">
                    Our stunning artificial lake is built using Crystal Lagoons® technology, creating Caribbean-blue waters in the heart of the resort. Enjoy water sports, floating concerts, and sunset yoga sessions in pristine, crystal-clear waters.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
