import React, { useState, useEffect } from 'react';
import { Newspaper, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For links to work perfectly across pages and scroll if on same page
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Expertise', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Newspaper className="w-10 h-10 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-serif leading-none tracking-wide text-black">
                IR ADVERTISER
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-600 uppercase">Media Agency</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-black font-bold text-xs tracking-[0.15em] uppercase hover:text-brand-600 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <a href="/#contact" className="px-8 py-3.5 bg-brand-600 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black p-2 focus:outline-none">
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full left-0 top-full flex flex-col px-6 pt-4 pb-8 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black font-bold text-sm tracking-[0.15em] uppercase hover:text-brand-600 transition-colors py-3 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-brand-600 text-white font-bold text-xs tracking-[0.2em] uppercase text-center rounded-full hover:bg-black transition-all"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
