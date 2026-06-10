import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../../blog.css';

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogLayout;
