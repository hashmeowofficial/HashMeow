'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';
import PixelButton from '../PixelButton';

interface Position {
  x: number;
  y: number;
}

type Direction = 'up' | 'down' | 'left' | 'right';

export default function PacmanGame() {
  const gridSize = 15;
  const [catPos, setCatPos] = useState<Position>({ x: 7, y: 7 });
  const [direction, setDirection] = useState<Direction>('right');
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState<Position[]>([]);
  const [ghosts, setGhosts] = useState<Position[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);

  // Initialize game
  const initGame = useCallback(() => {
    setCatPos({ x: 7, y: 7 });
    setDirection('right');
    setScore(0);
    setGameOver(false);
    
    // Generate coins
    const newCoins: Position[] = [];
    for (let i = 0; i < 30; i++) {
      newCoins.push({
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize)
      });
    }
    setCoins(newCoins);

    // Generate ghosts
    const newGhosts: Position[] = [
      { x: 2, y: 2 },
      { x: 12, y: 2 },
      { x: 2, y: 12 },
      { x: 12, y: 12 }
    ];
    setGhosts(newGhosts);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      
      switch(e.key) {
        case 'ArrowUp':
        case 'w':
          setDirection('up');
          break;
        case 'ArrowDown':
        case 's':
          setDirection('down');
          break;
        case 'ArrowLeft':
        case 'a':
          setDirection('left');
          break;
        case 'ArrowRight':
        case 'd':
          setDirection('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const interval = setInterval(() => {
      setCatPos(prev => {
        let newX = prev.x;
        let newY = prev.y;

        switch(direction) {
          case 'up':
            newY = Math.max(0, prev.y - 1);
            break;
          case 'down':
            newY = Math.min(gridSize - 1, prev.y + 1);
            break;
          case 'left':
            newX = Math.max(0, prev.x - 1);
            break;
          case 'right':
            newX = Math.min(gridSize - 1, prev.x + 1);
            break;
        }

        return { x: newX, y: newY };
      });

      // Move ghosts randomly
      setGhosts(prev => prev.map(ghost => {
        const moves = [
          { x: ghost.x, y: Math.max(0, ghost.y - 1) },
          { x: ghost.x, y: Math.min(gridSize - 1, ghost.y + 1) },
          { x: Math.max(0, ghost.x - 1), y: ghost.y },
          { x: Math.min(gridSize - 1, ghost.x + 1), y: ghost.y }
        ];
        return moves[Math.floor(Math.random() * moves.length)];
      }));
    }, 300);

    return () => clearInterval(interval);
  }, [gameStarted, gameOver, direction]);

  // Check collisions
  useEffect(() => {
    if (!gameStarted) return;

    // Check coin collection
    const newCoins = coins.filter(coin => {
      if (coin.x === catPos.x && coin.y === catPos.y) {
        setScore(prev => prev + 10);
        return false;
      }
      return true;
    });
    setCoins(newCoins);

    // Check ghost collision
    const hitGhost = ghosts.some(ghost => 
      ghost.x === catPos.x && ghost.y === catPos.y
    );
    
    if (hitGhost) {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
      }
    }

    // Win condition
    if (newCoins.length === 0) {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
      }
    }
  }, [catPos, coins, ghosts, gameStarted, score, highScore]);

  const startGame = () => {
    initGame();
    setGameStarted(true);
  };

  const getCatRotation = () => {
    switch(direction) {
      case 'up': return -90;
      case 'down': return 90;
      case 'left': return 180;
      case 'right': return 0;
      default: return 0;
    }
  };

  return (
    <section id="game" className="py-20 bg-gradient-to-b from-pixel-card/20 to-pixel-bg">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-pink text-stroke mb-4">
            HASHMEOW RUNNER
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            Help HashMeow collect coins and avoid the ghosts! Use arrow keys or WASD to move.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <PixelCard glowColor="#FF10F0">
            {/* Score Display */}
            <div className="flex justify-around mb-6">
              <div className="bg-pixel-bg border-4 border-pixel-yellow p-4 text-center flex-1 mx-2">
                <div className="font-pixel text-[8px] text-white/60 mb-1">SCORE</div>
                <div className="font-pixel text-2xl text-pixel-yellow">{score}</div>
              </div>
              <div className="bg-pixel-bg border-4 border-pixel-pink p-4 text-center flex-1 mx-2">
                <div className="font-pixel text-[8px] text-white/60 mb-1">HIGH SCORE</div>
                <div className="font-pixel text-2xl text-pixel-pink">{highScore}</div>
              </div>
              <div className="bg-pixel-bg border-4 border-pixel-cyan p-4 text-center flex-1 mx-2">
                <div className="font-pixel text-[8px] text-white/60 mb-1">COINS LEFT</div>
                <div className="font-pixel text-2xl text-pixel-cyan">{coins.length}</div>
              </div>
            </div>

            {/* Game Board */}
            <div className="relative mb-6">
              <div 
                className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 border-4 border-white mx-auto aspect-square max-w-lg"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                  gap: '1px',
                  backgroundColor: '#0A0E27'
                }}
              >
                {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                  const x = i % gridSize;
                  const y = Math.floor(i / gridSize);
                  const isCat = catPos.x === x && catPos.y === y;
                  const hasCoin = coins.some(coin => coin.x === x && coin.y === y);
                  const hasGhost = ghosts.some(ghost => ghost.x === x && ghost.y === y);

                  return (
                    <div
                      key={i}
                      className="aspect-square bg-pixel-bg/30 flex items-center justify-center text-xs sm:text-base"
                    >
                      {isCat && (
                        <motion.div
                          animate={{ rotate: getCatRotation() }}
                          transition={{ duration: 0.2 }}
                          className="text-lg sm:text-2xl"
                        >
                          🐱
                        </motion.div>
                      )}
                      {hasCoin && !isCat && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-yellow-400"
                        >
                          •
                        </motion.div>
                      )}
                      {hasGhost && !isCat && (
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="text-sm sm:text-xl"
                        >
                          👻
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Game Over Overlay */}
              {gameOver && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center"
                >
                  <div className="text-center space-y-4 p-8">
                    <div className="font-pixel text-2xl text-pixel-pink mb-2">
                      {coins.length === 0 ? 'YOU WIN! 🎉' : 'GAME OVER!'}
                    </div>
                    <div className="font-pixel text-lg text-white">
                      FINAL SCORE: {score}
                    </div>
                    {score > highScore && (
                      <div className="font-pixel text-sm text-pixel-yellow">
                        NEW HIGH SCORE!
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Start Overlay */}
              {!gameStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center"
                >
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl mb-4">🐱</div>
                    <div className="font-pixel text-xl text-pixel-cyan mb-4">
                      READY TO PLAY?
                    </div>
                    <div className="text-sm text-white/70 mb-4">
                      Use Arrow Keys or WASD to move
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Controls */}
            <div className="space-y-4">
              {/* Desktop Controls Info */}
              <div className="hidden sm:flex justify-center gap-4 text-center">
                <div className="font-pixel text-[8px] text-white/60">
                  ↑ ↓ ← → or W A S D to move
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="sm:hidden grid grid-cols-3 gap-2 max-w-xs mx-auto mb-4">
                <div></div>
                <PixelButton 
                  size="sm" 
                  onClick={() => setDirection('up')}
                  disabled={!gameStarted || gameOver}
                >
                  ↑
                </PixelButton>
                <div></div>
                <PixelButton 
                  size="sm" 
                  onClick={() => setDirection('left')}
                  disabled={!gameStarted || gameOver}
                >
                  ←
                </PixelButton>
                <PixelButton 
                  size="sm" 
                  onClick={() => setDirection('down')}
                  disabled={!gameStarted || gameOver}
                >
                  ↓
                </PixelButton>
                <PixelButton 
                  size="sm" 
                  onClick={() => setDirection('right')}
                  disabled={!gameStarted || gameOver}
                >
                  →
                </PixelButton>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                {(!gameStarted || gameOver) && (
                  <PixelButton size="lg" onClick={startGame}>
                    {gameOver ? 'PLAY AGAIN' : 'START GAME'}
                  </PixelButton>
                )}
                {gameStarted && !gameOver && (
                  <PixelButton 
                    size="md" 
                    variant="outline"
                    onClick={() => {
                      setGameStarted(false);
                      setGameOver(true);
                    }}
                  >
                    RESET
                  </PixelButton>
                )}
              </div>
            </div>

            {/* Rewards Info */}
            <motion.div 
              className="mt-6 p-4 bg-pixel-pink/20 border-2 border-pixel-pink"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="font-pixel text-[8px] text-center text-white">
                🏆 TOP PLAYERS WIN WEEKLY HBAR PRIZES! 🏆
              </div>
            </motion.div>
          </PixelCard>

          {/* Game Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <PixelCard glowColor="#00FFFF">
              <h3 className="font-pixel text-sm text-pixel-cyan mb-4 text-center">
                GAME TIPS
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-xs text-white/70 text-center">
                <div>
                  <div className="text-2xl mb-2">🐱</div>
                  <div>Control the HashMeow cat</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">💰</div>
                  <div>Collect all coins to win</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">👻</div>
                  <div>Avoid the ghosts!</div>
                </div>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

