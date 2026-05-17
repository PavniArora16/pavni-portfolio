import Carousel from '../Carousel';
import {
  FiCode, FiDatabase, FiGitBranch, FiLayout,
  FiTerminal, FiCpu, FiGlobe, FiLayers
} from 'react-icons/fi';

const skills = [
  {
    id: 1,
    title: 'C / C++',
    description: 'Systems programming, DSA',
    icon: <FiTerminal className="carousel-icon" />
  },
  {
    id: 2,
    title: 'Python',
    description: 'Scripting, automation, data handling.',
    icon: <FiCpu className="carousel-icon" />
  },
  {
    id: 3,
    title: 'HTML & CSS',
    description: 'Semantic markup and responsive design.',
    icon: <FiLayout className="carousel-icon" />
  },
  {
    id: 4,
    title: 'JavaScript',
    description: 'DOM manipulation, programming.',
    icon: <FiGlobe className="carousel-icon" />
  },
  {
    id: 5,
    title: 'React',
    description: 'Component-based UIs, hooks, state management.',
    icon: <FiLayers className="carousel-icon" />
  },
  {
    id: 6,
    title: 'Git & GitHub',
    description: 'Version control, branching, collaboration.',
    icon: <FiGitBranch className="carousel-icon" />
  },
  {
    id: 7,
    title: 'SQL',
    description: 'Relational databases, queries, schema design.',
    icon: <FiDatabase className="carousel-icon" />
  },
  {
    id: 8,
    title: 'Java',
    description: 'Scripting, logic',
    icon: <FiCode className="carousel-icon" />
  },
  {
    id: 9,
    title: 'Java',
    description: 'Scripting, logic',
    icon: <FiCode className="carousel-icon" />
  },
  
];

const Skills = () => {
  return (
    <section id="skills" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 4rem',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: '#61dca3', opacity: 0.6, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
          
        </p>
        <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>
          Skills
        </h2>
      </div>

      {/* Carousel */}
      <div style={{ height: '400px', position: 'relative' }}>
        <Carousel
          items={skills}
          baseWidth={500}
          autoplay={true}
          autoplayDelay={2000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    </section>
  );
};

export default Skills;