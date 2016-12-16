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
 * Test for {@see FrameSequence} class
 *
 * @coversDefaultClass FrameSequence FrameSequence class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class FrameSequenceTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @covers FrameSequence::addFrame()
     * @covers FrameSequence::frameNumber()
     */
    public function testAddFrame()
    {
        $frame1 = new Frame();
        $frameSequence = (new FrameSequence())->addFrame($frame1);

        $this->assertSame($frame1, $frameSequence->frameNumber(1));
    }

    /**
     * @dataProvider provideInvalidFrameNumbers
     * @expectedException \OutOfBoundsException
     * @expectedExceptionMessage Invalid frame number
     * @param int $invalidFrameNumber Invalid roll number
     */
    public function testInvalidFrameNumber(int $invalidFrameNumber)
    {
        (new FrameSequence())->addFrame(new Frame())->frameNumber($invalidFrameNumber);
    }

    /**
     * @return array
     */
    public function provideInvalidFrameNumbers(): array
    {
        return [
            [2],
            [0],
            [-1]
        ];
    }

    /**
     * @covers FrameSequence::addFrameSequence()
     */
    public function testAddFrameSequenceReturnsNewInstance(): void
    {
        $frame1 = new Frame();
        $frame2 = new Frame();

        $frameSequence = (new FrameSequence())->addFrame($frame1);
        $frameSequence2 = $frameSequence->addFrameSequence(
            (new FrameSequence())->addFrame($frame2)
        );

        $this->assertNotSame($frameSequence, $frameSequence2);
    }

    /**
     * @covers FrameSequence::addFrameSequence()
     */
    public function testAddFrameSequence(): void
    {
        $frame1 = new Frame();
        $frame2 = new Frame();
        $frame3 = new Frame();

        $this->assertEquals(
            [$frame1, $frame2, $frame3],
            iterator_to_array(
                (new FrameSequence())
                    ->addFrame($frame1)
                    ->addFrameSequence(
                        (new FrameSequence())
                                ->addFrame($frame2)
                                ->addFrame($frame3)
                    )
            )
        );
    }
}
