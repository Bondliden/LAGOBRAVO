import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";

export default function Home() {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey: "experiences.hotels.title",
      descriptionKey: "experiences.hotels.description",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/hotel",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      titleKey: "experiences.golf.title",
      descriptionKey: "experiences.golf.description",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/golf",
      color: "from-green-600 to-green-800"
    },
    {
      titleKey: "experiences.marina.title",
      descriptionKey: "experiences.marina.description",
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/marina",
      color: "from-blue-600 to-blue-800"
    },
    {
      titleKey: "experiences.residences.title",
      descriptionKey: "experiences.residences.description",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      href: "/residences",
      color: "from-amber-600 to-amber-800"
    },
    {
      titleKey: "experiences.accommodations.title",
      descriptionKey: "experiences.accommodations.description",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
      href: "/accommodations",
      color: "from-purple-600 to-purple-800"
    },
    {
      titleKey: "experiences.weddings.title",
      descriptionKey: "experiences.weddings.description",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/weddings",
      color: "from-pink-600 to-pink-800"
    },
    {
      titleKey: "experiences.casino.title",
      descriptionKey: "experiences.casino.description",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/casino",
      color: "from-red-600 to-red-800"
    },
    {
      titleKey: "experiences.dining.title",
      descriptionKey: "experiences.dining.description",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/dining",
      color: "from-orange-600 to-orange-800"
    },
    {
      titleKey: "experiences.events.title",
      descriptionKey: "experiences.events.description",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/events",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      titleKey: "experiences.nightlife.title",
      descriptionKey: "experiences.nightlife.description",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      href: "/nightlife",
      color: "from-violet-600 to-violet-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      
      {/* Experience Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              {t('experiences.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('experiences.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Link key={index} href={exp.href}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80">
                  <img 
                    src={exp.image} 
                    alt={t(exp.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {t(exp.titleKey)}
                    </h3>
                    <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {t(exp.descriptionKey)}
                    </p>
                    <div className="mt-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <span className="inline-flex items-center text-sm font-semibold">
                        {t('common.learnMore')} <i className="fas fa-arrow-right ml-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6">
                {t('experiences.bookExperience')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
