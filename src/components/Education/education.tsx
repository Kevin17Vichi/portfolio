import { useInView } from "../../Hook/hook";
import "./education.css";

type EducationItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  url?: string;
  type: "academica" | "capacitacion";
  pending?: boolean;
};

const educations: EducationItem[] = [
  {
    id: 100,
    name: "U. E. Juan Abel Echeverría",
    image: "/jae.webp",
    description: "Bachiller Técnico Industrial — Instalaciones, Equipos y Máquinas Eléctricas",
    url: "/bachiller.pdf",
    type: "academica",
  },
  {
    id: 101,
    name: "Universidad Técnica de Ambato",
    image: "/uta.webp",
    description: "Ingeniero en Software",
    type: "academica",
    url: "/ingeniero.pdf",
  },
  {
    id: 1,
    name: "Google Activate",
    image: "/google.webp",
    description: "Competencias digitales para profesionales",
    url: "https://skillshop.exceedlms.com/student/award/WYCNNjn3HaJain3uSs8wE81f",
    type: "capacitacion",
  },
  {
    id: 4,
    name: "Google Activate",
    image: "/google.webp",
    description: "Curso de Desarrollo de Apps Móviles",
    url: "https://skillshop.exceedlms.com/student/award/4gsPiRQs1dxTwVcWiW7qKjXA",
    type: "capacitacion",
  },
  {
    id: 5,
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "ESPECIALIDAD TÉCNICA",
    url: "/tecnica.pdf",
    type: "capacitacion",
  },
  {
    id: 6,
    name: "Curso SUDEN",
    image: "/suden.webp",
    description:
      "EXPERTO (A) EN ENSAMBLAJE DE COMPUTADORAS, CELULARES E IMPRESORAS",
    url: "/ensamblaje.pdf",
    type: "capacitacion",
  },
  {
    id: 7,
    name: "Curso SUDEN",
    image: "/suden.webp",
    description:
      "EXPERTO (A) EN REPARACIÓN DE COMPUTADORAS, CELULARES E IMPRESORAS",
    url: "/reparacion.pdf",
    type: "capacitacion",
  },
  {
    id: 8,
    name: "Curso SUDEN",
    image: "/suden.webp",
    description: "EXPERTO (A) TÉCNICO INTERNACIONAL",
    url: "/internacional.pdf",
    type: "capacitacion",
  },
  {
    id: 9,
    name: "Fundación Carlos Slim",
    image: "/CS.webp",
    description: "Fundamentos de Machine Learning",
    url: "https://capacitateparaelempleo.org/verifica/9094cb1a-0003-4fdf-b0a0-932f591c6a4c/e85dc447-ab36-4aa2-8bee-f8b82eed9c12",
    type: "capacitacion",
  },
];

const academicas = educations.filter((e) => e.type === "academica");
const capacitaciones = educations.filter((e) => e.type === "capacitacion");

const Education = () => {
  const { ref, isInView } = useInView();

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
        <p className="education-description">{edu.description}</p>
        {edu.pending && <span className="education-pending-tag">En trámite</span>}
        {edu.url && (
          <a
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="education-link"
            aria-label={`Ver certificado de ${edu.name}`}
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
        <h2 className="section-title">Mi Educación</h2>

        <div className="education-group-wrapper">
          <h3 className="education-subtitle">Formación Académica</h3>
          <div className="education-group">
            {academicas.map(renderCard)}
          </div>
        </div>

        <div className="education-group-wrapper">
          <h3 className="education-subtitle">Capacitaciones</h3>
          <div className="education-group">
            {capacitaciones.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;