import { useState } from "react";
import "./contact.css";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      alert(t.contact.required);
      return;
    }

    // Formatear el contenido del email
    const mailtoLink = `mailto:vichicelakevin@gmail.com?subject=Mensaje de ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje:%0D%0A${formData.message}`;

    try {
      window.location.href = mailtoLink;
      // Limpiar el formulario después de enviar
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      alert(t.contact.error);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`section ${isInView ? "show" : ""}`}
    >
      <div className="contact-container glass-card">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                type="text"
                id="name"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.emailLabel}</label>
              <input
                type="email"
                id="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button type="submit" className="submit-btn">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
