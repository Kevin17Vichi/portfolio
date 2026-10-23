import "./name.css";
import { useLanguage } from "../../context/LanguageContext";

const Name = () => {
  const { t } = useLanguage();

  return (
    <div id="name" className="content">
      <h1 className="name">
        <span className="name-text">{t.name.fullName}</span>
      </h1>
      <h2 className="profession">{t.name.profession}</h2>
    </div>
  );
};

export default Name;
