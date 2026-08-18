import { useInView } from "../../hooks/useInView";
import "./education.css";
import { useLanguage } from "../../context/LanguageContext";

type EducationItem = {
  id: number;
  name: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  url?: string;
  type: "academica" | "capacitacion";
  pending?: boolean;
};

const educations: EducationItem[] = [
  {
    id: 100,
    name: "U. E. Juan Abel Echeverría",
    image: "/jae.webp",
    description: {
      es: "Bachiller Técnico Industrial — Instalaciones, Equipos y Máquinas Eléctricas",
      en: "Industrial Technical High School — Electrical Installations, Equipment and Machines",
    },
    url: "/bachiller.pdf",
    type: "academica",
  },
  {
    id: 101,
    name: "Universidad Técnica de Ambato",
    image: "/uta.webp",
    description: {
      es: "Ingeniero en Software",
      en: "Software Engineer",
    },
    type: "academica",
    url: "/ingeniero.pdf",
  },
  {
    id: 1,
    name: "Google Activate",
    image: "/google.webp",
    description: {
      es: "Competencias digitales para profesionales",
      en: "Digital skills for professionals",
    },
    url: "https://skillshop.exceedlms.com/student/award/WYCNNjn3HaJain3uSs8wE81f",
    type: "capacitacion",
  },
  {
    id: 4,
    name: "Google Activate",
    image: "/google.webp",
    description: {
      es: "Curso de Desarrollo de Apps Móviles",
      en: "Mobile App Development Course",
    },
    url: "https://skillshop.exceedlms.com/student/award/4gsPiRQs1dxTwVcWiW7qKjXA",
    type: "capacitacion",
  },
  {
    id: 5,
    name: "SUDEN",
    image: "/suden.webp",
    description: {
      es: "ESPECIALIDAD TÉCNICA",
      en: "TECHNICAL SPECIALTY",
    },
    url: "/tecnica.pdf",
    type: "capacitacion",
  },
  {
    id: 6,
    name: "SUDEN",
    image: "/suden.webp",
    description: {
      es: "EXPERTO (A) EN ENSAMBLAJE DE COMPUTADORAS, CELULARES E IMPRESORAS",
      en: "EXPERT IN COMPUTER, MOBILE PHONE, AND PRINTER ASSEMBLY",
    },
    url: "/ensamblaje.pdf",
    type: "capacitacion",
  },
  {
    id: 7,
    name: "SUDEN",
    image: "/suden.webp",
    description: {
      es: "EXPERTO (A) EN REPARACIÓN DE COMPUTADORAS, CELULARES E IMPRESORAS",
      en: "EXPERT IN COMPUTER, MOBILE PHONE, AND PRINTER REPAIR",
    },
    url: "/reparacion.pdf",
    type: "capacitacion",
  },
  {
    id: 8,
    name: "SUDEN",
    image: "/suden.webp",
    description: {
      es: "EXPERTO (A) TÉCNICO INTERNACIONAL",
      en: "INTERNATIONAL TECHNICAL EXPERT",
    },
    url: "/internacional.pdf",
    type: "capacitacion",
  },
  {
    id: 9,
    name: "Fundación Carlos Slim",
    image: "/CS.webp",
    description: {
      es: "Fundamentos de Machine Learning",
      en: "Fundamentals of Machine Learning",
    },
    url: "https://capacitateparaelempleo.org/verifica/9094cb1a-0003-4fdf-b0a0-932f591c6a4c/e85dc447-ab36-4aa2-8bee-f8b82eed9c12",
    type: "capacitacion",
  },
];

const academicas = educations.filter((e) => e.type === "academica");
const capacitaciones = educations.filter((e) => e.type === "capacitacion");

const Education = () => {
  const { ref, isInView } = useInView();
  const { language, t } = useLanguage();

  const renderCard = (edu: EducationItem) => (
    <div key={edu.id} className="education-card">
      <img
        src={edu.image}
        alt={edu.name}
        className="education-image"
        width={300}
        height={200}
      />
      <div className="education-textBox">
        <h3 className="education-name">{edu.name}</h3>
        <p className="education-description">{edu.description[language]}</p>
        {edu.pending && <span className="education-pending-tag">{t.education.pending}</span>}
        {edu.url && (
          <a
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="education-link"
            aria-label={
              language === "en"
                ? `View certificate for ${edu.name}`
                : `Ver certificado de ${edu.name}`
            }
          >
            📄
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      id="education"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="education-container glass-card">
        <h2 className="section-title">{t.education.title}</h2>

        <div className="education-group-wrapper">
          <h3 className="education-subtitle">{t.education.academic}</h3>
          <div className="education-group">
            {academicas.map(renderCard)}
          </div>
        </div>

        <div className="education-group-wrapper">
          <h3 className="education-subtitle">{t.education.training}</h3>
          <div className="education-group">
            {capacitaciones.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;