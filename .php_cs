<?php

$finder = \Symfony\CS\Finder::create()->in(array(
    __DIR__ . '/src',
    __DIR__ . '/tests'
    )
);

return Symfony\CS\Config::create()
    ->level(
        \Symfony\CS\FixerInterface::PSR2_LEVEL
    )
    ->fixers(array(
        'trailing_spaces',
        'encoding')
    )
    ->finder(
        $finder
    );
