import "./Button.css";
import LanguageButton from "./LanguageButton";
import MusicButton from "./MusicButton";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { useLanguageToggle } from "../../hooks/useLanguageToggle";

const FloatingControls = () => {
  const { language, toggleLanguage } = useLanguageToggle();
  const { isPlaying, togglePlayPause } = useAudioPlayer();

  return (
    <nav className="music-controls" aria-label="Controles flotantes">
      <LanguageButton language={language} onToggle={toggleLanguage} />
      <MusicButton isPlaying={isPlaying} onToggle={togglePlayPause} />
    </nav>
  );
};

export default FloatingControls;
