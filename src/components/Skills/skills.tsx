import "./skills.css";
import { useInView } from "../../Hook/hook";

const Skills = () => {
  const { ref, isInView } = useInView();
  const skillCategories = [
    {
      category: "Lenguajes",
      skills: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
      ],
    },
    {
      category: "Frontend",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "Next",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "SQL Server",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      category: "Machine Learning",
      skills: [
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Keras",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
        },
      ],
    },
    {
      category: "Desarrollo Móvil",
      skills: [
        {
          name: "Android",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "IOS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        },
      ],
    },
    {
      category: "Estilos",
      skills: [
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "Sass",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      category: "Diseño UI/UX",
      skills: [
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Adobe XD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        },
      ],
    },
    {
      category: "Herramientas de Desarrollo",
      skills: [
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className={`skills-section ${isInView ? "show" : ""}`}
    >
      <div className="skills-container">
        <h2 className="skills-title">Habilidades</h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-group">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;