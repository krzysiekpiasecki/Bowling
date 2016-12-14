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
 * @see SequenceInterface A sequence of points interface
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface PointSequenceInterface extends SequenceInterface
{
    /**
     * Add given points to a sequence
     *
     * @param int $points Points added to a sequence
     * @return PointSequenceInterface A sequence with points added to a sequence
     */
    public function addPoints(int $points): PointSequenceInterface;

    /**
     * Add points from other points sequence
     *
     * @param PointSequenceInterface $pointSequence Other points sequence
     * @return PointSequenceInterface A sequence with points added from other points sequence
     */
    public function addPointSequence(PointSequenceInterface $pointSequence): PointSequenceInterface;
}
