import React from 'react';
import { PenTool, Megaphone, FileText } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-black text-navy-900 mb-6">Complete Editorial & Advertising Solutions</h3>
          <div className="w-24 h-1 bg-navy-900 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-news">
          {/* Service 1 */}
          <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors group">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors">
              <FileText className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-serif font-bold text-navy-900 mb-4">Copywriting</h4>
            <p className="text-slate-600 leading-relaxed">
              We write persuasive, highly engaging ad copy tailored perfectly for newspaper audiences. Our words are crafted to capture attention and provoke action immediately.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="p-12 bg-white border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors group">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors">
              <PenTool className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-serif font-bold text-navy-900 mb-4">Design & Layout</h4>
            <p className="text-slate-600 leading-relaxed">
              Visually striking layouts that break through the clutter. We ensure your advertisement commands the page, using optimal visual hierarchy and typography.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="p-12 bg-white hover:bg-slate-50 transition-colors group">
            <div className="w-16 h-16 bg-navy-900 text-white rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-600 transition-colors">
              <Megaphone className="w-8 h-8" />
            </div>
            <h4 className="text-3xl font-serif font-bold text-navy-900 mb-4">Media Placement</h4>
            <p className="text-slate-600 leading-relaxed">
              Strategic placement in the nation's leading newspapers. We negotiate the most competitive rates and secure prime page positioning for maximum return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
