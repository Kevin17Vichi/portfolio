import "./skills.css";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import icons from "../../assets/icons.ts";

type SkillCategoryKey = keyof typeof translations.es.skills.categories;

interface SkillCategory {
  categoryKey: SkillCategoryKey;
  skills: {
    name: string;
    icon: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    categoryKey: "languages",
    skills: [
      {
        name: "Java",
        icon: icons.java,
      },
      {
        name: "JavaScript",
        icon: icons.javascript,
      },
      {
        name: "TypeScript",
        icon: icons.typescript,
      },
      {
        name: "Python",
        icon: icons.python,
      },
      {
        name: "PHP",
        icon: icons.php,
      },
    ],
  },
  {
    categoryKey: "frontend",
    skills: [
      {
        name: "HTML5",
        icon: icons.html5,
      },
      {
        name: "CSS3",
        icon: icons.css3,
      },
      {
        name: "React",
        icon: icons.react,
      },
      {
        name: "Next.js",
        icon: icons.nextjs,
      },
      {
        name: "Vue.js",
        icon: icons.vuejs,
      },
      {
        name: "Angular",
        icon: icons.angular,
      },
    ],
  },
  {
    categoryKey: "backend",
    skills: [
      {
        name: "Node.js",
        icon: icons.nodejs,
      },
      {
        name: "Express.js",
        icon: icons.express,
      },
    ],
  },
  {
    categoryKey: "databases",
    skills: [
      {
        name: "MySQL",
        icon: icons.mysql,
      },
      {
        name: "SQL Server",
        icon: icons.sqlserver,
      },
      {
        name: "Firebase",
        icon: icons.firebase,
      },
      {
        name: "MariaDB",
        icon: icons.mariadb,
      },
      {
        name: "MongoDB",
        icon: icons.mongodb,
      },
    ],
  },
  {
    categoryKey: "mobile",
    skills: [
      {
        name: "Kotlin",
        icon: icons.kotlin,
      },
      {
        name: "Ionic",
        icon: icons.ionic,
      },
    ],
  },
  {
    categoryKey: "ml",
    skills: [
      {
        name: "TensorFlow",
        icon: icons.tensorflow,
      },
      {
        name: "Keras",
        icon: icons.keras,
      },
    ],
  },
  {
    categoryKey: "design",
    skills: [
      {
        name: "Figma",
        icon: icons.figma,
      },
      {
        name: "Adobe XD",
        icon: icons.adobexd,
      },
    ],
  },
  {
    categoryKey: "tools",
    skills: [
      {
        name: "Jira",
        icon: icons.jira,
      },
      {
        name: "Postman",
        icon: icons.postman,
      },
      {
        name: "GitHub",
        icon: icons.github,
      },
      {
        name: "Docker",
        icon: icons.docker,
      },
    ],
  },
];

const Skills = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="skills"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="skills-container glass-card">
        <h2 className="section-title">{t.skills.title}</h2>
        {skillCategories.map((category) => (
          <div key={category.categoryKey} className="category-group">
            <h3 className="category-title">
              {t.skills.categories[category.categoryKey]}
            </h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
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