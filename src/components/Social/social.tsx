import "./social.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useInView } from "../../Hook/hook";
import { useLanguage } from "../../context/LanguageContext";

const SocialLinks = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="social"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="social-container glass-card">
        <h2 className="section-title">{t.social.title}</h2>

        <div className="social-icons">
          <a
            href="https://github.com/Kevin17Vichi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub de Kevin Vichicela"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaGithub size={30} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-daniel-vichicela-casa-6932ab331/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="Linkedin de Kevin Vichicela"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaLinkedin size={30} />
            </div>
          </a>
          <a
            href="https://wa.me/593939873447"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon whatsapp"
            aria-label="Whatsapp de Kevin Vichicela"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaWhatsapp size={30} />
            </div>
          </a>
          <a
            href="mailto:vichicelakevin@gmail.com"
            rel="noopener noreferrer"
            className="social-icon email"
            aria-label="Correo de Kevin Vichicela"
          >
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="icon-holder">
              <FaEnvelope size={30} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
