import React, { useState } from 'react';
import { 
  Briefcase, CheckCircle, Clock, DollarSign, Globe, Layout, 
  MapPin, ChevronLeft, Building, Zap, Shield, Users 
} from 'lucide-react';
import { Button } from '../components/Layout';

export const Business: React.FC = () => {
  const [view, setView] = useState<'LANDING' | 'POST_JOB' | 'SUCCESS'>('LANDING');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Digital & Tech',
    skills: '',
    experience: 'Intermediate',
    description: '',
    projectType: 'One-time',
    duration: '',
    budgetType: 'Fixed',
    budgetMin: '',
    budgetMax: '',
    locationType: 'Remote',
    companyName: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setView('SUCCESS');
      window.scrollTo(0,0);
    }, 1500);
  };

  const resetForm = () => {
      setFormData({
        title: '',
        category: 'Digital & Tech',
        skills: '',
        experience: 'Intermediate',
        description: '',
        projectType: 'One-time',
        duration: '',
        budgetType: 'Fixed',
        budgetMin: '',
        budgetMax: '',
        locationType: 'Remote',
        companyName: '',
        email: ''
      });
      setView('POST_JOB');
  };

  if (view === 'SUCCESS') {
    return (
      <div className="pt-24 pb-12 min-h-[60vh] bg-slate-50 flex items-center justify-center">
        <div className="max-w-2xl w-full px-4 text-center animate-fade-in">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Job Posted Successfully!</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              We've received your job posting for <strong>{formData.title}</strong>.<br/>
              Our matching engine is now identifying the best talent for you. Expect proposals soon at <strong>{formData.email}</strong>.
            </p>
            <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => setView('LANDING')}>Back to Business Home</Button>
                <Button onClick={resetForm}>Post Another Job</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'POST_JOB') {
    return (
      <div className="pt-24 pb-12 bg-slate-50 min-h-screen animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
                onClick={() => setView('LANDING')}
                className="flex items-center text-slate-500 hover:text-brand-600 mb-6 transition-colors font-medium text-sm group"
            >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Overview
            </button>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 p-8 text-white">
                    <h1 className="text-2xl font-bold font-heading mb-2">Post a Job for Free</h1>
                    <p className="text-slate-300">Connect with top-tier talent in minutes. No credit card required.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    
                    {/* Section 1: Basic Details */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                            <Briefcase className="w-5 h-5 text-brand-500" /> Basic Details
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Job Title *</label>
                                <input 
                                    required
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="e.g. Senior UX Designer"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                                <select 
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                                >
                                    <option>Digital & Tech</option>
                                    <option>Creative & Media</option>
                                    <option>Marketing & Growth</option>
                                    <option>Crafts & Handmade</option>
                                    <option>Performance</option>
                                    <option>Teaching</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Experience Level</label>
                                <select 
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                                >
                                    <option>Entry Level</option>
                                    <option>Intermediate</option>
                                    <option>Expert</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Required Skills (Comma separated)</label>
                                <input 
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="e.g. Figma, React, SEO"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Description */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                            <Layout className="w-5 h-5 text-brand-500" /> Job Description
                        </h3>
                        
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Description *</label>
                            <textarea 
                                required
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                placeholder="Describe the role, responsibilities, and what you're looking for..."
                            ></textarea>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                                <select 
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                                >
                                    <option>One-time Project</option>
                                    <option>Ongoing Work</option>
                                    <option>Contract</option>
                                    <option>Full-time</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Duration</label>
                                <input 
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="e.g. 2 weeks, 3 months"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Budget */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                            <DollarSign className="w-5 h-5 text-brand-500" /> Budget & Location
                        </h3>
                        
                         <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Budget Type</label>
                                <select 
                                    name="budgetType"
                                    value={formData.budgetType}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                                >
                                    <option>Fixed Price</option>
                                    <option>Hourly Rate</option>
                                </select>
                            </div>
                            
                            <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Min ($)</label>
                                    <input 
                                        name="budgetMin"
                                        value={formData.budgetMin}
                                        onChange={handleChange}
                                        type="number" 
                                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                        placeholder="0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Max ($)</label>
                                    <input 
                                        name="budgetMax"
                                        value={formData.budgetMax}
                                        onChange={handleChange}
                                        type="number" 
                                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                        placeholder="1000"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-3">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Work Location</label>
                                <div className="flex gap-4">
                                    {['Remote', 'On-site', 'Hybrid'].map(type => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer border border-slate-200 rounded-lg px-4 py-2 hover:bg-slate-50 transition-colors">
                                            <input 
                                                type="radio" 
                                                name="locationType"
                                                value={type}
                                                checked={formData.locationType === type}
                                                onChange={handleChange}
                                                className="text-brand-600 focus:ring-brand-500"
                                            />
                                            <span className="text-sm font-medium text-slate-700">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Company */}
                    <section className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                            <Building className="w-5 h-5 text-brand-500" /> Company Info
                        </h3>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                                <input 
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    type="text" 
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="Acme Inc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email *</label>
                                <input 
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email" 
                                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                                    placeholder="jobs@acme.com"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-4">
                        <Button variant="ghost" onClick={() => setView('LANDING')}>Cancel</Button>
                        <Button className="px-8 shadow-lg" disabled={loading}>
                            {loading ? 'Posting...' : 'Post Job for Free'}
                        </Button>
                    </div>

                </form>
            </div>
        </div>
      </div>
    );
  }

  // Landing
  return (
    <div className="pt-24 pb-12 min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white text-center mb-16 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Hire the Top 1% of Verified Talent
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                        Skip the noise. qalisa pre-vets every professional for hard skills and soft skills.
                        Post your job today and find the perfect match in hours, not weeks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => setView('POST_JOB')} className="py-4 px-8 text-base shadow-brand-500/30">Post a Job – Free</Button>
                        <Button variant="outline" className="py-4 px-8 text-base">Schedule Demo</Button>
                    </div>
                    <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
                         <Shield className="w-4 h-4" /> Trusted by 500+ High-Growth Companies
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                    { icon: <Zap className="w-8 h-8 text-brand-500" />, title: 'Speed to Hire', desc: 'Average time to hire is 48 hours compared to industry avg of 3 weeks.' },
                    { icon: <CheckCircle className="w-8 h-8 text-green-500" />, title: 'Quality Guaranteed', desc: 'Every talent is vetted. If you’re not satisfied, we match you again for free.' },
                    { icon: <Users className="w-8 h-8 text-purple-500" />, title: 'Dedicated Support', desc: 'Get a dedicated account manager to help you define requirements and shortlist candidates.' }
                ].map((feature, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="grid md:grid-cols-2">
                    <div className="p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Enterprise-Grade Hiring</h2>
                        <ul className="space-y-4 mb-8">
                             {[
                                "Custom talent pools",
                                "Compliance & payroll handling",
                                "NDA & IP protection",
                                "Bulk hiring capabilities"
                             ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-brand-100 p-1 rounded-full text-brand-600">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                             ))}
                        </ul>
                        <Button variant="outline" className="w-fit text-brand-600 border-brand-200">Contact Enterprise Sales</Button>
                    </div>
                    <div className="bg-slate-100 relative h-64 md:h-auto">
                        <img src="https://picsum.photos/id/4/800/800" className="w-full h-full object-cover" alt="Office meeting" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};