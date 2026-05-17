import DomeGallery from '../DomeGallery';

const images = [
  {
    src: '/images/a.png',
    alt: 'cao'
  },
  {
    src: '/images/b.jpeg',
    alt: 'blog'
  },
  {
    src: '/images/c.jpeg',
    alt: '1styr_uniday'
  },
  {
    src: '/images/d.jpeg',
    alt: 'iste_postit'
  },
  {
    src: '/images/e.jpeg',
    alt: 'dlm_project'
  },
  {
    src: '/images/f.jpeg',
    alt: 'linkedin'
  },
  {
    src: '/images/g.jpeg',
    alt: 'businessBlaze'
  },
  {
    src: '/images/h.jpeg',
    alt: 'beee'
  },
  {
    src: '/images/i.jpeg',
    alt: 'awardMidas'
  },
  {
    src: '/images/j.jpeg',
    alt: 'midas'
  },
  {
    src: '/images/k.jpeg',
    alt: 'totebag'
  },
  {
    src: '/images/l.jpeg',
    alt: 'techhunt'
  },
  {
    src: '/images/m.jpeg',
    alt: 'ctf'
  },
  {
    src: '/images/n.jpeg',
    alt: 'beee'
  },
  {
    src: '/images/o.jpeg',
    alt: 'techhunt'
  },
  {
    src: '/images/p.jpeg',
    alt: 'me'
  },
  {
    src: '/images/q.jpeg',
    alt: 'marathon'
  },
  {
    src: '/images/r.jpeg',
    alt: 'manipal'
  },
  {
    src: '/images/s.jpeg',
    alt: 'webtech'
  },
  {
    src: '/images/t.jpeg',
    alt: '2ndyr_uniday'
  },
  {
    src: '/images/u.jpeg',
    alt: 'drone'
  },
  {
    src: '/images/v.jpeg',
    alt: 'controller'
  },
  {
    src: '/images/w.jpeg',
    alt: 'cat'
  },
  {
    src: '/images/x.jpeg',
    alt: 'wieme'
  },
  {
    src: '/images/y.jpeg',
    alt: 'speaking'
  },
  {
    src: '/images/z.jpeg',
    alt: 'ardra'
  },
  {
    src: '/images/z1.jpeg',
    alt: 'ns'
  },
  {
    src: '/images/z2.jpeg',
    alt: 'wie'
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      {/* Header overlay on top of dome */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        textAlign: 'center',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}>
        {/* <p style={{ color: '#61dca3', opacity: 0.6, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
          $ ls ./experience
        </p> */}
        <br />
        <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 1000 }}>
          Experience Gallery
        </h2>
        {/* <p style={{ color: '#61dca3', opacity: 0.5, fontSize: '0.8rem', marginTop: '0.3rem' }}>
          drag to explore · click to enlarge
        </p> */}
      </div>

      {/* Full section dome */}
      <DomeGallery
        images={images}
        fit={0.75}
        minRadius={650}
        maxVerticalRotationDeg={0}
        segments={26}
        dragDampening={2.4}
        grayscale={false}
        overlayBlurColor="transparent"
        openedImageWidth="550px"
        openedImageHeight="550px"
        imageBorderRadius="16px"
        openedImageBorderRadius="20px"
      />
    </section>
  );
};

export default Experience;