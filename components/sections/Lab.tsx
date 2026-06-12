const labProjects = [
  {
    title: 'Attention Is All You Need - From Scratch',
    description: 'First-principles PyTorch implementation of the original Encoder-Decoder Transformer. Features custom multi-head attention, Noam LR scheduling, dynamic padding and weight-tied embeddings. Verified at the tensor level.',
    framework: 'PyTorch',
    params: '63.1M params',
    link: 'https://github.com/nabeelshan78/attention-is-all-you-need-scratch',
  },
  {
    title: 'GPT: Autoregressive Transformer',
    description: 'Ground-up implementation of a GPT-style language model in pure PyTorch. Scaled from 22M to 52M parameters to validate architectural capacity. Engineered with custom causal masking and inference pipelines.',
    framework: 'PyTorch',
    params: '52M params',
    link: 'https://github.com/nabeelshan78/gpt-forge-from-scratch-transformer',
  },
  {
    "title": "Deep Neural Network from Scratch",
    "description": "First-principles NumPy implementation of a fully vectorized multi-layer deep-NN. Features manual forward / backward propagation, advanced optimizers (Adam, RMSprop), and regularization. Empirically validated via optimization ablation studies.",
    "framework": "NumPy",
    "params": "245K params",
    "link": "https://github.com/nabeelshan78/deep-nn-from-scratch"
  },
  {
    "title": "Convolutional Neural Network",
    "description": "CNN built entirely in pure NumPy. Features custom multi-dimensional filters, max-pooling operations, and manually derived chain-rule backpropagation. Empirically validated on RGB datasets, demonstrating stable cross-entropy convergence.",
    "framework": "NumPy",
    "params": "From Scratch",
    "link": "https://github.com/nabeelshan78/cnn-from-scratch-sign-digits"
  },
  {
  "title": "Character-Level Recurrent Neural Net",
  "description": "RNN from scratch for sequential modeling. Features manual backpropagation through time, custom hidden state tracking, and temperature-controlled sampling. Validated via cross-entropy loss convergence and coherent text generation.",
  "framework": "NumPy",
  "params": "BPTT Implementation",
  "link": "https://github.com/nabeelshan78/vanilla-rnn-from-scratch"
  },
  // {
  // "title": "ResNet-50 Architecture from Scratch",
  // "description": "Full ResNet-50 reconstruction without pre-trained weights. Encompassing custom convolutional & identity mapping alongside bottleneck residual blocks. Validated on CIFAR-10 via cross-entropy minimization.",
  // "framework": "TensorFlow/Keras",
  // "params": "23.5M params",
  // "link": "https://github.com/nabeelshan78/resnet50-from-scratch-cifar10"
  // },
  {
  "title": "Word2Vec Architectures from Scratch",
  "description": "Built and trained CBOW and Skip-gram word embedding architectures. Includes custom context windowing. Validated through cosine similarity analysis and t-SNE clustering of learned embeddings.",
  "framework": "PyTorch",
  "params": "CBOW & Skip-gram",
  "link": "https://github.com/nabeelshan78/Word2Vec-Implementations-PyTorch"
  }
];

const Lab = () => {
  return (
    <section className="section" id="implementations">
      <div className="container">

        <span className="section-label">First-Principles Work</span>
        <h2 className="section-title">Algorithmic Implementations</h2>
        <p className="section-description">
          First-principles engineering of core ML architectures. Features mathematical derivations, raw tensor operations, custom architecture design, and rigorous empirical validation.
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
