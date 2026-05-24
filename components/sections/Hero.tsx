import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" id="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
          >
            <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>
              Nabeel Shan
            </h1>
            
            <p className="text-mono" style={{ color: 'var(--accent-blue)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              AI/ML Researcher & Engineer
            </p>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '500px' }}>
              Specializing in large language model alignment, reinforcement learning, and agentic orchestration. Focused on first-principles implementations of deep learning architectures and rigorous empirical evaluation.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#projects" className="btn-primary">Research & Projects</a>
              <a href="#contact" className="btn-secondary">Contact / Collaboration</a>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image Content - Serious, no glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '280px', height: '280px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: 'var(--bg-tertiary)' }}>
              <img src="nabeel.jpg" alt="Nabeel Shan" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) contrast(1.1)' }} />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child p { margin-left: auto; margin-right: auto; }
          .hero-grid > div:first-child div { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
