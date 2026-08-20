import "./Button.css";
import CvButton from "./CvButton";
import LanguageButton from "./LanguageButton";
import MusicButton from "./MusicButton";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { useLanguageToggle } from "../../hooks/useLanguageToggle";

const FloatingControls = () => {
  const { language, toggleLanguage } = useLanguageToggle();
  const { isPlaying, togglePlayPause } = useAudioPlayer();

  return (
    <nav className="music-controls" aria-label="Controles flotantes">
      <CvButton language={language} />
      <LanguageButton language={language} onToggle={toggleLanguage} />
      <MusicButton language={language} isPlaying={isPlaying} onToggle={togglePlayPause} />
    </nav>
  );
};

export default FloatingControls;
