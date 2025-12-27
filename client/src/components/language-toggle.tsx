import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languageNames, Language } from "@/lib/translations";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages = Object.entries(languageNames) as [Language, { name: string; flag: string }][];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-sm font-medium border-gray-300 hover:bg-gray-50"
          data-testid="button-language-toggle"
        >
          <span className="text-lg">{languageNames[language].flag}</span>
          <span className="hidden sm:inline">{languageNames[language].name}</span>
          <i className="fas fa-chevron-down text-xs"></i>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 max-h-80 overflow-y-auto">
        {languages.map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code)}
            className={`flex items-center gap-3 cursor-pointer ${language === code ? 'bg-primary/10 font-semibold' : ''}`}
            data-testid={`language-option-${code}`}
          >
            <span className="text-lg">{flag}</span>
            <span>{name}</span>
            {language === code && <i className="fas fa-check ml-auto text-primary"></i>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
