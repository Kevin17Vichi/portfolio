import "./Button.css";

interface CvButtonProps {
  onClick: () => void;
}

const CvButton = ({ onClick }: CvButtonProps) => {
  return (
    <button type="button" className="floating-button cv-button" onClick={onClick}>
      CV
    </button>
  );
};

export default CvButton;
