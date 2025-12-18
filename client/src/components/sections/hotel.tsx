import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { Link } from "wouter";

export default function Hotel() {
  const suites = [
    {
      name: "Presidential Suite",
      size: "250 m²",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "The pinnacle of luxury with panoramic lagoon views, private terrace, and 24-hour butler service.",
      features: ["Private terrace", "Jacuzzi", "Butler service", "Panoramic views"]
    },
    {
      name: "Royal Suite",
      size: "180 m²",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      description: "Elegant accommodations with separate living area, marble bathroom, and exclusive amenities.",
      features: ["Living room", "Marble bathroom", "King bed", "Ocean view"]
    },
    {
      name: "Grand Deluxe Room",
      size: "65 m²",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Spacious rooms with premium bedding, rain shower, and balcony with garden or pool views.",
      features: ["Private balcony", "Rain shower", "Mini bar", "Garden view"]
    }
  ];

  const amenities = [
    { icon: "fa-spa", title: "World-Class Spa", description: "Rejuvenating treatments and wellness programs" },
    { icon: "fa-swimming-pool", title: "Infinity Pools", description: "Multiple pools with stunning lagoon views" },
    { icon: "fa-utensils", title: "Gourmet Dining", description: "5 restaurants and 3 bars with celebrity chefs" },
    { icon: "fa-concierge-bell", title: "24/7 Concierge", description: "Personalized service around the clock" },
    { icon: "fa-dumbbell", title: "Fitness Center", description: "State-of-the-art gym and personal trainers" },
    { icon: "fa-car", title: "Valet Parking", description: "Complimentary luxury car service" }
  ];

  return (
    <section id="hotel" className="py-20 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star text-yellow-400 text-2xl mx-1"></i>
            ))}
          </div>
        </div>
        
        <SectionHeading
          title="Lago Bravo Grand Hotel"
          subtitle="Experience unparalleled luxury at our flagship 5-star hotel, where world-class service meets breathtaking elegance overlooking the crystal lagoon."
        />

        <div className="relative mb-20">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Lago Bravo Grand Hotel"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">A New Standard in Luxury</h3>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              200 meticulously designed rooms and suites, each offering a sanctuary of comfort with stunning views of the lagoon, golf course, or tropical gardens.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Reserve Your Stay
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">Signature Suites</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suites.map((suite, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">{suite.size}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">{suite.name}</h4>
                  <p className="text-gray-600 mb-4">{suite.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {suite.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-check text-teal-600 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-serif font-bold text-primary text-center mb-12">World-Class Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <i className={`fas ${amenity.icon} text-2xl text-primary group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{amenity.title}</h4>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Book Your 5-Star Experience
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
