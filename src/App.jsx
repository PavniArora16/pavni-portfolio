import LetterGlitch from './LetterGlitch';
import ClickSpark from './ClickSpark';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PuzzleBot from './components/PuzzleBot';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">

      {/* Fixed glitch background */}
      <div className="glitch-bg">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* All content with click sparks */}
      <div className="content">
        <ClickSpark
          sparkColor="#61dca3"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          <Hero />
          <About />
          {/* <Skills /> */}
          <Projects /> <Contact />
          <Experience />
          
        </ClickSpark>
      </div>
      <PuzzleBot />
    </div>
  );
}

export default App;