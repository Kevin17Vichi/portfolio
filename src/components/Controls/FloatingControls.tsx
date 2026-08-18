import "./FloatingControls.css";
import PowerButton from "../Buttons/PowerButton";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { useLanguageToggle } from "../../hooks/useLanguageToggle";

const FloatingControls = () => {
  const { language, toggleLanguage } = useLanguageToggle();
  const { isPlaying, togglePlayPause } = useAudioPlayer();

  return (
    <div className="music-controls">
      <button
        type="button"
        className="language-toggle"
        onClick={toggleLanguage}
        aria-label="Cambiar idioma"
      >
        {language === "en" ? "EN" : "ES"}
      </button>

      <div className="power-button-wrapper" onClick={togglePlayPause}>
        <PowerButton isPlaying={isPlaying} />
      </div>
    </div>
  );
};

export default FloatingControls;
