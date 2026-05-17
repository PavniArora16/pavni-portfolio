import { useState, useEffect, useCallback } from 'react';

const SIZE = 3;
const TOTAL = SIZE * SIZE;
// Replace this with your actual image path e.g. '/images/myphoto.jpg'
const IMAGE_SRC = '/images/game.jpeg';

const isSolved = (tiles) => tiles.every((t, i) => t === i);

const isValidMove = (tileIdx, emptyIdx) => {
  const tileRow = Math.floor(tileIdx / SIZE);
  const tileCol = tileIdx % SIZE;
  const emptyRow = Math.floor(emptyIdx / SIZE);
  const emptyCol = emptyIdx % SIZE;
  return (
    (Math.abs(tileRow - emptyRow) === 1 && tileCol === emptyCol) ||
    (Math.abs(tileCol - emptyCol) === 1 && tileRow === emptyRow)
  );
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Make sure puzzle is solvable
const getShuffled = () => {
  let tiles;
  do {
    tiles = shuffle([...Array(TOTAL).keys()]);
  } while (!checkSolvable(tiles));
  return tiles;
};

const checkSolvable = (tiles) => {
  let inversions = 0;
  const arr = tiles.filter(t => t !== TOTAL - 1);
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) inversions++;
  return inversions % 2 === 0;
};

export default function PuzzleBot() {
  const [open, setOpen] = useState(false);
  const [tiles, setTiles] = useState(() => getShuffled());
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Stop pulse after first open
  const handleOpen = () => {
    setOpen(true);
    setPulse(false);
  };

  const handleTileClick = useCallback((idx) => {
    if (solved) return;
    const emptyIdx = tiles.indexOf(TOTAL - 1);
    if (!isValidMove(idx, emptyIdx)) return;
    const newTiles = [...tiles];
    [newTiles[idx], newTiles[emptyIdx]] = [newTiles[emptyIdx], newTiles[idx]];
    setTiles(newTiles);
    setMoves(m => m + 1);
    if (isSolved(newTiles)) setSolved(true);
  }, [tiles, solved]);

  const handleReset = () => {
    setTiles(getShuffled());
    setMoves(0);
    setSolved(false);
  };

  const TILE_SIZE = 90; // px per tile
  const BOARD_SIZE = TILE_SIZE * SIZE;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={handleOpen}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.85)',
            border: '2px solid #61dca3',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: pulse
              ? '0 0 0 0 rgba(97,220,163,0.7)'
              : '0 0 15px rgba(97,220,163,0.3)',
            animation: pulse ? 'puzzlePulse 2s infinite' : 'none',
            transition: 'box-shadow 0.3s',
          }}
          title="Solve the puzzle!"
        >
          <span style={{ fontSize: '1.5rem' }}>🧩</span>
        </button>
      )}

      {/* Puzzle panel */}
      {open && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.92)',
          border: '1px solid rgba(97,220,163,0.3)',
          borderRadius: '16px',
          padding: '1.25rem',
          boxShadow: '0 0 40px rgba(97,220,163,0.1)',
          backdropFilter: 'blur(12px)',
          fontFamily: 'JetBrains Mono, monospace',
          width: `${BOARD_SIZE + 40}px`,
        }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
          }}>
            <div>
              <p style={{ color: '#61dca3', fontSize: '0.7rem', opacity: 0.5, margin: 0 }}>
                $ solve --puzzle
              </p>
              <p style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>
                Reveal Pavni
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#61dca3',
                opacity: 0.5,
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'JetBrains Mono, monospace',
                padding: '0.2rem 0.4rem',
              }}
            >
              ✕
            </button>
          </div>

          {/* Solved message */}
          {solved && (
            <div style={{
              background: 'rgba(97,220,163,0.1)',
              border: '1px solid rgba(97,220,163,0.3)',
              borderRadius: '8px',
              padding: '0.5rem 0.75rem',
              marginBottom: '0.75rem',
              textAlign: 'center',
            }}>
              <p style={{ color: '#61dca3', fontSize: '0.8rem', margin: 0 }}>
                ✓ solved in {moves} moves!
              </p>
            </div>
          )}

          {/* Puzzle board */}
          <div style={{
            position: 'relative',
            width: BOARD_SIZE,
            height: BOARD_SIZE,
            borderRadius: '10px',
            overflow: 'hidden',
            border: solved
              ? '2px solid rgba(97,220,163,0.6)'
              : '1px solid rgba(97,220,163,0.15)',
            boxShadow: solved ? '0 0 20px rgba(97,220,163,0.3)' : 'none',
            transition: 'border 0.4s, box-shadow 0.4s',
          }}>
            {tiles.map((tile, idx) => {
              const isEmpty = tile === TOTAL - 1;
              const tileRow = Math.floor(tile / SIZE);
              const tileCol = tile % SIZE;
              const posRow = Math.floor(idx / SIZE);
              const posCol = idx % SIZE;

              return (
                <div
                  key={tile}
                  onClick={() => !isEmpty && handleTileClick(idx)}
                  style={{
                    position: 'absolute',
                    left: posCol * TILE_SIZE,
                    top: posRow * TILE_SIZE,
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    transition: 'left 0.15s ease, top 0.15s ease',
                    cursor: isEmpty ? 'default' : 'pointer',
                    opacity: isEmpty && !solved ? 0 : 1,
                    borderRadius: isEmpty ? '6px' : '2px',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    border: isEmpty && !solved
                      ? '1px dashed rgba(97,220,163,0.2)'
                      : '1px solid rgba(0,0,0,0.3)',
                  }}
                >
                  {!isEmpty && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${IMAGE_SRC})`,
                        backgroundSize: `${BOARD_SIZE}px ${BOARD_SIZE}px`,
                        backgroundPosition: `-${tileCol * TILE_SIZE}px -${tileRow * TILE_SIZE}px`,
                        transition: 'filter 0.3s',
                        filter: solved ? 'brightness(1.05)' : 'brightness(0.9)',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.75rem',
          }}>
            <span style={{ color: '#61dca3', opacity: 0.4, fontSize: '0.7rem' }}>
              moves: {moves}
            </span>
            <button
              onClick={handleReset}
              style={{
                background: 'transparent',
                border: '1px solid rgba(97,220,163,0.3)',
                borderRadius: '6px',
                color: '#61dca3',
                fontSize: '0.7rem',
                fontFamily: 'JetBrains Mono, monospace',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(97,220,163,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              $ reset
            </button>
          </div>
        </div>
      )}

      {/* Pulse animation */}
      <style>{`
        @keyframes puzzlePulse {
          0% { box-shadow: 0 0 0 0 rgba(97,220,163,0.7); }
          70% { box-shadow: 0 0 0 12px rgba(97,220,163,0); }
          100% { box-shadow: 0 0 0 0 rgba(97,220,163,0); }
        }
      `}</style>
    </>
  );
}