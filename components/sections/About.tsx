const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        
        <span className="section-label">01. Background & Expertise</span>
        <h2 className="section-title">Academic & Technical Profile</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am an AI/ML Engineer with a primary focus on large language models (LLMs), alignment strategies (RLHF, DPO), and agentic systems. My methodology emphasizes constructing architectures from first principles—utilizing PyTorch and NumPy—to deeply understand the underlying mathematical and structural mechanisms prior to abstracting via APIs.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Currently pursuing a B.E. in Software Engineering at the National University of Sciences and Technology (NUST) with an expected graduation in May 2027. My professional tenure includes a role as an AI Research Engineer at DeepDocs AI, and I am an incoming MITACS Globalink Research Intern at the University of Calgary. I am concurrently preparing a research manuscript on Direct Preference Optimization (DPO) for low-resource languages targeted for IEEE FIT.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="paper-card metric-block">
              <span className="metric-value">20+</span>
              <span className="metric-label">Implementations</span>
            </div>
            <div className="paper-card metric-block">
              <span className="metric-value">3.60</span>
              <span className="metric-label">CGPA / 4.00</span>
            </div>
            <div className="paper-card metric-block">
              <span className="metric-value">3</span>
              <span className="metric-label">Research Areas</span>
            </div>
            <div className="paper-card metric-block">
              <span className="metric-value">7+</span>
              <span className="metric-label">Certifications</span>
            </div>
          </div>

        </div>

        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Technical Domains</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          <div className="paper-card">
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Core Machine Learning</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="paper-card">
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>LLMs & NLP</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Transformers', 'RLHF', 'DPO', 'PPO', 'SFT', 'PEFT', 'RAG'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="paper-card">
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Computer Vision</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['CNNs', 'ResNet', 'U-Net', 'YOLO', 'FaceNet'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="paper-card">
            <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Infrastructure & MLOps</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['Docker', 'AWS', 'Git', 'Model Optimization', 'CI/CD'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
