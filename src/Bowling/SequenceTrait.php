<?php

/*
 * This file is part of the Bowling package.
 *
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Bowling;

/**
 * Represents a sequence of elements
 *
 * @see SequenceInterface A sequence of elements interface
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
trait SequenceTrait
{
    /**
     * @var array Sequence of elements
     */
    private $sequence = [];

    /**
     * Number of sequence elements
     *
     * @return int Number of sequence elements
     */
    public function count(): int
    {
        return count($this->sequence);
    }

    /**
     * A sequence element iterator
     *
     * @return \Traversable A sequence element iterator
     */
    public function getIterator(): \Traversable
    {
        return new \ArrayIterator($this->sequence);
    }
}
