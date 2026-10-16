<?php
/**
 * Carlos Patal Portfolio Theme Functions and Definitions
 * Security-Hardened WordPress Custom Theme
 *
 * @package CarlosPatalPortfolio
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Prevent direct access for security
}

/**
 * 1. Theme Setup
 */
function carlos_patal_theme_setup() {
    // Enable Title Tag support
    add_theme_support('title-tag');

    // Enable Featured Images
    add_theme_support('post-thumbnails');

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style'
    ));

    // Custom Logo support
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'carlos_patal_theme_setup');

/**
 * 2. Enqueue Styles and Scripts safely
 */
function carlos_patal_enqueue_assets() {
    $theme_version = '1.0.0';
    $dir_uri = get_template_directory_uri();

    // Google Fonts & Preconnect
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&family=JetBrains+Mono:wght@400;600&display=swap', array(), null);
    
    // Devicon Icons
    wp_enqueue_style('devicons', 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css', array(), '2.16.0');

    // Theme CSS files
    wp_enqueue_style('carlos-patal-base', $dir_uri . '/css/base.css', array(), $theme_version);
    wp_enqueue_style('carlos-patal-components', $dir_uri . '/css/components.css', array('carlos-patal-base'), $theme_version);
    wp_enqueue_style('carlos-patal-responsive', $dir_uri . '/css/responsive.css', array('carlos-patal-components'), $theme_version);
    wp_enqueue_style('carlos-patal-style', get_stylesheet_uri(), array('carlos-patal-responsive'), $theme_version);

    // Theme JS files
    wp_enqueue_script('carlos-patal-data', $dir_uri . '/js/data.js', array(), $theme_version, true);
    wp_enqueue_script('carlos-patal-main', $dir_uri . '/js/main.js', array('carlos-patal-data'), $theme_version, true);

    // Provide dynamic theme directory URL to JS for asset resolution
    wp_localize_script('carlos-patal-main', 'carlosPatalConfig', array(
        'themeUri' => untrailingslashit($dir_uri),
    ));
}
add_action('wp_enqueue_scripts', 'carlos_patal_enqueue_assets');

/**
 * 3. Cybersecurity Hardening (HTTP Security Headers & Information Disclosure Protection)
 */
function carlos_patal_send_security_headers() {
    if (!headers_sent()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
        header('Referrer-Policy: strict-origin-when-cross-origin');
        header('Permissions-Policy: geolocation=(), microphone=(), camera=()');
    }
}
add_action('send_headers', 'carlos_patal_send_security_headers');

// Remove WordPress Version fingerprinting (Hides WP version from vulnerability scanners)
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

// Disable XML-RPC (Mitigates brute-force and DDoS attacks)
add_filter('xmlrpc_enabled', '__return_false');

// Remove unnecessary header clutter
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

/**
 * 4. Helper Function: Get PDF CV URL
 */
function carlos_patal_get_cv_url() {
    return esc_url(get_template_directory_uri() . '/assets/docs/CV_Carlos_Patal.pdf');
}
