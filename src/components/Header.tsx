import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Heart } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.documentElement.classList.add('dark'); // Force dark mode

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Building Together', href: '#building-together' },
    { name: 'Developer Journey', href: '#developer-journey' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-md dark:shadow-gray-800/50 py-2'
          : 'py-4 border-b dark:border-gray-800'
      }`}
      style={{ backgroundColor: 'rgb(17 24 39)' }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Content */}
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span
              className="font-bold text-2xl bg-clip-text text-transparent flex items-center"
              style={{
                backgroundImage: 'linear-gradient(to right, #f59e0b, #f43f5e)',
              }}
            >
              HerStack{' '}
              <Heart className="w-6 h-6 ml-1" style={{ color: '#f43f5e' }} />
            </span>
            <span
              className="text-xs px-2 py-1 rounded-md text-white"
              style={{ backgroundColor: '#b45309' }}
            >
              by Kottravai
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#d1d5db' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#join-us"
              className="px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:scale-105 text-white"
              style={{
                backgroundImage: 'linear-gradient(to right, #f59e0b, #f43f5e)',
              }}
            >
              Join Our Family
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            style={{ color: '#d1d5db' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden p-4 absolute top-full left-0 right-0 shadow-md dark:shadow-gray-900"
          style={{ backgroundColor: '#1f2937' }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 px-4 rounded-md flex justify-between items-center"
                style={{
                  color: '#f9fafb',
                  backgroundColor: 'transparent',
                }}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
                <ChevronRight size={16} style={{ color: '#6b7280' }} />
              </a>
            ))}
            <div className="flex justify-end mt-2">
              <a
                href="#join-us"
                className="py-2 px-4 rounded-md text-sm font-medium text-white"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #f59e0b, #f43f5e)',
                }}
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
