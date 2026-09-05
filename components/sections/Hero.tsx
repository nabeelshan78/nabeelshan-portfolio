import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" id="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="hero-layout">

          {/* Primary Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-text"
          >
            <p className="text-mono" style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-tertiary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              AI/ML Researcher &amp; Engineer
            </p>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, var(--text-4xl))',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: 'var(--text-heading)',
            }}>
              Nabeel Shan
            </h1>

                        <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              I work across applied and theoretical machine learning — vision-language models, multi-agent systems, efficient model adaptation, and alignment — with a focus on building reliable AI for real-world and safety-critical domains. I build and verify deep learning architectures from first principles in <strong>PyTorch</strong> and raw <strong>tensor mathematics</strong>.
            </p>

            {/* Affiliation Line */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginBottom: '2.5rem',
              paddingLeft: '0.75rem',
              borderLeft: '1px solid var(--border-default)',
            }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                B.E. Software Engineering • <span style={{ color: 'var(--text-primary)' }}>NUST</span>, Islamabad
              </span>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                Current MITACS Globalink Research Intern • <span style={{ color: 'var(--text-primary)' }}>University of Calgary</span>
              </span>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-filled">View Projects</a>
              <a href="#contact" className="btn">Contact</a>
              {/* CV button — hidden; uncomment to restore
              <a
                href="/NabeelShan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                CV
              </a>
              */}
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem' }}>
              <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-tertiary)', transition: 'color 120ms ease' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-tertiary)', transition: 'color 120ms ease' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="mailto:nabeelshan468@gmail.com" aria-label="Email" style={{ color: 'var(--text-tertiary)', transition: 'color 120ms ease' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-image"
          >
            <div style={{
              width: '240px',
              height: '300px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-tertiary)',
            }}>
              <img
                src="nabeel.jpg"
                alt="Nabeel Shan"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(25%) contrast(1.05)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-image { order: -1; }
          .hero-text { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
