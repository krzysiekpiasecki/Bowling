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

    /**
     * @var array The frame rolls
     */
    private $rolls;

    /**
     * @var int Current score
     */
    private $score;

    /**
     * New Frame with no rolls and initial score set to zero
     *
     */
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
        $this->ensureRollExists($rollNumber);

        return $this->rolls[$rollNumber - 1];
    }

    /**
     * @inheritdoc
     */
    public function replaceRoll(RollInterface $roll, int $rollNumber): FrameInterface
    {
        $this->ensureRollExists($rollNumber);

        $newFrame = clone $this;

        $newFrame->rolls[$rollNumber - 1] = $roll;
        $newFrame->score = $newFrame->score - $this->rolls[$rollNumber - 1]->score();
        $newFrame->score = $newFrame->score + $roll->score();

        return $newFrame;
    }

    /**
     * @param int $rollNumber
     * @throws \InvalidArgumentException When invalid roll number
     */
    private function ensureRollExists(int $rollNumber)
    {

        if (!isset($this->rolls[$rollNumber - 1])) {
            throw new \InvalidArgumentException("Invalid roll number");
        }

    }
}
