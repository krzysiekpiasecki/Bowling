<?php

$finder = Symfony\CS\Finder::create()
    ->in(__DIR__)
;

return Symfony\CS\Config::create()
    ->level(Symfony\CS\FixerInterface::PSR2_LEVEL)
    ->fixers(array('trailing_spaces', 'encoding'))
    ->finder($finder)
    ;