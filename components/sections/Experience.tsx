const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">

        <span className="section-label">Experience &amp; Education</span>
        <h2 className="section-title">Background</h2>

        <div className="timeline">

          {/* MITACS Globalink */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>MITACS Globalink Research Intern</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Summer 2026</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              University of Calgary <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>• Alberta, Canada</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Selected for a <strong>fully-funded</strong> research internship to architect synthetic data pipelines using <strong>Bayesian Networks</strong> and fine-tune open-source <strong>LLMs</strong> (LLaMA, Mistral) via <strong>LoRA</strong> and <strong>Knowledge Distillation</strong>. The project focuses on integrating these specialized models into a <strong>multi-agent system</strong> to automate complex construction risk management and Job Safety Analysis (JSA).
            </p>
          </div>

          {/* DeepDocs AI */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>AI Engineer (Contract)</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Oct 2025 – Dec 2025</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              DeepDocs AI <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>• Remote, France</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Architected an autonomous agentic pipeline using <strong>LangChain</strong> to automate clinical literature reviews. Engineered a deterministic verification engine achieving <strong>&gt;95% citation accuracy</strong>, deploying programmatic guardrails to strictly mitigate LLM hallucinations in production environments.
            </p>
          </div>

          {/* CETQAP Internship */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>AI Research Intern</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Jun 2025 – Aug 2025</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              CETQAP <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>• Remote, Pakistan</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Built an end-to-end <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline to automate complex knowledge extraction from quantum computing literature. Collaborated alongside senior researchers to synthesize technical findings via advanced LLMs, successfully accelerating the academic review process by <strong>30%</strong>.
            </p>
          </div>

          {/* SPS Internship */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>AI/ML Intern</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>Apr 2025 – May 2025</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              Software Productivity Strategists (SPS) <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>• Islamabad, Pakistan</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Developed and integrated a fine-tuned <strong>RoBERTa</strong> model into a production sentiment analysis API using <strong>Flask</strong>. Engineered custom NLP features by fine-tuning <strong>BERT</strong> on proprietary client data to boost Named Entity Recognition (NER) <strong>F1-score</strong> to <strong>92%</strong>, and built data preprocessing pipeline that reduced cleaning time by <strong>30%</strong>.
            </p>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>B.E. Software Engineering</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>2023 – 2027</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              National University of Sciences and Technology (NUST) <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>• Islamabad, Pakistan</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              <strong>CGPA:</strong> 3.63/4.00 (Last 2 Semesters: 3.86/4.00)
              <br />
              <strong>Coursework:</strong> Machine Learning, Deep Learning, Data Structures & Algorithms, Design & Analysis of Algorithms, Operating Systems.
            </p>
          </div>

          {/* Education
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>B.E. Software Engineering</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>2023 – 2027</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              National University of Sciences and Technology (NUST)
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              CGPA: 3.63/4.00. 
              <br />Coursework in deep learning, algorithms, data structures, and software systems.
            </p>
          </div> */}
          
          {/* Research Manuscript */}
          {/* <div className="timeline-item"> */}
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}> */}
              {/* <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>Research Manuscript</h3> */}
              {/* <span className="status-badge status-badge--pending">In Preparation</span> */}
            {/* </div> */}
            {/* <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}> */}
              {/* DPO for Low-Resource Language Alignment — IEEE FIT */}
            {/* </p> */}
            {/* <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}> */}
              {/* Evaluating Direct Preference Optimization techniques for aligning large language models trained on low-resource linguistic datasets. */}
            {/* </p> */}
          {/* </div> */}

        </div>

      </div>
    </section>
  );
};

export default Experience;
