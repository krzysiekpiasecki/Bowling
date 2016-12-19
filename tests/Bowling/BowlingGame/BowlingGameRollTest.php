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

namespace Bowling\BowlingGame;
use Bowling\Roll;

/**
 * Test for {@see BowlingGameRoll} class
 *
 * @coversDefaultClass BowlingGameRoll BowlingGameRoll roll class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class BowlingGameRollTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers ::pins()
     */
    public function testPins()
    {
        $this->assertSame(
            5,
            (new BowlingGameRoll(new Roll(5)))->pins()
        );
    }

    /**
     * @covers ::pointSequence()
     */
    public function testPointSequence()
    {
        $this->assertEquals(
            array(10, 2, 6),
            iterator_to_array(
                (new BowlingGameRoll(new Roll(10)))->withPoints(2)->withPoints(6)->pointSequence()
            )
        );
    }

    /**
     * @covers ::__construct()
     * @covers ::score()
     * @covers ::withPoints
     */
    public function testScore()
    {
        $bowlingRoll = (new BowlingGameRoll(new Roll(10)));

        $this->assertSame(
            10,
            $bowlingRoll->score()
        );

        $bowlingRoll = $bowlingRoll->withPoints(3);

        $this->assertSame(
            13,
            $bowlingRoll->score()
        );

        $bowlingRoll = $bowlingRoll->withPoints(5);

        $this->assertSame(
            18,
            $bowlingRoll->score()
        );

    }

    /**
     * @param int $numberOfPins
     * @covers ::__construct()
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage Number of pins must be between 0-10
     * @dataProvider provideInvalidNumberOfPins
     */
    public function testExceptionWhenInvalidNumberOfPins(int $numberOfPins)
    {
        (new BowlingGameRoll(new Roll($numberOfPins)));
    }


    /**
     * @param int $numberOfPoints
     * @covers ::__construct()
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage Number of points must be between 1-10
     * @dataProvider provideInvalidNumberOfPoints
     */
    public function testExceptionWhenInvalidNumberOfPoints(int $numberOfPoints)
    {
        (new BowlingGameRoll(new Roll(10)))->withPoints($numberOfPoints);
    }

    /**
     * @return array
     */
    public function provideInvalidNumberOfPins(): array
    {
        return array(
            array(-1),
            array(11)
        );
    }

    /**
     * @return array
     */
    public function provideInvalidNumberOfPoints(): array
    {
        return array(
            array(-1),
            array(0),
            array(11)
        );
    }
}
