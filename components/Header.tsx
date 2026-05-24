
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const activeClass = 'bg-secondary text-accent';
  // const inactiveClass = 'text-medium hover:bg-secondary hover:text-light';
  const inactiveClass = 'text-light hover:bg-secondary hover:text-accent';
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`
      }
    >
      {children}
    </NavLink>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-light hover:text-accent transition-colors duration-200">
              Nabeel Shan
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">Profile</NavItem>
              <NavItem to="/projects">Projects</NavItem>
              <NavItem to="/certificates">Certifications</NavItem>
              <NavItem to="/contact">Contact</NavItem>

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-medium hover:text-light hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">Profile</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/certificates">Certifications</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
