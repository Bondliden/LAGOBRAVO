import Navigation from "@/components/navigation";
import Casino from "@/components/sections/casino";
import Footer from "@/components/footer";

export default function CasinoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Casino />
      </div>
      <Footer />
    </div>
  );
}
