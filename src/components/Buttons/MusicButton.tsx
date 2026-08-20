import "./Button.css";

interface MusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
  language: "en" | "es";
}

const MusicButton = ({ isPlaying, onToggle, language }: MusicButtonProps) => {
  const label =
    language === "es"
      ? isPlaying
        ? "Pausar música"
        : "Reproducir música"
      : isPlaying
      ? "Pause music"
      : "Play music";

  return (
    <button
      type="button"
      className="floating-button music-icon-btn"
      aria-label={label}
      aria-pressed={isPlaying}
      onClick={onToggle}
      title={label}
    >
      {isPlaying ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M9 17v-13h10v13" />
          <path d="M9 8h10" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
          <path d="M9 17v-8m0 -4v-1h10v11" />
          <path d="M12 8h7" />
          <path d="M3 3l18 18" />
        </svg>
      )}
    </button>
  );
};

export default MusicButton;
