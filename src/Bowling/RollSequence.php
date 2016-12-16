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
 * A sequence is a group of rolls that are kept in an ordered list. The order in which the rolls go
 * in dictates how they are returned in a First In, First Out manner.
 *
 * This is an immutable implementation of {@see RollSequenceInterface}. Linking this sequence
 * with rolls or other sequence of rolls returns always a new instance.
 *
 * @see RollSequenceInterface A sequence of rolls
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class RollSequence implements RollSequenceInterface
{

    use SequenceTrait;

    /**
     * New roll sequence with a given sequence of rolls
     *
     * @param array $rolls A sequence of points
     */
    public function __construct(array $rolls = [])
    {
        $this->sequence = $rolls;
    }

    /**
     * @inheritDoc
     */
    public function rollNumber(int $number): RollInterface
    {
        if (!isset($this->sequence[$number - 1])) {
            throw new \OutOfBoundsException("Invalid roll number");
        }

        return $this->sequence[$this->count() - 1];
    }

    /**
     * @inheritDoc
     */
    public function addRoll(RollInterface $roll): RollSequenceInterface
    {
        $newRollSequence = clone $this;
        $newRollSequence->sequence[] = $roll;

        return $newRollSequence;
    }


    /**
     * @inheritdoc
     */
    public function addRollSequence(RollSequenceInterface $rollSequence): RollSequenceInterface
    {
        $newSequence = clone $this;

        $newSequence->sequence = array_merge(
            $this->sequence,
            iterator_to_array($rollSequence)
        );

        return $newSequence;
    }
}
