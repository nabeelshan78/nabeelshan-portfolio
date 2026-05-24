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

const DESC_LIMIT = 200;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
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
        
        <span className="section-label">04. Applied Research</span>
        <h2 className="section-title">Research & Projects</h2>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
          <button
            className={`btn-secondary ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
            style={activeFilter === 'All' ? { background: 'var(--bg-tertiary)', borderColor: 'var(--border-strong)', color: 'var(--text-heading)' } : {}}
          >
            All
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              className={`btn-secondary ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              style={activeFilter === category ? { background: 'var(--bg-tertiary)', borderColor: 'var(--border-strong)', color: 'var(--text-heading)' } : {}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="paper-card"
                style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
              >
                {/* Media */}
                <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-subtle)' }}>
                  {project.videoEmbedUrl ? (
                    <iframe
                      src={project.videoEmbedUrl}
                      title={project.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : project.thumbnailUrl ? (
                    <img src={project.thumbnailUrl} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                      <span className="text-mono">No Media</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>{project.title}</h3>
                  
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {project.techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tag" style={{ background: 'transparent', borderStyle: 'dashed' }}>+{project.techStack.length - 5}</span>
                    )}
                  </div>

                  {/* Desc */}
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {expandedDescriptions.has(project.id) || project.description.length <= DESC_LIMIT ? (
                      <>{parseBoldText(project.description)}</>
                    ) : (
                      <>{parseBoldText(project.description.slice(0, DESC_LIMIT).trimEnd() + '...')} </>
                    )}
                    {project.description.length > DESC_LIMIT && (
                      <button
                        onClick={() => toggleDescription(project.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.85rem', padding: 0, marginLeft: '0.5rem' }}
                      >
                        {expandedDescriptions.has(project.id) ? '[less]' : '[more]'}
                      </button>
                    )}
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', padding: '0.75rem', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                      {project.metrics.map(metric => (
                        <div key={metric.label} className="metric-block">
                          <span className="metric-value" style={{ fontSize: '1.1rem' }}>{metric.value}</span>
                          <span className="metric-label" style={{ fontSize: '0.7rem' }}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Repository
                    </a>
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Live Demo
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
