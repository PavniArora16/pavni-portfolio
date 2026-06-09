import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import GlitchName from './GlitchName';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const fullText = 'Turning complex ideas into intelligent digital experiences through code, research, and curiosity.';

  useEffect(() => {
    // Delay typewriter until after name glitch settles
    const startDelay = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(timer);
      }, 40);
      return () => clearInterval(timer);
    }, 1200);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          color: '#61dca3',
          opacity: 0.6,
          marginBottom: '0.5rem',
          fontSize: '0.9rem',
          fontFamily: 'monospace',
          letterSpacing: '0.15em',
        }}
      >
        {/* your eyebrow label here if any */}
      </motion.p>

      {/* Drop-in replacement — hover to glitch, auto-glitches every 5s */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <GlitchName text="PAVNI ARORA" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          color: '#61dca3',
          fontSize: '1.1rem',
          minHeight: '1.5em',
          fontFamily: 'monospace',
        }}
      >
        &gt; {displayed}
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '1.1em',
            background: '#61dca3',
            marginLeft: '2px',
            verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }}
        />
      </motion.p>
    </section>
  );
};

export default Hero;
