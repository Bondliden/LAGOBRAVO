import Navigation from "@/components/navigation";
import RealEstate from "@/components/sections/real-estate";
import Footer from "@/components/footer";

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <RealEstate />
      </div>
      <Footer />
    </div>
  );
}
