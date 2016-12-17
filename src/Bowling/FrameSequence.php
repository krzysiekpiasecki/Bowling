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
 * A sequence is a group of frames that are kept in an ordered list. The order in which the frames go
 * in dictates how they are returned in a First In, First Out manner.
 *
 * This is an immutable implementation of {@see FrameSequenceInterface}. Linking this sequence
 * with frames or other sequence of frames returns always a new instance.
 *
 * @see FrameSequenceInterface A sequence of frames
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class FrameSequence implements FrameSequenceInterface
{

    use SequenceTrait;

    /**
     * New frame sequence with a given sequence of frames
     *
     * @param array $frames A sequence of points
     */
    public function __construct(array $frames = [])
    {
        $this->sequence = $frames;
    }

    /**
     * @inheritDoc
     */
    public function frameNumber(int $number): FrameInterface
    {
        if (!isset($this->sequence[$number - 1])) {
            throw new \OutOfBoundsException("Invalid frame number");
        }

        return $this->sequence[$number - 1];
    }

    /**
     * @inheritDoc
     */
    public function addFrame(FrameInterface $frame): FrameSequenceInterface
    {
        $newFrameSequence = clone $this;
        $newFrameSequence->sequence[] = $frame;

        return $newFrameSequence;
    }

    /**
     * @inheritDoc
     */
    public function replaceFrame(FrameInterface $frame, int $number): FrameSequenceInterface {

        if (!isset($this->sequence[$number - 1])) {
            throw new \OutOfBoundsException("Invalid frame number");
        }

        $newFrameSequence = clone $this;
        $newFrameSequence->sequence[$number - 1] = $frame;

        return $newFrameSequence;

    }

    /**
     * @inheritdoc
     */
    public function addFrameSequence(FrameSequenceInterface $frameSequence): FrameSequenceInterface
    {
        $newFrameSequence = clone $this;

        $newFrameSequence->sequence = array_merge(
            $this->sequence,
            iterator_to_array($frameSequence)
        );

        return $newFrameSequence;
    }
}
