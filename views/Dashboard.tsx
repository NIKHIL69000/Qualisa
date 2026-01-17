import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Send, User, Award, LayoutDashboard, MessageSquare, Briefcase, Bot } from 'lucide-react';
import { Button } from '../components/Layout';
import { getCareerCoaching } from '../services/geminiService';
import { ChatMessage } from '../types';

const data = [
  { name: 'Mon', views: 240 },
  { name: 'Tue', views: 300 },
  { name: 'Wed', views: 500 },
  { name: 'Thu', views: 420 },
  { name: 'Fri', views: 650 },
  { name: 'Sat', views: 380 },
  { name: 'Sun', views: 800 },
];

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'coach'>('overview');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hi! I am your Qualisa Growth Coach. How can I help you improve your career today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Call Gemini
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await getCareerCoaching(userMsg.text, history);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:block fixed h-full left-0 top-16 z-10">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <img src="https://picsum.photos/id/64/100/100" className="w-12 h-12 rounded-full border-2 border-brand-100" alt="User" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Sarah Jenkins</h3>
              <p className="text-xs text-slate-500">Pro Member</p>
            </div>
          </div>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'overview' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <LayoutDashboard size={18} /> Overview
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
              <User size={18} /> Profile
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
              <Briefcase size={18} /> Projects
            </button>
            <button 
               onClick={() => setActiveTab('coach')}
               className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ${activeTab === 'coach' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Bot size={18} /> AI Career Coach
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Profile Views', val: '2,340', change: '+12%', color: 'blue' },
                { label: 'Project Invites', val: '18', change: '+5%', color: 'green' },
                { label: 'Skill Score', val: '850', change: 'Top 5%', color: 'purple' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">{stat.label}</p>
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-bold text-slate-900">{stat.val}</h3>
                    <span className={`text-xs font-bold text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Profile Activity</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={value => `${value}`} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <Area type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Opportunities */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">Recommended Opportunities</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 hover:bg-slate-50 transition-colors flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                        D
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Senior UI Designer Needed</h4>
                        <p className="text-xs text-slate-500">DigitalFlow • Remote • $60-80/hr</p>
                      </div>
                    </div>
                    <Button variant="outline" className="!text-xs !py-1.5">Apply</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'coach' && (
          <div className="h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-brand-50/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-purple-600 flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Qualisa Coach</h3>
                  <p className="text-xs text-brand-600 font-medium">Powered by Gemini 3 Flash</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}>
                     {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about your profile, career path, or skills..."
                  className="flex-1 bg-white text-slate-900 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500"
                  disabled={loading}
                />
                <Button 
                   onClick={handleSendMessage} 
                   className={`${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Thinking...' : <Send size={18} />}
                </Button>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 text-center">AI advice can be inaccurate. Please verify critical career decisions.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};