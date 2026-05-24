const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        
        <span className="section-label">02. Career Progression</span>
        <h2 className="section-title">Professional Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="paper-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>MITACS Research Intern</h3>
              <span className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-blue)' }}>Summer 2026</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>University of Calgary, Canada</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Upcoming research internship focusing on advanced artificial intelligence and machine learning research methodologies.
            </p>
          </div>

          <div className="paper-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>AI Research Engineer</h3>
              <span className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2025 – 2026</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>DeepDocs AI</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Engineered document processing systems utilizing natural language processing and computer vision techniques for intelligent data extraction and semantic analysis.
            </p>
          </div>

          <div className="paper-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>B.E. Software Engineering</h3>
              <span className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2023 – Present</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>National University of Sciences and Technology (NUST)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Current CGPA: 3.60/4.00. Coursework focus on deep learning, data structures, and algorithmic optimization.
            </p>
          </div>

          <div className="paper-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Research Author: DPO for Low-Resource Languages</h3>
              <span className="text-mono" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2025</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>IEEE FIT (In Preparation)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Drafting a research manuscript evaluating Direct Preference Optimization techniques for aligning large language models trained on low-resource linguistic datasets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
