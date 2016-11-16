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
 * Represents a sequence of points
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
     * New points sequence with a given sequence of points
     *
     * @param array $points A sequence of points
     */
    public function __construct(array $points = [])
    {
        $this->sequence = $points;
    }

    /**
     * @inheritdoc
     */
    public function appendPoints(int $points): PointSequenceInterface
    {
        $newSequence = clone $this;
        $newSequence->sequence[] = $points;

        return $newSequence;
    }

    /**
     * @inheritdoc
     */
    public function appendPointSequence(PointSequenceInterface $pointSequence): PointSequenceInterface
    {
        $newSequence = clone $this;
        $newSequence->sequence = array_merge($this->sequence, iterator_to_array($pointSequence));

        return $newSequence;
    }
}
