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
 * Test for {@see RollSequence} class
 *
 * @coversDefaultClass RollSequence RollSequence class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class RollSequenceTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers RollSequence::appendRoll()
     * @covers RollSequence::rollNumber()
     */
    public function testAppendRoll()
    {
        $roll1 = new Roll(5);
        $rollSequence = (new RollSequence())->appendRoll($roll1);

        $this->assertSame($roll1, $rollSequence->rollNumber(1));
    }

    /**
     * @dataProvider provideInvalidRollNumbers
     * @expectedException \OutOfBoundsException
     * @expectedExceptionMessage Invalid roll number
     * @param int $invalidRollNumber Invalid roll number
     */
    public function testInvalidRollNumber(int $invalidRollNumber)
    {
        (new RollSequence())->appendRoll(new Roll(5))->rollNumber($invalidRollNumber);
    }

    /**
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
}
