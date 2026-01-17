import React, { useState } from 'react';
import { 
  CheckCircle, Clock, Award, Users, BookOpen, 
  Calendar, ChevronLeft, Shield, Zap, Search, Target
} from 'lucide-react';
import { Button } from '../components/Layout';

interface Program {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  duration: string;
  level: string;
  outcomes: string[];
  curriculum: { week: number; title: string; desc: string; }[];
  icon: React.ReactNode;
}

const programs: Program[] = [
  {
    id: 'accelerator',
    title: "Skill Accelerator",
    badge: "Recommended",
    summary: "A 4-week intensive mentorship program to master high-demand skills and build a portfolio that converts.",
    duration: "4 Weeks",
    level: "Intermediate",
    icon: <Zap className="w-8 h-8 text-brand-500" />,
    outcomes: [
      "Master advanced industry tools",
      "Build a portfolio-ready project",
      "Get 1:1 expert mentorship",
      "Receive a verified skill badge"
    ],
    curriculum: [
      { week: 1, title: "Skill Assessment & Roadmap", desc: "Identify gaps and create a personalized learning plan." },
      { week: 2, title: "Deep Dive & Mentorship", desc: "Live sessions with industry experts and technical workshops." },
      { week: 3, title: "Real-World Project", desc: "Apply skills to a live client brief with guided feedback." },
      { week: 4, title: "Review & Certification", desc: "Final portfolio review, optimization, and certification." }
    ]
  },
  {
    id: 'audit',
    title: "Career Audit",
    badge: "Popular",
    summary: "A comprehensive review of your profile, portfolio, and rates by senior industry professionals.",
    duration: "1 Week",
    level: "All Levels",
    icon: <Search className="w-8 h-8 text-purple-500" />,
    outcomes: [
      "Detailed profile optimization report",
      "Portfolio critique and improvements",
      "Rate analysis against market data",
      "SEO visibility strategy"
    ],
    curriculum: [
      { week: 1, title: "Data Collection", desc: "Submit your profile, portfolio links, and career goals." },
      { week: 1, title: "Expert Review", desc: "Our seniors analyze your positioning and presentation." },
      { week: 1, title: "Strategy Session", desc: "30-minute call to discuss the audit report and next steps." },
      { week: 1, title: "Action Plan", desc: "Receive a checklist of immediate improvements." }
    ]
  },
  {
    id: 'portfolio',
    title: "Portfolio Review",
    summary: "Get specific, actionable feedback on your case studies to attract higher-paying clients.",
    duration: "3 Days",
    level: "All Levels",
    icon: <Target className="w-8 h-8 text-orange-500" />,
    outcomes: [
      "Storytelling improvements",
      "Visual presentation polish",
      "Case study structuring",
      "Client-focused messaging"
    ],
    curriculum: [
      { week: 1, title: "Submission", desc: "Upload up to 3 case studies for review." },
      { week: 1, title: "Async Feedback", desc: "Receive annotated feedback and loom video reviews." },
      { week: 1, title: "Refinement", desc: "Update your portfolio based on expert notes." },
      { week: 1, title: "Final Polish", desc: "Final check before you send to clients." }
    ]
  }
];

export const Growth: React.FC = () => {
  const [view, setView] = useState<'LIST' | 'DETAILS' | 'SUCCESS'>('LIST');
  const [selectedProgram, setSelectedProgram] = useState<Program>(programs[0]);
  const [loading, setLoading] = useState(false);

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
    setView('DETAILS');
    window.scrollTo(0,0);
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call simulation
    setTimeout(() => {
      setLoading(false);
      setView('SUCCESS');
      window.scrollTo(0,0);
    }, 1500);
  };

  if (view === 'SUCCESS') {
    return (
      <div className="pt-24 pb-12 min-h-[60vh] bg-slate-50 flex items-center justify-center">
        <div className="max-w-2xl w-full px-4 text-center animate-fade-in">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Application Received!</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Thanks for applying to the <strong>{selectedProgram.title}</strong>.<br/>
              Our team will review your profile and motivation. Expect an email within 48 hours.
            </p>
            <Button onClick={() => setView('LIST')} className="mx-auto">Back to Programs</Button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'DETAILS') {
    return (
      <div className="pt-24 pb-12 min-h-screen bg-slate-50 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <button 
            onClick={() => setView('LIST')}
            className="flex items-center text-slate-500 hover:text-brand-600 mb-6 transition-colors font-medium text-sm group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Programs
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                {selectedProgram.badge && (
                  <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs px-3 py-1 rounded-bl-lg font-bold uppercase tracking-wide">
                    {selectedProgram.badge}
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-slate-50 p-3 rounded-xl">
                    {selectedProgram.icon}
                  </div>
                  <h1 className="text-3xl font-heading font-bold text-slate-900">{selectedProgram.title}</h1>
                </div>
                
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">{selectedProgram.summary}</p>
                
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-700 border border-slate-100">
                    <Clock className="w-4 h-4 text-brand-500" /> {selectedProgram.duration}
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-700 border border-slate-100">
                    <Award className="w-4 h-4 text-brand-500" /> {selectedProgram.level}
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-slate-700 border border-slate-100">
                    <Users className="w-4 h-4 text-brand-500" /> Open Enrollment
                  </div>
                </div>
              </div>

              {/* What you learn */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-600" /> What You Will Get
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedProgram.outcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-600" /> Program Structure
                </h2>
                <div className="space-y-6">
                  {selectedProgram.curriculum.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center font-bold text-brand-600 border border-brand-100 group-hover:bg-brand-100 transition-colors">
                        {item.week}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar / Application Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Apply Now</h3>
                  
                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none placeholder-slate-400" 
                        placeholder="Jane Doe" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none placeholder-slate-400" 
                        placeholder="jane@example.com" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Current Skill Level</label>
                      <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Why is this program for you?</label>
                      <textarea 
                        required 
                        rows={4} 
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-brand-500 outline-none placeholder-slate-400" 
                        placeholder="Tell us about your career goals..."
                      ></textarea>
                    </div>

                    <Button fullWidth className="py-3 mt-2 shadow-md" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3" /> Secure Application
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Growth Programs</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Accelerate your career with expert-led mentorship, audits, and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
             <div key={prog.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col">
                {prog.badge && (
                  <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs px-3 py-1 rounded-bl-lg font-bold uppercase">
                    {prog.badge}
                  </div>
                )}
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {prog.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900">{prog.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{prog.summary}</p>
                
                <div className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  {prog.outcomes.slice(0,3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button fullWidth onClick={() => handleSelectProgram(prog)}>
                  View Details & Apply
                </Button>
             </div>
          ))}
        </div>
        
        {/* Testimonial / Trust */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Why Join a Growth Program?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              "The Skill Accelerator completely changed my trajectory. I went from struggling to find clients to being booked out 3 months in advance."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold">JD</div>
              <div className="text-left">
                <div className="font-bold text-sm">Jane Doe</div>
                <div className="text-xs text-brand-300">UX Designer • San Francisco</div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
};