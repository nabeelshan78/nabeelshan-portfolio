
import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-medium">
        <div className="flex justify-center space-x-6 mb-4">
           <a href="mailto:nabeelshan468@gmail.com" className="text-medium hover:text-accent transition-colors duration-200"><MailIcon /></a>
           <a href="https://linkedin.com/in/nabeelshan" target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-200"><LinkedinIcon /></a>
           <a href="https://github.com/nabeelshan78" target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-200"><GithubIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Nabeel Shan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
