<?php return array(
    'root' => array(
        'name' => 'xwp/stream',
        'pretty_version' => 'dev-fix/build-process',
        'version' => 'dev-fix/build-process',
        'reference' => '2b928778e8eb44fe0c109d47f4d0ab56531a63ac',
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
            'pretty_version' => '3.8.1',
            'version' => '3.8.1.0',
            'reference' => 'e331b534d7de10402d7545a0de50177b874c0779',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../woocommerce/action-scheduler',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'xwp/stream' => array(
            'pretty_version' => 'dev-fix/build-process',
            'version' => 'dev-fix/build-process',
            'reference' => '2b928778e8eb44fe0c109d47f4d0ab56531a63ac',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
