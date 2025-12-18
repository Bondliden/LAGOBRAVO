import Navigation from "@/components/navigation";
import Nightlife from "@/components/sections/nightlife";
import Footer from "@/components/footer";

export default function NightlifePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Nightlife />
      </div>
      <Footer />
    </div>
  );
}
