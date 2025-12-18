import { Link } from "wouter";
import lagobravoLogoPath from "@assets/Lago Bravo_1753205553192.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src={lagobravoLogoPath} 
                alt="Lago Bravo Integrated Resorts" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold">LAGO BRAVO</h3>
                <p className="text-gray-400 font-medium">INTEGRATED RESORTS</p>
              </div>
            </Link>
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
                <Link href="/golf" className="text-gray-300 hover:text-white transition-colors">
                  Golf
                </Link>
              </li>
              <li>
                <Link href="/marina" className="text-gray-300 hover:text-white transition-colors">
                  Marina
                </Link>
              </li>
              <li>
                <Link href="/residences" className="text-gray-300 hover:text-white transition-colors">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-gray-300 hover:text-white transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/weddings" className="text-gray-300 hover:text-white transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/casino" className="text-gray-300 hover:text-white transition-colors">
                  Casino
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-300 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/nightlife" className="text-gray-300 hover:text-white transition-colors">
                  Nightlife
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="lago-gold font-semibold">info@lagobravo.com</p>
                <p className="text-gray-400 text-sm">All Inquiries</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Lago Bravo Integrated Resorts. All rights reserved.
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
