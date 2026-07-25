import { useState } from "react";
import "./contact.css";
import { useInView } from "../../Hook/hook";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, isInView } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Formatear el contenido del email
    const mailtoLink = `mailto:kvichicela8375@uta.edu.ec?subject=Mensaje de ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje:%0D%0A${formData.message}`;

    try {
      window.location.href = mailtoLink;
      // Limpiar el formulario después de enviar
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      alert(
        "Hubo un error al intentar enviar el mensaje. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="contact-container glass-card">
        <h2 className="section-title">Contáctame</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                placeholder="Tu mensaje aquí..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
