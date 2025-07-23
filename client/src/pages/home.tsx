import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Golf from "@/components/sections/golf";
import Marina from "@/components/sections/marina";
import Accommodations from "@/components/sections/accommodations";
import Weddings from "@/components/sections/weddings";
import Casino from "@/components/sections/casino";
import Events from "@/components/sections/events";
import Dining from "@/components/sections/dining";
import Nightlife from "@/components/sections/nightlife";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Golf />
      <Marina />
      <Accommodations />
      <Weddings />
      <Casino />
      <Events />
      <Dining />
      <Nightlife />
      <Contact />
      <Footer />
    </div>
  );
}
