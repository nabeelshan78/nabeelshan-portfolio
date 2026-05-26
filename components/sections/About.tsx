const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">

        <span className="section-label">Background</span>
        <h2 className="section-title">About</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              I am an AI/ML engineer and researcher focused on large language models, alignment methods, and agentic systems. My approach centers on implementing architectures from first principles — constructing Transformers, LSTMs, CNNs, and RL pipelines from the ground up using PyTorch and NumPy — not as exercises, but as a verification methodology against published research.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Currently pursuing a B.E. in Software Engineering at the National University of Sciences and Technology (NUST), with an expected graduation in May 2027. I am an incoming MITACS Globalink Research Intern at the University of Calgary for Summer 2026. Previously, I served as an AI Engineer at DeepDocs AI, working on NLP-driven document processing.
            </p>
          </div>
        </div>

        {/* Research Interests */}
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1.5rem', color: 'var(--text-heading)' }}>Research Interests</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3.5rem' }}>

          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              LLM Alignment &amp; Preference Learning
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Preference optimization methods (DPO, RLHF, GRPO, ORPO) for steering language model behavior. Alignment techniques that scale to resource-constrained settings.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['RLHF', 'DPO', 'PPO', 'GRPO', 'ORPO', 'Reward Modeling'].map(k => (
                <span key={k} className="tag">{k}</span>
              ))}
            </div>
          </div>

          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              LLM Reasoning &amp; Efficiency
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Reasoning capabilities of large language models and methods to improve inference efficiency. Model compression, parameter-efficient adaptation, and distillation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Chain-of-Thought', 'LoRA', 'QLoRA', 'PEFT', 'SFT', 'Distillation'].map(k => (
                <span key={k} className="tag">{k}</span>
              ))}
            </div>
          </div>

          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              Agentic AI Systems
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Multi-agent orchestration frameworks. Research on tool-use, planning, and autonomous decision-making in LLM-based agent systems.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Multi-Agent', 'Tool Use', 'Planning', 'Orchestration', 'RAG'].map(k => (
                <span key={k} className="tag">{k}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Technical Competencies */}
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1.5rem', color: 'var(--text-heading)' }}>Technical Competencies</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Languages &amp; Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'Scikit-learn', 'Pandas', 'TypeScript'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              LLMs &amp; NLP
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Transformers', 'Hugging Face', 'TRL', 'RLHF', 'DPO', 'PPO', 'SFT', 'PEFT', 'LoRA', 'RAG'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Computer Vision
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['CNNs', 'ResNet', 'U-Net', 'YOLO', 'FaceNet', 'Semantic Segmentation'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Infrastructure &amp; Tools
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Docker', 'AWS', 'Git', 'Weaviate', 'Arize Phoenix', 'CI/CD', 'MLOps'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
