<?php
/**
 * Plugin Name: Hydrate Test
 */


/**
 * Load block
 */
add_action( 'init', function() {
    $block = new WP_Block_Type( 'josh/isoblock' ,[]);
    $block->editor_script = 'isoblock-editor';
    $block->script = 'isoblock-front';

    wp_register_script(
        $block->editor_script,
        plugins_url( '/build/index.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor' ],
        md5_file( __DIR__ . '/build/index.js' ),
        true
    );
    wp_register_script(
        $block->script,
        plugins_url( '/build/front.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor' ],
        md5_file( __DIR__ . '/build/front.js' ),
        true
    );

    register_block_type( $block );
} );
