export const languages = ["es", "en"] as const;
export type Language = (typeof languages)[number];

export const translations = {
  es: {
    menu: {
      home: "Inicio",
      objective: "Objetivo",
      skills: "Habilidades",
      projects: "Proyectos",
      hobbies: "Hobbies",
      contact: "Contacto",
      social: "Red Social",
    },
    name: {
      fullName: "KEVIN VICHICELA",
      profession: "Desarrollador Full Stack",
    },
    profile: {
      title: "Objetivo Profesional",
      text:
        "Desarrollador Full Stack orientado al desarrollo móvil nativo con Inteligencia Artificial y Visión Computacional integrada. Busco aportar en el diseño de soluciones de software eficientes, escalables y con procesamiento inteligente local.",
    },
    skills: {
      title: "Habilidades",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de Datos",
        mobile: "Desarrollo Móvil",
        ml: "Machine Learning",
        design: "Diseño UI/UX",
        tools: "Herramientas",
      },
    },
    projects: {
      title: "Mis Proyectos",
    },
    hobbies: {
      title: "Mis Hobbies",
    },
    education: {
      title: "Mi Educación",
      academic: "Formación Académica",
      training: "Capacitaciones",
      pending: "En trámite",
    },
    contact: {
      title: "Contáctame",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Tu mensaje aquí...",
      submit: "Enviar Mensaje",
      required: "Por favor, completa todos los campos",
      error: "Hubo un error al intentar enviar el mensaje. Por favor, inténtalo de nuevo.",
    },
    social: {
      title: "Mis Redes",
    },
  },
  en: {
    menu: {
      home: "Home",
      objective: "Objective",
      skills: "Skills",
      projects: "Projects",
      hobbies: "Hobbies",
      contact: "Contact",
      social: "Social",
    },
    name: {
      fullName: "KEVIN VICHICELA",
      profession: "Full Stack Developer",
    },
    profile: {
      title: "Professional Objective",
      text:
        "Full Stack Developer focused on native mobile development with integrated Artificial Intelligence and Computer Vision. I seek to contribute to the design of efficient, scalable software solutions with local intelligent processing.",
    },
    skills: {
      title: "Skills",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        mobile: "Mobile Development",
        ml: "Machine Learning",
        design: "UI/UX Design",
        tools: "Tools",
      },
    },
    projects: {
      title: "My Projects",
    },
    hobbies: {
      title: "My Hobbies",
    },
    education: {
      title: "My Education",
      academic: "Academic Training",
      training: "Training",
      pending: "In progress",
    },
    contact: {
      title: "Contact Me",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message here...",
      submit: "Send Message",
      required: "Please complete all fields",
      error: "There was an error sending the message. Please try again.",
    },
    social: {
      title: "My Networks",
    },
  },
} as const;

export type TranslationKey = typeof translations;
