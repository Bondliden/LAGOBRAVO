import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Golf() {
  const courseFeatures = [
    {
      title: "Championship 18-Hole Course",
      description: "Designed by renowned golf architect Tom Doak, featuring stunning ocean views and challenging play for all skill levels.",
      icon: "fas fa-trophy",
      color: "lago-gold"
    },
    {
      title: "PGA Professional Instruction",
      description: "Private lessons and group clinics with certified PGA professionals to improve your game.",
      icon: "fas fa-graduation-cap",
      color: "lago-teal"
    },
    {
      title: "Premium Practice Facilities",
      description: "Driving range, putting greens, and short game area with top-tier equipment and amenities.",
      icon: "fas fa-bullseye",
      color: "lago-accent"
    },
    {
      title: "Exclusive Clubhouse",
      description: "Luxury clubhouse with pro shop, fine dining, and panoramic course views.",
      icon: "fas fa-building",
      color: "lago-orange"
    }
  ];

  const packages = [
    {
      name: "Golf Getaway",
      description: "Perfect for golf enthusiasts",
      features: [
        "Luxury accommodation for 2 nights",
        "Unlimited golf on championship course",
        "Cart rental included",
        "Welcome golf package",
        "Access to practice facilities"
      ],
      highlight: false
    },
    {
      name: "Golf Master Experience",
      description: "Ultimate golf vacation",
      features: [
        "Premium suite for 3 nights",
        "Unlimited championship golf",
        "Private golf lesson with PGA pro",
        "Tournament entry privileges",
        "VIP clubhouse access",
        "Golf equipment rental"
      ],
      highlight: true
    },
    {
      name: "Corporate Golf Retreat",
      description: "Perfect for business events",
      features: [
        "Group accommodation",
        "Private tournament setup",
        "Meeting room access",
        "Team building activities",
        "Awards ceremony dinner"
      ],
      highlight: false
    }
  ];

  return (
    <section id="golf" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Championship Golf Course"
          subtitle="Experience world-class golf at our signature 18-hole championship course, featuring breathtaking ocean views and meticulously maintained fairways designed for players of all skill levels."
        />
        
        {/* Hero Golf Image */}
        <div className="mb-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Championship Golf Course" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-serif font-bold mb-2">18-Hole Championship Course</h3>
                <p className="text-xl">Designed by Tom Doak • Par 72 • 7,200 yards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {courseFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <i className={`${feature.icon} ${feature.color} text-3xl mb-4`}></i>
                <h4 className="text-lg font-serif font-bold text-primary mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Golf Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-primary mb-12">Golf Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 ${
                pkg.highlight 
                  ? 'bg-gradient-to-br from-primary/10 to-primary/20 border-2 border-primary transform scale-105' 
                  : 'bg-white/70 backdrop-blur-sm'
              }`}>
                {pkg.highlight && (
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-4">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">{pkg.name}</h4>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="fas fa-check lago-teal w-4 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${
                  pkg.highlight 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}>
                  Book Golf Package
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Course Stats & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">Course Information</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">Par 72</div>
                <div className="text-sm text-gray-600">Championship Course</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">7,200</div>
                <div className="text-sm text-gray-600">Total Yards</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">18</div>
                <div className="text-sm text-gray-600">Championship Holes</div>
              </div>
              <div className="text-center bg-white/60 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">5-Star</div>
                <div className="text-sm text-gray-600">Golf Digest Rating</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-clock lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">Operating Hours</div>
                  <div className="text-sm text-gray-600">Sunrise to Sunset, 7 days a week</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">Reservations</div>
                  <div className="text-sm text-gray-600">Book up to 30 days in advance</div>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shirt lago-gold w-6 mr-3"></i>
                <div>
                  <div className="font-semibold text-gray-900">Dress Code</div>
                  <div className="text-sm text-gray-600">Golf attire required, soft spikes only</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1535132011086-b8818f016104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Golf clubhouse and practice facilities" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-serif font-bold mb-4">Ready to Tee Off?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your golf experience at Lago Bravo's championship course and discover why Golf Digest 
            rated us among the world's finest resort courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Book Tee Time
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Golf Lesson Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}