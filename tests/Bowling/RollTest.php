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
 * Test for {@see Roll} class
 *
 * @coversDefaultClass Roll Roll class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class RollTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers Roll::pins()
     */
    public function testPins()
    {
        $this->assertSame(5, (new Roll(5))->pins());
    }

    /**
     * @covers Roll::withPoints()
     */
    public function testWithPoints()
    {
        $roll = new Roll(10);
        $newRoll = $roll->withPoints(10);

        $this->assertInstanceOf(Roll::class, $newRoll);
        $this->assertNotSame($roll, $newRoll);
    }

    /**
     * @covers Roll::score()
     */
    public function testScore()
    {
        $roll = (new Roll(10))->withPoints(10);
        $this->assertSame(10, $roll->score());

        $newRoll = $roll->withPoints(5)->withPoints(7);
        $this->assertSame(22, $newRoll->score());
    }

    /**
     * @covers Roll::pointSequence()
     */
    public function testPointSequence()
    {
        $this->assertSame([10, 5], \iterator_to_array(
            (new Roll(5))->withPoints(10)->withPoints(5)->pointSequence()
        ));

        $this->assertSame([], \iterator_to_array(
            (new Roll(5))->pointSequence()
        ));
    }
}
