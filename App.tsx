import React, { useState } from 'react';
import { Header, Footer, Button } from './components/Layout';
import { Home } from './views/Home';
import { Explore } from './views/Explore';
import { Dashboard } from './views/Dashboard';
import { Profile } from './views/Profile';
import { ViewState } from './types';
import { CheckCircle } from 'lucide-react';

// Simple placeholder views for less critical pages to keep file count low
const SimplePage: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="pt-24 pb-12 min-h-[60vh]">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-heading font-bold text-slate-900 mb-6">{title}</h1>
      {children}
    </div>
  </div>
);

const AuthPage: React.FC<{ type: 'LOGIN' | 'SIGNUP'; onNavigate: (v: ViewState) => void }> = ({ type, onNavigate }) => (
  <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold font-heading text-slate-900">{type === 'LOGIN' ? 'Welcome Back' : 'Join Qualisa'}</h2>
        <p className="text-slate-500 mt-2">
          {type === 'LOGIN' ? 'Access your growth dashboard' : 'Start your career acceleration journey'}
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input type="email" className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input type="password" className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
        </div>
        
        <Button fullWidth onClick={() => onNavigate('DASHBOARD_TALENT')}>
          {type === 'LOGIN' ? 'Log In' : 'Create Account'}
        </Button>
      </div>

      <p className="text-center text-sm text-slate-500 mt-6">
        {type === 'LOGIN' ? "Don't have an account?" : "Already have an account?"} {' '}
        <span 
          className="text-brand-600 font-medium cursor-pointer hover:underline"
          onClick={() => onNavigate(type === 'LOGIN' ? 'SIGNUP' : 'LOGIN')}
        >
          {type === 'LOGIN' ? 'Sign up' : 'Log in'}
        </span>
      </p>
    </div>
  </div>
);

const GrowthPage = () => (
  <SimplePage title="Growth Programs">
    <div className="grid md:grid-cols-2 gap-8">
       <div className="bg-white p-8 rounded-xl border border-brand-100 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs px-3 py-1 rounded-bl-lg">Recommended</div>
         <h3 className="text-xl font-bold mb-4">Skill Accelerator</h3>
         <p className="text-slate-600 mb-6">A 4-week intensive mentorship program to master high-demand skills.</p>
         <ul className="space-y-3 mb-8">
           {['Expert Mentor', 'Live Projects', 'Certificate'].map(i => (
             <li key={i} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> {i}</li>
           ))}
         </ul>
         <Button fullWidth>Apply Now</Button>
       </div>
       <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
         <h3 className="text-xl font-bold mb-4">Career Audit</h3>
         <p className="text-slate-600 mb-6">Get a full AI + Human review of your profile and portfolio.</p>
         <ul className="space-y-3 mb-8">
           {['Profile Optimization', 'SEO Check', 'Rate Analysis'].map(i => (
             <li key={i} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={16} className="text-green-500"/> {i}</li>
           ))}
         </ul>
         <Button variant="outline" fullWidth>Learn More</Button>
       </div>
    </div>
  </SimplePage>
);

const BusinessPage = () => (
    <SimplePage title="For Businesses">
        <div className="bg-slate-900 rounded-2xl p-10 text-white text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Hire Top 1% Verified Talent</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                Skip the sifting. Qualisa pre-vets every professional for hard skills and soft skills.
            </p>
            <Button>Post a Job - Free</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
            {['Speed', 'Quality', 'Compliance'].map(t => (
                <div key={t} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                    <h4 className="font-bold text-lg mb-2">{t}</h4>
                    <p className="text-sm text-slate-500">Optimized for enterprise needs.</p>
                </div>
            ))}
        </div>
    </SimplePage>
)

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedTalentId, setSelectedTalentId] = useState<string | null>(null);

  // Router-like behavior helper
  const handleProfileSelect = (id: string) => {
    setSelectedTalentId(id);
    setCurrentView('PROFILE');
    window.scrollTo(0,0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home onNavigate={setCurrentView} />;
      case 'EXPLORE': return <Explore onNavigate={setCurrentView} onProfileSelect={handleProfileSelect} />;
      case 'PROFILE': return <Profile talentId={selectedTalentId} onNavigate={setCurrentView} />;
      case 'GROWTH': return <GrowthPage />;
      case 'BUSINESS': return <BusinessPage />;
      case 'LOGIN': return <AuthPage type="LOGIN" onNavigate={setCurrentView} />;
      case 'SIGNUP': return <AuthPage type="SIGNUP" onNavigate={setCurrentView} />;
      case 'DASHBOARD_TALENT': return <Dashboard />;
      default: return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      {renderView()}
      {/* Footer is hidden for Dashboard to maximize screen real estate for tools */}
      {currentView !== 'DASHBOARD_TALENT' && <Footer />}
    </div>
  );
}