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
 * Represents a frame sequence
 *
 * @see SequenceInterface A sequence of elements
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface FrameSequenceInterface extends SequenceInterface
{
    /**
     * Frame with a given number
     *
     * @param int $number A number of frame position in a sequence
     * @return FrameInterface A frame at a give position
     */
    public function frameNumber(int $number): FrameInterface;

    /**
     * Append a new frame to a sequence
     *
     * @param FrameInterface $frame A new frame appended to a sequence
     * @return FrameSequenceInterface New sequence with a frame appended to the sequence
     */
    public function appendFrame(FrameInterface $frame): FrameSequenceInterface;
}
