<?php
/**
 * Footer Template for WordPress Theme
 *
 * @package CarlosPatalPortfolio
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

  <!-- ============================================================
       FOOTER — Cierre elegante de página
       ============================================================ -->
  <footer class="footer">
    <div class="contenedor footer__interior">
      <div style="margin-bottom: 0.75rem;">
        <a class="nav__marca" href="#inicio" data-perfil="marca" style="font-size: 1.3rem;">&lt;dev /&gt;</a>
      </div>
      <p class="footer__copy mono">
        © <span id="anio-actual"><?php echo esc_html(date('Y')); ?></span> 
        <span data-perfil="nombre">Carlos Patal</span> — 
        <span data-i18n="footer_hecho"><?php echo esc_html__('Hecho en WordPress con HTML, CSS y JavaScript.', 'carlos-patal-portfolio'); ?></span>
      </p>
    </div>
  </footer>

  <?php wp_footer(); ?>
</body>
</html>
