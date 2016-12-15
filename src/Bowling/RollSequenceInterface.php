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
 * Represents a sequence of rolls
 *
 * @see SequenceInterface A sequence of elements interface
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface RollSequenceInterface extends SequenceInterface
{
    /**
     * A roll with a given number
     *
     * OutOfBoundsException is thrown if given roll number is invalid or out of the sequence bounds.
     *
     * @param int $number A roll number
     * @return RollInterface Roll at a given position
     * @throws \OutOfBoundsException Thrown if given roll number is invalid or out of the sequence bounds
     */
    public function rollNumber(int $number): RollInterface;

    /**
     * Add a new roll to a sequence
     *
     * @param RollInterface $roll A new roll added to this sequence
     * @return RollSequenceInterface A new sequence with a new roll added to the sequence
     */
    public function addRoll(RollInterface $roll): RollSequenceInterface;

    /**
     * Add a new roll sequence to a sequence
     *
     * @param RollSequenceInterface $rollSequence Other roll sequence
     * @return RollSequenceInterface A sequence with rolls added from other roll sequence
     */
    public function addRollSequence(RollSequenceInterface $rollSequence): RollSequenceInterface;

    /**
     * @inheritdoc
     */
    public function count(): int;

    /**
     * @inheritdoc
     */
    public function getIterator(): \Traversable;
}
