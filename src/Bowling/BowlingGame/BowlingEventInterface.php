<?php

/*
 * This file is part of the BowlingGame package.
 *
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Bowling\BowlingGame;

use Bowling\ScoreInterface;

/**
 * Describes an bowling event
 *
 * @package Bowling\BowlingGame
 */
interface BowlingEventInterface extends ScoreInterface
{
    /**
     * Number of frame
     *
     * @return int Number of frame
     */
    public function frameNumber(): int;

    /**
     * Number of roll
     *
     * @return int Number of roll
     */
    public function rollNumber(): int;

    /**
     * Number of pins knocked down
     *
     * @return int Number of pins knocked down
     */
    public function pins(): int;

    /**
     * The score
     *
     * Score = pins + bonus points (strike, spare).
     *
     * @return int The score
     */
    public function score(): int;

    /**
     * Ensure that spare has been thrown
     *
     * @return bool True if spare has been thrown or false
     */
    public function isSpare(): bool;


    /**
     * Ensure that strike has been thrown
     *
     * @return bool True if strike has been thrown or false
     */
    public function isStrike(): bool;


    /**
     * Ensure that game has been ended
     *
     * @return bool True if game has been ended
     */
    public function isFinish(): bool;
}