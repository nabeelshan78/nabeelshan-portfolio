import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'Background' },
  { id: 'experience', label: 'Experience' },
  { id: 'lab', label: 'Implementations' },
  { id: 'projects', label: 'Research' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          NABEEL SHAN
        </a>

        <div className="nav-links">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: 'none' }} // Handled via CSS in real life, but inline style block below will override
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-subtle)',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem', gap: '1rem' }}>
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  onClick={() => scrollToSection(id)}
                  style={{ textAlign: 'left', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; background: none; border: none; color: var(--text-primary); cursor: pointer; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
