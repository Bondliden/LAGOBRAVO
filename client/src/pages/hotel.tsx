import Navigation from "@/components/navigation";
import Hotel from "@/components/sections/hotel";
import Footer from "@/components/footer";

export default function HotelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Hotel />
      </div>
      <Footer />
    </div>
  );
}
