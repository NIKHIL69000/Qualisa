import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, Star, MapPin } from 'lucide-react';
import { Button } from '../components/Layout';
import { talents } from '../services/mockData';
import { ViewState } from '../types';

interface ExploreProps {
  onNavigate?: (view: ViewState) => void;
  onProfileSelect?: (id: string) => void;
}

export const Explore: React.FC<ExploreProps> = ({ onNavigate, onProfileSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Enable horizontal scrolling with mouse wheel
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        // If the container has scrollable content
        if (el.scrollWidth > el.clientWidth) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      };
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  const categories = [
    'All', 
    'Digital & Tech', 
    'Creative & Media', 
    'Crafts & Handmade', 
    'Fine Arts', 
    'Performance', 
    'Marketing & Growth', 
    'Teaching', 
    'Local & Practical', 
    'Emerging & Hybrid'
  ];

  const filteredTalents = talents.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProfileClick = (id: string) => {
    if (onProfileSelect) {
      onProfileSelect(id);
    } else if (onNavigate) {
      onNavigate('PROFILE'); // Fallback if specific handler not passed
    }
  };

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-slate-900 mb-4">Explore Top Talent</h1>
          <p className="text-slate-600">Find the perfect professional for your next project, from tech experts to master craftsmen.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, skill, or role..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                  selectedCategory === cat 
                    ? 'bg-brand-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalents.map(talent => (
            <div 
              key={talent.id} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
              onClick={() => handleProfileClick(talent.id)}
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={talent.image} alt={talent.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 group-hover:border-brand-200 transition-colors" />
                    <div>
                      <h3 className="font-bold text-slate-900 flex items-center gap-1 group-hover:text-brand-600 transition-colors">
                        {talent.name}
                        {talent.verified && <span className="text-brand-500" title="Verified">✓</span>}
                      </h3>
                      <p className="text-sm text-slate-500">{talent.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-sm text-yellow-700 font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    {talent.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {talent.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">
                      {skill}
                    </span>
                  ))}
                  {talent.skills.length > 3 && (
                    <span className="px-2 py-1 bg-slate-50 text-slate-400 text-xs rounded border border-slate-100">+{talent.skills.length - 3}</span>
                  )}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-slate-900 font-bold text-lg">${talent.hourlyRate}</span>
                  <span className="text-slate-500 text-xs">/hr</span>
                </div>
                <Button 
                   variant="outline" 
                   className="!text-brand-600 !border-brand-200 hover:!bg-brand-50 !py-1.5 !text-xs group-hover:bg-brand-50"
                   onClick={(e) => {
                     e.stopPropagation();
                     handleProfileClick(talent.id);
                   }}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTalents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No talent found matching your criteria.</p>
            <Button variant="ghost" onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};