import Navigation from "@/components/navigation";
import Accommodations from "@/components/sections/accommodations";
import Footer from "@/components/footer";

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Accommodations />
      </div>
      <Footer />
    </div>
  );
}
