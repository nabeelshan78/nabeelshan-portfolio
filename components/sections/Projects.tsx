import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, allCategories, type ProjectCategory } from '../../data/projects';

const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} style={{ color: 'var(--text-heading)' }}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const DESC_LIMIT = 300;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="section" id="projects">
      <div className="container">

        <span className="section-label">Applied Work</span>
        <h2 className="section-title">Projects</h2>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <button
            className={`btn ${activeFilter === 'All' ? 'btn-filled' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              className={`btn ${activeFilter === category ? 'btn-filled' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
              >
                {/* Media */}
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'var(--bg-tertiary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                }}>
                  {project.videoEmbedUrl ? (
                    <iframe
                      src={project.videoEmbedUrl}
                      title={project.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : project.thumbnailUrl ? (
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(15%)', backgroundColor: 'white' }}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-tertiary)',
                    }}>
                      <span className="text-mono" style={{ fontSize: 'var(--text-xs)' }}>No preview</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                  {/* Category + Year */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
                    <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.category}
                    </span>
                    <span className="text-mono" style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>
                      {project.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-md)', marginBottom: '0.625rem', color: 'var(--text-heading)', lineHeight: 1.35 }}>
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                    {project.techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tag" style={{ background: 'transparent', borderStyle: 'dashed' }}>+{project.techStack.length - 5}</span>
                    )}
                  </div>

                  {/* Description */}
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>
                    {expandedDescriptions.has(project.id) || project.description.length <= DESC_LIMIT ? (
                      <>{parseBoldText(project.description)}</>
                    ) : (
                      <>{parseBoldText(project.description.slice(0, DESC_LIMIT).trimEnd() + '...')}</>
                    )}
                    {project.description.length > DESC_LIMIT && (
                      <button
                        onClick={() => toggleDescription(project.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent)',
                          cursor: 'pointer',
                          fontSize: 'var(--text-xs)',
                          padding: 0,
                          marginLeft: '0.375rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {expandedDescriptions.has(project.id) ? '[less]' : '[more]'}
                      </button>
                    )}
                  </div>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div style={{
                      display: 'flex',
                      gap: '1.25rem',
                      marginBottom: '1rem',
                      padding: '0.625rem 0.75rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                    }}>
                      {project.metrics.map(metric => (
                        <div key={metric.label} style={{ display: 'flex', flexDirection: 'column' }}>
                          <span className="text-mono" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.2 }}>
                            {metric.value}
                          </span>
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                      Repository
                    </a>
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-filled">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
