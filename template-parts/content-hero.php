<?php
/**
 * Template part for Hero section
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<section class="hero" id="inicio">
  <div class="contenedor hero__interior">
    <p class="hero__eyebrow mono" data-i18n="hero_eyebrow">// Bienvenido a mi portafolio</p>
    <h1 class="hero__titulo">
      <span data-i18n="hero_hola">Hola, soy</span> <span class="acento" data-perfil="nombre">Carlos Patal</span>
    </h1>
    <p class="hero__rol" data-perfil="titulo"></p>
    <p class="hero__frase" data-perfil="frase"></p>

    <div class="hero__acciones">
      <a href="#proyectos" class="boton boton--primario" data-i18n="btn_ver_proyectos">Ver proyectos</a>
      <a href="#contacto" class="boton boton--fantasma" data-i18n="btn_contactame">Contáctame</a>
    </div>
  </div>

  <a href="#sobre-mi" class="hero__scroll" aria-label="<?php echo esc_attr__('Bajar a la sección Sobre mí', 'carlos-patal-portfolio'); ?>">
    <span class="hero__scroll-rueda"></span>
  </a>
</section>
