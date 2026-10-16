/* ============================================================
   DATA.JS — ÚNICO ARCHIVO QUE DEBES EDITAR CON TUS DATOS Y TRADUCCIONES
   ============================================================ */

/* ---------- Perfil y datos generales ---------- */
const PERFIL = {
  marca: "<carlos.dev />",
  nombre: "Carlos Patal",
  emailPersonal: "correoinfocarlosale@gmail.com",
  emailEducativo: "cpatal-2024136@kinal.edu.gt",
  email: "correoinfocarlosale@gmail.com",
  telefono: "+502 5781 9192",
  linkedin: "https://www.linkedin.com/in/carlos-alejandro-b243802b2/",
  github: "https://github.com/cpatal-2024136",

  es: {
    titulo: "Desarrollador Web / Backend",
    frase: "Transformando ideas complejas en código limpio y experiencias digitales eficientes.",
    descripcion:
      "Soy un desarrollador apasionado por crear soluciones tecnológicas robustas. " +
      "Mi enfoque principal es el desarrollo backend, diseño fullstack y la creación de arquitecturas escalables. " +
      "Busco constantemente nuevos retos para mejorar mis habilidades y aportar valor en cada proyecto.",
    edad: "19 años",
    ubicacion: "Patzún, Chimaltenango, Guatemala",
    aniosDesarrollando: "3 años",
    formacionActual: "Perito en Informática — Fundación Kinal (Finalización)",
  },
  en: {
    titulo: "Web / Backend Developer",
    frase: "Transforming complex ideas into clean code and efficient digital experiences.",
    descripcion:
      "I am a developer passionate about building robust technological solutions. " +
      "My main focus is backend development, fullstack design, and creating scalable architectures. " +
      "I am constantly seeking new challenges to improve my skills and deliver value in every project.",
    edad: "19 years old",
    ubicacion: "Patzún, Chimaltenango, Guatemala",
    aniosDesarrollando: "3 years",
    formacionActual: "Information Technology Technician — Kinal Foundation (Completion)",
  }
};

/* ---------- Diccionario de traducciones fijas (UI) ---------- */
const TRADUCCIONES = {
  es: {
    hero_eyebrow: "// Bienvenido a mi portafolio",
    hero_hola: "Hola, soy",
    btn_ver_proyectos: "Ver proyectos",
    btn_contactame: "Contáctame",
    sec_info_num: "01. Información",
    sec_sobre_mi_titulo: "Sobre mí",
    datos_generales_titulo: "Datos generales",
    label_nombre: "Nombre",
    label_edad: "Edad",
    label_ubicacion: "Ubicación",
    label_email_personal: "Email Personal",
    label_email_educativo: "Email Institucional",
    label_telefono: "Teléfono",
    label_anios: "Años desarrollando",
    label_formacion: "Formación actual",
    sec_tech_num: "02. Tecnologías",
    sec_tech_titulo: "Tecnologías & Herramientas",
    sec_tech_intro: "Tecnologías y herramientas que he utilizado en proyectos Backend, Frontend y entornos de desarrollo.",
    sec_trayectoria_num: "03. Trayectoria",
    sec_curriculum_titulo: "Currículum",
    curriculum_educacion: "Educación",
    curriculum_experiencia: "Experiencia",
    cv_descargar_titulo: "Descargar Currículum",
    cv_descargar_sub: "Obtén una copia en PDF con los detalles completos de mi formación, habilidades y experiencia profesional.",
    btn_descargar_cv: "Descargar CV (PDF)",
    cv_badge: "PDF Oficial",
    sec_portafolio_num: "04. Portafolio",
    sec_proyectos_titulo: "Proyectos",
    proyectos_indiv_sub: "Proyectos Individuales",
    proyectos_indiv_intro: "Aplicaciones y sistemas que he construido por mi cuenta.",
    proyectos_grup_sub: "Proyectos en Equipo",
    proyectos_grup_intro: "Trabajos realizados de forma colaborativa.",
    ver_repositorio: "Ver repositorio",
    ver_repositorio_github: "Ver repositorio GitHub",
    ver_demo: "Ver Demo",
    demo_en_proceso: "En proceso",
    demo_proximamente: "Próximamente",
    demo_no_disponible: "Demo no disponible",
    contacto_disponible: "Disponible para nuevos proyectos",
    contacto_eyebrow: "05. Contáctame",
    contacto_titulo: "¿Tienes una idea o proyecto en mente?",
    contacto_sub: "Estoy buscando oportunidades para aportar valor en entornos de desarrollo backend y fullstack. ¡Hablemos!",
    contacto_label_email_personal: "Email Personal",
    contacto_label_email_edu: "Email Institucional",
    pilar1_titulo: "Desarrollo Backend & APIs",
    pilar1_desc: "Diseño de APIs RESTful seguras, arquitectura de controladores y gestión de bases de datos.",
    pilar2_titulo: "Patrones & Buenas Prácticas",
    pilar2_desc: "Estructura MVC, código limpio, reutilizable y control de versiones profesional.",
    pilar3_titulo: "Enfoque Fullstack & Colaborativo",
    pilar3_desc: "Integración frontend fluida y trabajo dinámico bajo metodologías ágiles (Scrum).",
    btn_trabajemos: "Hablemos de tu proyecto",
    footer_hecho: "Hecho en WordPress con HTML, CSS y JavaScript.",
    nav_inicio: "Inicio",
    nav_sobre_mi: "Sobre mí",
    nav_habilidades: "Habilidades",
    nav_curriculum: "Currículum",
    nav_proyectos: "Proyectos",
    nav_contacto: "Contacto"
  },
  en: {
    hero_eyebrow: "// Welcome to my portfolio",
    hero_hola: "Hi, I'm",
    btn_ver_proyectos: "View projects",
    btn_contactame: "Contact me",
    sec_info_num: "01. Information",
    sec_sobre_mi_titulo: "About me",
    datos_generales_titulo: "General Details",
    label_nombre: "Name",
    label_edad: "Age",
    label_ubicacion: "Location",
    label_email_personal: "Personal Email",
    label_email_educativo: "School Email",
    label_telefono: "Phone",
    label_anios: "Years coding",
    label_formacion: "Current education",
    sec_tech_num: "02. Technologies",
    sec_tech_titulo: "Technologies & Tools",
    sec_tech_intro: "Technologies and tools I have used in Backend, Frontend, and software development environments.",
    sec_trayectoria_num: "03. Career",
    sec_curriculum_titulo: "Resume",
    curriculum_educacion: "Education",
    curriculum_experiencia: "Experience",
    cv_descargar_titulo: "Download Curriculum Vitae",
    cv_descargar_sub: "Get a PDF copy with full details of my education, technical skills, and professional experience.",
    btn_descargar_cv: "Download CV (PDF)",
    cv_badge: "Official PDF",
    sec_portafolio_num: "04. Portfolio",
    sec_proyectos_titulo: "Projects",
    proyectos_indiv_sub: "Individual Projects",
    proyectos_indiv_intro: "Applications and systems built independently.",
    proyectos_grup_sub: "Team Projects",
    proyectos_grup_intro: "Collaborative team projects.",
    ver_repositorio: "View repository",
    ver_repositorio_github: "View GitHub repository",
    ver_demo: "Live Demo",
    demo_en_proceso: "In Progress",
    demo_proximamente: "Coming Soon",
    demo_no_disponible: "Demo Not Available",
    contacto_disponible: "Available for new projects",
    contacto_eyebrow: "05. Contact me",
    contacto_titulo: "Have an idea or project in mind?",
    contacto_sub: "I am looking for opportunities to deliver value in backend and fullstack development environments. Let's get in touch!",
    contacto_label_email_personal: "Personal Email",
    contacto_label_email_edu: "School Email",
    pilar1_titulo: "Backend & API Development",
    pilar1_desc: "Designing secure RESTful APIs, controller architecture, and database management.",
    pilar2_titulo: "Patterns & Best Practices",
    pilar2_desc: "MVC structure, clean reusable code, and professional version control.",
    pilar3_titulo: "Fullstack & Collaborative Focus",
    pilar3_desc: "Seamless frontend integration and agile teamwork using Scrum workflows.",
    btn_trabajemos: "Let's talk about your project",
    footer_hecho: "Built on WordPress with HTML, CSS, and JavaScript.",
    nav_inicio: "Home",
    nav_sobre_mi: "About",
    nav_habilidades: "Skills",
    nav_curriculum: "Resume",
    nav_proyectos: "Projects",
    nav_contacto: "Contact"
  }
};

/* ---------- Habilidades con Iconos Oficiales (Devicon) ---------- */
const HABILIDADES_CATEGORIAS = {
  es: [
    {
      categoria: "Backend & Bases de Datos",
      tecnologias: [
        { nombre: "Node.js", tipo: "Entorno de ejecución", nivel: 85, color: "#339933", svg: `<i class="devicon-nodejs-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "Express.js", tipo: "Framework Backend", nivel: 82, color: "#68a063", svg: `<i class="devicon-express-original" style="font-size: 32px; filter: drop-shadow(0 0 1px #888);"></i>` },
        { nombre: "MongoDB", tipo: "Base de datos NoSQL", nivel: 80, color: "#47A248", svg: `<i class="devicon-mongodb-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "C# / .NET", tipo: "Lenguaje y Framework", nivel: 72, color: "#512BD4", svg: `<i class="devicon-csharp-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "MySQL", tipo: "Base de datos Relacional", nivel: 78, color: "#4479A1", svg: `<i class="devicon-mysql-plain colored" style="font-size: 32px;"></i>` }
      ]
    },
    {
      categoria: "Frontend & CMS / ERP",
      tecnologias: [
        { nombre: "WordPress", tipo: "CMS & Desarrollo Web", nivel: 85, color: "#21759B", svg: `<i class="devicon-wordpress-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "ODOO", tipo: "ERP & Gestión Empresarial", nivel: 80, color: "#714B67", svg: `<i class="devicon-odoo-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "JavaScript (ES6+)", tipo: "Lenguaje de programación", nivel: 85, color: "#F7DF1E", svg: `<i class="devicon-javascript-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "HTML5", tipo: "Estructura Semántica", nivel: 90, color: "#E34F26", svg: `<i class="devicon-html5-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "CSS3 & Layouts", tipo: "Estilos y Animaciones", nivel: 85, color: "#1572B6", svg: `<i class="devicon-css3-plain colored" style="font-size: 32px;"></i>` }
      ]
    },
    {
      categoria: "Herramientas, Entorno & QA",
      tecnologias: [
        { nombre: "Git & GitHub", tipo: "Control de versiones", nivel: 80, color: "#F05032", svg: `<i class="devicon-git-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "Postman", tipo: "Pruebas de API REST & QA", nivel: 85, color: "#FF6C37", svg: `<i class="devicon-postman-plain colored" style="font-size: 32px;"></i>` }
      ]
    }
  ],
  en: [
    {
      categoria: "Backend & Databases",
      tecnologias: [
        { nombre: "Node.js", tipo: "Runtime Environment", nivel: 85, color: "#339933", svg: `<i class="devicon-nodejs-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "Express.js", tipo: "Backend Framework", nivel: 82, color: "#68a063", svg: `<i class="devicon-express-original" style="font-size: 32px; filter: drop-shadow(0 0 1px #888);"></i>` },
        { nombre: "MongoDB", tipo: "NoSQL Database", nivel: 80, color: "#47A248", svg: `<i class="devicon-mongodb-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "C# / .NET", tipo: "Language & Framework", nivel: 72, color: "#512BD4", svg: `<i class="devicon-csharp-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "MySQL", tipo: "Relational Database", nivel: 78, color: "#4479A1", svg: `<i class="devicon-mysql-plain colored" style="font-size: 32px;"></i>` }
      ]
    },
    {
      categoria: "Frontend & CMS / ERP",
      tecnologias: [
        { nombre: "WordPress", tipo: "CMS & Web Development", nivel: 85, color: "#21759B", svg: `<i class="devicon-wordpress-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "ODOO", tipo: "ERP & Enterprise Management", nivel: 80, color: "#714B67", svg: `<i class="devicon-odoo-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "JavaScript (ES6+)", tipo: "Programming Language", nivel: 85, color: "#F7DF1E", svg: `<i class="devicon-javascript-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "HTML5", tipo: "Semantic Structure", nivel: 90, color: "#E34F26", svg: `<i class="devicon-html5-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "CSS3 & Layouts", tipo: "Styles & Animations", nivel: 85, color: "#1572B6", svg: `<i class="devicon-css3-plain colored" style="font-size: 32px;"></i>` }
      ]
    },
    {
      categoria: "Tools, Environment & QA",
      tecnologias: [
        { nombre: "Git & GitHub", tipo: "Version Control", nivel: 80, color: "#F05032", svg: `<i class="devicon-git-plain colored" style="font-size: 32px;"></i>` },
        { nombre: "Postman", tipo: "REST API Testing & QA", nivel: 85, color: "#FF6C37", svg: `<i class="devicon-postman-plain colored" style="font-size: 32px;"></i>` }
      ]
    }
  ]
};

/* ---------- Currículum ---------- */
const EDUCACION = {
  es: [
    { periodo: "2027 — 2032 (Futuro)", titulo: "Ingeniería en Sistemas", lugar: "Universidad / Formación Superior", detalle: "Continuación y consolidación de estudios universitarios enfocados en ingeniería de software, arquitectura de sistemas y ciencias de la computación." },
    { periodo: "2024 — Actualidad", titulo: "Perito en Informática y Computación", lugar: "Fundación Kinal", detalle: "Formación integral en desarrollo de software, arquitectura de sistemas backend, bases de datos relacionales y NoSQL, desarrollo web y trabajo colaborativo." },
    { periodo: "2024 — 2026", titulo: "Desarrollo Web & Backend", lugar: "Proyectos e Investigaciones Autónomas", detalle: "Construcción de API RESTful con Node.js, Express, MongoDB y C# .NET, aplicación de buenas prácticas de código y control de versiones." }
  ],
  en: [
    { periodo: "2027 — 2032 (Future)", titulo: "Systems Engineering", lugar: "University / Higher Education", detalle: "Continuation of university studies focusing on software engineering, systems architecture, and computer science." },
    { periodo: "2024 — Present", titulo: "Information Technology & Computing Technician", lugar: "Kinal Foundation", detalle: "Comprehensive training in software development, backend architecture, relational and NoSQL databases, web development, and teamwork." },
    { periodo: "2024 — 2026", titulo: "Web & Backend Development", lugar: "Independent Projects & Research", detalle: "Building RESTful APIs with Node.js, Express, MongoDB, and C# .NET, enforcing clean code practices and version control." }
  ]
};

const EXPERIENCIA = {
  es: [
    { periodo: "2026 (Finalización)", titulo: "Prácticas Supervisadas", lugar: "CódigoGO (codigo-go.com)", detalle: "Apoyo y colaboración en la gestión y análisis de soluciones empresariales sobre plataformas como Odoo y WordPress, facilitando flujos de trabajo eficientes y colaborando en tareas de QA para asegurar la calidad de las entregas." },
    { periodo: "2024 — 2026", titulo: "Proyectos Fullstack & Taller de Informática", lugar: "Fundación Kinal", detalle: "Desarrollo de soluciones fullstack y backend colaborativas aplicando arquitecturas MVC y REST." }
  ],
  en: [
    { periodo: "2026 (Completion)", titulo: "Supervised Internship", lugar: "CódigoGO (codigo-go.com)", detalle: "Support and collaboration in managing and analyzing enterprise solutions on platforms such as Odoo and WordPress, assisting with streamlined workflows and QA testing to ensure delivery quality." },
    { periodo: "2024 — 2026", titulo: "Fullstack Projects & IT Workshops", lugar: "Kinal Foundation", detalle: "Collaborative development of fullstack and backend applications applying MVC and REST architectures." }
  ]
};

/* ---------- Proyectos Individuales ---------- */
const PROYECTOS_INDIVIDUALES = {
  es: [
    { titulo: "Sistema de Gestión de Inventario", descripcion: "Aplicación backend para la administración y control de inventarios con autenticación de usuarios, gestión de productos y reportes.", aprendizajes: ["Node.js", "Express", "MongoDB"], repositorio: "https://github.com/cpatal-2024136", imagen: "assets/img/banco_ice_preview_1785036290408.jpg" },
    { titulo: "API REST Empresarial", descripcion: "Servicio web robusto desarrollado en C# y .NET con SQL Server, implementando patrones de diseño y manejo de excepciones.", aprendizajes: ["C#", ".NET", "MySQL"], repositorio: "https://github.com/cpatal-2024136", imagen: "assets/img/restaurante_ice_preview_1785036264993.jpg" }
  ],
  en: [
    { titulo: "Inventory Management System", descripcion: "Backend application for inventory control with user authentication, product management, and reporting.", aprendizajes: ["Node.js", "Express", "MongoDB"], repositorio: "https://github.com/cpatal-2024136", imagen: "assets/img/banco_ice_preview_1785036290408.jpg" },
    { titulo: "Enterprise REST API", descripcion: "Robust web service developed in C# and .NET with SQL Server, implementing design patterns and exception handling.", aprendizajes: ["C#", ".NET", "MySQL"], repositorio: "https://github.com/cpatal-2024136", imagen: "assets/img/restaurante_ice_preview_1785036264993.jpg" }
  ]
};

/* ---------- Proyectos Grupales ---------- */
const PROYECTOS_GRUPALES = {
  es: [
    { 
      id: "restaurante-ice", 
      titulo: "Restaurante ICE", 
      rol: "Colaborador Fullstack (Backend & Frontend)", 
      descripcion: "Sistema integral de gestión de restaurantes para pedidos, menús digitales y administración de mesas en tiempo real. Colaboré en el desarrollo del equipo aportando en la lógica backend y en componentes de la interfaz frontend.", 
      aprendizajes: ["Node.js", "Express", "MongoDB", "JavaScript"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Restaurante_ICE", 
      demo: "https://ice-client-customer.onrender.com/",
      demoEstado: "activo",
      imagenes: ["assets/img/restaurante_ice_1.png", "assets/img/restaurante_ice_2.png", "assets/img/restaurante_ice_3.png"] 
    },
    { 
      id: "banco-ice", 
      titulo: "Banco ICE", 
      rol: "Desarrollador Fullstack", 
      descripcion: "Plataforma de servicios bancarios y gestión de transacciones financieras con alto nivel de validación y seguridad. Participé activamente como desarrollador en equipo colaborando tanto en módulos backend como frontend.", 
      aprendizajes: ["Node.js", "Express", "MongoDB", "HTML5/CSS3"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Banco-Ice", 
      demo: "https://banco-ice-client-admin.onrender.com/",
      demoEstado: "activo",
      imagenes: ["assets/img/banco_ice_1.png", "assets/img/banco_ice_2.png", "assets/img/banco_ice_3.png"] 
    },
    { 
      id: "kinal-break", 
      titulo: "Kinal Break", 
      rol: "Colaborador Fullstack (Backend & Frontend)", 
      descripcion: "Aplicación enfocada en la gestión de receso escolar, pedidos anticipados de cafetería y control de tiempos de descanso para estudiantes, desarrollada en equipo.", 
      aprendizajes: ["JavaScript", "Node.js", "CSS Grid", "MySQL"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Kinal-Break", 
      demo: null,
      demoEstado: "no_disponible",
      imagenes: ["assets/img/kinal_break_1.png", "assets/img/kinal_break_2.png", "assets/img/kinal_break_3.png", "assets/img/kinal_break_4.png", "assets/img/kinal_break_5.png"] 
    }
  ],
  en: [
    { 
      id: "restaurante-ice", 
      titulo: "Restaurante ICE", 
      rol: "Fullstack Contributor (Backend & Frontend)", 
      descripcion: "Comprehensive restaurant management system for real-time ordering, digital menus, and table administration. Collaborated with the team developing backend endpoints and frontend interface components.", 
      aprendizajes: ["Node.js", "Express", "MongoDB", "JavaScript"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Restaurante_ICE", 
      demo: "https://ice-client-customer.onrender.com/",
      demoEstado: "activo",
      imagenes: ["assets/img/restaurante_ice_1.png", "assets/img/restaurante_ice_2.png", "assets/img/restaurante_ice_3.png"] 
    },
    { 
      id: "banco-ice", 
      titulo: "Banco ICE", 
      rol: "Fullstack Developer", 
      descripcion: "Banking services and financial transaction platform built with strong security and validations. Actively participated as part of the team in developing core features.", 
      aprendizajes: ["Node.js", "Express", "MongoDB", "HTML5/CSS3"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Banco-Ice", 
      demo: "https://banco-ice-client-admin.onrender.com/",
      demoEstado: "activo",
      imagenes: ["assets/img/banco_ice_1.png", "assets/img/banco_ice_2.png", "assets/img/banco_ice_3.png"] 
    },
    { 
      id: "kinal-break", 
      titulo: "Kinal Break", 
      rol: "Fullstack Contributor (Backend & Frontend)", 
      descripcion: "Team-developed app focused on school break management, cafeteria advance ordering, and recess time control for students.", 
      aprendizajes: ["JavaScript", "Node.js", "CSS Grid", "MySQL"], 
      repositorio: "https://github.com/Ice-Team-Proyects/Kinal-Break", 
      demo: null,
      demoEstado: "no_disponible",
      imagenes: ["assets/img/kinal_break_1.png", "assets/img/kinal_break_2.png", "assets/img/kinal_break_3.png", "assets/img/kinal_break_4.png", "assets/img/kinal_break_5.png"] 
    }
  ]
};
