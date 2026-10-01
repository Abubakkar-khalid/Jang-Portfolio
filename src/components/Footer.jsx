import React from 'react';
import { Newspaper } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 flex items-center justify-center">
            <Newspaper className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black font-serif text-black tracking-wide">
            IR ADVERTISEMENT
          </span>
        </div>
        <p className="text-slate-500 font-sans text-sm tracking-wide">© 2026 IR Advertisement. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="text-slate-500 hover:text-brand-500 font-bold text-xs uppercase tracking-widest transition-colors">Terms</a>
          <a href="#" className="text-slate-500 hover:text-brand-500 font-bold text-xs uppercase tracking-widest transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
