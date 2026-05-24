import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'System error. Please utilize direct email.');
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        
        <span className="section-label">06. Correspondence</span>
        <h2 className="section-title">Contact & Collaboration</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-heading)' }}>Direct Communication</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Open to rigorous technical discussions, research collaborations, and professional opportunities within the domain of artificial intelligence and machine learning engineering.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>EMAIL</span>
                <a href="mailto:nabeelshan468@gmail.com" style={{ fontSize: '1rem' }}>nabeelshan468@gmail.com</a>
              </div>
              <div>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>LINKEDIN</span>
                <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem' }}>linkedin.com/in/nabeelshan</a>
              </div>
              <div>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>GITHUB</span>
                <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem' }}>github.com/nabeelshan78</a>
              </div>
            </div>
          </div>

          <div className="paper-card">
            {status === 'success' ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>Transmission Successful</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>The correspondence has been routed to my inbox.</p>
                <button className="btn-secondary" onClick={() => setStatus('idle')}>Initiate New Message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name / Identifier</label>
                  <input id="name" className="form-input" type="text" name="user_name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input id="email" className="form-input" type="email" name="user_email" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message Body</label>
                  <textarea id="message" className="form-textarea" name="message" required />
                </div>

                {status === 'error' && (
                  <div style={{ padding: '0.75rem', background: 'rgba(255, 0, 0, 0.1)', border: '1px solid rgba(255, 0, 0, 0.3)', color: '#ff7b72', marginBottom: '1rem', fontSize: '0.85rem' }}>
                    {errorMessage}
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
