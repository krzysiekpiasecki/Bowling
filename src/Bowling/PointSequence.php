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
 * Represents a sequence of points
 *
 * A sequence is a group of points that are kept in an ordered list. The order in which the points go
 * in dictates how they are returned in a First In, First Out manner.
 *
 * This is an immutable implementation of {@see PointSequenceInterface}. Linking this sequence
 * with points or other sequence of points returns always a new instance.
 *
 * @see PointSequenceInterface A sequence of points
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class PointSequence implements PointSequenceInterface
{
    /**
     * @see SequenceTrait Implementation of {@see SequenceInterface}
     */
    use SequenceTrait;

    /**
     * New points sequence with optional initial sequence of points
     *
     * @param array $points Initial sequence of points
     */
    public function __construct(array $points = [])
    {
        $this->sequence = $points;
    }

    /**
     * @inheritdoc
     */
    public function addPoints(int $points): PointSequenceInterface
    {
        $newSequence = clone $this;
        $newSequence->sequence[] = $points;

        return $newSequence;
    }

    /**
     * @inheritdoc
     */
    public function addPointSequence(PointSequenceInterface $pointSequence): PointSequenceInterface
    {
        if (0 === $pointSequence->count()) {
            return $this;
        }

        $newSequence = clone $this;

        $newSequence->sequence = array_merge(
            $this->sequence,
            iterator_to_array($pointSequence)
        );

        return $newSequence;
    }
}
