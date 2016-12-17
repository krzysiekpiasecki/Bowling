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
 * Test for {@see RollSequence} class
 *
 * @coversDefaultClass RollSequence RollSequence class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class RollSequenceTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers RollSequence::addRoll()
     * @covers RollSequence::rollNumber()
     */
    public function testAppendRoll()
    {
        $roll1 = new Roll(5);
        $rollSequence = (new RollSequence())->addRoll($roll1);

        $this->assertSame($roll1, $rollSequence->rollNumber(1));
    }

    /**
     * @covers RollSequence::rollNumber()
     * @covers RollSequence::rollNumber()
     */
    public function testRollNumber()
    {
        $roll = new Roll(5);
        $roll2 = new Roll(10);
        $rollSequence = (new RollSequence())->addRoll($roll)->addRoll($roll2);
        $this->assertSame($roll, $rollSequence->rollNumber(1));
    }

    /**
     * @dataProvider provideInvalidRollNumbers
     * @expectedException \OutOfBoundsException
     * @expectedExceptionMessage Invalid roll number
     * @param int $invalidRollNumber Invalid roll number
     */
    public function testInvalidRollNumber(int $invalidRollNumber)
    {
        (new RollSequence())->addRoll(new Roll(5))->rollNumber($invalidRollNumber);
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

    /**
     * @covers RollSequence::addRollSequence()
     */
    public function testAddRollSequenceReturnsNewInstance(): void
    {
        $roll1 = new Roll(10);
        $roll2 = new Roll(7);

        $rollSequence = (new RollSequence())->addRoll($roll1);
        $rollSequence2 = $rollSequence->addRollSequence(
            (new RollSequence())->addRoll($roll2)
        );

        $this->assertNotSame($rollSequence, $rollSequence2);
    }

    /**
     * @covers RollSequence::addRollSequence()
     */
    public function testAddRollSequence(): void
    {
        $roll1 = new Roll(10);
        $roll2 = new Roll(7);
        $roll3 = new Roll(5);

        $this->assertEquals(
            [$roll1, $roll2, $roll3],
            iterator_to_array(
                (new RollSequence())
                    ->addRoll($roll1)
                    ->addRollSequence(
                        (new RollSequence())
                                ->addRoll($roll2)
                                ->addRoll($roll3)
                    )
            )
        );
    }
}
