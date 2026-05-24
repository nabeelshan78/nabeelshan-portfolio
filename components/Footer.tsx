const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Nabeel Shan. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
          <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
