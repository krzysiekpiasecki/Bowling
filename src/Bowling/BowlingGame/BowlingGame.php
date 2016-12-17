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

use Bowling\Frame;
use Bowling\FrameInterface;
use Bowling\FrameSequence;
use Bowling\Roll;

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
        $this->frames = new FrameSequence();
        $this->frameNumber = 0;
        $this->nextFrame = true;
        $this->strike = 0;
        $this->spare = 0;
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
        return array_reduce(
            iterator_to_array($this->frames), function ($carry, $bag) {
                return $bag->score() + $carry;
            },
            0
        );
    }

    public function printGame(BowlingGameInterface $game)
    {

    }


    public function isFinished(): bool
    {
        if (10 === $this->frameNumber()) {

            $currentFrame = $this->currentFrame();
            $currentFrameSequence = $currentFrame->rollSequence();
            $currentFrameRollCount = $currentFrame->rollSequence()->count();

            if (2 == $currentFrameRollCount) {
                if (10 > ($currentFrameSequence->rollNumber(1)->score() + $currentFrameSequence->rollNumber(2)->score())) {
                    return true;
                }
            }

            if (3 === $currentFrameRollCount) {
                // Strike has been hit
                if (10 == $currentFrameSequence->rollNumber(1)->score()) {
                    return true;
                }
                // Spare has been hit
                if (10 === ($currentFrameSequence->rollNumber(1)->pins() + $currentFrameSequence->rollNumber(2)->pins())) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     *
     */
    private function nextFrame()
    {
        if (true === $this->nextFrame) {
            $this->frames = $this->frames->addFrame(new Frame());
            $this->frameNumber = $this->frameNumber + 1;
            $this->nextFrame = false;
        }

    }

    /**
     * @param int $numberOfPins
     */
    private function nextRoll(int $numberOfPins)
    {

        $this->rollNumber = $this->rollNumber + 1;

        $this->frames = $this->frames->replaceFrame(
            $this->currentFrame()
                ->withRoll(
                    // @todo: Replace with a domain roll
                    (new Roll($numberOfPins))->withPoints($numberOfPins)
            ),
            $this->frameNumber()
        );

        if (2 == $this->currentFrame()->rollSequence()->count() && 10
                !== $this->frameNumber) {
            $this->nextFrame = true;
        }

    }

    private function handleStrike(int $numberOfPins)
    {
        if (0 < $this->strike) {

            $strikeFrameIndex = $this->frameNumber() - 1;

            $this->frames = $this->frames->replaceFrame(
                $this->frameAt($strikeFrameIndex)->replaceRoll(
                    // @todo: Replace with a domain roll ?
                    $this->frameAt($strikeFrameIndex)->rollNumber(1)->withPoints($numberOfPins),
                    1
                ),
                $strikeFrameIndex
            );

            $this->strike = $this->strike - 1;

            if (2 == $this->strike) {

                $strikeFrameIndex = $strikeFrameIndex - 1;

                $this->frames = $this->frames->replaceFrame(
                    $this->frameAt($strikeFrameIndex)->replaceRoll(
                    // @todo: Replace with a domain roll ?
                        $this->frameAt($strikeFrameIndex)->rollNumber(1)->withPoints($numberOfPins),
                        1
                    ),
                    $strikeFrameIndex
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
     * @param int $numberOfPins
     */
    private function handleSpare(int $numberOfPins)
    {
        if (1 === $this->spare) {
            $this->spare = 0;

            $spareFrameIndex = $this->frameNumber();

            $this->frames = $this->frames->replaceFrame(
                $this->frameAt($spareFrameIndex)->replaceRoll(
                // @todo: Replace with a domain roll ?
                    $this->frameAt($spareFrameIndex)->rollNumber(1)->withPoints($numberOfPins),
                    1
                ),
                $spareFrameIndex
            );
        }

        if (10 === $this->frameNumber()) {
            return;
        }

        // @todo Use domain frame to ensure that frame has wins a spare
        $rollSequence = $this->currentFrame()->rollSequence();
        if ($rollSequence->count() == 2) {
            if (10 == $rollSequence->rollNumber(1)->pins() + $rollSequence->rollNumber(2)->pins()) {
                $this->spare = 1;
            }
        }
    }

    /**
     * @return Frame
     */
    private function currentFrame(): Frame
    {
        return $this->frameAt($this->frameNumber());
    }

    private function frameAt(int $number): FrameInterface
    {
        return $this->frames->frameNumber($number);
    }

    /**
     * @return int
     */
    private function frameNumber(): int
    {
        return $this->frameNumber;
    }
}
