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
 * Represents a single roll
 *
 * @see RollInterface
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class Roll implements RollInterface
{

    /**
     * @var int The number of pins knocked down
     */
    private $pins;

    /**
     * @var array Points sequence for this roll
     */
    private $points;

    /**
     * A new roll with number of pins knocked down
     *
     * @param int $pins Number of pins knocked down
     */
    public function __construct(int $pins)
    {
        $this->pins = $pins;
        $this->points = [];
    }

    /**
     * @inheritdoc
     */
    public function pins(): int
    {
        return $this->pins;
    }

    /**
     * @inheritdoc
     */
    public function withPoints(int $points): RollInterface
    {
        $newRoll = clone $this;
        $newRoll->points[] = $points;

        return $newRoll;
    }

    /**
     * @inheritdoc
     */
    public function pointSequence(): PointSequenceInterface
    {
        return new PointSequence($this->points);
    }

    /**
     * @inheritdoc
     */
    public function score(): int
    {
        return array_reduce($this->points, function (int $carry, int $bag): int {
            return $bag + $carry;
        }, 0);
    }
}
