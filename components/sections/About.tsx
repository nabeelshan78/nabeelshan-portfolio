// Toggle to restore the Research Interests section later
const SHOW_RESEARCH_INTERESTS = false;

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">

        <span className="section-label">Background</span>
        <h2 className="section-title">About</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
          <div>
            {/* Paragraph 1: Position */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              My work sits where reinforcement learning meets large language and vision-language models: post-training against rewards that hold up under optimization pressure, and efficient adaptation and inference - LoRA, adapters, quantization, distillation - so that the same experiment can be run at more than one model scale instead of one. What draws me in particular are the failure modes that never raise an error. A model can be reward-hacking, hallucinating, or quietly losing a capability while every number on the dashboard looks fine.
            </p>

            {/* Paragraph 2: Method */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Rather than relying on high-level APIs, my engineering philosophy is rooted in first principles: I build and validate architectures from scratch - Transformers, CNNs, RNNs, PEFT modules and complete RLHF pipelines - in PyTorch and raw NumPy. I treat implementation not as a coding exercise but as the most effective way to internalise the mathematics behind the literature.
            </p>

            {/* Paragraph 3: Standard of proof
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              I hold evaluation to the same standard, which in practice means building the checking apparatus alongside the model. A reward function gets a validator that scores honest against degenerate policies and fails the build if the degenerate one wins. A generative pipeline gets a deterministic, non-neural layer that matches every claim back to source. A Transformer gets its masks, parameter count and weight tying verified before a single training step. I would rather build a system that can be checked than one I am asked to trust.
            </p> */}

            {/* Paragraph 4: Current work */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.8 }}>
              I am currently pursuing a B.E. in Software Engineering at NUST, Islamabad, alongside a fully funded MITACS Globalink Research Internship at the University of Calgary, where I architect parallel vision-language adaptation pipelines over Qwen3-VL using two-phase LoRA SFT and GRPO, design multi-component reward functions, and build the evaluation infrastructure for a multi-agent system powering real-time hazard assistance in construction.
            </p>

            {/* Paragraph 5: The ask */}
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I am applying for thesis-based Master's positions starting <strong>Fall 2027</strong>, looking for a group where I can work on reinforcement learning for large multimodal models, post-training, reward design, reasoning, efficient adaptation - and on the evaluation that keeps those systems honest.
            </p>
          </div>
        </div>

        {/* ================================================================
           RESEARCH INTERESTS — hidden via SHOW_RESEARCH_INTERESTS flag.
           Set the constant at the top of this file to `true` to restore.
        ================================================================ */}
        {SHOW_RESEARCH_INTERESTS && (
          <>
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
          </>
        )}

        {/* Technical Competencies */}
        <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: '1.5rem', color: 'var(--text-heading)' }}>Technical Competencies</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Alignment &amp; Reinforcement Learning
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['RLHF', 'PPO', 'GRPO', 'DPO', 'Reward Modeling', 'KL-Regularized Optimization', 'GRPO with Verifiable Rewards', 'Reward Function Design', 'Reward-Hacking Analysis'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Efficient Adaptation &amp; Inference
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Transformers', 'PEFT/LoRA', 'QLoRA', 'SFT', 'Knowledge Distillation', 'Tokenization (BPE)', 'RAG'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Languages &amp; Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Python', 'C++', 'SQL', 'Bash', 'PyTorch', 'TensorFlow/Keras', 'NumPy', 'Hugging Face', 'LangChain', 'LangGraph', 'Scikit-learn'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Multimodal &amp; Computer Vision
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['VLMs', 'ViT', 'U-Net', 'Semantic Segmentation', 'YOLO', 'CNNs', 'ResNet'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Agentic AI &amp; Retrieval
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Multi-Agent Orchestration', 'Tool Calling', 'Structured Outputs', 'Vector DBs (Qdrant, Weaviate)'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              Infrastructure &amp; Tools
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {['Docker', 'AWS', 'SLURM / Multi-GPU Training', 'FastAPI', 'Git', 'Weights & Biases', 'Hugging Face Hub/Spaces', 'Linux'].map(s => (
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
