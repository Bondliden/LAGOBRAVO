import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section className="py-20 bg-white mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="About Lago Bravo"
              className="text-left mb-6"
            />
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A premier integrated luxury resort destination featuring the world's largest Crystal Lagoons, 
              offering world-class entertainment, exclusive nightlife, and unparalleled hospitality across 
              stunning global locations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Premium</div>
                <div className="text-sm text-gray-600">Airport Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Global</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Exclusive</div>
                <div className="text-sm text-gray-600">Waterfront Access</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="fas fa-water lago-teal text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Crystal Lagoons Technology</h4>
                  <p className="text-gray-600">Experience the world's largest man-made crystal clear lagoons with pristine turquoise waters and white sand beaches.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-building text-primary text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Integrated Resort Destination</h4>
                  <p className="text-gray-600">A complete luxury experience featuring hotels, villas, casino, dining, and entertainment in one spectacular location.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="fas fa-star lago-gold text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">PORCELANOSA Finishes</h4>
                  <p className="text-gray-600">All interior finishes and kitchen furniture crafted by PORCELANOSA PARTNERS, ensuring the highest quality luxury.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant hotel lobby interior" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
