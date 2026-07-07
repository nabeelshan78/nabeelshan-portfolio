const Footer = () => {
  return (
    <footer style={{
      padding: '2.5rem 0',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-primary)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} Nabeel Shan
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href="https://github.com/nabeelshan78"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)', transition: 'color 120ms ease' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nabeelshan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)', transition: 'color 120ms ease' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:nabeelshan468@gmail.com"
            style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-xs)', transition: 'color 120ms ease' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
