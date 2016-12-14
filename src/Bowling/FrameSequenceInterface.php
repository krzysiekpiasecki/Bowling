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
 * The sequence always link frames at the end of this sequence and use natural numbering,
 * so first element is at the index 1.
 *
 * @see SequenceInterface A sequence of frames
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface FrameSequenceInterface extends SequenceInterface
{
    /**
     * Frame with the given number
     *
     * The sequence use natural indexing, so first frame is at index 1.
     *
     * @param int $number Frame natural index
     * @return FrameInterface A frame at a given index
     */
    public function frameNumber(int $number): FrameInterface;

    /**
     * Link a new frame at the end of this sequence
     *
     * @param FrameInterface $frame A frame linked at the end of this sequence
     * @return FrameSequenceInterface A sequence with a new frame linked at the end of this sequence
     */
    public function linkFrame(FrameInterface $frame): FrameSequenceInterface;
}
