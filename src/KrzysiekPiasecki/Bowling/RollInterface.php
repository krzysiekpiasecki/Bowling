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
 * Represents a single roll
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface RollInterface extends ScoreInterface
{

    /**
     * Number of pins knocked down
     *
     * @return int Number of pins knocked down
     */
    public function pins(): int;

    /**
     * A new roll with an extra points
     *
     * @param int $points Number of extra points
     * @return RollInterface A new roll with an extra points
     */
    public function withExtraPoints(int $points): RollInterface;

    /**
     * A point sequence for a roll
     *
     * @return PointSequenceInterface A point sequence for a roll
     */
    public function pointSequence(): PointSequenceInterface;

    /**
     * Total score
     *
     * @return int Total score
     */
    public function score(): int;
}
