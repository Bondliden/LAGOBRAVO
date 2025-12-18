import Navigation from "@/components/navigation";
import Weddings from "@/components/sections/weddings";
import Footer from "@/components/footer";

export default function WeddingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Weddings />
      </div>
      <Footer />
    </div>
  );
}
