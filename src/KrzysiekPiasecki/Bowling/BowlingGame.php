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

namespace KrzysiekPiasecki\Bowling;

/**
 * A Bowling game engine.
 */
class BowlingGame
{
    private $frames;
    private $frameNumber;
    private $rollNumber;
    private $strike;
    private $spare;
    private $nextFrame;

    /**
     * A new BowlingGame
     */
    public function __construct()
    {
        $this->frames = [];
        $this->strike = 0;
        $this->spare = 0;
        $this->frameNumber = 0;
        $this->nextFrame = true;
    }

    /**
     * @param int $numberPin
     * @return BowlingGame
     */
    public function roll(int $numberPin): BowlingGame
    {
        if ($this->isFinished()) {
            throw new \LogicException("Bowling game ended");
        }

        $this->nextFrame();
        $this->nextRoll($numberPin);
        $this->handleStrike($numberPin);
        $this->handleSpare($numberPin);

        return $this;
    }


    public function score(): int
    {
        return array_reduce($this->frames, function ($carry, $bag) {
            return $bag->score() + $carry;
        }, 0);
    }

    public function printGame(BowlingGameInterface $game)
    {
    }


    public function isFinished(): bool
    {
        if (10 === $this->frameNumber) {
            $currentFrame = $this->frames[9];
            $currentFrameSequence = $currentFrame->rollSequence();
            $currentFrameRollCount = $currentFrame->rollSequence()->count();

            if (2 == $currentFrameRollCount) {
                if (10 > ($currentFrameSequence->rollNumber(1)->score() + $currentFrameSequence->rollNumber(2)->score())) {
                    return true;
                }
            }

            if (3 === $currentFrameRollCount) {
                if (10 == $currentFrameSequence->rollNumber(1)->score()) {
                    return true;
                }
                if (10 === ($currentFrameSequence->rollNumber(1)->score() + $currentFrameSequence->rollNumber(2)->score())) {
                    return true;
                }
            }
        }

        return false;
    }

    private function nextFrame()
    {
        if (true === $this->nextFrame) {
            $this->frames[] = new Frame();
            $this->nextFrame = false;
            $this->frameNumber = $this->frameNumber + 1;
        }
    }

    private function nextRoll(int $numberOfPins)
    {
        $this->rollNumber = $this->rollNumber + 1;
        $this->frames[$this->frameNumber - 1] = $this->frames[$this->frameNumber - 1]->withRoll(new Roll($numberOfPins));

        if (2 == $this->currentFrame()->rollSequence()->count() && 10 !== $this->frameNumber) {
            $this->nextFrame = true;
        }
    }

    private function handleStrike(int $numberOfPins)
    {
        if (0 < $this->strike) {
            $strikeFrameIndex = $this->frameNumber - 2;

            $this->frames[$strikeFrameIndex] = $this->frames[$strikeFrameIndex]->replaceRoll(
                $this->frames[$strikeFrameIndex]->rollSequence()->rollNumber(1)->withExtraPoints($numberOfPins),
                1
            );

            $this->strike = $this->strike - 1;

            if (2 == $this->strike) {
                $strikeFrameIndex = $strikeFrameIndex - 1;

                $this->frames[$strikeFrameIndex] = $this->frames[$strikeFrameIndex]->replaceRoll(
                    $this->frames[$strikeFrameIndex]->rollSequence()->rollNumber(1)->withExtraPoints($numberOfPins),
                    1
                );

                $this->strike = $this->strike - 1;
            }
        }

        if (10 === $numberOfPins && 10 !== $this->frameNumber) {
            $this->nextFrame = true;
            $this->strike += 2;
        }
    }


    /**
     * Handle "spare"
     *
     * <cite>A "spare" is awarded when no pins are left standing after the second ball of a frame; i.e.,
     * a player uses both balls of a frame to clear all ten pins.
     *
     * A player achieving a spare is awarded ten points, plus a bonus of whatever is scored with
     * the next ball (only the first ball is counted).<cite>
     *
     * @link https://en.wikipedia.org/wiki/Ten-pin_bowling Ten pin bowling
     * @param int $numberPins
     */
    private function handleSpare(int $numberPins)
    {
        if (1 === $this->spare) {
            $this->spare = 0;

            $spareFrameIndex = $this->frameNumber - 2;
            $this->frames[$spareFrameIndex] = $this->frames[$spareFrameIndex]->replaceRoll(
                $this->frames[$this->frameNumber - 2]->rollSequence()->rollNumber(2)->withExtraPoints($numberPins),
                2
            );
        }

        if (10 === $this->currentFrame()->score()
                && 1 != $this->currentFrame()->rollSequence()->count() && 10 !== $this->frameNumber) {
            $this->spare = 1;
        }
    }

    private function currentFrame(): Frame
    {
        return $this->frames[$this->frameNumber - 1];
    }
}
