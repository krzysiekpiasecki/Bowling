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

namespace Bowling;

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
     * Return a roll with a given number
     *
     * @param int $rollNumber A roll number
     * @return RollInterface A roll at the given position
     * @throws \InvalidArgumentException Thrown if a given roll number is invalid
     */
    public function rollNumber(int $rollNumber): RollInterface;

    /**
     * Return a frame with another roll
     *
     * @param RollInterface $roll Another roll which will be a part of this frame
     * @return FrameInterface A frame with another roll
     */
    public function withRoll(RollInterface $roll): FrameInterface;

    /**
     * Replace roll at the given position
     *
     * @param RollInterface $roll A roll which replace a roll at the given position
     * @param int $rollNumber Roll number to replace
     * @return FrameInterface A frame with a roll at the given position replaced with a new roll
     * @throws \InvalidArgumentException Thrown if a given roll number is invalid
     */
    public function replaceRoll(RollInterface $roll, int $rollNumber): FrameInterface;

    /**
     * Return a sequence of rolls
     *
     * @return RollSequenceInterface A roll sequence
     */
    public function rollSequence(): RollSequenceInterface;

}
