import React, { useEffect } from 'react';
import { 
  TrendingUp, 
  ArrowRight,
  Database,
  Brain,
  BarChart3,
  Check,
  Star,
  Globe,
  Zap,
  Smartphone,
  ShieldCheck,
  Clock,
  Layout,
  Layers,
  Sparkles
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

export const LandingPage: React.FC<{ user: User | null }> = ({ user }) => {
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  const navigateToStreamlit = () => {
    window.location.href = STREAMLIT_URL;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[14px]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-md shadow-blue-200">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">In Partnership with</span>
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-2 grayscale" />
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-500">
            <a href="#platform" className="hover:text-blue-600 transition-colors relative group">
              Platform
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors relative group">
              Inventory
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#analytics" className="hover:text-blue-600 transition-colors relative group">
              Analytics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <button onClick={navigateToStreamlit} className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all font-bold">
              Live Demo <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[13px] font-bold text-slate-700 hover:text-blue-600 transition px-3">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[11px] font-bold mb-8 animate-reveal border border-blue-100 shadow-sm">
              <Zap className="w-3 h-3 fill-blue-600" />
              <span>Accelerating Bharat's SME Digital Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter animate-reveal delay-100">
              Your business, <br /><span className="text-gradient">smartly decoded.</span>
            </h1>
            
            <p className="text-base text-slate-500 max-w-xl mx-auto mb-10 font-medium leading-relaxed animate-reveal delay-200">
              The only financial operating system designed for the scale and speed of Indian micro-commerce. Track every paisa, predict profits, and grow faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-md active:scale-95"
              >
                Launch Live Demo
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-24 pt-12 border-t border-slate-100 animate-reveal delay-300">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 italic">Strategic Partner</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-6" />
                <div className="flex items-center gap-2 font-black text-lg text-slate-900">
                    <Globe className="w-5 h-5 text-blue-600" /> BHARAT_FLOW
                </div>
                <div className="flex items-center gap-2 font-black text-lg text-slate-900 italic">
                    <Zap className="w-5 h-5 fill-blue-600 text-blue-600" /> QUICK_CASH
                </div>
                <div className="flex items-center gap-2 font-black text-lg text-slate-900">
                    <Database className="w-5 h-5 text-indigo-600" /> DATA_SETU
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-24 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-20 animate-reveal">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">The ultimate SME hub.</h2>
                <p className="text-slate-500 font-medium text-base max-w-xl mx-auto leading-relaxed">Centralize your sales, stock, and staff in one hub. Powered by Infosys edge computing.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Smartphone className="text-blue-600" />}
                  title="Mobile-First Tracking"
                  description="Optimized for busy Indian market counters. Log sales in under 3 seconds with a refined UI."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-emerald-600" />}
                  title="Tax & GST Integration"
                  description="Automatic GST summary reports every month. Stay compliant with zero manual stress."
                />
                <FeatureCard 
                  icon={<Layers className="text-indigo-600" />}
                  title="Batch Inventory Sync"
                  description="Manage inventory across multiple locations. Real-time tracking for expiry items."
                />
             </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="relative bg-white p-4 rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Retail Inventory Intelligence" 
                        className="rounded-[2rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl animate-float">
                         <div className="flex items-center justify-between">
                            <p className="font-black text-blue-900 text-xs">Stock Alert: LED 20W</p>
                            <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-[9px] font-bold">Only 3 Left</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-200">
                      <Database className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">Real-time Inventory <br />linked to Profit.</h3>
                   <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                      Linking stock to sales has never been easier. BizSight tracks unit costs across different batches and calculates actual net profit automatically.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift">
                         <p className="text-2xl font-black text-emerald-600 mb-1">Live</p>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">COGS Sync</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift">
                         <p className="text-2xl font-black text-blue-600 mb-1">Smart</p>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Batch Alert</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 animate-reveal">
                   <div className="inline-flex p-3 bg-indigo-600 rounded-2xl mb-6 shadow-lg shadow-indigo-200">
                      <Brain className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">AI Forecasting for <br />the Festival Season.</h3>
                   <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                      Indian commerce is seasonal. Our AI analyzes Diwali, Holi, and wedding season trends to predict exactly when you need more stock.
                   </p>
                   <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5 bg-blue-50 p-1 rounded-full" /> 92% Sales Forecast Accuracy</li>
                      <li className="flex items-center gap-3 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5 bg-blue-50 p-1 rounded-full" /> Automatic Demand Sensing</li>
                      <li className="flex items-center gap-3 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5 bg-blue-50 p-1 rounded-full" /> Optimized Cashflow Path</li>
                   </ul>
                   <button onClick={navigateToStreamlit} className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 hover:bg-indigo-600 transition-all shadow-xl active:scale-95">
                      Explore AI Insights <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
                <div className="order-1 lg:order-2 animate-reveal delay-200">
                   <div className="bg-white p-4 rounded-[2.5rem] shadow-xl border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                        alt="AI Powered SME Analytics" 
                        className="rounded-[2rem] w-full" 
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Transparent pricing.</h2>
                 <p className="text-slate-500 font-medium text-base">Scale as you grow. No hidden charges.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                 <PricingCard 
                    tier="Rising Star" 
                    price="Free" 
                    desc="For local vendors starting out."
                    features={["Unlimited Sales Logging", "Basic Inventory", "1 Location"]}
                 />
                 <PricingCard 
                    tier="Business Pro" 
                    price="₹1,499" 
                    desc="Complete suite for growing retailers."
                    recommended
                    features={["AI Demand Forecasts", "GST Automations", "Multi-User Roles", "Priority WhatsApp Support"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="Custom" 
                    desc="For massive operations."
                    features={["Custom AI Models", "Unlimited Locations", "Dedicated Manager"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Join Bharat's Digital <br />Revolution.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-blue-50 transition shadow-lg active:scale-95"
                 >
                    Get Started Free
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border-2 border-white/40 px-8 py-4 rounded-[2rem] font-bold text-base hover:bg-white/10 transition active:scale-95"
                 >
                    Talk to Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-600 rounded-xl shadow-md">
                        <BarChart3 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-8 font-medium leading-relaxed">
                     Building intelligent tools to empower Bharat's 60M+ small business entrepreneurs.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Partner:</span>
                    <img src={INFOSYS_LOGO} alt="Infosys Partner" className="h-4 grayscale opacity-40" />
                  </div>
               </div>
               
               <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-6">Product</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-[13px]">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Overview</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory Mastery</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Forecasting</a></li>
                     <li><button onClick={navigateToStreamlit} className="text-blue-600">Live Dashboard</button></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-6">Developer</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-[13px]">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Portfolio</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Engineering Blog</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Open Source Repo</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2024 BizSight AI. Engineered by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline decoration-blue-600/20">Sourish Dey</a>
               </p>
               <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-slate-900 transition">Privacy</a>
                  <a href="#" className="hover:text-slate-900 transition">Terms</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-8 rounded-[2.5rem] border-2 flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-900 border-slate-900 text-white shadow-2xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-lg'
   }`}>
      {recommended && (
         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full shadow-lg">
            Most Selected
         </span>
      )}
      <p className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-6">
         <span className="text-5xl font-black tracking-tighter">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-2 text-xs">/mo</span>}
      </div>
      <p className={`text-[13px] mb-8 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-4 mb-10 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3 text-[12px] font-bold tracking-tight">
               <div className={`p-1 rounded-full ${recommended ? 'bg-blue-400/20' : 'bg-emerald-50'}`}>
                  <Check className={`w-3 h-3 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               </div> 
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-4 rounded-xl font-black transition-all text-center block text-base active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Start Trial
      </a>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all shadow-lg hover:shadow-blue-100 hover:-translate-y-2 duration-500 group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[13px]">{description}</p>
  </div>
);
