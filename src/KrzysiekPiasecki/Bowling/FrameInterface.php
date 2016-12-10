<?php

/*
 * This file is part of the Bowling package.
 *
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace KrzysiekPiasecki\Bowling;

/**
 * Represents a single frame
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface FrameInterface extends ScoreInterface
{

    /**
     * @inheritdoc
     */
    public function score(): int;

    /**
     * Roll with a given number
     *
     * @param int $rollNumber
     * @return RollInterface
     * @throws \OutOfBoundsException Thrown if given roll number is invalid
     */
    public function rollNumber(int $rollNumber): RollInterface;

    /**
     * A new frame with another roll
     *
     * @param RollInterface $roll Another roll which belongs to a frame
     * @return FrameInterface A new frame with another roll
     */
    public function withRoll(RollInterface $roll): FrameInterface;

    /**
     * @param RollInterface $roll
     * @param int $rollNumber
     * @return mixed
     */
    public function replaceRoll(RollInterface $roll, int $rollNumber): FrameInterface;

    /**
     * A roll sequence
     * @return RollSequenceInterface A roll sequence
     */
    public function rollSequence(): RollSequenceInterface;

    // public function isSpare(): bool;
}
