import lagobravoLogoPath from "@assets/lago-bravo-logo_1753204556550.webp";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            {/* Footer Logo */}
            <div className="flex items-center mb-6">
              <img 
                src={lagobravoLogoPath} 
                alt="Lago Bravo World Resort" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold">LAGO BRAVO</h3>
                <p className="text-gray-400 font-medium">WORLD RESORT</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A premier integrated luxury resort destination offering world-class entertainment, 
              exclusive nightlife, and unparalleled hospitality across stunning global locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('accommodations')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Accommodations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('weddings')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Weddings
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('casino')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Casino
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dining')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Dining
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('events')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Events
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('nightlife')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Nightlife
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="lago-gold font-semibold">+1 800 LAGO-BRAVO</p>
                <p className="text-gray-400 text-sm">24/7 Reservations</p>
              </div>
              <div>
                <p className="text-white">reservations@lagobravo.com</p>
                <p className="text-gray-400 text-sm">General Inquiries</p>
              </div>
              <div>
                <p className="text-white">weddings@lagobravo.com</p>
                <p className="text-gray-400 text-sm">Wedding Planning</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Lago Bravo World Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
