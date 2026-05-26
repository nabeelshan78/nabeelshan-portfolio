import { publications } from '../../data/research';

const statusLabels: Record<string, string> = {
  'published': 'Published',
  'under-review': 'Under Review',
  'in-preparation': 'In Preparation',
};

const Research = () => {
  return (
    <section className="section" id="research">
      <div className="container">

        <span className="section-label">Research</span>
        <h2 className="section-title">Publications &amp; Manuscripts</h2>
        <p className="section-description">
          Current research focuses on preference optimization methods for LLM alignment, with emphasis on
          resource-constrained and multilingual settings.
        </p>

        {publications.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <p style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}>
              No publications listed yet. Check back for updates.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {publications.map((pub) => (
              <div key={pub.id} className="pub-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--text-heading)', flex: 1, minWidth: '200px' }}>
                    {pub.title}
                  </h3>
                  <span className={`pub-status pub-status--${pub.status}`}>
                    {statusLabels[pub.status]}
                  </span>
                </div>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {pub.authors.join(', ')}
                </p>

                <p className="text-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: '1rem' }}>
                  {pub.venue} · {pub.year}
                </p>

                {pub.abstract && (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                    {pub.abstract}
                  </p>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                  {pub.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {(pub.arxivUrl || pub.pdfUrl) && (
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {pub.arxivUrl && (
                      <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer" className="btn">
                        arXiv
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn">
                        PDF
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Research;
