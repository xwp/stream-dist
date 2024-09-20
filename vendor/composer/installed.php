<?php return array(
    'root' => array(
        'name' => 'xwp/stream',
        'pretty_version' => 'dev-feature/reintroduce-packagist-deploy',
        'version' => 'dev-feature/reintroduce-packagist-deploy',
        'reference' => 'fb87efd7cc881f568e1b8d6ce8ef0c9151a7a647',
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => false,
    ),
    'versions' => array(
        'composer/installers' => array(
            'pretty_version' => 'v1.12.0',
            'version' => '1.12.0.0',
            'reference' => 'd20a64ed3c94748397ff5973488761b22f6d3f19',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'roundcube/plugin-installer' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'shama/baton' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'xwp/stream' => array(
            'pretty_version' => 'dev-feature/reintroduce-packagist-deploy',
            'version' => 'dev-feature/reintroduce-packagist-deploy',
            'reference' => 'fb87efd7cc881f568e1b8d6ce8ef0c9151a7a647',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
