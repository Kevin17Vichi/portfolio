import "./project.css";
import { useInView } from "../../Hook/hook";

type Project = {
  id: number; 
  title: string;
  category: string;
  image: string;
  github: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "🔩 Tuerca Dorada",
    category: "Tienda Online con diseño intuitivo",
    image: "/TuercaDorada.webp",
    github: "https://github.com/KevinVichi/TuercaDorada",
    technologies: ["Php", "HTML", "Bootstrap"],
  },
  {
    id: 2,
    title: "ITuti Shop",
    category: "Tienda Online para la industria Ituti",
    image: "/ITutiShop.webp",
    github: "https://github.com/davidf110102/ITutiShop",
    technologies: ["Php", "HTML", "Bootstrap"],
  },
  {
    id: 3,
    title: "Sistema QR",
    category: "Sistema de quejas y reclamos",
    image: "/SistemaQR.png",
    github: "https://github.com/KevinVichi/SistemaQuejaReclamo",
    technologies: ["Angular", "Node", "Firebase"],
  },
  {
    id: 4,
    title: "KDinner",
    category: "App de recetas de cocina",
    image: "/appReceta.webp",
    github: "https://github.com/KevinVichi/AppRecetas",
    technologies: ["Angular", "Node", "MySQL"],
  },
  {
    id: 5,
    title: "Portafolio",
    category: "Portafolio profesional",
    image: "/portafolio.webp",
    github: "https://github.com/KevinVichi/portfolio",
    technologies: ["React", "Node", "TypeScript"],
  },
  {
    id: 6,
    title: "BusTrack",
    category: "Pagina web para compra venta de boletos",
    image: "/BusTrack.png",
    github:
      "https://github.com/ArielTonato/app-buses-front-web/tree/feature/CompraBoletos",
    technologies: ["Angular", "PrimeNG", "Vite"],
  },
  {
    id: 7,
    title: "VichiTec",
    category: "Aplicacion de compra y venta",
    image: "/VichiTec.png",
    github: "https://github.com/KevinVichi/VichiTec",
    technologies: ["Angular", "Firebase", "TypeScript"],
  },
  {
    id: 8,
    title: "RepoSeguro",
    category: "Respositorio con cifrado de pdfs",
    image: "/RepoSeguro.png",
    github: "https://github.com/KevinVichi/repoSeguroFront",
    technologies: ["Next", "MySQL Server", "TypeScript"],
  },
];

const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="projects"
      className={`projects-section ${isInView ? "show" : ""}`}>

      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img
              className="project-img"
              src={project.image}
              alt={project.title}
            />
            <div className="textBox">
              <p className="text head">{project.title}</p>
              <p className="category">{project.category}</p>{" "}
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
                // 8. Se añade 'aria-label' para mejorar la accesibilidad.
                aria-label={`Ver el código de ${project.title} en GitHub`}
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
    </section>
  );
};

export default Projects;
