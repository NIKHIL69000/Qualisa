import React from 'react';
import { 
  Star, MapPin, CheckCircle, Clock, Globe, Briefcase, Share2, 
  Flag, MessageSquare, ChevronLeft, Shield
} from 'lucide-react';
import { Button } from '../components/Layout';
import { Talent, ViewState } from '../types';
import { talents } from '../services/mockData';

interface ProfileProps {
  talentId: string | null;
  onNavigate: (view: ViewState) => void;
}

export const Profile: React.FC<ProfileProps> = ({ talentId, onNavigate }) => {
  // Find talent by ID
  const talent = talents.find(t => t.id === talentId) || talents[0];

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => onNavigate('EXPLORE')}
          className="flex items-center text-slate-500 hover:text-brand-600 mb-6 transition-colors font-medium text-sm group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Explore
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={talent.image} 
                  alt={talent.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-slate-50 shadow-md" 
                />
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
                        {talent.name}
                        {talent.verified && (
                          <div className="bg-brand-100 text-brand-600 p-1 rounded-full" title="Identity Verified">
                            <Shield className="w-4 h-4" fill="currentColor" />
                          </div>
                        )}
                      </h1>
                      <p className="text-lg text-slate-600 font-medium">{talent.title}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 bg-slate-900 text-white px-3 py-1.5 rounded-lg font-bold shadow-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {talent.rating} <span className="text-slate-400 font-normal text-sm">({talent.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-4 md:mt-2">
                    {talent.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {talent.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Globe className="w-4 h-4" /> {talent.languages?.join(', ') || 'English'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> Responds in {talent.responseTime || '24h'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {talent.bio || "No bio available."}
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {talent.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-full border border-slate-200 font-medium text-sm hover:border-brand-300 hover:bg-brand-50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            {talent.portfolio && talent.portfolio.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Portfolio</h2>
                  <a href="#" className="text-brand-600 text-sm font-medium hover:underline">View All</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {talent.portfolio.map((item) => (
                    <div key={item.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-xs text-brand-300 font-bold uppercase tracking-wider mb-1">{item.category}</span>
                        <h3 className="text-white font-bold">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Client Reviews ({talent.reviewsList?.length || 0})</h2>
              <div className="space-y-6">
                {talent.reviewsList && talent.reviewsList.length > 0 ? talent.reviewsList.map((review) => (
                  <div key={review.id} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                          {review.user.charAt(0)}
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{review.user}</span>
                      </div>
                      <span className="text-slate-400 text-xs">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm italic">"{review.comment}"</p>
                  </div>
                )) : (
                  <p className="text-slate-400 italic">No detailed reviews available yet.</p>
                )}
              </div>
            </div>

          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Action Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-slate-500 text-sm">Hourly Rate</span>
                    <div className="text-3xl font-bold text-slate-900">${talent.hourlyRate}</div>
                  </div>
                  <div className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Available
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <Button fullWidth className="py-3 text-lg shadow-brand-500/25">
                    Hire {talent.name.split(' ')[0]}
                  </Button>
                  <Button variant="outline" fullWidth>Contact Me</Button>
                </div>
                
                <div className="text-xs text-slate-400 text-center flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" /> 
                  100% Secure Payment via qalisa
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Career Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                    <span className="text-slate-600 text-sm flex items-center gap-2"><Briefcase className="w-4 h-4"/> Projects Completed</span>
                    <span className="font-bold text-slate-900">{talent.completedProjects || 0}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-50">
                    <span className="text-slate-600 text-sm flex items-center gap-2"><Clock className="w-4 h-4"/> On-time Delivery</span>
                    <span className="font-bold text-slate-900">99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm flex items-center gap-2"><Globe className="w-4 h-4"/> Global Clients</span>
                    <span className="font-bold text-slate-900">12 Countries</span>
                  </div>
                </div>
              </div>

              {/* Growth CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-bold mb-2">Want to grow like {talent.name.split(' ')[0]}?</h3>
                  <p className="text-slate-300 text-sm mb-4">Join our mentorship program to level up your skills.</p>
                  <button 
                    onClick={() => onNavigate('GROWTH')}
                    className="text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors border border-white/20 w-full"
                  >
                    Explore Growth Programs
                  </button>
                </div>
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-500/20 blur-2xl rounded-full"></div>
              </div>
              
              <div className="flex justify-center gap-4 text-slate-400 text-sm">
                <button className="flex items-center gap-1 hover:text-slate-600 transition-colors"><Share2 className="w-4 h-4" /> Share</button>
                <button className="flex items-center gap-1 hover:text-slate-600 transition-colors"><Flag className="w-4 h-4" /> Report</button>
              </div>

            </div>
          </div>

        </div>
        
        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 shadow-lg z-40 flex items-center justify-between gap-4">
          <div>
            <div className="font-bold text-slate-900 text-lg">${talent.hourlyRate}<span className="text-sm font-normal text-slate-500">/hr</span></div>
          </div>
          <Button className="flex-1 shadow-lg">Hire Now</Button>
        </div>

      </div>
    </div>
  );
};