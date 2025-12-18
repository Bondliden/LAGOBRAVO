import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import lagobravoLogoPath from "@assets/Lago Bravo_1753205553192.png";
import LanguageToggle from "@/components/language-toggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/golf", label: "Golf" },
    { href: "/marina", label: "Marina" },
    { href: "/residences", label: "Residences" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/weddings", label: "Weddings" },
    { href: "/casino", label: "Casino" },
    { href: "/dining", label: "Dining" },
    { href: "/events", label: "Events" },
    { href: "/nightlife", label: "Nightlife" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="flex items-center space-x-4 min-w-0 flex-shrink-0 mr-8">
            <img 
              src={lagobravoLogoPath} 
              alt="Lago Bravo Integrated Resorts" 
              className="h-10 w-auto flex-shrink-0"
            />
            <div className="hidden md:block min-w-0 flex-shrink-0">
              <div className="text-sm font-serif font-bold lago-navy leading-tight whitespace-nowrap">LAGO BRAVO</div>
              <div className="text-[9px] text-gray-600 font-medium tracking-wide whitespace-nowrap">INTEGRATED RESORTS</div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`text-teal-600 hover:text-teal-800 font-medium transition-colors ${
                  location === item.href ? 'text-teal-800 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <LanguageToggle />
              <div className="text-right">
                <p className="text-sm font-semibold text-primary">info@lagobravo.com</p>
              </div>
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-2xl text-primary"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`text-left text-teal-600 hover:text-teal-800 font-medium transition-colors py-2 ${
                    location === item.href ? 'text-teal-800 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm font-semibold text-primary">info@lagobravo.com</p>
                  </div>
                  <LanguageToggle />
                </div>
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
