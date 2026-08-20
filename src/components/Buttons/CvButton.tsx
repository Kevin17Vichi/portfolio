import "./Button.css";

interface CvButtonProps {
  language?: "en" | "es";
}

const CvButton = ({ language = "en" }: CvButtonProps) => {
  const cvPath =
    language === "es"
      ? "/CV_Kevin_Vichicela_Software_Engineer_ES.pdf"
      : "/CV_Kevin_Vichicela_Software_Engineer_EN.pdf";

  const label = language === "es" ? "Descargar CV" : "Download CV";

  return (
    <a
      href={cvPath}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="floating-button cv-button"
      aria-label={label}
      title={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 15l2 2l4 -4" />
      </svg>
    </a>
  );
};

export default CvButton;
