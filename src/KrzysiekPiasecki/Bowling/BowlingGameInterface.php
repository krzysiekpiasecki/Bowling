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
 * Represents a bowling game
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface BowlingGameInterface
{
    /**
     * @return int
     */
    public function frameNumber(): int;

    /**
     * @return int
     */
    public function rollNumber(): int;

    /**
     * @param int $frameNumber
     * @return FrameInterface
     * @throws FrameOutOfBoundsException
     */
    public function frame(int $frameNumber): FrameInterface;

    /**
     * @return int
     */
    public function totalScore(): int;

    /**
     * @return bool
     */
    public function isFinished(): bool;
}
