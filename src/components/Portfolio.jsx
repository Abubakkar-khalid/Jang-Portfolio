import React from 'react';
import { Link } from 'react-router-dom';

const PORTFOLIO_ADS = [
  {
    id: 1,
    category: 'Real Estate',
    title: 'Commercial Plaza Ad',
    tag: 'Display Ad',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Jobs',
    title: 'Walk-in Interviews',
    tag: 'Classified Box',
    image: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Tenders',
    title: 'Govt. Public Notice',
    tag: 'Legal Notice',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Classifieds',
    title: 'Name Change Notice',
    tag: 'Text Ad',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Matrimonial',
    title: 'Marriage Proposals',
    tag: 'Classified',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Vehicles',
    title: 'Car For Sale',
    tag: 'Classified',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-4 bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Ad Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-black font-serif text-white">Featured Placements</h3>
          </div>
        </div>
        
        {/* Grid of Ads (Show 6 on main page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_ADS.map((ad) => (
            <div key={ad.id} className="relative overflow-hidden bg-navy-900 h-[450px]">
              <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent flex items-end p-8">
                <div className="w-full">
                  <span className="text-brand-200 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                    {ad.category}
                  </span>
                  <h4 className="text-white font-serif italic text-3xl mb-2">{ad.title}</h4>
                  <p className="text-slate-200 text-sm tracking-wider uppercase">{ad.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button navigating to Ads page */}
        <div className="text-center">
          <Link 
            to="/ads"
            className="inline-block px-12 py-5 bg-transparent border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white font-bold tracking-widest uppercase text-sm transition-all shadow-lg hover:shadow-brand-600/30"
          >
            See More Ads
          </Link>
        </div>

      </div>
    </section>
  );
}
