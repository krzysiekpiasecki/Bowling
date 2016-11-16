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
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface PointSequenceInterface extends SequenceInterface
{
    /**
     * Append a new points to a sequence
     *
     * @param int $points Points appended to a sequence
     * @return PointSequenceInterface A new sequence with an appended points
     */
    public function appendPoints(int $points): PointSequenceInterface;

    /**
     * New point sequence which is a sequence with all points appended from another sequence
     *
     * @param PointSequenceInterface $pointSequence Another sequence to append
     * @return PointSequenceInterface A new point sequence with another sequence appended
     */
    public function appendPointSequence(PointSequenceInterface $pointSequence): PointSequenceInterface;
}
