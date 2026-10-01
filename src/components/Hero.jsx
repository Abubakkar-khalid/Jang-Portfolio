import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 min-h-[95vh] flex items-center bg-[#fafafa] overflow-hidden">
      {/* Editorial aesthetic background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900 hidden lg:block"></div>
      
      <div className="relative max-w-7xl mx-auto w-full z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="hidden md:block w-12 h-[2px] bg-brand-600"></span>
            <span className="text-brand-600 font-bold uppercase tracking-[0.2em] text-sm">Premium Ad Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-navy-900 leading-[1.05] mb-8">
            Command <br />
            <span className="italic font-normal text-brand-600">Attention.</span> <br />
            Drive Results.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Specializing in high-impact newspaper advertising. We craft compelling copy and striking designs that ensure your message stands out on the front page.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold tracking-widest uppercase text-sm transition-all flex items-center justify-center gap-2 group">
              Start Your Campaign <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold tracking-widest uppercase text-sm transition-all">
              Our Expertise
            </a>
          </div>
        </div>

        {/* Image/Visual Content */}
        <div className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
          <div className="relative z-10 p-2 bg-white shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Newspaper Advertising" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 shadow-xl max-w-xs transform -rotate-3">
              <p className="font-serif italic text-xl">"The right words in the right place at the right time."</p>
            </div>
          </div>
          {/* Decorative background blocks */}
          <div className="absolute -top-10 -right-10 w-full h-full border-news opacity-20 -z-10"></div>
        </div>
        
      </div>
    </section>
  );
}
