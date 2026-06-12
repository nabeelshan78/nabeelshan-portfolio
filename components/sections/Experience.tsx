const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">

        <span className="section-label">Experience &amp; Education</span>
        <h2 className="section-title">Background</h2>

        <div className="timeline">

          {/* MITACS */}
          <div className="timeline-item timeline-item--active">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>MITACS Globalink Research Intern</h3>
              <span className="status-badge status-badge--active">Upcoming</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              University of Calgary, Canada
            </p>
            <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.625rem' }}>
              Summer 2026
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Research internship focusing on AI/ML research methodologies under the MITACS Globalink program.
            </p>
          </div>

          {/* DeepDocs AI */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>AI Engineer</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>2025 – 2026</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              DeepDocs AI
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              Engineered document processing systems utilizing NLP and computer vision for intelligent data extraction and semantic analysis.
            </p>
          </div>

          {/* Education */}
          <div className="timeline-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)' }}>B.E. Software Engineering</h3>
              <span className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>2023 – 2027</span>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: 'var(--text-sm)' }}>
              National University of Sciences and Technology (NUST) <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>— Islamabad, Pakistan</span>
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
              <strong>CGPA:</strong> 3.63/4.00 (Last 2 Semesters: 3.86/4.00)
              <br />
              <strong>Coursework:</strong> Machine Learning, Deep Learning, Data Structures & Algorithms, Design & Analysis of Algorithms, Operating Systems, Computer Networks.
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
