const Navbar = () => {
  const links = ['about',  'projects', 'contact' ,'experience'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 50,
      height:50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid rgba(97, 220, 163, 0.2)',
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
    }}>
      <span style={{ color: '#61dca3', fontWeight: 800 }}>
        PavniArora
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(link => (
          <a key={link} href={`#${link}`} style={{
            color: '#61dca3', textDecoration: 'none', fontSize: '0.85rem',
            opacity: 0.7, transition: 'opacity 0.2s'
          }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.7}
          >
            {link}
          </a>
        ))}

        {/* Resume download button */}
        
          <a href="/P_Resume.pdf"
          download="P_Resume.pdf"
          style={{
            color: '#000',
            backgroundColor: '#61dca3',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => e.target.style.opacity = 0.8}
          onMouseLeave={e => e.target.style.opacity = 1}>        
          resume
        </a>

          <a href="https://medium.com/@ieeeras/can-you-program-a-hug-will-robots-ever-have-emotions-29a61c59c92f" target="_blank"
          style={{
            color: '#000',
            backgroundColor: '#61dca3',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => e.target.style.opacity = 0.8}
          onMouseLeave={e => e.target.style.opacity = 1}>        
          blog
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;