import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const socials = [
  {
    icon: <FiMail />,
    label: 'email',
    value: 'pavniarora16@gmail.com',
    href: 'mailto:pavniarora16@gmail.com',
    color: '#ff6b6b',
  },
  {
    icon: <FiLinkedin />,
    label: 'linkedin',
    value: 'linkedin.com/in/pavniarora7',
    href: 'https://www.linkedin.com/in/pavniarora7/',
    color: '#61b3dc',
  },
  {
    icon: <FiGithub />,
    label: 'github',
    value: 'github.com/PavniArora16',
    href: 'https://github.com/PavniArora16',
    color: '#61dca3',
  },
  {
    icon: <FiInstagram />,
    label: 'instagram',
    value: '@pavni_.16',
    href: 'https://www.instagram.com/pavni_.16/',
    color: '#a29bfe',
  },
];

const SocialCard = ({ icon, label, value, href, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        padding: '1.5rem',
        borderRadius: '12px',
        border: `1px solid ${hovered ? color + '55' : 'rgba(255,255,255,0.08)'}`,
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 0 20px ${color}15` : 'none',
        cursor: 'pointer',
      }}
    >
      {/* Tag */}
      <span style={{
        fontSize: '0.7rem',
        color: color,
        opacity: 0.8,
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        // {label}
      </span>

      {/* Icon + Value row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ color: color, fontSize: '1.2rem', display: 'flex' }}>
          {icon}
        </span>
        <span style={{
          color: '#fff',
          fontSize: '0.85rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 600,
        }}>
          {value}
        </span>
      </div>

      {/* Arrow */}
      <span style={{
        color: color,
        opacity: hovered ? 0.8 : 0.2,
        fontSize: '0.8rem',
        fontFamily: 'JetBrains Mono, monospace',
        transition: 'opacity 0.3s',
      }}>
        → open_{label}
      </span>
    </a>
  );
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pavniarora16@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '6rem 2rem 4rem',
    }}>

      {/* Header — same as Projects */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          color: '#61dca3', opacity: 0.6,
          fontSize: '0.85rem', marginBottom: '0.4rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          $ ping pavni --connect
        </p>
        <h2 style={{
          color: '#fff', fontSize: '2rem',
          fontWeight: 800, fontFamily: 'JetBrains Mono, monospace',
        }}>
          Get In Touch
        </h2>
        <p style={{
          color: '#61dca3', opacity: 0.4,
          fontSize: '0.8rem', marginTop: '0.5rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          &gt; always open to new opportunities, collabs, or just a chat.
        </p>
      </div>

      {/* Cards grid — same as Projects */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        width: '100%',
        maxWidth: '1000px',
        marginBottom: '2rem',
      }}>
        {socials.map(s => (
          <SocialCard key={s.label} {...s} />
        ))}
      </div>

      {/* Copy email — styled like a project card */}
      <div
        onClick={handleCopyEmail}
        style={{
          width: '100%',
          maxWidth: '1000px',
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          border: `1px solid ${copied ? '#61dca355' : 'rgba(255,255,255,0.08)'}`,
          background: copied ? 'rgba(97,220,163,0.06)' : 'rgba(255,255,255,0.02)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: copied ? '0 0 20px rgba(97,220,163,0.1)' : 'none',
        }}
      >
        <span style={{
          color: '#61dca3', opacity: 0.5,
          fontSize: '0.8rem',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          $ quick_copy --email
        </span>
        <span style={{
          color: copied ? '#61dca3' : '#fff',
          fontSize: '0.85rem',
          fontFamily: 'JetBrains Mono, monospace',
          transition: 'color 0.3s',
        }}>
          {copied ? '✓ copied to clipboard!' : '> copy email address'}
        </span>
      </div>

      {/* Footer */}
      <p style={{
        color: '#61dca3', opacity: 0.2,
        fontSize: '0.7rem', textAlign: 'center',
        marginTop: '3rem',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        
      </p>

    </section>
  );
};

export default Contact;