const labProjects = [
  {
    title: 'Autoregressive Transformer Architecture',
    description: 'Implementation of a GPT decoder-only architecture utilizing PyTorch. Features multi-head causal self-attention, positional embeddings. (22M and 52M params).',
    badge: 'PyTorch',
    link: 'https://github.com/nabeelshan78/gpt-forge-from-scratch-transformer',
  },
  {
    title: 'Parameter-Efficient Fine-Tuning Mechanisms',
    description: 'Implementation of Adapters and LoRA from scratch in PyTorch. PEFT approaches match full fine-tuning accuracy (~86%) while reducing tunable parameters by >96%.',
    badge: 'PyTorch',
    link: 'https://github.com/nabeelshan78/Transformer-Adaptation-Playbook',
  },
  {
    title: 'RLHF Pipeline (SFT → RM → PPO)',
    description: 'Full 3-stage alignment pipeline. Trained reward model to 97.9% accuracy. PPO achieved +54% preference lift over SFT baseline.',
    badge: 'PyTorch',
    link: 'https://github.com/nabeelshan78/reinforcement-learning-human-feedback-scratch',
  },
  {
    title: 'CNN Architecture in NumPy',
    description: 'Implementation of Convolutional Neural Networks utilizing only NumPy primitives. Includes mathematical derivations for 2D Convolutions and backpropagation.',
    badge: 'NumPy',
    link: 'https://github.com/nabeelshan78/cnn-from-scratch-sign-digits',
  },
  {
    title: 'RNN & BPTT Optimization',
    description: 'Character-level RNN implementation. Demonstrates sequential data processing, cross-entropy loss calculation, and Backpropagation Through Time (BPTT).',
    badge: 'NumPy',
    link: 'https://github.com/nabeelshan78/vanilla-rnn-from-scratch',
  },
  {
    title: 'Attention-Based Seq2Seq Models',
    description: 'Seq2Seq architecture for NMT (English to French). Utilizes a Bi-directional LSTM encoder, an LSTM decoder with Additive Attention. 23.6M parameters.',
    badge: 'TensorFlow',
    link: 'https://github.com/nabeelshan78/attention-based-nmt',
  },
];

const Lab = () => {
  return (
    <section className="section" id="lab">
      <div className="container">
        
        <span className="section-label">03. Core Systems</span>
        <h2 className="section-title">Algorithmic Implementations</h2>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px' }}>
          Selected implementations of fundamental machine learning architectures developed from first principles without reliance on high-level APIs. These repositories demonstrate rigorous understanding of the underlying mathematical formulations and optimization mechanics.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {labProjects.map((project) => (
            <div key={project.title} className="paper-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span className="tag" style={{ marginBottom: '0.75rem' }}>{project.badge}</span>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.description}</p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
