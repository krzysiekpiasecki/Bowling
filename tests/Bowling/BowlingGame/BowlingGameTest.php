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

/**
 * Test for {@see BowlingGame} class
 *
 * @coversDefaultClass \Bowling\BowlingGame BowlingGame class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class BowlingGameTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers BowlingGame::score()
     * @covers BowlingGame::roll()
     * @covers BowlingGame::isFinished()
     *
     * @dataProvider provideGameData
     * @param BowlingGame $game
     * @param int $numberOfPins
     * @param int $totalScore
     * @param bool $isFinished
     */
    public function testGame(
        BowlingGame $game,
        int $numberOfPins,
        int $totalScore,
        bool $isFinished
        ) {
        $game->roll($numberOfPins);
        $this->assertSame($totalScore, $game->score());
        $this->assertSame($isFinished, $game->isFinished());
    }

    /**
     * @return array
     */
    public function provideGameData(): array
    {
        static $game = null;
        if (null == $game) {
            $game = new BowlingGame();
        }

        return [
            [$game, 10, 10, false],

            [$game, 2, 14, false],
            [$game, 8, 30, false],

            [$game, 1, 32, false],
            [$game, 5, 37, false],

            [$game, 10, 47, false],

            [$game, 5, 57, false],
            [$game, 2, 61, false],

            [$game, 8, 69, false],
            [$game, 2, 71, false],

            [$game, 10, 91, false],
        ];
    }

    /**
     * @covers BowlingGame::isFinished()
     * @expectedException LogicException
     * @expectedExceptionMessage Bowling game ended
     */
    public function testExceptionWhenGameEnded()
    {
        $game = new BowlingGame();
        $game
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10)
            ->roll(10); // 13
    }
}
