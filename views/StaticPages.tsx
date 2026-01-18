import React, { useState } from 'react';
import { Button } from '../components/Layout';
import { ViewState } from '../types';
import { 
  ArrowLeft, CheckCircle, HelpCircle, DollarSign, BookOpen, Star,
  UserPlus, Search, TrendingUp, Briefcase, Zap, Users, FileText, Layout,
  ShieldCheck, Globe, MessageSquare, ArrowRight, Lightbulb
} from 'lucide-react';

interface StaticPageProps {
  onNavigate: (view: ViewState) => void;
}

// -------------------------------------------------------------------------
//  Pricing Page
// -------------------------------------------------------------------------
export const Pricing: React.FC<StaticPageProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'MONTHLY' | 'YEARLY'>('MONTHLY');
  const [activeTab, setActiveTab] = useState<'TALENT' | 'BUSINESS'>('TALENT');

  return (
    <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
             <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Whether you're growing your career or your team, we have a plan that fits.
             </p>
             
             {/* Toggle */}
             <div className="flex justify-center mt-8">
                <div className="bg-white p-1 rounded-xl inline-flex border border-slate-200 shadow-sm">
                    <button 
                        onClick={() => setActiveTab('TALENT')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'TALENT' ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        For Talent
                    </button>
                    <button 
                        onClick={() => setActiveTab('BUSINESS')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'BUSINESS' ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        For Businesses
                    </button>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {/* Card 1: Free */}
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{activeTab === 'TALENT' ? 'Starter' : 'Basic Hiring'}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-6">$0 <span className="text-base font-normal text-slate-500">/mo</span></div>
                <p className="text-slate-600 mb-8 h-12">
                    {activeTab === 'TALENT' 
                      ? "Everything you need to create a profile and get discovered."
                      : "Post jobs and find verified talent without upfront costs."
                    }
                </p>
                <Button fullWidth variant="outline" className="text-slate-900 border-slate-200 hover:border-brand-500" onClick={() => onNavigate(activeTab === 'TALENT' ? 'SIGNUP' : 'BUSINESS')}>
                    {activeTab === 'TALENT' ? 'Join for Free' : 'Post Free Job'}
                </Button>
                <div className="mt-8 space-y-4">
                    {(activeTab === 'TALENT' 
                        ? ['Create Verified Profile', 'List Unlimited Skills', 'Appear in Search', 'Direct Client Messaging']
                        : ['Unlimited Job Posts', 'Access Verified Talent', 'Basic Matching', 'Direct Messaging']
                    ).map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500" /> {feat}
                        </div>
                    ))}
                </div>
             </div>

             {/* Card 2: Growth/Premium */}
             <div className="bg-white p-8 rounded-2xl border-2 border-brand-500 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">POPULAR</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{activeTab === 'TALENT' ? 'Pro Growth' : 'Enterprise'}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-6">{activeTab === 'TALENT' ? '$19' : 'Custom'} <span className="text-base font-normal text-slate-500">{activeTab === 'TALENT' ? '/mo' : ''}</span></div>
                <p className="text-slate-600 mb-8 h-12">
                    {activeTab === 'TALENT' 
                      ? "Accelerate your career with AI coaching and visibility boosts."
                      : "Scale your team with dedicated support and custom workflows."
                    }
                </p>
                <Button fullWidth onClick={() => onNavigate(activeTab === 'TALENT' ? 'SIGNUP' : 'BUSINESS')}>
                    {activeTab === 'TALENT' ? 'Get Pro Access' : 'Contact Sales'}
                </Button>
                <div className="mt-8 space-y-4">
                    {(activeTab === 'TALENT' 
                        ? ['Everything in Starter', 'Featured Profile Spot', 'AI Career Coach Access', '0% Service Fees']
                        : ['Concierge Talent Matching', 'Dedicated Account Manager', 'Payroll & Compliance', 'Custom Contracts']
                    ).map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle className="w-5 h-5 text-brand-500" /> {feat}
                        </div>
                    ))}
                </div>
             </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-slate-500 text-sm">
                Pricing is in USD. Cancel anytime. <br/>
                Looking for a custom enterprise solution? <button className="text-brand-600 font-medium underline">Contact us</button>.
             </p>
          </div>
       </div>
    </div>
  );
};

// -------------------------------------------------------------------------
//  Blog Page
// -------------------------------------------------------------------------
export const Blog: React.FC<StaticPageProps> = ({ onNavigate }) => {
    const posts = [
        { title: "How to Build a Portfolio that Converts", cat: "Career Growth", date: "Oct 24, 2024", img: "https://picsum.photos/id/1/600/400" },
        { title: "The Future of Remote Work: 2025 Trends", cat: "Industry", date: "Oct 20, 2024", img: "https://picsum.photos/id/3/600/400" },
        { title: "Hiring Guide: Vetting React Developers", cat: "For Business", date: "Oct 18, 2024", img: "https://picsum.photos/id/4/600/400" },
        { title: "Soft Skills: The New Hard Skills", cat: "Personal Dev", date: "Oct 12, 2024", img: "https://picsum.photos/id/5/600/400" },
    ];

    return (
        <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">qalisa Insights</h1>
                    <p className="text-slate-600 text-lg">Expert advice on career growth, hiring strategies, and the future of work.</p>
                </div>

                {/* Featured Post */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-12 grid md:grid-cols-2 group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="h-64 md:h-auto overflow-hidden">
                        <img src="https://picsum.photos/id/6/800/600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Featured" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-2">Featured Article</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Mastering the Art of Negotiation for Freelancers</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Learn the proven strategies to negotiate higher rates, better terms, and long-term retainers without feeling awkward.
                        </p>
                        <div className="flex items-center text-sm text-slate-500 mb-6">
                            <span>By Sarah Jenkins</span>
                            <span className="mx-2">•</span>
                            <span>5 min read</span>
                        </div>
                        <span className="text-brand-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>

                {/* Recent Posts Grid */}
                <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post, i) => (
                        <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all group cursor-pointer">
                            <div className="h-40 overflow-hidden">
                                <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={post.title} />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                                    <span className="bg-slate-100 px-2 py-1 rounded text-slate-700 font-medium">{post.cat}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{post.title}</h4>
                                <p className="text-sm text-slate-500 line-clamp-2">Click to read more about this topic...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// -------------------------------------------------------------------------
//  Success Stories Page
// -------------------------------------------------------------------------
export const SuccessStories: React.FC<StaticPageProps> = ({ onNavigate }) => {
    return (
        <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Real Stories, Real Growth</h1>
                    <p className="text-xl text-slate-600">See how qalisa is transforming careers and helping businesses build dream teams.</p>
                </div>

                {/* Talent Stories */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Talent Spotlights</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://picsum.photos/id/64/100/100" className="w-16 h-16 rounded-full object-cover" alt="Sarah" />
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">Sarah Jenkins</h3>
                                <p className="text-slate-500 text-sm">Senior UX Designer</p>
                            </div>
                        </div>
                        <p className="text-slate-600 italic mb-6">
                            "Before qalisa, I spent 50% of my time looking for clients. Now, the clients come to me. The mentorship program helped me refine my portfolio, and I doubled my hourly rate in 6 months."
                        </p>
                        <div className="flex gap-2 text-sm font-medium text-green-600">
                            <TrendingUp className="w-4 h-4" /> 2x Income Growth
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://picsum.photos/id/91/100/100" className="w-16 h-16 rounded-full object-cover" alt="David" />
                            <div>
                                <h3 className="font-bold text-lg text-slate-900">David Chen</h3>
                                <p className="text-slate-500 text-sm">Full Stack Dev</p>
                            </div>
                        </div>
                        <p className="text-slate-600 italic mb-6">
                            "The verification badge makes a huge difference. Clients trust my skills immediately. I landed a long-term contract with a FinTech startup within my first week."
                        </p>
                        <div className="flex gap-2 text-sm font-medium text-brand-600">
                            <Briefcase className="w-4 h-4" /> Landed Long-term Contract
                        </div>
                    </div>
                </div>

                {/* Business Stories */}
                <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Business Wins</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { company: "TechFlow", role: "SaaS Startup", quote: "Hired a lead developer in 48 hours. The pre-vetting saved us weeks of interviews." },
                        { company: "CreativeStudio", role: "Agency", quote: "We scale our design team up and down seasonally using qalisa. The quality is consistent." },
                        { company: "GreenEarth", role: "Non-Profit", quote: "Found an amazing grant writer who understood our mission perfectly." },
                    ].map((story, i) => (
                        <div key={i} className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
                            <div className="mb-4">
                                <h3 className="font-bold text-lg">{story.company}</h3>
                                <p className="text-slate-400 text-sm">{story.role}</p>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">"{story.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// -------------------------------------------------------------------------
//  Resources Page
// -------------------------------------------------------------------------
export const Resources: React.FC<StaticPageProps> = ({ onNavigate }) => {
    return (
        <div className="pt-24 pb-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Resource Hub</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">Tools, guides, and insights to help you navigate the modern workforce.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors group cursor-pointer" onClick={() => onNavigate('BLOG')}>
                        <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-100">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Read the Blog</h3>
                        <p className="text-slate-600 mb-4">Latest articles on career trends and hiring tips.</p>
                        <span className="text-brand-600 font-bold text-sm flex items-center gap-2">View Articles <ArrowRight className="w-4 h-4"/></span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors group cursor-pointer" onClick={() => onNavigate('GROWTH')}>
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-100">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Programs</h3>
                        <p className="text-slate-600 mb-4">Accelerators and audits to level up your skills.</p>
                        <span className="text-purple-600 font-bold text-sm flex items-center gap-2">Explore Programs <ArrowRight className="w-4 h-4"/></span>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors group cursor-pointer" onClick={() => onNavigate('HOW_IT_WORKS')}>
                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-100">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Platform Guide</h3>
                        <p className="text-slate-600 mb-4">Learn how to make the most of qalisa.</p>
                        <span className="text-orange-600 font-bold text-sm flex items-center gap-2">View Guide <ArrowRight className="w-4 h-4"/></span>
                    </div>
                </div>

                {/* Downloadable Guides Placeholder */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Free Guides</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg"><FileText className="w-6 h-6 text-slate-600"/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">The Ultimate Freelancer Portfolio Checklist</h4>
                            <p className="text-sm text-slate-500">PDF • 2.4 MB</p>
                        </div>
                        <Button variant="ghost" className="ml-auto">Download</Button>
                    </div>
                    <div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-lg"><FileText className="w-6 h-6 text-slate-600"/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Hiring Playbook for Startups</h4>
                            <p className="text-sm text-slate-500">PDF • 3.1 MB</p>
                        </div>
                        <Button variant="ghost" className="ml-auto">Download</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// -------------------------------------------------------------------------
//  How It Works
// -------------------------------------------------------------------------
// (Already implemented previously, keeping import but defining stub if needed by exports)
// Re-exporting the component defined in previous turn (assuming overwrite behavior)
// NOTE: I will re-include the HowItWorks implementation here to ensure the file is complete and self-contained
// based on the request to "replace placeholders".
export const HowItWorks: React.FC<StaticPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'TALENT' | 'BUSINESS'>('TALENT');

  const StepCard = ({ number, icon, title, desc, color }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group text-left">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
            {icon}
        </div>
        <span className="absolute top-4 right-4 text-5xl font-bold text-slate-100 -z-10 group-hover:text-slate-50 transition-colors select-none">{number}</span>
        <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );

  const FeatureItem = ({ title, desc }: any) => (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-2 text-brand-200">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );

  return (
    <div className="pt-24 pb-0 bg-white min-h-screen animate-fade-in">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 md:mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-6">
            <HelpCircle className="w-3 h-3 mr-2" />
            Product Walkthrough
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
          How qalisa Works
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          A simple, guided process for talent to grow and for businesses to hire verified professionals.
        </p>
        
        {/* Toggle */}
        <div className="flex justify-center mt-8">
            <div className="bg-slate-100 p-1.5 rounded-xl inline-flex shadow-inner">
                <button 
                    onClick={() => setActiveTab('TALENT')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === 'TALENT' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                >
                    For Talent
                </button>
                <button 
                    onClick={() => setActiveTab('BUSINESS')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === 'BUSINESS' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                >
                    For Businesses
                </button>
            </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-slate-50 py-16 border-y border-slate-100 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-slate-900 animate-fade-in">
                    {activeTab === 'TALENT' ? 'Accelerate Your Career' : 'Hire with Confidence'}
                </h2>
                <p className="text-slate-500 mt-2 animate-fade-in">
                    {activeTab === 'TALENT' ? 'From creating a profile to getting high-value projects.' : 'From posting a job to managing your new team.'}
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {activeTab === 'TALENT' ? (
                    <>
                        <StepCard 
                            number="01" 
                            icon={<UserPlus className="w-6 h-6 text-white" />} 
                            title="Create Profile" 
                            desc="Add your verified skills, portfolio, and experience to stand out." 
                            color="bg-blue-500"
                        />
                        <StepCard 
                            number="02" 
                            icon={<Search className="w-6 h-6 text-white" />} 
                            title="Get Discovered" 
                            desc="Our AI matches you with businesses looking for your specific expertise." 
                            color="bg-purple-500"
                        />
                        <StepCard 
                            number="03" 
                            icon={<TrendingUp className="w-6 h-6 text-white" />} 
                            title="Grow Skills" 
                            desc="Access mentorship, profile audits, and tools to boost your visibility." 
                            color="bg-green-500"
                        />
                        <StepCard 
                            number="04" 
                            icon={<Briefcase className="w-6 h-6 text-white" />} 
                            title="Get Hired" 
                            desc="Secure projects, deliver work, and build a verified reputation." 
                            color="bg-orange-500"
                        />
                    </>
                ) : (
                    <>
                         <StepCard 
                            number="01" 
                            icon={<FileText className="w-6 h-6 text-white" />} 
                            title="Post a Job" 
                            desc="Share your requirements, budget, and timeline. It's free." 
                            color="bg-brand-500"
                        />
                        <StepCard 
                            number="02" 
                            icon={<Zap className="w-6 h-6 text-white" />} 
                            title="Get Matched" 
                            desc="Receive a shortlist of pre-vetted candidates tailored to your needs." 
                            color="bg-indigo-500"
                        />
                        <StepCard 
                            number="03" 
                            icon={<CheckCircle className="w-6 h-6 text-white" />} 
                            title="Review & Hire" 
                            desc="Check portfolios, interview candidates, and hire the best fit." 
                            color="bg-pink-500"
                        />
                        <StepCard 
                            number="04" 
                            icon={<Users className="w-6 h-6 text-white" />} 
                            title="Work & Scale" 
                            desc="Collaborate seamlessly and scale your team with ease." 
                            color="bg-cyan-500"
                        />
                    </>
                )}
            </div>
        </div>
      </div>

      {/* Why Different */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

             <div className="relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold mb-4">Why qalisa?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">We are building a fairer, more supportive ecosystem for the future of work.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <FeatureItem title="Verified Talent Only" desc="We vet skills so businesses don't have to guess." />
                    <FeatureItem title="Growth Ecosystem" desc="We help talent improve, not just find gigs." />
                    <FeatureItem title="Smart Matching" desc="AI + Human nuances for the perfect fit." />
                </div>
             </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-50 py-20 text-center border-t border-brand-100">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Ready to get started?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => onNavigate('SIGNUP')} className="shadow-lg py-3 px-8 text-base">Join as Talent</Button>
            <Button variant="outline" onClick={() => onNavigate('BUSINESS')} className="bg-white py-3 px-8 text-base">Post a Job – Free</Button>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------------
//  Privacy Policy
// -------------------------------------------------------------------------
export const PrivacyPolicy: React.FC<StaticPageProps> = ({ onNavigate }) => (
  <div className="pt-24 pb-12 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
            <button onClick={() => window.history.back()} className="text-slate-500 hover:text-brand-600 flex items-center gap-1 mb-4 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-3xl font-bold font-heading mb-2">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last updated: October 24, 2024</p>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-8">
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h3>
                <p className="text-slate-600 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, build a profile, or post a job. This includes your name, email address, payment information, and professional history. We also automatically collect usage data to improve our platform experience.
                </p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Data</h3>
                <p className="text-slate-600 leading-relaxed">
                    We use your data to:
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
                    <li>Match talent with business opportunities.</li>
                    <li>Process payments securely.</li>
                    <li>Send relevant updates and growth recommendations.</li>
                    <li>Maintain platform safety and prevent fraud.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Data Protection</h3>
                <p className="text-slate-600 leading-relaxed">
                    We employ industry-standard security measures to protect your personal information. We do not sell your data to third-party advertisers. Your profile visibility settings are fully under your control.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4. Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                    We use cookies to remember your login state and analyze traffic. You can control cookie preferences through your browser settings.
                </p>
            </section>
            
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Us</h3>
                <p className="text-slate-600 text-sm">
                    If you have questions about this policy, please contact us at <span className="text-brand-600 font-medium">privacy@qalisa.com</span>.
                </p>
            </section>
        </div>
    </div>
  </div>
);

// -------------------------------------------------------------------------
//  Terms of Service
// -------------------------------------------------------------------------
export const TermsOfService: React.FC<StaticPageProps> = ({ onNavigate }) => (
  <div className="pt-24 pb-12 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-6">
        <div className="mb-8">
            <button onClick={() => window.history.back()} className="text-slate-500 hover:text-brand-600 flex items-center gap-1 mb-4 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-3xl font-bold font-heading mb-2">Terms of Service</h1>
            <p className="text-slate-500 text-sm">Last updated: October 24, 2024</p>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-8">
             <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h3>
                <p className="text-slate-600 leading-relaxed">
                    By accessing or using qalisa, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. User Responsibilities</h3>
                <p className="text-slate-600 leading-relaxed">
                    You represent and warrant that all information you provide is accurate. You are responsible for maintaining the confidentiality of your account credentials. You agree not to use the platform for any illegal or unauthorized purpose.
                </p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Payments & Services</h3>
                <p className="text-slate-600 leading-relaxed">
                    qalisa acts as a facilitator for payments between Clients and Talent. We charge a service fee on completed transactions. All payments are processed via secure third-party providers. Refunds are handled according to our dispute resolution policy.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">4. Termination</h3>
                <p className="text-slate-600 leading-relaxed">
                    We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Platform.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-slate-900 mb-3">5. Disclaimer</h3>
                <p className="text-slate-600 leading-relaxed">
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. qalisa makes no warranties regarding the reliability or accuracy of user-generated content or the quality of services provided by Talent.
                </p>
            </section>
        </div>
    </div>
  </div>
);

export const NotFound: React.FC<StaticPageProps> = ({ onNavigate }) => (
  <div className="pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
    <div className="text-9xl font-bold text-slate-200 mb-4">404</div>
    <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Page Not Found</h1>
    <p className="text-lg text-slate-600 max-w-md mb-8">
      Oops! The page you're looking for doesn't exist or has been moved.
    </p>
    <Button onClick={() => onNavigate('HOME')} className="shadow-lg">
      <ArrowLeft className="w-4 h-4" /> Back to Home
    </Button>
  </div>
);