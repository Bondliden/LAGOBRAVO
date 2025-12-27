import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/translations";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 text-sm font-medium border-gray-300 hover:bg-gray-50"
      data-testid="button-language-toggle"
    >
      <i className="fas fa-globe text-sm"></i>
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}
