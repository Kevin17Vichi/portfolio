import "./profile.css";
import { useInView } from "../../Hook/hook";

const Profile = () => {
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      id="profile"
      className={`section profile-section ${isInView ? "show" : ""}`}
    >
      <div className="profile-content">
        <div className="profile-image">
          <img src="/foto4.webp" alt="Foto de perfil" width={500} height={400}/>
        </div>
        <div className="profile-text glass-card">
          <h2 className="section-title">Objetivo Profesional</h2>
          <div className="card-details">
            <p className="text-body">
              Desarrollador Full Stack orientado al desarrollo móvil nativo con Inteligencia Artificial y Visión Computacional integrada. Busco aportar en el diseño de soluciones de software eficientes, escalables y con procesamiento inteligente local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
