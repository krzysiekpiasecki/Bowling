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
 * Scenario 2 for testing bowling game.
 *
 * @coversDefaultClass \Bowling\BowlingGame BowlingGame class
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @since 1.0
 */
class BowlingGame2Test extends \PHPUnit_Framework_TestCase
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
            [$game, 10, 10, false],
            [$game, 10, 30, false],
            [$game, 10, 60, false],
            [$game, 10, 90, false],
            [$game, 10, 120, false],
            [$game, 10, 150, false],
            [$game, 10, 180, false],
            [$game, 10, 210, false],
            [$game, 10, 240, false],
            [$game, 10, 270, false],
            [$game, 10, 290, false],
            [$game, 10, 300, true],
        ];
    }
}
