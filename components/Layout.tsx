import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

// Optimized SVG Logo Component
export const QualisaLogo: React.FC<{ className?: string, colored?: boolean }> = ({ className = "h-8", colored = true }) => (
  <svg viewBox="0 0 150 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Qualisa Logo">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#14b8a6" /> {/* brand-500 (Teal) */}
        <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 (Aqua) */}
      </linearGradient>
    </defs>
    
    {/* Symbol: Abstract Swirl Q */}
    <g transform="translate(4, 4)">
       {/* Main Arc */}
       <path 
         d="M24 8 C15.16 8 8 15.16 8 24 C8 29 11 32 14 34" 
         stroke={colored ? "url(#logoGradient)" : "currentColor"} 
         strokeWidth="5" 
         strokeLinecap="round" 
         fill="none"
       />
       {/* Swirl Tail */}
       <path 
         d="M12 28 C16 34 26 36 32 26" 
         stroke={colored ? "url(#logoGradient)" : "currentColor"} 
         strokeWidth="5" 
         strokeLinecap="round" 
         fill="none"
       />
       {/* Top Dot/Accent */}
       <circle cx="28" cy="10" r="3" fill={colored ? "url(#logoGradient)" : "currentColor"} />
    </g>
    
    {/* Typography: 'qualisa' - Modern, Geometric, Lowercase */}
    <text 
      x="44" 
      y="29" 
      fontFamily="'Poppins', 'Inter', sans-serif" 
      fontWeight="700" 
      fontSize="26" 
      fill={colored ? "url(#logoGradient)" : "currentColor"}
      style={{ letterSpacing: '-0.03em' }}
    >
      qualisa
    </text>
  </svg>
);

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  fullWidth?: boolean;
}> = ({ children, variant = 'primary', onClick, className = '', fullWidth = false }) => {
  const baseStyle = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-brand-500/30 active:scale-95",
    secondary: "bg-white text-brand-700 border border-slate-200 hover:bg-slate-50 hover:border-brand-200",
    outline: "border-2 border-white/20 text-white hover:bg-white/10",
    ghost: "text-slate-600 hover:text-brand-600 hover:bg-brand-50",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'Explore Skills', view: 'EXPLORE' },
    { label: 'Growth Programs', view: 'GROWTH' },
    { label: 'For Businesses', view: 'BUSINESS' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-100/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onNavigate('HOME')}
          >
            <QualisaLogo className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.view)}
                className={`text-sm font-medium transition-colors relative py-2 group ${
                  currentView === item.view ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 transform origin-left transition-transform duration-300 ${currentView === item.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => onNavigate('LOGIN')}>Login</Button>
            <Button variant="primary" onClick={() => onNavigate('SIGNUP')}>
              Sign Up <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col space-y-4 animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onNavigate(item.view);
                setMobileMenuOpen(false);
              }}
              className="text-left font-medium text-slate-600 hover:text-brand-600 py-3 border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 space-y-3">
            <Button variant="ghost" fullWidth onClick={() => onNavigate('LOGIN')}>Login</Button>
            <Button variant="primary" fullWidth onClick={() => onNavigate('SIGNUP')}>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              {/* White/colored variant for dark background */}
              <QualisaLogo className="h-9 w-auto" /> 
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering skilled professionals with visibility, mentorship, and career growth opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-slate-200">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Explore Skills</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-200">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Growth Programs</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-slate-200">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 QUALISA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social icons placeholders */}
            <span className="cursor-pointer hover:text-white transition-colors">Twitter</span>
            <span className="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
            <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};