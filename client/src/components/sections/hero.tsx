import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import lagobravoLogoPath from "@assets/Lago Bravo_1753205553192.png";
import heroVideoPath from "@assets/1231_1767173951160.mp4";
import { useLanguage } from "@/i18n";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mb-0">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoPath} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        {/* Main Logo Placement */}
        <div className="mb-8">
          <img
            src={lagobravoLogoPath}
            alt="Lago Bravo Integrated Resorts"
            className="h-24 w-auto mx-auto mb-4"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          {t('home.hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/golf">
            <Button
              size="lg"
              className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white px-8 py-6 text-lg"
              data-testid="button-golf"
            >
              {t('home.hero.golf')}
            </Button>
          </Link>
          <Link href="/accommodations">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              data-testid="button-explore"
            >
              {t('home.hero.cta')}
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0D9488] hover:bg-white/90 px-8 py-6 text-lg"
              data-testid="button-book"
            >
              {t('home.hero.book')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
