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
  Sparkles,
  Shield,
  ArrowUpRight,
  SmartphoneNfc,
  Cpu,
  Fingerprint
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Zm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc";
const TOP_BANNER_IMAGE = "https://res.cloudinary.com/dodhvvewu/image/upload/v1770584790/9783222e98b0d5141519b41e7203ff9a_pyjqit.webp";
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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[10px] md:text-[11px] leading-relaxed">
      
      {/* Top Branding Section (Info Bar) */}
      <div className="bg-slate-50 py-2 px-4 border-b border-slate-100 relative z-[70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
             <img src="https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc" alt="Infosys" className="h-3 opacity-60" />
             <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
             <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Official Strategic Partner</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[7px] font-black text-emerald-600 uppercase tracking-widest">
              <ShieldCheck className="w-2.5 h-2.5" /> ISO/IEC 27001
            </span>
            <span className="flex items-center gap-1.5 text-[7px] font-black text-blue-600 uppercase tracking-widest">
              <Globe className="w-2.5 h-2.5" /> Global Standards
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-1 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-3 h-3" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black text-slate-900 tracking-tighter leading-none uppercase">BizSight AI</span>
              <span className="text-[6px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Fintech Enterprise</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-[8px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#platform" className="hover:text-blue-600 transition-colors">Platform</a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory</a>
            <a href="#analytics" className="hover:text-blue-600 transition-colors">Analytics</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <button onClick={navigateToStreamlit} className="text-blue-600 flex items-center gap-1">
              Launch demo <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[8px] font-black text-slate-900 hover:text-blue-600 transition uppercase tracking-widest">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-[8px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 px-4 overflow-hidden">
          {/* Shifted Image to Corner Top */}
          <div className="absolute top-0 right-0 w-48 md:w-64 lg:w-96 -mr-16 -mt-8 pointer-events-none opacity-30 rotate-6 animate-float z-0">
            <img 
              src={TOP_BANNER_IMAGE} 
              alt="" 
              className="rounded-[2rem] shadow-2xl border border-slate-200/50"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-[7px] font-black mb-6 animate-reveal border border-blue-100 shadow-sm uppercase tracking-widest">
              <Sparkles className="w-2 h-2 fill-blue-600" />
              <span>Enterprise AI Financial Platform</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-[10px] md:text-[11px] text-slate-500 max-w-lg mx-auto mb-8 font-medium leading-relaxed animate-reveal delay-200">
              High-precision transactional tracking and growth forecasting designed for the modern Indian micro-enterprise. Empowered by Infosys tech standards.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-black text-[11px] hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-black text-[11px] hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                BI Dashboard
              </button>
            </div>

            {/* Visual Feature Grid (Mini) */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 animate-reveal delay-400 max-w-3xl mx-auto">
               <MiniCard icon={<SmartphoneNfc className="text-blue-500 w-3.5 h-3.5" />} label="Quick Tap" />
               <MiniCard icon={<Cpu className="text-indigo-500 w-3.5 h-3.5" />} label="AI Logic" />
               <MiniCard icon={<Fingerprint className="text-emerald-500 w-3.5 h-3.5" />} label="Secure" />
               <MiniCard icon={<Shield className="text-rose-500 w-3.5 h-3.5" />} label="Compliant" />
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="platform" className="py-16 bg-slate-50/20">
          <div className="max-w-5xl mx-auto px-4 text-center">
             <div className="mb-10 animate-reveal">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">The ultimate SME ecosystem.</h2>
                <p className="text-slate-500 font-medium text-[10px] max-w-md mx-auto leading-relaxed">Centralizing your financial operations into one high-performance hub.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-5">
                <FeatureCard 
                  icon={<Zap className="text-blue-600" />}
                  title="Zero-Lag Recording"
                  description="Log transactions in <2s with enterprise-grade consistency. Optimized for busy counters."
                />
                <FeatureCard 
                  icon={<Smartphone className="text-emerald-600" />}
                  title="Global Mobile UX"
                  description="Real-time access to metrics from anywhere. High-fidelity interface for Android/iOS."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-indigo-600" />}
                  title="Enterprise Cloud"
                  description="Banking-standard encryption and automated redundant vaulting for all your data."
                />
             </div>
          </div>
        </section>

        {/* Inventory Intelligence */}
        <section id="inventory" className="py-16 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-4 bg-blue-100/10 rounded-[2rem] blur-[50px]"></div>
                   <div className="relative bg-white p-2 rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory" 
                        className="rounded-[1.8rem] w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-1.5 bg-blue-600 rounded-md mb-5 shadow-lg shadow-blue-100">
                      <Database className="text-white w-4 h-4" />
                   </div>
                   <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">Stock linked to <br /><span className="text-blue-600">Net Margins.</span></h3>
                   <p className="text-slate-600 text-[10px] leading-relaxed mb-6 font-medium">
                      Automatically calculates actual net profit per unit—accounting for GST, batch costs, and overheads in real-time.
                   </p>
                   <div className="space-y-2">
                      <CheckListItem text="Dynamic COGS Engine" />
                      <CheckListItem text="Batch-wise profitability" />
                      <CheckListItem text="Multi-warehouse sync" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* AI & Forecasting */}
        <section id="analytics" className="py-16 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]"></div>
           <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div className="animate-reveal">
                    <div className="inline-flex p-1.5 bg-blue-500 rounded-md mb-5">
                       <Brain className="text-white w-4 h-4" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight tracking-tight">AI Forecasting for <br /><span className="text-blue-400">Bharat's Growth.</span></h3>
                    <p className="text-blue-100/70 text-[10px] leading-relaxed mb-6 font-medium">
                       Optimized models analyzing seasonal cycles like Diwali and wedding peaks to predict stock velocity.
                    </p>
                    <button 
                      onClick={navigateToStreamlit}
                      className="group bg-white text-slate-900 px-5 py-2.5 rounded-lg font-black text-[9px] uppercase tracking-widest flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all active:scale-95"
                    >
                       View Forecasts <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 <div className="animate-reveal delay-200">
                    <div className="bg-white/5 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                       <img 
                         src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                         alt="AI" 
                         className="rounded-[1.8rem] w-full mix-blend-overlay opacity-30" 
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-2 bg-blue-600/20 rounded-full animate-pulse">
                             <Sparkles className="text-blue-400 w-5 h-5" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 bg-white">
           <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-12">
                 <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-1 tracking-tight">Scale-ready pricing.</h2>
                 <p className="text-slate-500 font-medium text-[9px]">Designed for the unique scale of modern retail.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="For local startups."
                    features={["1k Transactions", "Stock Tracker", "1 Admin"]}
                 />
                 <PricingCard 
                    tier="Business" 
                    price="₹1,499" 
                    desc="For retail shops."
                    recommended
                    features={["Unlimited Sales", "AI Engine", "GST Sync", "24/7 Support"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="₹4,999" 
                    desc="For store chains."
                    features={["API Access", "BI Connect", "Dedicated Lead"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="max-w-2xl mx-auto px-4 relative z-10">
              <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter leading-tight animate-reveal">Digitize your story today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-200">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-black text-[12px] uppercase tracking-widest hover:bg-blue-50 transition active:scale-95"
                 >
                    Start Now
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/20 px-8 py-3 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-white/10 transition active:scale-95"
                 >
                    Contact Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-10 border-t border-slate-100">
         <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="p-1 bg-blue-600 rounded shadow-md">
                        <BarChart3 className="text-white w-3 h-3" />
                    </div>
                    <span className="text-base font-black text-slate-900 tracking-tighter uppercase">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-5 font-medium leading-relaxed text-[9px]">
                     Building intelligent financial infrastructure for the next generation of entrepreneurs.
                  </p>
                  <img src="https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc" alt="Infosys" className="h-2 grayscale opacity-20" />
               </div>
               
               <div>
                  <h4 className="text-[7px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Platform</h4>
                  <ul className="space-y-2 text-slate-500 font-bold text-[8px] uppercase tracking-widest">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Core Features</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory OS</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Predictions</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[7px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Support</h4>
                  <ul className="space-y-2 text-slate-500 font-bold text-[8px] uppercase tracking-widest">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">System Status</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Docs</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-3">
               <p className="text-[7px] text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2026 BizSight AI • Developed by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline">Sourish Dey</a>
               </p>
               <div className="flex gap-5 text-[7px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-slate-900 transition">Privacy</a>
                  <a href="#" className="hover:text-slate-900 transition">Terms</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-5 rounded-[1rem] border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-blue-50 duration-500 group text-left">
    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center mb-4 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-[12px] font-black text-slate-900 mb-1.5 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[9px]">{description}</p>
  </div>
);

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-5 rounded-[1.25rem] border flex flex-col transition-all duration-500 relative group ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-xl z-10 scale-105' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[6px] font-black uppercase tracking-[0.3em] px-2 py-1 rounded-full shadow-lg">
            Best Seller
         </span>
      )}
      <p className={`text-[7px] font-black uppercase tracking-[0.3em] mb-3 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-4">
         <span className="text-2xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-0.5 text-[8px]">/mo</span>}
      </div>
      <p className={`text-[9px] mb-6 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-2.5 mb-8 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-2 text-[8px] font-black tracking-tight uppercase">
               <Check className={`w-2.5 h-2.5 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-2.5 rounded-lg font-black transition-all text-center block text-[9px] uppercase tracking-widest active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Choose Plan
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-2 text-[9px] font-black text-slate-700 group cursor-default uppercase tracking-tight">
      <div className="w-3 h-3 rounded bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <Check className="w-2 h-2 text-blue-600 group-hover:text-white" />
      </div>
      {text}
   </div>
);

const MiniCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center gap-2 hover:border-blue-200 hover:-translate-y-0.5 transition-all">
      <div className="p-1 bg-slate-50 rounded-md">{icon}</div>
      <span className="text-[6px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
   </div>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
