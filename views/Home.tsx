import React from 'react';
import { Button } from '../components/Layout';
import { 
  ArrowRight, CheckCircle, TrendingUp, Shield, Users, Briefcase, Zap,
  Monitor, Palette, Scissors, PenTool, Mic, Megaphone, GraduationCap, MapPin, Rocket
} from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  
  const skillCategories = [
    {
      title: "Digital & Tech",
      icon: <Monitor className="w-6 h-6 text-brand-600" />,
      skills: ["Web & App Dev", "UI/UX Design", "AI & Automation", "Cybersecurity", "SaaS Setup"]
    },
    {
      title: "Creative & Media",
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      skills: ["Graphic Design", "Video Editing", "VFX", "Content Creation", "Copywriting"]
    },
    {
      title: "Crafts & Handmade",
      icon: <Scissors className="w-6 h-6 text-pink-600" />,
      skills: ["Handicrafts", "Woodwork", "Resin Art", "Textile Design", "Jewelry Making"]
    },
    {
      title: "Fine Arts",
      icon: <PenTool className="w-6 h-6 text-orange-600" />,
      skills: ["Sketching", "Painting", "Digital Art", "Calligraphy", "Sculpture"]
    },
    {
      title: "Performance & Media",
      icon: <Mic className="w-6 h-6 text-red-600" />,
      skills: ["Voice-over", "Podcasting", "Music Production", "Acting", "Sound Design"]
    },
    {
      title: "Marketing & Growth",
      icon: <Megaphone className="w-6 h-6 text-blue-600" />,
      skills: ["Digital Marketing", "SEO", "Brand Strategy", "Market Research", "Sales Funnels"]
    },
    {
      title: "Teaching & Coaching",
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      skills: ["Skill Training", "Online Tutoring", "Career Coaching", "Personal Branding"]
    },
    {
      title: "Local & Practical",
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      skills: ["Event Management", "Interior Design", "Fitness Training", "Nutrition Coaching"]
    },
    {
      title: "Emerging & Hybrid",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      skills: ["Prompt Engineering", "Creator Economy", "Community Building", "Digital Products"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-cyan-200/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-brand-200/50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-medium mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            New: AI-Powered Career Growth Assistant
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 tracking-tight mb-6">
            Showcase Your Skills. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">
              Get Discovered. Grow.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
            QUALISA isn't just a marketplace. It's a growth ecosystem where verified talent meets premium opportunities, backed by career mentorship and visibility tools.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => onNavigate('SIGNUP')} className="px-8 py-4 text-base shadow-xl shadow-brand-500/20">
              Join as Talent
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('BUSINESS')} className="px-8 py-4 text-base">
              Hire Verified Talent
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="rounded-2xl bg-white p-2 shadow-2xl border border-slate-200/60 backdrop-blur-sm">
               <img 
                 src="https://picsum.photos/1200/600?grayscale" 
                 alt="Platform Dashboard" 
                 className="rounded-xl w-full object-cover opacity-90"
               />
               <div className="absolute top-1/4 -left-12 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Weekly Profile Views</p>
                      <p className="font-bold text-slate-900">+124%</p>
                    </div>
                  </div>
               </div>
               
               <div className="absolute bottom-1/4 -right-12 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                      <Shield size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Skill Verified</p>
                      <p className="font-bold text-slate-900">React & TS</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">How Qualisa Works</h2>
            <p className="text-slate-600 max-w-xl mx-auto">We bridge the gap between skill acquisition and career monetization.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Briefcase className="w-8 h-8 text-brand-600" />, 
                title: "Create Skill Profile", 
                desc: "Build a verified profile showcasing your portfolio, past work, and validated skills." 
              },
              { 
                icon: <Zap className="w-8 h-8 text-brand-600" />, 
                title: "Get Discovered", 
                desc: "Our AI matching engine puts you in front of businesses looking for exactly what you do." 
              },
              { 
                icon: <TrendingUp className="w-8 h-8 text-brand-600" />, 
                title: "Grow & Earn", 
                desc: "Access growth programs, mentorship, and high-value projects to accelerate your career." 
              }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl"></div>
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Categories */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Explore Skills & Crafts</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">From cutting-edge tech to traditional craftsmanship, find verified talent across every domain.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-brand-200 transition-all cursor-pointer group" onClick={() => onNavigate('EXPLORE')}>
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                            {cat.icon}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.slice(0, 4).map(s => (
                            <span key={s} className="text-xs font-medium px-2 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                                {s}
                            </span>
                        ))}
                        <span className="text-xs font-medium px-2 py-1 text-slate-400">+ more</span>
                    </div>
                </div>
              ))}
           </div>
            <div className="mt-12 text-center">
                <Button variant="outline" onClick={() => onNavigate('EXPLORE')}>Browse All Categories</Button>
            </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Not just a marketplace.<br/>
                <span className="text-brand-400">A growth ecosystem.</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Typical platforms leave you to fight for the lowest bid. Qualisa invests in your growth, ensuring businesses get premium talent and you get paid what you're worth.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Verified Skill Badges",
                  "AI-Powered Career Roadmap",
                  "Direct Mentorship Access",
                  "Zero Bidding Fees for Talent"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-400 w-5 h-5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" className="mt-8" onClick={() => onNavigate('GROWTH')}>
                Explore Growth Programs
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-2xl transform rotate-3 opacity-50"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                  <h3 className="font-bold text-lg">Platform Comparison</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Feature</span>
                    <div className="flex gap-8 text-sm font-bold">
                      <span className="text-slate-500">Others</span>
                      <span className="text-brand-400">QUALISA</span>
                    </div>
                  </div>
                  {[
                    { l: "Talent Verification", o: "Minimal", q: "Strict & Verified" },
                    { l: "Career Support", o: "None", q: "AI + Mentors" },
                    { l: "Matching", o: "Keyword Search", q: "Semantic AI" },
                  ].map((row, i) => (
                     <div key={i} className="flex justify-between items-center py-2">
                        <span className="text-slate-300">{row.l}</span>
                        <div className="flex gap-8 text-sm">
                          <span className="text-slate-500 w-16 text-right">{row.o}</span>
                          <span className="text-brand-400 w-16 text-right">{row.q}</span>
                        </div>
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Ready to accelerate your career?</h2>
          <p className="text-slate-600 mb-8 text-lg">Join 10,000+ professionals and businesses building the future of work.</p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => onNavigate('SIGNUP')}>Get Started for Free</Button>
            <Button variant="secondary" onClick={() => onNavigate('EXPLORE')}>Browse Talent</Button>
          </div>
        </div>
      </section>
    </div>
  );
};