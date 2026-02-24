<?php return array(
    'root' => array(
        'name' => 'xwp/stream',
        'pretty_version' => 'dev-master',
        'version' => 'dev-master',
        'reference' => 'e8878d3ed31411b30f6fa178779071fc3450c3c2',
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
        'woocommerce/action-scheduler' => array(
            'pretty_version' => '3.9.3',
            'version' => '3.9.3.0',
            'reference' => 'c58cdbab17651303d406cd3b22cf9d75c71c986c',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../woocommerce/action-scheduler',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'xwp/stream' => array(
            'pretty_version' => 'dev-master',
            'version' => 'dev-master',
            'reference' => 'e8878d3ed31411b30f6fa178779071fc3450c3c2',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
