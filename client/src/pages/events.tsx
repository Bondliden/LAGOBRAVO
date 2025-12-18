import Navigation from "@/components/navigation";
import Events from "@/components/sections/events";
import Footer from "@/components/footer";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Events />
      </div>
      <Footer />
    </div>
  );
}
