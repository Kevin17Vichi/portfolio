import { useInView } from "../../Hook/hook";
import "./hobbies.css";

const Hobbies = () => {
  const { ref, isInView } = useInView();

  const hobbies = [
    {
      name: "Videojuegos 🎮",
      image: "/juegoCooperativo.webp", 
      description: "Me apasionan los juegos cooperativos",
    },
    {
      name: "Música 🎵",
      image: "/piano2.webp", 
      description: "Me fascina escuchar composiciones de piano y violín",
    },
    {
      name: "Deportes 🚲",
      image: "/ciclismo.webp", 
      description: "Disfruto del ciclismo",
    },
  ];

  return (
    <section
      ref={ref}
      id="hobbies"
      className={`section ${isInView ? "show" : ""}`}>

      <div className="hobbies-container glass-card">
        <h2 className="section-title">Mis Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-card">
              <img src={hobby.image} alt={hobby.name} className="hobby-image" width={300} height={200} />
              <div className="hobby-textBox">
                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
