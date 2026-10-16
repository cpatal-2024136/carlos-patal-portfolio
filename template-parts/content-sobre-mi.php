<?php
/**
 * Template part for Sobre mí section
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
$perfil_img = get_template_directory_uri() . '/assets/img/perfil.jpg';
?>
<section class="seccion" id="sobre-mi">
  <div class="contenedor">
    <p class="seccion__eyebrow mono" data-i18n="sec_info_num">01. Información</p>
    <h2 class="seccion__titulo" data-i18n="sec_sobre_mi_titulo">Sobre mí</h2>

    <div class="sobre-mi__grid">
      <!-- Foto de Perfil y Descripción -->
      <article class="tarjeta sobre-mi__tarjeta-perfil reveal">
        <div class="sobre-mi__perfil-header">
          <div class="sobre-mi__foto-container">
            <img src="<?php echo esc_url($perfil_img); ?>" alt="<?php echo esc_attr__('Foto de Carlos Patal', 'carlos-patal-portfolio'); ?>" class="sobre-mi__foto" />
            <div class="sobre-mi__foto-badge mono" style="margin-top: 0.65rem;">
              <span class="contacto-badge__dot"></span> Fullstack (Backend & Frontend)
            </div>
          </div>

          <div class="sobre-mi__info-texto">
            <h3 class="tarjeta__titulo" data-perfil="titulo"></h3>
            <p class="sobre-mi__descripcion" data-perfil="descripcion"></p>
          </div>
        </div>
      </article>

      <!-- Datos generales (se rellenan dinámicamente) -->
      <article class="tarjeta reveal">
        <h3 class="tarjeta__titulo" data-i18n="datos_generales_titulo">Datos generales</h3>
        <dl class="datos" id="lista-datos"></dl>
      </article>
    </div>
  </div>
</section>
