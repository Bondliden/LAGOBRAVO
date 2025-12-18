import Navigation from "@/components/navigation";
import Golf from "@/components/sections/golf";
import Footer from "@/components/footer";

export default function GolfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Golf />
      </div>
      <Footer />
    </div>
  );
}
