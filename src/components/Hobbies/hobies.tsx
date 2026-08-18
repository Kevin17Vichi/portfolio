import { useInView } from "../../hooks/useInView";
import "./hobbies.css";
import { useLanguage } from "../../context/LanguageContext";

interface HobbyItem {
  name: {
    es: string;
    en: string;
  };
  image: string;
  description: {
    es: string;
    en: string;
  };
}

const Hobbies = () => {
  const { ref, isInView } = useInView();
  const { language, t } = useLanguage();

  const hobbies: HobbyItem[] = [
    {
      name: {
        es: "Videojuegos 🎮",
        en: "Video Games 🎮",
      },
      image: "/juegoCooperativo.webp",
      description: {
        es: "Me apasionan los juegos cooperativos",
        en: "I am passionate about cooperative games",
      },
    },
    {
      name: {
        es: "Música 🎵",
        en: "Music 🎵",
      },
      image: "/piano2.webp",
      description: {
        es: "Me fascina escuchar composiciones de piano y violín",
        en: "I love listening to piano and violin compositions",
      },
    },
    {
      name: {
        es: "Deportes 🚲",
        en: "Sports 🚲",
      },
      image: "/ciclismo.webp",
      description: {
        es: "Disfruto del ciclismo",
        en: "I enjoy cycling",
      },
    },
  ];

  return (
    <section
      ref={ref}
      id="hobbies"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="hobbies-container glass-card">
        <h2 className="section-title">{t.hobbies.title}</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <img
                src={hobby.image}
                alt={hobby.name[language]}
                className="hobby-image"
                width={300}
                height={200}
              />
              <div className="hobby-textBox">
                <h3 className="hobby-name">{hobby.name[language]}</h3>
                <p className="hobby-description">{hobby.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
