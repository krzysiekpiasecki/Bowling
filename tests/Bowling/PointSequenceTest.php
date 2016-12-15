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
 * Test for {@see PointSequence} class
 *
 * @coversDefaultClass PointSequence
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class PointSequenceTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers PointSequence::addPoints()
     * @covers PointSequence::addPointSequence()
     */
    public function testReturnNewInstance(): void
    {
        $sequence = new PointSequence();
        $sequence2 = $sequence->addPoints(2);
        $sequence3 = $sequence2->addPointSequence($sequence2);

        $this->assertNotSame($sequence2, $sequence);
        $this->assertNotSame($sequence2, $sequence3);
    }

    /**
     * @covers PointSequence::addPoints()
     */
    public function testAddPoints(): void
    {
        $this->assertEquals(
            [1, 2, 5],
            iterator_to_array(
                (new PointSequence())->addPoints(1)->addPoints(2)->addPoints(5)
            )
        );
    }

    /**
     * @covers PointSequence::addPointSequence()
     */
    public function testAddPointSequence(): void
    {
        $this->assertEquals(
            [8, 2],
            iterator_to_array(
                (new PointSequence())->addPointSequence(new PointSequence([8, 2]))
            )
        );
    }
}
