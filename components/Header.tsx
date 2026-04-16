
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, SparklesIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#quote', label: 'Quote' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-dark">
            <SparklesIcon className="w-6 h-6 text-primary" />
            <span>Carlisle</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-primary transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#quote" className="hidden md:inline-block bg-primary text-white font-semibold px-6 py-2 rounded-full hover:bg-primary-dark transition-transform hover:scale-105">
            Get a Quote
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary transition-colors font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setIsOpen(false)} className="w-full text-center bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-transform hover:scale-105">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
