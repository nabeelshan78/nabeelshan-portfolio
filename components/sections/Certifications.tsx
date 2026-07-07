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

  return (
    <section className="section" id="certifications">
      <div className="container">

        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.375rem', color: 'var(--text-heading)', fontWeight: 600, lineHeight: 1.4 }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: 500 }}>
                {cert.issuer}
              </p>
              <p className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>
                {cert.date}
              </p>

              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
                {cert.description.slice(0, 120)}...
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <button className="btn" onClick={() => setSelectedCert(cert)}>
                  Details
                </button>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn">
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
