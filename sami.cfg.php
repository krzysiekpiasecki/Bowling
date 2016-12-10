<?php

declare(strict_types=1);

require_once 'vendor/autoload.php';

use Sami\Sami;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in(array(
        './src'
    )
);


return new Sami(
    $iterator,
    array(
        'build_dir' => './docs/api',
        'cache_dir' => './var/cache/sami',
        'title' => 'BowlingGame',
        'theme' => 'default',
        'include_parent_data' => true,
        'default_opened_level' => 2,
    )
);
