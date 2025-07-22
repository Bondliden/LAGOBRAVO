import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

export default function Nightlife() {
  const venues = [
    {
      name: "VIP Lounge",
      subtitle: "Exclusive Club",
      description: "Ultra-exclusive nightlife experience with premium service and sophisticated ambiance.",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
      features: [
        { icon: "fas fa-star", text: "VIP service", color: "lago-gold" },
        { icon: "fas fa-cocktail", text: "Premium cocktails", color: "lago-gold" },
        { icon: "fas fa-music", text: "Live DJ", color: "lago-gold" },
        { icon: "fas fa-lock", text: "Exclusive access", color: "lago-gold" }
      ],
      buttonClass: "bg-yellow-500 text-black hover:bg-yellow-400"
    },
    {
      name: "Sophisticated Nightclub",
      subtitle: "Premium Club",
      description: "Elegant nightclub featuring world-class DJs and sophisticated interior design.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        { icon: "fas fa-headphones", text: "World-class DJs", color: "lago-accent" },
        { icon: "fas fa-volume-up", text: "Premium sound system", color: "lago-accent" },
        { icon: "fas fa-palette", text: "Elegant design", color: "lago-accent" },
        { icon: "fas fa-crown", text: "VIP tables", color: "lago-accent" }
      ],
      buttonClass: "bg-pink-600 text-white hover:bg-pink-500"
    }
  ];

  const events = [
    {
      title: "Saturday Night Fever",
      schedule: "Saturdays • 22:00 - 04:00 • 21+ • Smart Elegant",
      description: "The ultimate Saturday night experience with international DJs and premium cocktails.",
      buttonClass: "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
    },
    {
      title: "Sunset Sessions",
      schedule: "Daily • 18:00 - 24:00 • 18+ • Smart Casual",
      description: "Sophisticated evening atmosphere with craft cocktails and ambient music.",
      buttonClass: "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
    },
    {
      title: "Midnight Elegance",
      schedule: "Fri & Sat • 23:00 - 05:00 • 25+ • Black Tie Optional",
      description: "Exclusive nightclub experience with world-class DJs and VIP bottle service.",
      buttonClass: "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
    }
  ];

  return (
    <section id="nightlife" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Exclusive Nightlife"
          subtitle="Experience the sophisticated nightlife scene at Lago Bravo World Resort, where elegance meets excitement in our exclusive venues and premium entertainment offerings."
          className="text-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {venues.map((venue, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
              <img 
                src={venue.image}
                alt={venue.name}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-serif font-bold mb-2">{venue.name}</h3>
              <p className="text-gray-300 mb-4">{venue.subtitle}</p>
              <p className="text-gray-400 mb-6">{venue.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {venue.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <i className={`${feature.icon} ${feature.color} w-4 mr-2`}></i>
                    {feature.text}
                  </div>
                ))}
              </div>
              
              <Button className={`w-full font-semibold ${venue.buttonClass}`}>
                Reserve VIP Table
              </Button>
            </div>
          ))}
        </div>
        
        {/* Weekly Events */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Weekly Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6">
                <h4 className="text-xl font-serif font-bold mb-2">{event.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{event.schedule}</p>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <Button className={`w-full ${event.buttonClass} transition-colors`}>
                  Get Guest List
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <i className="fas fa-cocktail text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">Craft Cocktails</h4>
            <p className="text-sm text-gray-400">Master mixologists creating innovative cocktails with premium spirits and fresh ingredients.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-music text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">International DJs</h4>
            <p className="text-sm text-gray-400">World-renowned DJs and live performers creating unforgettable musical experiences.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-crown text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">VIP Experience</h4>
            <p className="text-sm text-gray-400">Exclusive VIP areas with bottle service, private tables, and personalized attention.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-gem text-3xl lago-gold mb-4"></i>
            <h4 className="font-semibold mb-2">Elegant Atmosphere</h4>
            <p className="text-sm text-gray-400">Sophisticated ambiance with premium design, lighting, and world-class service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
