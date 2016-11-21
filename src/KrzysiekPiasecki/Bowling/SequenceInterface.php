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
 * Represents a sequence
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
interface SequenceInterface extends \Countable, \IteratorAggregate
{
    /**
     * Number of sequence elements
     *
     * @return int Number of sequence elements
     */
    public function count(): int;

    /**
     * An element iterator
     *
     * @return \Iterator An element iterator
     */
    public function getIterator(): \Generator;
}
