import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import lagobravoLogoPath from "@assets/Lago Bravo_1753205553192.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        {/* Main Logo Placement */}
        <div className="mb-8">
          <img 
            src={lagobravoLogoPath} 
            alt="Lago Bravo Integrated Resorts" 
            className="h-24 w-auto mx-auto mb-4"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          LAGO BRAVO
          <span className="block text-3xl md:text-4xl font-light mt-2">INTEGRATED RESORTS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">Where Luxury Meets Adventure</p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          A premier integrated luxury resort destination offering world-class entertainment, 
          exclusive nightlife, and unparalleled hospitality across stunning global locations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/golf">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Championship Golf
            </Button>
          </Link>
          <Link href="/accommodations">
            <Button 
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-4 text-lg font-semibold"
            >
              Explore Resort
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Book Your Stay
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5-Star</div>
            <div className="text-sm opacity-90">Luxury Resort</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">114</div>
            <div className="text-sm opacity-90">Exclusive Plots</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">350+</div>
            <div className="text-sm opacity-90">Accommodations</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">365</div>
            <div className="text-sm opacity-90">Days of Luxury</div>
          </div>
        </div>
      </div>
    </section>
  );
}
