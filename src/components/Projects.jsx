import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Deepfake Detection System',
    tag: 'SIH Project',
    description: 'Developed a deepfake detection system to identify AI-generated images and videos. Trained a machine learning model on image datasets to classify real vs manipulated media.',
    tech: ['Python', 'Computer Vision', 'Deep Learning'],
    github: '',
    live: '',
    color: '#ff6b6b',
  },
  {
    id: 2,
    title: 'Huffman Coding',
    tag: 'File Compression Tool',
    description: 'Implemented Huffman Encoding algorithm for efficient lossless file compression using variable-length codes. Built frequency maps, binary trees, and encoding/decoding logic using core data structures.',
    tech: ['Python', 'DSA', 'Greedy Algorithms'],
    github: '',
    live: '',
    color: '#61dca3',
  },
  {
    id: 3,
    title: 'Gesture-Controlled Snake Game',
    tag: 'Computer Vision',
    description: 'Developed a real-time gesture-controlled Snake game using computer vision techniques. Implemented hand tracking via webcam for smooth and responsive gameplay.',
    tech: ['Python', 'OpenCV'],
    github: '',
    live: '',
    color: '#61b3dc',
  },
  {
    id: 4,
    title: 'Hangman Game',
    tag: 'Python Project',
    description: 'Designed structured control flow and efficient string handling for game logic. Implemented win/loss state management and robust input validation.',
    tech: ['Python'],
    github: '',
    live: '',
    color: '#febc2e',
  },
  {
    id: 5,
    title: 'Priority-Based Emergency Interrupt System',
    tag: 'CAO Course Project',
    description: 'Designed a hardware-software system to simulate priority-based interrupt handling using Arduino. Modeled real-time emergency scenarios with multi-level priorities using LEDs and buzzer alerts.',
    tech: ['Arduino', 'Embedded Systems', 'Python', 'PySerial'],
    github: '',
    live: '',
    color: '#ff9f43',
  },
  {
    id: 6,
    title: 'E-Shopping Cart',
    tag: 'Web Technologies Project',
    description: 'Developed a responsive e-commerce web application with an interactive product catalog and shopping cart. Implemented dynamic cart management including item addition, removal, quantity updates, and real-time price calculation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'AngularJS', 'ExpressJS', 'Node.js'],
    github: '',
    live: '',
    color: '#a29bfe',
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? project.color + '55' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '12px',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: hovered ? `0 0 20px ${project.color}15` : 'none',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{
            fontSize: '0.7rem',
            color: project.color,
            opacity: 0.8,
            fontFamily: 'JetBrains Mono, monospace',
            marginBottom: '0.3rem',
            display: 'block',
          }}>
            // {project.tag}
          </span>
          <h3 style={{
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            fontFamily: 'JetBrains Mono, monospace',
            lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '1rem', flexShrink: 0 }}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ color: '#61dca3', opacity: 0.6, fontSize: '1rem', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
            >
              <FiGithub />
            </a>
          ) : (
            <span style={{ color: '#61dca3', opacity: 0.2, fontSize: '1rem' }}>
              <FiGithub />
            </span>
          )}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer"
              style={{ color: '#61dca3', opacity: 0.6, fontSize: '1rem', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.6}
            >
              <FiExternalLink />
            </a>
          ) : (
            <span style={{ color: '#61dca3', opacity: 0.2, fontSize: '1rem' }}>
              <FiExternalLink />
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.8rem',
        lineHeight: 1.7,
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: '0.65rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '999px',
            border: `1px solid ${project.color}40`,
            color: project.color,
            fontFamily: 'JetBrains Mono, monospace',
            background: `${project.color}10`,
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 4rem',
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          color: '#61dca3', opacity: 0.6,
          fontSize: '0.85rem', marginBottom: '0.4rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          $ ls ./projects
        </p>
        <h2 style={{
          color: '#fff', fontSize: '2rem',
          fontWeight: 800, fontFamily: 'JetBrains Mono, monospace',
        }}>
          Projects
        </h2>
        <p style={{
          color: '#61dca3', opacity: 0.4,
          fontSize: '0.8rem', marginTop: '0.5rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          &gt; {projects.length} projects found
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
        width: '100%',
        maxWidth: '1000px',
      }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;