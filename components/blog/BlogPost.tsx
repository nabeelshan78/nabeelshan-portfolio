import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MDXProvider } from '@mdx-js/react';
import BlogLayout from './BlogLayout';
import mdxComponents from './MDXComponents';
import { posts } from '../../posts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <BlogLayout>
        <div className="blog-header">
          <Link to="/blog" className="blog-back-link">
            ← Back to blog
          </Link>
          <h1 className="section-title">Post not found</h1>
          <p className="section-description">
            The post you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </BlogLayout>
    );
  }

  const PostContent = post.component;

  return (
    <BlogLayout>
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <header className="blog-post-header">
          <Link to="/blog" className="blog-back-link">
            ← Back to blog
          </Link>
          <h1 className="blog-post-header__title">{post.title}</h1>
          <div className="blog-post-header__meta">
            <time>{post.date}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="blog-post-header__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="prose">
          <Suspense fallback={
            <div style={{
              padding: '3rem 0',
              color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
            }}>
              Loading post…
            </div>
          }>
            <MDXProvider components={mdxComponents}>
              <PostContent />
            </MDXProvider>
          </Suspense>
        </div>

        <footer className="blog-post-footer">
          <Link to="/blog" className="blog-back-link">
            ← Back to all posts
          </Link>
        </footer>
      </motion.article>
    </BlogLayout>
  );
};

export default BlogPost;
