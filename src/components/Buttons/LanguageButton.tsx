import "./Button.css";

interface LanguageButtonProps {
  language: "en" | "es";
  onToggle: () => void;
}

const LanguageButton = ({ language, onToggle }: LanguageButtonProps) => {
  const label = language === "es" ? "Cambiar a inglés" : "Switch to Spanish";

  return (
    <button
      type="button"
      className="floating-button language-toggle"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      {language === "en" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageButton;
