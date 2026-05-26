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
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred. Please use direct email.');
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">

        <span className="section-label">Contact</span>
        <h2 className="section-title">Get in Touch</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Contact Info */}
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.75, fontSize: 'var(--text-sm)' }}>
              Open to research collaborations, technical discussions, and graduate research opportunities
              in AI/ML. Available for correspondence via email or the form below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Email
                </span>
                <a href="mailto:nabeelshan468@gmail.com" style={{ fontSize: 'var(--text-sm)' }}>
                  nabeelshan468@gmail.com
                </a>
              </div>
              <div>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  LinkedIn
                </span>
                <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)' }}>
                  linkedin.com/in/nabeelshan
                </a>
              </div>
              <div>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GitHub
                </span>
                <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--text-sm)' }}>
                  github.com/nabeelshan78
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            {status === 'success' ? (
              <div style={{ padding: '1.5rem 0.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-md)', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Message Sent
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: 'var(--text-sm)' }}>
                  Thank you. I will respond as soon as possible.
                </p>
                <button className="btn" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input id="contact-name" className="form-input" type="text" name="user_name" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input id="contact-email" className="form-input" type="email" name="user_email" required autoComplete="email" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" className="form-textarea" name="message" required />
                </div>

                {status === 'error' && (
                  <div style={{
                    padding: '0.625rem 0.75rem',
                    background: 'rgba(220, 38, 38, 0.08)',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
                    color: '#ef9a9a',
                    marginBottom: '1rem',
                    fontSize: 'var(--text-xs)',
                    borderRadius: 'var(--radius-sm)',
                  }}>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-filled"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
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
