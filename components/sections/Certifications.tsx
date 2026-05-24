import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates, type Certificate } from '../../data/certifications';

const CertModal = ({ cert, onClose }: { cert: Certificate; onClose: () => void }) => (
  <div className="modal-overlay" onClick={onClose}>
    <motion.div 
      className="modal-content"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={onClose}>[x]</button>
      
      {cert.imageUrl && (
        <div style={{ width: '100%', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
          <img src={cert.imageUrl} alt={cert.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }} />
        </div>
      )}

      <div style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
        <p style={{ color: 'var(--accent-blue)', fontWeight: 500, marginBottom: '0.25rem' }}>{cert.issuer}</p>
        <p className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{cert.date}</p>
        
        {cert.courses && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Curriculum / Courses</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cert.courses.map((course, idx) => (
                <div key={idx} style={{ padding: '1rem', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{course.name}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
          {cert.description}
        </p>

        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
        
        <span className="section-label">05. Professional Credentials</span>
        <h2 className="section-title">Certifications</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="paper-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.25rem', fontWeight: 500 }}>{cert.issuer}</p>
              <p className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{cert.date}</p>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                {cert.description.slice(0, 100)}...
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                <button className="btn-secondary" onClick={() => setSelectedCert(cert)}>
                  Details
                </button>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
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
