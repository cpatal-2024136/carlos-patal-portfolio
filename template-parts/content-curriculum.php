<?php
/**
 * Template part for Curriculum section (includes CV PDF Download Card)
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

$cv_pdf_url = carlos_patal_get_cv_url();
?>
<section class="seccion" id="curriculum">
  <div class="contenedor">
    <p class="seccion__eyebrow mono" data-i18n="sec_trayectoria_num">03. Trayectoria</p>
    <h2 class="seccion__titulo" data-i18n="sec_curriculum_titulo">Currículum</h2>

    <div class="curriculum__grid">
      <div class="reveal">
        <h3 class="curriculum__subtitulo" data-i18n="curriculum_educacion">Educación</h3>
        <ol class="timeline" id="lista-educacion"></ol>
      </div>
      <div class="reveal">
        <h3 class="curriculum__subtitulo" data-i18n="curriculum_experiencia">Experiencia</h3>
        <ol class="timeline" id="lista-experiencia"></ol>
      </div>
    </div>

    <!-- Apartado destacado para Descarga de Curriculum Vitae (PDF) en WordPress -->
    <div class="cv-download-card reveal">
      <div class="cv-download-card__left">
        <div class="cv-download-card__icono">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <polyline points="9 15 12 18 15 15"></polyline>
          </svg>
        </div>
        <div class="cv-download-card__info">
          <h3 class="cv-download-card__titulo" data-i18n="cv_descargar_titulo">Descargar Currículum</h3>
          <p class="cv-download-card__desc" data-i18n="cv_descargar_sub">Obtén una copia en PDF con los detalles completos de mi formación, habilidades y experiencia profesional.</p>
        </div>
      </div>
      <a href="<?php echo esc_url($cv_pdf_url); ?>" download="CV_Carlos_Patal.pdf" target="_blank" rel="noopener noreferrer" class="boton boton--primario cv-download-card__btn">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span data-i18n="btn_descargar_cv">Descargar CV (PDF)</span>
      </a>
    </div>
  </div>
</section>
