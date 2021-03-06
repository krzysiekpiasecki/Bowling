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
 * Test for {@see Frame} class
 *
 * @coversDefaultClass Frame Frame class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class FrameTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers Frame::score()
     * @cover Frame::withRoll()
     */
    public function testWithRollAndScore()
    {
        $frame = (new Frame())->withRoll(
            (new Roll(10))->withPoints(10)->withPoints(3)
        )->withRoll((new Roll(5))->withPoints(5)
        );

        $this->assertSame(18, $frame->score());
    }

    /**
     * @covers Frame::rolls()
     */
    public function testRoll()
    {
        $roll1 = (new Roll(10))->withPoints(2)->withPoints(8);
        $roll2 = new Roll(6);
        $frame = (new Frame())->withRoll($roll1)->withRoll($roll2);
        $this->assertEquals([$roll1, $roll2], iterator_to_array($frame->rollSequence()));
    }

    /**
     * @covers Frame::rollNumber()
     */
    public function testRollNumber()
    {
        $roll1 = new Roll(10);
        $frame = (new Frame())->withRoll($roll1);
        $this->assertSame($roll1, $frame->rollNumber(1));
    }

    /**
     * @dataProvider provideInvalidRollNumbers
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage Invalid roll number
     * @param int $invalidRollNumber Invalid roll number
     */
    public function testInvalidRollNumber(int $invalidRollNumber)
    {
        (new Frame())->withRoll(new Roll(5))->rollNumber($invalidRollNumber);
    }

    /**
     * @dataProvider provideInvalidRollNumbers
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage Invalid roll number
     * @param int $invalidRollNumber Invalid roll number
     */
    public function testInvalidRollNumberWhenReplacing(int $invalidRollNumber)
    {
        (new Frame())->withRoll(new Roll(5))->replaceRoll(new Roll(5), $invalidRollNumber);
    }

    /**
     * Provide arguments for {@see #testInvalidRollNumber}
     *
     * @return array
     */
    public function provideInvalidRollNumbers(): array
    {
        return [
            [2],
            [0],
            [-1]
        ];
    }

    /**
     * @covers Frame::replaceRoll()
     */
    public function testReplaceRoll()
    {
        $roll1 = (new Roll(10))->withPoints(10);
        $roll2 = (new Roll(2))->withPoints(2);
        $roll3 = $roll1->withPoints(2);

        $frame = (new Frame())->withRoll($roll1)->withRoll($roll2)->replaceRoll($roll3, 1);
        $this->assertSame(14, $frame->score());
        $this->assertSame($roll3, $frame->rollNumber(1));
    }
}
