import { useLanguage } from "../context/LanguageContext";

export const useLanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return {
    language,
    toggleLanguage,
  };
};
