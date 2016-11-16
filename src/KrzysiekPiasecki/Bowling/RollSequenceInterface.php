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
 * Represents a sequence of rolls
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface RollSequenceInterface extends SequenceInterface
{
    /**
     * A roll with a given number
     *
     * @param int $number A roll number
     * @return RollInterface Roll at a given position
     * @throws \OutOfBoundsException Thrown if given roll number is invalid
     */
    public function rollNumber(int $number): RollInterface;

    /**
     * Append a new roll
     *
     * @param RollInterface $roll A new roll appended to a sequence
     * @return RollSequenceInterface A new sequence with a new roll appended to the sequence
     */
    public function appendRoll(RollInterface $roll): RollSequenceInterface;

    /**
     * @inheritdoc
     */
    public function count(): int;

    /**
     * @inheritdoc
     */
    public function getIterator(): \Iterator;
}
