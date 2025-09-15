'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
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
    { href: '/', label: 'Accueil' },
    { href: '/presentation', label: 'Présentation' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/recrutement', label: 'Recrutement' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-slate-900/97 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-xl font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-800' 
                : 'text-white'
            }`}
          >
            <span className="font-serif tracking-wide">Cabinet</span>
            <span className="ml-2 font-sans text-slate-500 font-medium">
              Anouar KORTAS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`relative font-medium text-sm tracking-wide transition-all duration-300 group ${
                  isScrolled
                    ? 'text-slate-700 hover:text-slate-900'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled
                    ? 'bg-slate-800'
                    : 'bg-white'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 border ${
                isScrolled
                  ? 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700 hover:border-slate-700 shadow-sm hover:shadow-md'
                  : 'bg-transparent text-white border-white/30 hover:bg-white hover:text-slate-800 hover:border-white'
              }`}
            >
              Consultation Gratuite
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-slate-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 mt-4 space-y-2 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`block py-3 px-4 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:bg-gray-50 hover:text-slate-900'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-3">
              <Link
                href="/contact"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 border ${
                  isScrolled
                    ? 'bg-slate-800 text-white border-slate-800'
                    : 'bg-white text-slate-800 border-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Consultation Gratuite
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Border */}
      <div className={`absolute bottom-0 left-0 w-full h-px transition-opacity duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-30'
      }`}>
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </nav>
  );
};

export default Navbar;