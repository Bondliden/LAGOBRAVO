import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import lagobravoLogoPath from "@assets/Lago Bravo_1753205553192.png";
import LanguageToggle from "@/components/language-toggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-4 min-w-0 flex-shrink-0 mr-8">
            <img 
              src={lagobravoLogoPath} 
              alt="Lago Bravo Integrated Resorts" 
              className="h-10 w-auto flex-shrink-0"
            />
            <div className="hidden md:block min-w-0 flex-shrink-0">
              <div className="text-sm font-serif font-bold lago-navy leading-tight whitespace-nowrap">LAGO BRAVO</div>
              <div className="text-[9px] text-gray-600 font-medium tracking-wide whitespace-nowrap">INTEGRATED RESORTS</div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('golf')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Golf
            </button>
            <button 
              onClick={() => scrollToSection('marina')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Marina
            </button>
            <button 
              onClick={() => scrollToSection('real-estate')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Residences
            </button>
            <button 
              onClick={() => scrollToSection('accommodations')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Accommodations
            </button>
            <button 
              onClick={() => scrollToSection('weddings')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Weddings
            </button>
            <button 
              onClick={() => scrollToSection('casino')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Casino
            </button>
            <button 
              onClick={() => scrollToSection('dining')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Dining
            </button>
            <button 
              onClick={() => scrollToSection('events')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('nightlife')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Nightlife
            </button>
            <div className="flex items-center space-x-4 ml-8">
              <LanguageToggle />
              <div className="text-right">
                <p className="text-sm font-semibold text-primary">info@lagobravo.com</p>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary text-white hover:bg-primary/90"
              >
                Book Now
              </Button>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            <i className="fas fa-bars text-2xl text-primary"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('golf')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Golf
              </button>
              <button 
                onClick={() => scrollToSection('marina')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Marina
              </button>
              <button 
                onClick={() => scrollToSection('real-estate')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Residences
              </button>
              <button 
                onClick={() => scrollToSection('accommodations')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Accommodations
              </button>
              <button 
                onClick={() => scrollToSection('weddings')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Weddings
              </button>
              <button 
                onClick={() => scrollToSection('casino')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Casino
              </button>
              <button 
                onClick={() => scrollToSection('dining')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Dining
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('nightlife')}
                className="text-left text-gray-700 hover:text-primary font-medium transition-colors py-2"
              >
                Nightlife
              </button>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm font-semibold text-primary">info@lagobravo.com</p>
                  </div>
                  <LanguageToggle />
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full bg-primary text-white hover:bg-primary/90"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
