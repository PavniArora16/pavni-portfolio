import { useState, useEffect, useRef } from 'react';

const CHARS = '!@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const GlitchName = ({ text = 'PAVNI ARORA', style = {} }) => {
  const [displayed, setDisplayed] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const runGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iterations = 0;
    const maxIterations = text.length * 2;

    intervalRef.current = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iterations / 2) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayed(text);
        setIsGlitching(false);
      }
    }, 40);
  };

  // Auto-glitch on mount
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      runGlitch();
    }, 600);

    // Periodic auto-glitch every 5s
    const periodic = setInterval(() => {
      runGlitch();
    }, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(periodic);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <h1
      onMouseEnter={runGlitch}
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
        color: '#fff',
        fontWeight: 800,
        letterSpacing: '0.1em',
        marginBottom: '1rem',
        cursor: 'default',
        fontFamily: 'monospace',
        transition: 'color 0.1s',
        userSelect: 'none',
        ...style,
      }}
    >
      {displayed.split('').map((char, i) => (
        <span
          key={i}
          style={{
            color: char !== text[i] ? '#61dca3' : '#ffffff',
            textShadow: char !== text[i]
              ? '0 0 8px #61dca3, 0 0 20px #61dca388'
              : 'none',
            transition: 'color 0.05s, text-shadow 0.05s',
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default GlitchName;
