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
 * Represents a sequence of frames
 *
 * @see FrameSequenceInterface A sequence of frames
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface FrameSequenceInterface extends SequenceInterface
{
    /**
     * Frame with a given number
     *
     * @param int $number Frame index
     * @return FrameInterface A frame at a given index
     */
    public function frameNumber(int $number): FrameInterface;

    /**
     * Add a new frame to this sequence
     *
     * @param FrameInterface $frame A frame added to a sequence
     * @return FrameSequenceInterface A frame sequence with a new frame added
     */
    public function addFrame(FrameInterface $frame): FrameSequenceInterface;

    /**
     * Replace frame with a given number
     *
     * @param FrameInterface $frame A frame which replace a frame a given number
     * @param int $number Number of frame
     * @return FrameSequenceInterface New frame with a frame replaced by other frame
     * @throws \OutOfBoundsException Thrown when number is out of the sequence bounds
     */
    public function replaceFrame(FrameInterface $frame, int $number): FrameSequenceInterface;

/**
     * Add frames from other sequence to a sequence
     *
     * @param FrameSequenceInterface $frameSequence A frame sequence to add
     * @return FrameSequenceInterface A frame sequence with frames added to a sequence
     */
    public function addFrameSequence(FrameSequenceInterface $frameSequence): FrameSequenceInterface;
}
