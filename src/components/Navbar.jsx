import React, { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <Newspaper className="w-10 h-10 text-black" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black font-serif leading-none tracking-wide ${scrolled ? 'text-navy-900' : 'text-navy-900'}`}>
                IR ADVERTISEMENT
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-600 uppercase">Media Agency</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-navy-900 font-semibold text-sm tracking-widest uppercase hover:text-brand-600 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <a href="/#contact" className="px-6 py-2.5 bg-navy-900 text-black font-bold text-sm tracking-widest uppercase hover:bg-brand-600 transition-colors rounded-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
