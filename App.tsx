import React, { useState, useEffect } from 'react';
import { Header, Footer, Button } from './components/Layout';
import { Home } from './views/Home';
import { Explore } from './views/Explore';
import { Dashboard } from './views/Dashboard';
import { Profile } from './views/Profile';
import { Growth } from './views/Growth';
import { Business } from './views/Business';
import { HowItWorks, Pricing, Blog, SuccessStories, Resources, PrivacyPolicy, TermsOfService, NotFound } from './views/StaticPages';
import { ViewState } from './types';
import { CheckCircle } from 'lucide-react';

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
          <input 
            type="email" 
            className="w-full bg-white text-slate-900 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none placeholder-slate-400" 
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full bg-white text-slate-900 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none placeholder-slate-400" 
            placeholder="••••••••"
          />
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

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedTalentId, setSelectedTalentId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Router-like behavior helper
  const handleProfileSelect = (id: string) => {
    setSelectedTalentId(id);
    setCurrentView('PROFILE');
  };

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home onNavigate={setCurrentView} />;
      case 'EXPLORE': return <Explore onNavigate={setCurrentView} onProfileSelect={handleProfileSelect} />;
      case 'PROFILE': return <Profile talentId={selectedTalentId} onNavigate={setCurrentView} />;
      case 'GROWTH': return <Growth />;
      case 'BUSINESS': return <Business />;
      case 'LOGIN': return <AuthPage type="LOGIN" onNavigate={setCurrentView} />;
      case 'SIGNUP': return <AuthPage type="SIGNUP" onNavigate={setCurrentView} />;
      case 'DASHBOARD_TALENT': return <Dashboard />;
      
      // Static / Placeholder Pages
      case 'HOW_IT_WORKS': return <HowItWorks onNavigate={setCurrentView} />;
      case 'PRICING': return <Pricing onNavigate={setCurrentView} />;
      case 'BLOG': return <Blog onNavigate={setCurrentView} />;
      case 'SUCCESS_STORIES': return <SuccessStories onNavigate={setCurrentView} />;
      case 'RESOURCES': return <Resources onNavigate={setCurrentView} />;
      case 'PRIVACY': return <PrivacyPolicy onNavigate={setCurrentView} />;
      case 'TERMS': return <TermsOfService onNavigate={setCurrentView} />;
      
      // Fallback
      case 'NOT_FOUND': return <NotFound onNavigate={setCurrentView} />;
      default: return <NotFound onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      {/* Footer is hidden for Dashboard to maximize screen real estate for tools */}
      {currentView !== 'DASHBOARD_TALENT' && <Footer onNavigate={setCurrentView} />}
    </div>
  );
}