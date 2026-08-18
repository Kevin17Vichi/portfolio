import "./Button.css";

interface LanguageButtonProps {
  language: "en" | "es";
  onToggle: () => void;
}

const LanguageButton = ({ language, onToggle }: LanguageButtonProps) => {
  return (
    <button
      type="button"
      className="floating-button language-toggle"
      onClick={onToggle}
      aria-label="Cambiar idioma"
    >
      {language === "en" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageButton;
