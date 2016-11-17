<?php

/*
 * This file is part of the Bowling package.
 *
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace KrzysiekPiasecki\Bowling;

/**
 * Represents a sequence
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
trait SequenceTrait
{
    /**
     * @var array
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
     * An element iterator
     *
     * @return \Generator An element iterator
     */
    public function getIterator(): \Generator
    {
        foreach ($this->sequence as $element) {
            yield $element;
        }
    }
}
