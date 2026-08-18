import "./profile.css";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../context/LanguageContext";

const Profile = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="profile"
      className={`section profile-section ${isInView ? "show" : ""}`}
    >
      <div className="profile-content">
        <div className="profile-image">
          <img src="/foto4.webp" alt="Foto de perfil" width={500} height={400} />
        </div>
        <div className="profile-text glass-card">
          <h2 className="section-title">{t.profile.title}</h2>
          <div className="card-details">
            <p className="text-body">{t.profile.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
