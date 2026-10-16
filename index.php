<?php
/**
 * Main Index Template for Carlos Patal Portfolio Theme
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main>
  <?php
  // Render hero section
  get_template_part('template-parts/content', 'hero');

  // Render sobre-mi section
  get_template_part('template-parts/content', 'sobre-mi');

  // Render habilidades section
  get_template_part('template-parts/content', 'habilidades');

  // Render curriculum section (includes CV PDF download card)
  get_template_part('template-parts/content', 'curriculum');

  // Render proyectos section
  get_template_part('template-parts/content', 'proyectos');

  // Render contacto section
  get_template_part('template-parts/content', 'contacto');
  ?>
</main>

<?php
get_footer();
