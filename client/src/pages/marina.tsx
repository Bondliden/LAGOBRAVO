import Navigation from "@/components/navigation";
import Marina from "@/components/sections/marina";
import Footer from "@/components/footer";

export default function MarinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Marina />
      </div>
      <Footer />
    </div>
  );
}
