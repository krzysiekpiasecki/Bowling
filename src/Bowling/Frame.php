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
 * Represents a single frame
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class Frame implements FrameInterface
{

    private $rolls;
    private $score;

    public function __construct()
    {
        $this->score = 0;
        $this->rolls = [];
    }

    /**
     * @inheritDoc
     */
    public function score(): int
    {
        return $this->score;
    }

    /**
     * @inheritDoc
     */
    public function withRoll(RollInterface $roll): FrameInterface
    {
        $newFrame = clone $this;
        $newFrame->rolls[] = $roll;
        $newFrame->score = $this->score() + $roll->score();

        return $newFrame;
    }

    /**
     * @inheritDoc
     */
    public function rollSequence(): RollSequenceInterface
    {
        return new RollSequence($this->rolls);
    }

    /**
     * @inheritdoc
     */
    public function rollNumber(int $rollNumber): RollInterface
    {
        if (!isset($this->rolls[$rollNumber - 1])) {
            throw new \OutOfBoundsException("Invalid roll number");
        }

        return $this->rolls[$rollNumber - 1];
    }

    /**
     * @inheritdoc
     */
    public function replaceRoll(RollInterface $roll, int $rollNumber): FrameInterface
    {
        $newFrame = clone $this;
        $newFrame->rolls[$rollNumber - 1] = $roll;
        $newFrame->score = $newFrame->score - $this->rolls[$rollNumber - 1]->score();
        $newFrame->score = $newFrame->score + $roll->score();

        return $newFrame;
    }
}
