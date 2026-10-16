<?php
/**
 * Template part for Contacto section
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<section class="seccion contacto-destacado" id="contacto">
  <div class="contenedor">
    <div class="contacto-card tarjeta reveal">
      <div class="contacto-card__header">
        <div class="contacto-badge">
          <span class="contacto-badge__dot"></span>
          <span data-i18n="contacto_disponible">Disponible para nuevos proyectos</span>
        </div>
        <p class="seccion__eyebrow mono" style="margin-top: 1rem;" data-i18n="contacto_eyebrow">05. Contáctame</p>
        <h2 class="contacto-card__titulo" data-i18n="contacto_titulo">¿Tienes una idea o proyecto en mente?</h2>
        <p class="contacto-card__sub" data-i18n="contacto_sub">Estoy buscando oportunidades para aportar valor en entornos de desarrollo backend y fullstack. ¡Hablemos!</p>
      </div>

      <div class="contacto-card__grid">
        <!-- Email Personal -->
        <a href="mailto:correoinfocarlosale@gmail.com" target="_blank" rel="noopener noreferrer" class="contacto-item contacto-item--email tarjeta">
          <div class="contacto-item__icono" style="background-color: rgba(234, 67, 53, 0.12); color: #EA4335;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          </div>
          <div class="contacto-item__info">
            <span class="contacto-item__label mono" data-i18n="contacto_label_email_personal">Email Personal</span>
            <strong class="contacto-item__val">correoinfocarlosale@gmail.com</strong>
          </div>
          <span class="contacto-item__arrow">&rarr;</span>
        </a>

        <!-- Email Institucional -->
        <a href="mailto:cpatal-2024136@kinal.edu.gt" target="_blank" rel="noopener noreferrer" class="contacto-item contacto-item--email-edu tarjeta">
          <div class="contacto-item__icono" style="background-color: rgba(37, 99, 235, 0.12); color: #2563eb;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div class="contacto-item__info">
            <span class="contacto-item__label mono" data-i18n="contacto_label_email_edu">Email Institucional</span>
            <strong class="contacto-item__val">cpatal-2024136@kinal.edu.gt</strong>
          </div>
          <span class="contacto-item__arrow">&rarr;</span>
        </a>

        <!-- LinkedIn -->
        <a data-link="linkedin" href="https://www.linkedin.com/in/carlos-alejandro-b243802b2/" target="_blank" rel="noopener noreferrer" class="contacto-item contacto-item--linkedin tarjeta">
          <div class="contacto-item__icono" style="background-color: rgba(10, 102, 194, 0.12); color: #0A66C2;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
          </div>
          <div class="contacto-item__info">
            <span class="contacto-item__label mono">LinkedIn</span>
            <strong class="contacto-item__val">Carlos Patal</strong>
          </div>
          <span class="contacto-item__arrow">&rarr;</span>
        </a>

        <!-- GitHub -->
        <a data-link="github" href="https://github.com/cpatal-2024136" target="_blank" rel="noopener noreferrer" class="contacto-item contacto-item--github tarjeta">
          <div class="contacto-item__icono" style="background-color: rgba(137, 87, 229, 0.12); color: #8957E5;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>
          </div>
          <div class="contacto-item__info">
            <span class="contacto-item__label mono">GitHub</span>
            <strong class="contacto-item__val">@cpatal-2024136</strong>
          </div>
          <span class="contacto-item__arrow">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</section>
