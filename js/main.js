/* ============================================================
   MAIN.JS — LÓGICA DEL PORTAFOLIO CON I18N
   ============================================================ */

"use strict";

let idiomaActual = localStorage.getItem("idioma") || "es";

// Helper para resolver rutas de assets de forma compatible con WordPress y standalone
function resolverRutaAsset(ruta) {
  if (!ruta) return "";
  if (ruta.startsWith("http://") || ruta.startsWith("https://") || ruta.startsWith("//") || ruta.startsWith("data:")) {
    return ruta;
  }
  const baseUrl = (typeof carlosPatalConfig !== "undefined" && carlosPatalConfig.themeUri) 
    ? carlosPatalConfig.themeUri 
    : "";
  const rutaLimpia = ruta.startsWith("/") ? ruta.slice(1) : ruta;
  return baseUrl ? `${baseUrl}/${rutaLimpia}` : ruta;
}

/* ---------- 1. Perfil: textos y enlaces ---------- */
function renderizarPerfil() {
  const datosPerfil = PERFIL[idiomaActual] || PERFIL.es;

  // Rellena elementos del perfil
  document.querySelectorAll("[data-perfil]").forEach((elemento) => {
    const clave = elemento.dataset.perfil;
    if (PERFIL[clave]) {
      elemento.textContent = PERFIL[clave];
    } else if (datosPerfil[clave]) {
      elemento.textContent = datosPerfil[clave];
    }
  });

  // Rellena enlaces
  document.querySelectorAll("[data-link]").forEach((enlace) => {
    const clave = enlace.dataset.link;
    enlace.href = clave === "email" ? `mailto:${PERFIL.email}` : PERFIL[clave];
  });

  // Datos generales de la sección "Sobre mí"
  const t = TRADUCCIONES[idiomaActual] || TRADUCCIONES.es;
  const datos = [
    { etiqueta: t.label_nombre, valor: PERFIL.nombre },
    { etiqueta: t.label_edad, valor: datosPerfil.edad },
    { etiqueta: t.label_ubicacion, valor: datosPerfil.ubicacion },
    { etiqueta: t.label_email_personal, valor: PERFIL.emailPersonal },
    { etiqueta: t.label_email_educativo, valor: PERFIL.emailEducativo },
    { etiqueta: t.label_telefono, valor: PERFIL.telefono },
    { etiqueta: t.label_anios, valor: datosPerfil.aniosDesarrollando },
    { etiqueta: t.label_formacion, valor: datosPerfil.formacionActual },
  ];

  const listaDatos = document.getElementById("lista-datos");
  if (listaDatos) {
    listaDatos.innerHTML = datos
      .map(
        (dato) => `
        <div class="datos__fila">
          <dt>${dato.etiqueta}</dt>
          <dd>${dato.valor}</dd>
        </div>`
      )
      .join("");
  }

  // Año actual en el pie de página
  const anioEl = document.getElementById("anio-actual");
  if (anioEl) anioEl.textContent = new Date().getFullYear();
}

/* ---------- 2. Traducción de UI (Fija) ---------- */
function aplicarTraduccionesFijas() {
  const t = TRADUCCIONES[idiomaActual] || TRADUCCIONES.es;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.dataset.i18n;
    if (t[clave]) {
      el.textContent = t[clave];
    }
  });

  // Enlaces de navegación
  const enlacesNav = document.querySelectorAll(".nav__enlace");
  enlacesNav.forEach((enlace) => {
    const href = enlace.getAttribute("href");
    if (href === "#inicio") enlace.textContent = t.nav_inicio;
    if (href === "#sobre-mi") enlace.textContent = t.nav_sobre_mi;
    if (href === "#habilidades") enlace.textContent = t.nav_habilidades;
    if (href === "#curriculum") enlace.textContent = t.nav_curriculum;
    if (href === "#proyectos") enlace.textContent = t.nav_proyectos;
    if (href === "#contacto" || href === "#redes") enlace.textContent = t.nav_contacto;
  });
}

/* ---------- 3. Habilidades ---------- */
function renderizarHabilidades() {
  const contenedor = document.getElementById("lista-habilidades");
  if (!contenedor) return;

  const categorias = HABILIDADES_CATEGORIAS[idiomaActual] || HABILIDADES_CATEGORIAS.es;

  contenedor.innerHTML = categorias.map(
    (cat) => `
    <div class="habilidades__categoria reveal">
      <h3 class="habilidades__categoria-titulo">${cat.categoria}</h3>
      <div class="habilidades__grid-cat">
        ${cat.tecnologias.map(
          (tech) => `
          <article class="habilidad-card tarjeta">
            <div class="habilidad-card__top">
              <div class="habilidad-card__icono" style="${tech.color ? `background-color: ${tech.color}1A; color: ${tech.color};` : ''}">${tech.svg}</div>
              <div class="habilidad-card__info">
                <h4 class="habilidad-card__nombre">${tech.nombre}</h4>
                <p class="habilidad-card__tipo mono">${tech.tipo}</p>
              </div>
              <span class="habilidad-card__porcentaje mono">${tech.nivel}%</span>
            </div>
            <div class="habilidad-card__bar-bg">
              <div class="habilidad-card__bar-fill" style="width: ${tech.nivel}%; ${tech.color ? `background-color: ${tech.color}; box-shadow: 0 0 8px ${tech.color}66;` : ''}"></div>
            </div>
          </article>
        `
        ).join("")}
      </div>
    </div>
  `
  ).join("");
}

/* ---------- 4. Currículum: líneas de tiempo ---------- */
function renderizarTimeline(idContenedor, entradasObj) {
  const elem = document.getElementById(idContenedor);
  if (!elem) return;
  const entradas = entradasObj[idiomaActual] || entradasObj.es;
  elem.innerHTML = entradas
    .map(
      (entrada) => `
      <li class="timeline__item">
        <p class="timeline__periodo mono">${entrada.periodo}</p>
        <h4 class="timeline__titulo">${entrada.titulo}</h4>
        <p class="timeline__lugar acento">${entrada.lugar}</p>
        <p class="timeline__detalle">${entrada.detalle}</p>
      </li>`
    )
    .join("");
}

/* ---------- 5. Proyectos ---------- */
function renderizarProyectos() {
  const contenedorIndiv = document.getElementById("lista-proyectos-individuales");
  const contenedorGrup = document.getElementById("lista-proyectos-grupales");
  const t = TRADUCCIONES[idiomaActual] || TRADUCCIONES.es;

  const proyectosIndiv = PROYECTOS_INDIVIDUALES[idiomaActual] || PROYECTOS_INDIVIDUALES.es;
  const proyectosGrup = PROYECTOS_GRUPALES[idiomaActual] || PROYECTOS_GRUPALES.es;

  if (contenedorIndiv) {
    contenedorIndiv.innerHTML = proyectosIndiv.map((p, index) => `
      <article class="proyecto-showcase proyecto-showcase--indiv-${index + 1} reveal">
        <div class="proyecto-showcase__contenido">
          <header class="proyecto-showcase__header">
            <span class="proyecto__icono" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </span>
            <div>
              <h3 class="proyecto-showcase__titulo">${p.titulo}</h3>
              ${p.rol ? `<p class="mono acento" style="font-size: 0.85rem; margin-top: 0.2rem;">${p.rol}</p>` : ''}
            </div>
          </header>
          <p class="proyecto-showcase__descripcion">${p.descripcion}</p>
          <ul class="proyecto__chips">
            ${p.aprendizajes.map((tec) => `<li class="chip">${tec}</li>`).join("")}
          </ul>
          <div class="proyecto-showcase__acciones">
            <a class="boton boton--fantasma proyecto__repo" href="${p.repositorio}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
              ${t.ver_repositorio}
            </a>
            ${p.demo ? `
              <a class="boton boton--primario proyecto__demo" href="${p.demo}" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                ${t.ver_demo}
              </a>
            ` : p.demoEstado === 'en_proceso' ? `
              <span class="boton boton--fantasma proyecto__demo--proceso">
                <span class="contacto-badge__dot" style="background-color: #f59e0b; box-shadow: 0 0 8px #f59e0b;"></span>
                ${t.demo_en_proceso}
              </span>
            ` : p.demoEstado === 'proximamente' ? `
              <span class="boton boton--fantasma proyecto__demo--proximamente">
                <span class="contacto-badge__dot" style="background-color: #3b82f6; box-shadow: 0 0 8px #3b82f6;"></span>
                ${t.demo_proximamente}
              </span>
            ` : ''}
          </div>
        </div>
        <div class="proyecto-showcase__imagen-wrapper">
          <img src="${resolverRutaAsset(p.imagen)}" alt="Vista previa de ${p.titulo}" class="proyecto-showcase__imagen" loading="lazy" />
        </div>
      </article>
    `).join("");
  }

  if (contenedorGrup) {
    contenedorGrup.innerHTML = proyectosGrup.map((p) => `
      <article class="proyecto-showcase proyecto-showcase--${p.id} reveal" id="proyecto-${p.id}">
        <div class="proyecto-showcase__contenido">
          <header class="proyecto-showcase__header">
            <span class="proyecto__icono" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </span>
            <div>
              <h3 class="proyecto-showcase__titulo">${p.titulo}</h3>
              ${p.rol ? `<p class="mono acento" style="font-size: 0.85rem; margin-top: 0.2rem;">${p.rol}</p>` : ''}
            </div>
          </header>
          <p class="proyecto-showcase__descripcion">${p.descripcion}</p>
          <ul class="proyecto__chips">
            ${p.aprendizajes.map((tec) => `<li class="chip">${tec}</li>`).join("")}
          </ul>
          <div class="proyecto-showcase__acciones">
            <a class="boton boton--fantasma proyecto__repo" href="${p.repositorio}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
              ${t.ver_repositorio_github}
            </a>
            ${p.demo ? `
              <a class="boton boton--primario proyecto__demo" href="${p.demo}" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                ${t.ver_demo}
              </a>
            ` : p.demoEstado === 'en_proceso' ? `
              <span class="boton boton--fantasma proyecto__demo--proceso">
                <span class="contacto-badge__dot" style="background-color: #f59e0b; box-shadow: 0 0 8px #f59e0b;"></span>
                ${t.demo_en_proceso}
              </span>
            ` : p.demoEstado === 'proximamente' ? `
              <span class="boton boton--fantasma proyecto__demo--proximamente">
                <span class="contacto-badge__dot" style="background-color: #3b82f6; box-shadow: 0 0 8px #3b82f6;"></span>
                ${t.demo_proximamente}
              </span>
            ` : p.demoEstado === 'no_disponible' ? `
              <button class="boton boton--fantasma proyecto__demo--deshabilitado" type="button" disabled aria-disabled="true" style="cursor: not-allowed; opacity: 0.6; pointer-events: none; border-color: rgba(148, 163, 184, 0.35); color: #94a3b8;">
                <span class="contacto-badge__dot" style="background-color: #94a3b8; box-shadow: none;"></span>
                ${t.demo_no_disponible || 'Demo no disponible'}
              </button>
            ` : ''}
          </div>
        </div>
        
        <!-- Galería de imágenes deslizable -->
        <div class="galeria-carrusel" data-index="0" data-total="${p.imagenes.length}">
          <div class="galeria-carrusel__slider">
            ${p.imagenes.map((imgUrl, imgIndex) => `
              <img src="${resolverRutaAsset(imgUrl)}" alt="${p.titulo} - Captura ${imgIndex + 1}" class="galeria-carrusel__img ${imgIndex === 0 ? 'activa' : ''}" loading="lazy" />
            `).join("")}
          </div>
          ${p.imagenes.length > 1 ? `
            <button class="carrusel-btn carrusel-btn--prev" onclick="cambiarImagenCarrusel('${p.id}', -1)" aria-label="Imagen anterior">
              &#10094;
            </button>
            <button class="carrusel-btn carrusel-btn--next" onclick="cambiarImagenCarrusel('${p.id}', 1)" aria-label="Imagen siguiente">
              &#10095;
            </button>
            <div class="carrusel-indicadores">
              ${p.imagenes.map((_, i) => `<span class="indicador ${i === 0 ? 'activo' : ''}"></span>`).join("")}
            </div>
          ` : ''}
        </div>
      </article>
    `).join("");
  }
}

// Función global para manejar el cambio de imágenes en el carrusel de proyectos
window.cambiarImagenCarrusel = function(proyectoId, direccion) {
  const tarjeta = document.getElementById(`proyecto-${proyectoId}`);
  if (!tarjeta) return;

  const carrusel = tarjeta.querySelector('.galeria-carrusel');
  const imagenes = carrusel.querySelectorAll('.galeria-carrusel__img');
  const indicadores = carrusel.querySelectorAll('.indicador');
  
  let indexActual = parseInt(carrusel.getAttribute('data-index') || '0', 10);
  const total = imagenes.length;

  imagenes[indexActual].classList.remove('activa');
  if (indicadores[indexActual]) indicadores[indexActual].classList.remove('activo');

  indexActual = (indexActual + direccion + total) % total;

  imagenes[indexActual].classList.add('activa');
  if (indicadores[indexActual]) indicadores[indexActual].classList.add('activo');

  carrusel.setAttribute('data-index', indexActual);
};

/* ---------- 6. Configurar Cambiador de Idioma (ES/EN) ---------- */
function configurarIdioma() {
  const btnLang = document.getElementById("lang-toggle");
  const langEs = document.getElementById("lang-es");
  const langEn = document.getElementById("lang-en");

  function actualizarUIBoton(idm) {
    if (langEs && langEn) {
      langEs.classList.toggle("active", idm === "es");
      langEn.classList.toggle("active", idm === "en");
    }
  }

  function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    localStorage.setItem("idioma", idiomaActual);
    actualizarUIBoton(idiomaActual);

    renderizarPerfil();
    aplicarTraduccionesFijas();
    renderizarHabilidades();
    renderizarTimeline("lista-educacion", EDUCACION);
    renderizarTimeline("lista-experiencia", EXPERIENCIA);
    renderizarProyectos();
    configurarAnimaciones();
  }

  if (btnLang) {
    btnLang.addEventListener("click", () => {
      const nuevo = idiomaActual === "es" ? "en" : "es";
      cambiarIdioma(nuevo);
    });
  }

  actualizarUIBoton(idiomaActual);
}

/* ---------- 7. Tema: Modo Claro / Oscuro ---------- */
function configurarTema() {
  const toggleBtn = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const icon = document.getElementById("theme-icon");
  
  const iconLuna = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
  const iconSol = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';

  function actualizarIcono(esClaro) {
    if (icon) icon.innerHTML = esClaro ? iconLuna : iconSol;
  }

  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "claro") {
    htmlEl.setAttribute("data-tema", "claro");
    actualizarIcono(true);
  } else {
    actualizarIcono(false);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const esClaro = htmlEl.getAttribute("data-tema") === "claro";
      if (esClaro) {
        htmlEl.removeAttribute("data-tema");
        localStorage.setItem("tema", "oscuro");
        actualizarIcono(false);
      } else {
        htmlEl.setAttribute("data-tema", "claro");
        localStorage.setItem("tema", "claro");
        actualizarIcono(true);
      }
    });
  }
}

/* ---------- 8. Navegación ---------- */
function configurarNavegacion() {
  const boton = document.getElementById("menu-boton");
  const lista = document.getElementById("menu-lista");
  if (!boton || !lista) return;

  const enlaces = lista.querySelectorAll(".nav__enlace");

  function alternarMenu(forzarCerrado = false) {
    const abierto = forzarCerrado ? false : !lista.classList.contains("nav__lista--abierta");
    lista.classList.toggle("nav__lista--abierta", abierto);
    boton.classList.toggle("nav__boton--abierto", abierto);
    boton.setAttribute("aria-expanded", String(abierto));
  }

  boton.addEventListener("click", () => alternarMenu());
  enlaces.forEach((enlace) =>
    enlace.addEventListener("click", () => alternarMenu(true))
  );

  const secciones = document.querySelectorAll("main section[id], footer[id]");
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        enlaces.forEach((enlace) => {
          const href = enlace.getAttribute("href");
          enlace.classList.toggle(
            "nav__enlace--activo",
            href === `#${entrada.target.id}` || (href === "#contacto" && entrada.target.id === "contacto")
          );
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  secciones.forEach((seccion) => observador.observe(seccion));

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("nav--scroll", window.scrollY > 20);
  });
}

/* ---------- 9. Animaciones ---------- */
function configurarAnimaciones() {
  const observador = new IntersectionObserver(
    (entradas, obs) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("reveal--visible");
        obs.unobserve(entrada.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((elemento) => observador.observe(elemento));
}

/* ---------- 10. Efectos de ratón ---------- */
function configurarEfectosRaton() {
  document.addEventListener('mousemove', (e) => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach((tarjeta) => {
      const rect = tarjeta.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      tarjeta.style.setProperty('--mouse-x', `${x}px`);
      tarjeta.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => {
  configurarIdioma();
  renderizarPerfil();
  aplicarTraduccionesFijas();
  renderizarHabilidades();
  renderizarTimeline("lista-educacion", EDUCACION);
  renderizarTimeline("lista-experiencia", EXPERIENCIA);
  renderizarProyectos();
  configurarNavegacion();
  configurarTema();
  configurarAnimaciones();
  configurarEfectosRaton();
});
