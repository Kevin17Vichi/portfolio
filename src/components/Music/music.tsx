import { useState, useRef, useEffect } from "react";
import PowerButton from "../Boton/PowerButton";
import { useLanguage } from "../../context/LanguageContext";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language, setLanguage } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      const audio = new Audio("/lovely2.mp3");
      audio.onended = () => {
        audio.currentTime = 0;
        audio.play();
        console.log("🔄 Reiniciando reproducción");
      };
      audioRef.current = audio;
      console.log("🎵 Audio inicializado correctamente");
    } catch (error) {
      console.error("❌ Error al inicializar audio:", error);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        console.log("🔄 Audio limpiado en cleanup");
      }
    };
  }, []);

  const handleToggleMusic = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!audioRef.current) {
      console.error("❌ Referencia de audio no disponible");
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        console.log("⏸️ Audio pausado");
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        console.log("▶️ Audio reproduciendo");
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("❌ Error al manipular audio:", error);
      setIsPlaying(false);
    }
  };

  const handleLanguageToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="music-controls">
      <button
        type="button"
        className="language-toggle"
        onClick={handleLanguageToggle}
        aria-label="Cambiar idioma"
      >
        {language === "en" ? "EN" : "ES"}
      </button>

      <div onClick={handleToggleMusic}>
        <PowerButton isPlaying={isPlaying} />
      </div>
    </div>
  );
};

export default Music;
