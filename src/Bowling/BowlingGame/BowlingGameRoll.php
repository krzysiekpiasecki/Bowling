<?php

/*
 * This file is part of the BowlingGame package.
 *
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Bowling\BowlingGame;

use Bowling\PointSequenceInterface;
use Bowling\Roll;
use Bowling\RollInterface;

class BowlingGameRoll implements RollInterface
{
    /**
     * @var Roll
     */
    private $roll;

    /**
     * BowlingGameRoll constructor.
     *
     * @param Roll $roll
     * @throws \InvalidArgumentException Number of pins must be between 0-10
     */
    public function __construct(Roll $roll)
    {
        if (0 > $roll->pins() || 10 < $roll->pins()) {
            throw new \InvalidArgumentException("Number of pins must be between 0-10");
        }

        $this->roll = $roll->withPoints($roll->pins());

    }

    /**
     * @inheritDoc
     */
    public function pins(): int
    {
        return $this->roll->pins();
    }

    /**
     * @inheritDoc
     */
    public function withPoints(int $points): RollInterface
    {
        if (1 > $points || 10 < $points) {
            throw new \InvalidArgumentException("Number of points must be between 1-10");
        }

        $newBowlingRoll = clone($this);
        $newBowlingRoll->roll = $newBowlingRoll->roll->withPoints($points);

        return $newBowlingRoll;
    }

    /**
     * @inheritDoc
     */
    public function pointSequence(): PointSequenceInterface
    {
        return $this->roll->pointSequence();
    }

    /**
     * @inheritDoc
     */
    public function score(): int
    {
        return $this->roll->score();
    }


}