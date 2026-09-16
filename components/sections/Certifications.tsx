import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates, type Certificate } from '../../data/certifications';

const CertModal = ({ cert, onClose }: { cert: Certificate; onClose: () => void }) => (
  <div className="modal-overlay" onClick={onClose}>
    <motion.div
      className="modal-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

      {cert.imageUrl && (
        <div style={{
          width: '100%',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
          padding: '1.5rem',
        }}>
          <img
            src={cert.imageUrl}
            alt={cert.title}
            style={{ width: '100%', maxHeight: '260px', objectFit: 'contain' }}
          />
        </div>
      )}

      <div style={{ padding: '1.75rem' }}>
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '0.5rem' }}>{cert.title}</h3>
        <p style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '0.25rem', fontSize: 'var(--text-sm)' }}>
          {cert.issuer}
        </p>
        <p className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
          {cert.date}
        </p>

        {cert.courses && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Curriculum</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cert.courses.map((course, idx) => (
                <div key={idx} style={{
                  padding: '0.75rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                }}>
                  <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: 'var(--text-sm)' }}>
                    {course.name}
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          {cert.description}
        </p>

        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn btn-filled">
          Verify Credential
        </a>
      </div>
    </motion.div>
  </div>
);

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Show first 3 by default, rest behind toggle
  const visible = expanded ? certificates : certificates.slice(0, 3);

  return (
    <section className="section" id="certifications">
      <div className="container">

        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>

        {/* Compact single-row list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {visible.map((cert) => (
            <div
              key={cert.id}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                padding: '0.75rem 1rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.4 }}>
                  {cert.title}
                </span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  {cert.issuer}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
                  {cert.date}
                </span>
                <button
                  className="btn"
                  onClick={() => setSelectedCert(cert)}
                  style={{ padding: '0.25rem 0.625rem', fontSize: 'var(--text-xs)' }}
                >
                  Details
                </button>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ padding: '0.25rem 0.625rem', fontSize: 'var(--text-xs)' }}
                >
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>

        {certificates.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              className="btn"
              onClick={() => setExpanded(!expanded)}
              style={{ fontSize: 'var(--text-xs)' }}
            >
              {expanded ? 'Show Less' : `Show All ${certificates.length} Certifications`}
            </button>
          </div>
        )}

      </div>

      <AnimatePresence>
        {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
