import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const fullText = 'Turning complex ideas into intelligent digital experiences through code, research, and curiosity.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '2rem'
    }}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ color: '#61dca3', opacity: 0.6, marginBottom: '0.5rem', fontSize: '0.9rem' }}
      >
        $ whoami
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          color: '#fff', fontWeight: 800,
          letterSpacing: '0.1em', marginBottom: '1rem'
        }}
      >
        PAVNI ARORA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ color: '#61dca3', fontSize: '1.1rem', minHeight: '1.5em' }}
      >
        &gt; {displayed}<span className="blink">█</span>
      </motion.p>

    </section>
  );
};

export default Hero;