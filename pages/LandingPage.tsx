
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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[13px]">
      {/* Top Partnership Bar */}
      <div className="bg-slate-900 py-2 px-4 text-center relative z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">In Strategic Partnership with</span>
          <img src={INFOSYS_LOGO} alt="Infosys" className="h-3 brightness-0 invert" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-md shadow-blue-200">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Fintech Enterprise</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-[12px] font-bold text-slate-500">
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
              Demo <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[12px] font-bold text-slate-700 hover:text-blue-600 transition px-2">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[12px] font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400/5 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-[10px] font-bold mb-6 animate-reveal border border-blue-100 shadow-sm">
              <Zap className="w-2.5 h-2.5 fill-blue-600" />
              <span>Powering Bharat's SME Digital Transformation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter animate-reveal delay-100">
              Your business, <br /><span className="text-gradient">smartly decoded.</span>
            </h1>
            
            <p className="text-sm text-slate-500 max-w-lg mx-auto mb-10 font-medium leading-relaxed animate-reveal delay-200">
              The financial OS designed for the scale and speed of Indian micro-commerce. Track inventory, manage GST, and predict profits with 92% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-xl font-bold text-base hover:bg-slate-50 transition-all active:scale-95"
              >
                Live Demo
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-20 pt-10 border-t border-slate-100 animate-reveal delay-300">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 italic">Verified Enterprise Grade</p>
              <div className="flex flex-wrap justify-center items-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-5" />
                <div className="flex items-center gap-2 font-black text-base text-slate-900">
                    <Globe className="w-4 h-4 text-blue-600" /> BHARAT_FLOW
                </div>
                <div className="flex items-center gap-2 font-black text-base text-slate-900 italic">
                    <Zap className="w-4 h-4 fill-blue-600 text-blue-600" /> QUICK_CASH
                </div>
                <div className="flex items-center gap-2 font-black text-base text-slate-900">
                    <Database className="w-4 h-4 text-indigo-600" /> DATA_SETU
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-20 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16 animate-reveal">
                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">The ultimate SME ecosystem.</h2>
                <p className="text-slate-500 font-medium text-sm max-w-lg mx-auto leading-relaxed">Centralize your sales, stock, and staff in one hub. Built for the modern shop owner.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard 
                  icon={<Smartphone className="text-blue-600" />}
                  title="Mobile Tracking"
                  description="Optimized for busy market counters. Log sales in under 3 seconds with a refined UI."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-emerald-600" />}
                  title="GST Compliance"
                  description="Automatic GST summary reports every month. Stay compliant with zero manual stress."
                />
                <FeatureCard 
                  icon={<Layers className="text-indigo-600" />}
                  title="Batch Sync"
                  description="Manage inventory across locations. Real-time batch tracking for expiry items."
                />
             </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                   <div className="relative bg-white p-3 rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory Intelligence" 
                        className="rounded-[1.5rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl animate-float">
                         <div className="flex items-center justify-between">
                            <p className="font-black text-blue-900 text-[11px]">Low Stock: LED 20W</p>
                            <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-[8px] font-bold">Only 3 Left</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-2.5 bg-blue-600 rounded-xl mb-6 shadow-md shadow-blue-200">
                      <Database className="text-white w-5 h-5" />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">Real-time Stock <br />linked to Profit.</h3>
                   <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                      Linking stock to sales has never been easier. BizSight tracks unit costs across different batches and calculates actual net profit automatically.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift">
                         <p className="text-xl font-black text-emerald-600 mb-1">Live</p>
                         <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">COGS Sync</p>
                      </div>
                      <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift">
                         <p className="text-xl font-black text-blue-600 mb-1">Smart</p>
                         <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Batch Alert</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-2xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Bharat's Digital <br />Revolution.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition shadow-lg active:scale-95"
                 >
                    Get Started Free
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/40 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition active:scale-95"
                 >
                    Contact Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-1.5 bg-blue-600 rounded-lg shadow-md">
                        <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-6 font-medium leading-relaxed text-xs">
                     Building intelligent tools to empower Bharat's 60M+ small business entrepreneurs.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Partner:</span>
                    <img src={INFOSYS_LOGO} alt="Infosys Partner" className="h-3 grayscale opacity-40" />
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Product</h4>
                  <ul className="space-y-3 text-slate-500 font-bold text-[11px]">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Overview</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory</a></li>
                     <li><button onClick={navigateToStreamlit} className="text-blue-600">Dashboard</button></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Developer</h4>
                  <ul className="space-y-3 text-slate-500 font-bold text-[11px]">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Portfolio</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">GitHub</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2024 BizSight AI • Built by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline">Sourish Dey</a>
               </p>
               <div className="flex gap-6 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
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
   <div className={`p-6 rounded-[1.75rem] border flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-900 border-slate-900 text-white shadow-xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full shadow-md">
            Popular
         </span>
      )}
      <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-5">
         <span className="text-4xl font-black tracking-tighter">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-1.5 text-[10px]">/mo</span>}
      </div>
      <p className={`text-[11px] mb-8 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-3 mb-8 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-2 text-[10px] font-bold tracking-tight">
               <Check className={`w-3 h-3 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-3 rounded-lg font-black transition-all text-center block text-[12px] active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Start Trial
      </a>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-blue-50 hover:-translate-y-1 duration-500 group text-left">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 shadow-inner group-hover:bg-blue-50 transition-colors">
      {/* Fix cloneElement type error by casting icon to ReactElement with any props */}
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-6 h-6 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[12px]">{description}</p>
  </div>
);
