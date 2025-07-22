import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function Weddings() {
  const packages = [
    {
      name: "Silver Exclusive",
      guests: "Up to 150 guests",
      features: [
        "3-star accommodation for 2 nights",
        "Basic venue decoration",
        "Standard catering package"
      ],
      bgClass: "bg-gradient-to-br from-gray-50 to-gray-100"
    },
    {
      name: "Gold Premium",
      guests: "Up to 200 guests",
      features: [
        "4-star accommodation for 2 nights",
        "Premium venue decoration",
        "Premium catering package",
        "Photography service"
      ],
      bgClass: "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300"
    },
    {
      name: "Platinum Elite",
      guests: "Up to 300 guests",
      features: [
        "5-star accommodation for 3 nights",
        "Complete venue decoration",
        "Gourmet catering for all guests",
        "Professional photography & videography",
        "Honeymoon suite upgrade"
      ],
      bgClass: "bg-gradient-to-br from-primary/5 to-primary/15"
    }
  ];

  return (
    <section id="weddings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Lago Bravo Wedding Center"
          subtitle="The ultimate destination for luxury weddings and exclusive celebrations. Our dedicated wedding center offers personalized planning services, exquisite venues, and unforgettable experiences."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80"
              alt="Garden wedding venue" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Luxury Wedding Planning</h3>
                <p className="text-gray-700 mb-4">Complete wedding planning services with dedicated coordinators</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-check lago-accent w-4 mr-3"></i>
                    Personal wedding coordinator
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-check lago-accent w-4 mr-3"></i>
                    Vendor management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-check lago-accent w-4 mr-3"></i>
                    Timeline coordination
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-check lago-accent w-4 mr-3"></i>
                    Day-of coordination
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Additional Services</h3>
                <p className="text-gray-700 mb-4">Extra services to enhance your wedding experience</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-music lago-accent w-4 mr-3"></i>
                    Live entertainment & DJ services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-seedling lago-accent w-4 mr-3"></i>
                    Floral arrangements & decoration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-car lago-accent w-4 mr-3"></i>
                    Luxury transportation for guests
                  </li>
                  <li className="flex items-center text-gray-700">
                    <i className="fas fa-spa lago-accent w-4 mr-3"></i>
                    Group spa packages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wedding Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`${pkg.bgClass} p-8 rounded-2xl`}>
              <h4 className="text-xl font-serif font-bold text-primary mb-4">{pkg.name}</h4>
              <p className="text-gray-600 mb-6">{pkg.guests}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-check lago-teal w-4 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Start Planning Your Dream Wedding</h3>
          <p className="text-gray-700 mb-6">Contact our wedding specialists for a personalized consultation</p>
          <div className="space-y-2 mb-8">
            <div>
              <p className="font-semibold text-primary">Wedding Director</p>
              <p className="text-sm text-gray-600">Wedding Center Director</p>
            </div>
            <div>
              <p className="font-semibold text-primary">+1 800 WEDDING-VIP</p>
              <p className="text-sm text-gray-600">Phone</p>
            </div>
            <div>
              <p className="font-semibold text-primary">weddings@lagobravo.com</p>
              <p className="text-sm text-gray-600">Email</p>
            </div>
          </div>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
