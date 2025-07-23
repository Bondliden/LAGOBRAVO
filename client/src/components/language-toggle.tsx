import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    
    // Store language preference
    localStorage.setItem('preferred-language', newLanguage);
    
    // Trigger page translation (this would integrate with a translation service)
    document.documentElement.lang = newLanguage;
    
    // Simple alert for now - in production this would trigger actual translation
    const message = newLanguage === 'es' 
      ? 'Funcionalidad de traducción al español próximamente disponible'
      : 'Spanish translation functionality coming soon';
    
    alert(message);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 text-sm font-medium border-gray-300 hover:bg-gray-50"
    >
      <i className="fas fa-globe text-sm"></i>
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}