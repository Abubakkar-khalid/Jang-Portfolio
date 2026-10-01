import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Contact from '../components/Contact';

const EXTENSIVE_CATEGORIES = [
  'All', 
  'Classifieds', 
  'Jobs', 
  'Tenders', 
  'Real Estate', 
  'Matrimonial', 
  'Name Change', 
  'Lost & Found', 
  'Education', 
  'Vehicles', 
  'Public Notices', 
  'Court Notices'
];

const ALL_ADS_DB = [
  { id: 1, category: 'Real Estate', title: 'Commercial Plaza Ad', tag: 'Display Ad', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'Jobs', title: 'Walk-in Interviews', tag: 'Classified Box', image: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'Tenders', title: 'Govt. Public Notice', tag: 'Legal Notice', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'Name Change', title: 'Name Change Notice', tag: 'Text Ad', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'Matrimonial', title: 'Marriage Proposals', tag: 'Classified', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'Vehicles', title: 'Car For Sale', tag: 'Classified', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 7, category: 'Education', title: 'University Admissions', tag: 'Display Ad', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, category: 'Lost & Found', title: 'Lost Documents', tag: 'Text Ad', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, category: 'Court Notices', title: 'Summons Notice', tag: 'Legal Ad', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 10, category: 'Public Notices', title: 'Power Outage Schedule', tag: 'Notice', image: 'https://images.unsplash.com/photo-1541873676577-074465b0c950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 11, category: 'Jobs', title: 'Hiring IT Staff', tag: 'Display Ad', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 12, category: 'Real Estate', title: 'Housing Society Launch', tag: 'Full Page', image: 'https://images.unsplash.com/photo-1586339949916-3e9ed920624c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

export default function AdsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  const filteredAds = ALL_ADS_DB.filter((ad) => {
    const matchesCategory = activeCategory === 'All' || ad.category === activeCategory;
    const matchesSearch = 
      ad.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      ad.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.tag.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-[#fafafa] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black font-serif text-navy-900 mb-6">Explore Our Ads</h1>
          <p className="text-lg text-slate-600 mb-10">Browse through thousands of newspaper advertisements crafted by our premium editorial team.</p>
          
          {/* Search Bar */}
          <div className="flex items-center w-full max-w-xl mx-auto bg-white border-2 border-slate-200 rounded-full shadow-sm focus-within:border-brand-600 transition-colors">
            <div className="pl-6 pr-3 flex items-center justify-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input
              type="text"
              className="flex-1 py-4 pr-6 bg-transparent text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-0 border-none text-lg"
              placeholder="Search by keyword, category, or ad type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 mb-6 text-center">Filter By Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {EXTENSIVE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-300 hover:border-black hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 border-b border-slate-200 pb-4">
          <p className="text-slate-500 font-medium">
            Showing <span className="font-bold text-navy-900">{filteredAds.length}</span> results 
            {searchQuery && <span> for "<span className="text-navy-900 italic">{searchQuery}</span>"</span>}
          </p>
        </div>

        {/* Grid of Ads */}
        {filteredAds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAds.map((ad) => (
              <div key={ad.id} className="relative overflow-hidden bg-white shadow-lg border border-slate-100 h-[400px]">
                <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent flex items-end p-6">
                  <div className="w-full">
                    <span className="text-brand-400 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                      {ad.category}
                    </span>
                    <h4 className="text-white font-serif italic text-2xl mb-1">{ad.title}</h4>
                    <p className="text-slate-300 text-xs tracking-wider uppercase">{ad.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-serif text-navy-900 mb-2">No Ads Found</h3>
            <p className="text-slate-500">We couldn't find any advertisements matching your current search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 px-6 py-3 bg-brand-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
    <Contact />
    </>
  );
}
