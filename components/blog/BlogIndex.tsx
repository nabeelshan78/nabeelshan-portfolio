import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogLayout from './BlogLayout';
import { posts } from '../../posts';

const BlogIndex: React.FC = () => {
  return (
    <BlogLayout>
      <header className="blog-header">
        <span className="section-label">writing</span>
        <h1 className="section-title">Blog</h1>
        <p className="section-description">
          Notes on alignment, architectures, and building things from first principles.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="blog-empty">
          <div className="blog-empty__icon">∅</div>
          <p>No posts yet.</p>
        </div>
      ) : (
        <div className="blog-posts-grid">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <Link to={`/blog/${post.slug}`} className="blog-post-card">
                <div className="blog-post-card__meta">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="blog-post-card__title">{post.title}</h2>
                <p className="blog-post-card__description">{post.description}</p>
                <div className="blog-post-card__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </BlogLayout>
  );
};

export default BlogIndex;
