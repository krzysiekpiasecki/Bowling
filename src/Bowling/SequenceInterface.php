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
 * Represents a sequence of elements
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
     * A sequence element iterator
     *
     * @return \Traversable A sequence element iterator
     */
    public function getIterator(): \Traversable;
}
