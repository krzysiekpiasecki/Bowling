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
 * Represents a sequence of rolls
 *
 * @see RollSequenceInterface A sequence of rolls
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
final class RollSequence implements RollSequenceInterface
{
    use SequenceTrait;

    /**
     * New roll sequence with a given sequence of rolls
     *
     * @param array $rolls A sequence of points
     */
    public function __construct(array $rolls = [])
    {
        $this->sequence = $rolls;
    }

    /**
     * @inheritDoc
     */
    public function rollNumber(int $number): RollInterface
    {
        if (!isset($this->sequence[$number - 1])) {
            throw new \OutOfBoundsException("Invalid roll number");
        }

        return $this->sequence[$this->count() - 1];
    }

    /**
     * @inheritDoc
     */
    public function appendRoll(RollInterface $roll): RollSequenceInterface
    {
        $newRollSequence = clone $this;
        $newRollSequence->sequence[] = $roll;

        return $newRollSequence;
    }
}
