const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">

        <span className="section-label">Background</span>
        <h2 className="section-title">About</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
          <div>
            {/* Paragraph 1: The Research & Philosophy */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              My research focuses on advancing Large Language Models (LLMs) through computationally efficient alignment methodologies, Reinforcement Learning (RLHF), test-time compute optimizations, and autonomous agentic systems. Rather than relying on high-level APIs, my engineering philosophy is rooted in <strong>first-principles</strong>. I build complex deep learning architectures - from foundational Transformers to end-to-end PPO pipelines - completely from scratch in PyTorch. I treat raw implementation not merely as a coding exercise, but as the most effective way to deeply internalize the complex mathematical mechanics detailed in academic literature.
            </p>
            
            {/* Paragraph 2: The Evidence & Momentum */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Currently pursuing a B.E. in Software Engineering at the National University of Sciences and Technology (NUST), my academic momentum is heavily driven by applied research. Most recently, I architected deterministic verification guardrails as a Contract AI Engineer at DeepDocs AI. For Summer 2026, I have been selected as a fully-funded MITACS Globalink Research Intern at the University of Calgary, where I will be engineering synthetic data pipelines and fine-tuning open-source LLMs via LoRA and Knowledge Distillation.
            </p>

            {/* Paragraph 3: The Ambition (The Call to Action) */}
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              My ultimate objective is to push the frontier of secure, aligned, and highly capable Generative AI. I am actively preparing to transition into a thesis-based Master's program in Computer Science or Artificial Intelligence for <strong>Fall 2027</strong>, and I am currently seeking advanced research opportunities and graduate lab placements where I can contribute to the next generation of LLM alignment and agentic orchestration.
            </p>
          </div>
        </div>

                {/* Research Interests */}
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1.5rem', color: 'var(--text-heading)' }}>Research Interests</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3.5rem' }}>

          {/* Pillar 1 */}
          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              LLM Alignment &amp; Preference Learning
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Engineering mathematically rigorous preference optimization pipelines to align language model behavior with human intent. Focused on applying advanced Reinforcement Learning (RLHF, PPO, GRPO) and direct optimization (DPO, ORPO) in complex, resource-constrained environments.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              LLM Reasoning &amp; Test-Time Compute
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Maximizing model reasoning capabilities through advanced Test-Time Compute scaling and structural heuristics. Researching parameter-efficient adaptation (LoRA, PEFT) and knowledge distillation to aggressively optimize inference overhead.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="card" style={{ borderLeft: '2px solid var(--accent)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.625rem', color: 'var(--text-heading)', fontWeight: 600 }}>
              Autonomous Agentic Systems
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Architecting stateful, fault-tolerant multi-agent orchestration frameworks. Investigating autonomous tool-use, cyclical planning logic, and deterministic verification engines to strictly mitigate LLM hallucinations in production deployments.
            </p>
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
              {['Python', 'PyTorch', 'TensorFlow', 'LangGraph', 'LangChain', 'NumPy', 'Scikit-learn'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              LLMs &amp; NLP
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Transformers', 'Hugging Face', 'SFT', 'Distillation', 'RLHF', 'DPO', 'PPO', 'PEFT/LoRA', 'RAG'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Computer Vision
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['CNNs', 'ResNet', 'U-Net', 'YOLO', 'FaceNet', 'Segmentation'].map(s => (
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
