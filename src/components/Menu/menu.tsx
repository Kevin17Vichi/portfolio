import "./menu.css";
import { useLanguage } from "../../context/LanguageContext";

const Menu = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="menu-container">
      <div className="lang-switch">
        <button
          type="button"
          onClick={() => setLanguage("es")}
          className={language === "es" ? "active" : ""}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={language === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>

      <ul className="menu-list">
        <li className="menu-item" style={{ "--i": 7 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#name")}
            href="#name"
            className="menu-link"
          >
            {t.menu.home}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 6 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#profile")}
            href="#profile"
            className="menu-link"
          >
            {t.menu.objective}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 5 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#skills")}
            href="#skills"
            className="menu-link"
          >
            {t.menu.skills}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 4 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#projects")}
            href="#projects"
            className="menu-link"
          >
            {t.menu.projects}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 3 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#hobbies")}
            href="#hobbies"
            className="menu-link"
          >
            {t.menu.hobbies}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 2 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#contact")}
            href="#contact"
            className="menu-link"
          >
            {t.menu.contact}
          </a>
        </li>
        <li className="menu-item" style={{ "--i": 1 } as React.CSSProperties}>
          <a
            onClick={(e) => scrollToSection(e, "#social")}
            href="#social"
            className="menu-link"
          >
            {t.menu.social}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
