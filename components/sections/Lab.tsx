const labProjects = [
  {
    title: 'Autoregressive Transformer (GPT)',
    description: 'Decoder-only GPT architecture in PyTorch. Multi-head causal self-attention, positional embeddings, custom tokenization, and a training loop for 22M and 52M parameter models.',
    framework: 'PyTorch',
    params: '52M params',
    link: 'https://github.com/nabeelshan78/gpt-forge-from-scratch-transformer',
  },
  {
    title: 'RLHF Pipeline (SFT → RM → PPO)',
    description: 'Complete 3-stage alignment pipeline from scratch. Reward model trained to 97.9% accuracy on 33k preference pairs. PPO achieved +54% preference lift over SFT baseline.',
    framework: 'PyTorch',
    params: '97.9% RM Acc',
    link: 'https://github.com/nabeelshan78/reinforcement-learning-human-feedback-scratch',
  },
  {
    title: 'PEFT: Adapters & LoRA',
    description: 'Adapters and LoRA implemented from scratch. PEFT matches full fine-tuning accuracy (~86%) while reducing tunable parameters by >96% across BERT, GPT-2, and OPT.',
    framework: 'PyTorch',
    params: '>96% reduction',
    link: 'https://github.com/nabeelshan78/Transformer-Adaptation-Playbook',
  },
  {
    title: 'Attention-Based Neural Machine Translation',
    description: 'Seq2Seq architecture for English-to-French NMT. Bi-directional LSTM encoder, LSTM decoder with Additive (Bahdanau) Attention, and Beam Search decoding. 23.6M parameters.',
    framework: 'TensorFlow',
    params: '23.6M params',
    link: 'https://github.com/nabeelshan78/attention-based-nmt',
  },
  {
    title: 'CNN in NumPy',
    description: 'Convolutional Neural Networks using only NumPy primitives. Includes mathematical derivations for 2D convolutions, max pooling, and complete backpropagation.',
    framework: 'NumPy',
    params: 'From scratch',
    link: 'https://github.com/nabeelshan78/cnn-from-scratch-sign-digits',
  },
  {
    title: 'RNN & BPTT',
    description: 'Character-level RNN implementation. Demonstrates sequential data processing, cross-entropy loss, gradient clipping, and Backpropagation Through Time (BPTT).',
    framework: 'NumPy',
    params: 'From scratch',
    link: 'https://github.com/nabeelshan78/vanilla-rnn-from-scratch',
  },
  {
    title: 'Deep Neural Network in NumPy',
    description: 'Modular implementation of fully-connected networks. Forward/backward propagation, optimizers (Adam, RMSProp), initialization schemes, and regularization — all in NumPy.',
    framework: 'NumPy',
    params: 'From scratch',
    link: 'https://github.com/nabeelshan78/deep-nn-from-scratch',
  },
  {
    title: 'ResNet-50 from Scratch',
    description: 'Full ResNet-50 reconstruction without pre-trained weights. Implements convolutional and identity blocks to evaluate residual learning on CIFAR-10.',
    framework: 'TensorFlow',
    params: '~25.6M params',
    link: 'https://github.com/nabeelshan78/resnet50-from-scratch-cifar10',
  },
];

const Lab = () => {
  return (
    <section className="section" id="implementations">
      <div className="container">

        <span className="section-label">First-Principles Work</span>
        <h2 className="section-title">Algorithmic Implementations</h2>
        <p className="section-description">
          Core ML architectures implemented from the ground up without reliance on high-level APIs.
          Each repository includes the mathematical formulations, gradient derivations, and empirical validation against published results.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {labProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="tag">{project.framework}</span>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
                  {project.params}
                </span>
              </div>

              <h3 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.5rem', color: 'var(--text-heading)', fontWeight: 600, lineHeight: 1.4 }}>
                {project.title}
              </h3>

              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1 }}>
                {project.description}
              </p>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-tertiary)' }}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
                  Source
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Lab;
