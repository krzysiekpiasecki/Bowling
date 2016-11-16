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
 * Test for {@see PointSequence} class
 *
 * @coversDefaultClass PointSequence PointSequence class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class PointSequenceTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers PointSequence::appendPoints()
     */
    public function testAppendPoints()
    {
        $this->assertEquals([1, 2, 5], iterator_to_array((new PointSequence())->appendPoints(1)->appendPoints(2)->appendPoints(5)));
    }

    /**
     * @covers PointSequence::appendPointSequence()
     */
    public function testAppendSequence()
    {
        $this->assertEquals([8, 2], iterator_to_array((new PointSequence())->appendPointSequence(new PointSequence([8, 2]))));
    }
}
