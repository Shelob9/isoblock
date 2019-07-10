<?php
/**
 * Plugin Name: Hydrate Test
 */


/**
 * Load block
 */
add_action('init', function () {

    $blockConfig = json_decode(file_get_contents(__DIR__ . '/block.json'), true);
    $name = $blockConfig['name'];

    $block = new WP_Block_Type($name, []);
    $block->script = str_replace('/', '-', $name);
    $block->editor_script = str_replace('/', '-', $name) . '-editor';

    //Register script
    if (!empty($blockConfig['script'])) {
        //setting this prop, causes script to be enqueued with block
        $block->script = str_replace('/', '-', $name);
        wp_register_script(
            $block->script,
            esc_url_raw(plugins_url($blockConfig['script'], __FILE__)),
            ['wp-blocks', 'wp-element', 'wp-editor'],
            md5_file(__DIR__ . '/' . $blockConfig['script']),
            true
        );
    }

    //Register style
    if (!empty($blockConfig['style'])) {
        //setting this prop, causes style to be enqueued with block
        $block->style = str_replace('/', '-', $name) . '-style';
        wp_register_style(
            $block->style,
            esc_url_raw(plugins_url($blockConfig['style'], __FILE__)),
            [],
            md5_file(__DIR__ . '/' . $blockConfig['style']),
            true
        );
    }

    //Register editor script
    if (!empty($blockConfig['editorScript'])) {
        //setting this prop, causes script to be enqueued with block in editor
        $block->editor_script = str_replace('/', '-', $name) . '-editor';

        wp_register_script(
            $block->editor_script,
            esc_url_raw(plugins_url($blockConfig['editorScript'], __FILE__)),
            ['wp-blocks', 'wp-element', 'wp-editor'],
            md5_file(__DIR__ . '/' . $blockConfig['editorScript']),
            true
        );
    }

    //register editor style
    if (!empty($blockConfig['editorStyle'])) {
        //setting this prop, causes style to be enqueued with block in editor
        $block->editor_style = str_replace('/', '-', $name) . '-style';
        wp_register_style(
            $block->editor_style,
            esc_url_raw(plugins_url($blockConfig['editorStyle'], __FILE__)),
            [],
            md5_file(__DIR__ . '/' . $blockConfig['editorStyle']),
            true
        );
    }

    register_block_type($block);
});
