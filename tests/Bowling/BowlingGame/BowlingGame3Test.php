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
 * Test for {@see BowlingGame}.
 *
 * @coversDefaultClass \Bowling\BowlingGame BowlingGame class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class BowlingGame3Test extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers BowlingGame::score()
     * @covers BowlingGame::roll()
     * @covers BowlingGame::isFinished()
     *
     * @dataProvider provideGameScenario
     *
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
     * Provide game scenario
     *
     * @return array
     */
    public function provideGameScenario(): array
    {
        static $game = null;

        if (null == $game) {
            $game = new BowlingGame();
        }

        return [
            [$game, 2, 2, false],
            [$game, 8, 10, false],

            [$game, 2, 14, false],
            [$game, 8, 22, false],

            [$game, 2, 26, false],
            [$game, 8, 34, false],

            [$game, 2, 38, false],
            [$game, 8, 46, false],

            [$game, 2, 50, false],
            [$game, 8, 58, false],

            [$game, 2, 62, false],
            [$game, 8, 70, false],

            [$game, 2, 74, false],
            [$game, 8, 82, false],

            [$game, 2, 86, false],
            [$game, 8, 94, false],

            [$game, 2, 98, false],
            [$game, 8, 106, false],

            [$game, 2, 110, false],
            [$game, 8, 118, false],

            [$game, 5, 123, true],

        ];
    }
}
