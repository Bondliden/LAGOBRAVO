import Navigation from "@/components/navigation";
import Dining from "@/components/sections/dining";
import Footer from "@/components/footer";

export default function DiningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Dining />
      </div>
      <Footer />
    </div>
  );
}
