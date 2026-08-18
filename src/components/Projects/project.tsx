import "./project.css";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../context/LanguageContext";

type Project = {
  id: number;
  title: string;
  category: {
    es: string;
    en: string;
  };
  image: string;
  github: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Papa Sana",
    category: {
      es: "App móvil de detección de enfermedades en papas",
      en: "Mobile app for potato disease detection",
    },
    image: "/papaSana.webp",
    github: "https://github.com/Kevin17Vichi/PotatoDiseaseAI",
    technologies: ["Kotlin", "TF Lite", "Room"],
  },
  {
    id: 2,
    title: "Tuerca Dorada",
    category: {
      es: "Tienda online con diseño intuitivo",
      en: "Online store with intuitive design",
    },
    image: "/TuercaDorada.webp",
    github: "https://github.com/KevinVichi/TuercaDorada",
    technologies: ["Php", "HTML", "Bootstrap"],
  },
  {
    id: 3,
    title: "ITuti Shop",
    category: {
      es: "Tienda online para la industria Ituti",
      en: "Online store for the Ituti industry",
    },
    image: "/ITutiShop.webp",
    github: "https://github.com/davidf110102/ITutiShop",
    technologies: ["Php", "HTML", "Bootstrap"],
  },
  {
    id: 4,
    title: "Sistema QR",
    category: {
      es: "Sistema de quejas y reclamos",
      en: "Complaints and claims management system",
    },
    image: "/SistemaQR.webp",
    github: "https://github.com/KevinVichi/SistemaQuejaReclamo",
    technologies: ["Angular", "Node", "Firebase"],
  },
  {
    id: 5,
    title: "KDinner",
    category: {
      es: "App de recetas de cocina",
      en: "Cooking recipes mobile app",
    },
    image: "/appReceta.webp",
    github: "https://github.com/KevinVichi/AppRecetas",
    technologies: ["Angular", "Node", "MySQL"],
  },
  {
    id: 6,
    title: "Portafolio",
    category: {
      es: "Portafolio profesional",
      en: "Professional portfolio",
    },
    image: "/portafolio.webp",
    github: "https://github.com/Kevin17Vichi",
    technologies: ["React", "Node", "TypeScript"],
  },
  {
    id: 7,
    title: "VichiTec",
    category: {
      es: "Aplicación de compra y venta",
      en: "Buying and selling marketplace app",
    },
    image: "/VichiTec.webp",
    github: "https://github.com/KevinVichi/VichiTec",
    technologies: ["Angular", "Firebase", "TypeScript"],
  },
  {
    id: 8,
    title: "RepoSeguro",
    category: {
      es: "Repositorio con cifrado de PDFs",
      en: "Secure repository with PDF encryption",
    },
    image: "/RepoSeguro.webp",
    github: "https://github.com/KevinVichi/repoSeguroFront",
    technologies: ["Next", "MySQL Server", "TypeScript"],
  },
];

const Projects = () => {
  const { ref, isInView } = useInView();
  const { language, t } = useLanguage();

  return (
    <section
      ref={ref}
      id="projects"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="projects-container glass-card">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="card" key={project.id}>
              <img
                className="project-img"
                src={project.image}
                alt={project.title}
              />
              <div className="textBox">
                <p className="text head">{project.title}</p>
                <p className="category">{project.category[language]}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    language === "en"
                      ? `View ${project.title} source code on GitHub`
                      : `Ver el código de ${project.title} en GitHub`
                  }
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
