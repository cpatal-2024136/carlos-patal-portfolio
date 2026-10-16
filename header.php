<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="<?php echo esc_attr(get_bloginfo('description') ? get_bloginfo('description') : 'Portafolio de Carlos Patal — Desarrollador Web / Backend, proyectos, habilidades y experiencia.'); ?>" />
  <meta name="author" content="Carlos Patal" />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Carlos Patal | Desarrollador Web / Backend" />
  <meta property="og:description" content="Portafolio profesional de Carlos Patal. Soluciones web, desarrollo backend y proyectos fullstack." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="<?php echo esc_url(get_template_directory_uri() . '/assets/img/perfil.jpg'); ?>" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <!-- ============================================================
       NAVEGACIÓN DE WORDPRESS
       ============================================================ -->
  <header class="nav" id="nav">
    <nav class="contenedor nav__interior" aria-label="<?php echo esc_attr__('Navegación principal', 'carlos-patal-portfolio'); ?>">
      <a class="nav__marca" href="#inicio" data-perfil="marca">&lt;dev /&gt;</a>

      <button class="nav__boton" id="menu-boton" aria-label="<?php echo esc_attr__('Abrir menú', 'carlos-patal-portfolio'); ?>" aria-expanded="false" aria-controls="menu-lista">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav__lista" id="menu-lista">
        <li><a href="#inicio" class="nav__enlace"><?php echo esc_html__('Inicio', 'carlos-patal-portfolio'); ?></a></li>
        <li><a href="#sobre-mi" class="nav__enlace"><?php echo esc_html__('Sobre mí', 'carlos-patal-portfolio'); ?></a></li>
        <li><a href="#habilidades" class="nav__enlace"><?php echo esc_html__('Habilidades', 'carlos-patal-portfolio'); ?></a></li>
        <li><a href="#curriculum" class="nav__enlace"><?php echo esc_html__('Currículum', 'carlos-patal-portfolio'); ?></a></li>
        <li><a href="#proyectos" class="nav__enlace"><?php echo esc_html__('Proyectos', 'carlos-patal-portfolio'); ?></a></li>
        <li><a href="#contacto" class="nav__enlace"><?php echo esc_html__('Contacto', 'carlos-patal-portfolio'); ?></a></li>
        <li>
          <button id="lang-toggle" class="boton-lang" aria-label="<?php echo esc_attr__('Cambiar idioma (Español / English)', 'carlos-patal-portfolio'); ?>">
            <span class="lang-code active" id="lang-es">ES</span>
            <span class="lang-separator">|</span>
            <span class="lang-code" id="lang-en">EN</span>
          </button>
        </li>
        <li>
          <button id="theme-toggle" class="boton-tema" aria-label="<?php echo esc_attr__('Alternar modo claro/oscuro', 'carlos-patal-portfolio'); ?>">
            <svg id="theme-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
