import ScrollReveal from './ScrollReveal';

const About = () => (
  <section id="about" style={{ minHeight: '100vh', display: 'flex',
    alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
    <div style={{ maxWidth: '700px', color: '#61dca3' }}>

      <ScrollReveal direction="left">
        <p style={{ opacity: 0.5, marginBottom: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
        </p>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.1}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'JetBrains Mono, monospace' }}>
          About Me
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.2}>
        <p style={{ lineHeight: 1.8, opacity: 0.8, textAlign: 'justify', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }}>
          Hi, I am Pavni Arora. A passionate Computer Science student. I like to learn about emerging technologies, design intelligent systems, create innovative solutions and push boundaries of potential creativity. I am the Top 10 student in my branch for twice, and have worked on and published few impactful project ideas among diverse fields of software, computer vision, bioinformatics and embedded systems. I currently hold the position of Vice Chairperson IEEE Women in Engineering of my college, and lead various technical initiatives, research and development projects. Research review paper (1) submitted and another in progress.
        </p>
      </ScrollReveal>

    </div>
  </section>
);

export default About;