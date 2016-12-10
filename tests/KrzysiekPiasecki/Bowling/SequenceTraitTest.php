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
 * Test for {@see SequenceTrait}
 *
 * @coversDefaultClass SequenceTrait
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class SequenceTraitTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers SequenceTrait::count()
     */
    public function testCount()
    {
        $sequenceTraitFake = new class() implements SequenceInterface {
            use SequenceTrait;
            public function __construct()
            {
                $this->sequence = [1,2,3,4,5];
            }
        };
        $this->assertSame(
            5,
            $sequenceTraitFake->count()
        );
    }

    /**
     * @covers SequenceTrait::getIterator()
     */
    public function testGetIterator()
    {
        $sequenceTraitFake = new class() implements SequenceInterface {
            use SequenceTrait;
            public function __construct()
            {
                $this->sequence = ["Ala", "ma", "kota"];
            }
        };
        $this->assertEquals(
            ["Ala", "ma", "kota"],
            iterator_to_array($sequenceTraitFake)
        );
    }
}
