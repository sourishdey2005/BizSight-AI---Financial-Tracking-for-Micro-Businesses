
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

const INFOSYS_LOGO = "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc";
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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[11px] leading-relaxed">
      
      {/* Top Branding Section (Info Bar) */}
      <div className="bg-slate-50 py-2.5 px-4 border-b border-slate-100 relative z-[70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
             <img src={INFOSYS_LOGO} alt="Infosys" className="h-3 sm:h-3.5 opacity-70" />
             <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
             <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Enterprise Technology Partner</p>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[8px] font-black text-emerald-600 uppercase tracking-widest">
              <ShieldCheck className="w-2.5 h-2.5" /> ISO 27001 Certified
            </span>
            <span className="flex items-center gap-1.5 text-[8px] font-black text-blue-600 uppercase tracking-widest">
              <Globe className="w-2.5 h-2.5" /> 24/7 Monitoring
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-slate-900 tracking-tighter leading-none uppercase">BizSight AI</span>
              <span className="text-[7px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Fintech OS</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[9px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#platform" className="hover:text-blue-600 transition-colors relative group">Platform</a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors relative group">Inventory</a>
            <a href="#analytics" className="hover:text-blue-600 transition-colors relative group">Analytics</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors relative group">Pricing</a>
            <button onClick={navigateToStreamlit} className="text-blue-600 flex items-center gap-1 hover:gap-1.5 transition-all">
              Launch Demo <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[9px] font-black text-slate-900 hover:text-blue-600 transition px-1 uppercase tracking-widest">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[8px] font-black mb-6 animate-reveal border border-blue-100 shadow-sm uppercase tracking-widest">
              <Sparkles className="w-2 h-2 fill-blue-600" />
              <span>Enterprise-Grade Financial Intelligence</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-[11px] md:text-[12px] text-slate-500 max-w-lg mx-auto mb-8 font-medium leading-relaxed animate-reveal delay-200">
              Transform raw transactional data into actionable growth strategies. Built for speed, scale, and high-precision forecasting.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-300 mb-16">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-lg font-black text-[12px] hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Free Trial <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg font-black text-[12px] hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                Explore BI Dashboard
              </button>
            </div>

            {/* Moved Banner Image Here: Integrated and Full-Width within container */}
            <div className="relative w-full max-w-6xl mx-auto px-2 animate-reveal delay-400">
              <div className="absolute -inset-10 bg-blue-400/5 rounded-full blur-[100px] opacity-30"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50">
                <img 
                  src={TOP_BANNER_IMAGE} 
                  alt="BizSight Visual Overview" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="platform" className="py-20 bg-slate-50/30">
          <div className="max-w-6xl mx-auto px-4 text-center">
             <div className="mb-12 animate-reveal">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">The ultimate SME ecosystem.</h2>
                <p className="text-slate-500 font-medium text-[11px] max-w-md mx-auto leading-relaxed italic">"Centralizing sales, stock, and reports into one high-performance hub."</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard 
                  icon={<Zap className="text-blue-600" />}
                  title="Zero-Lag Recording"
                  description="Optimized for market counters. Log transactions in <2s with enterprise-grade consistency."
                />
                <FeatureCard 
                  icon={<Smartphone className="text-emerald-600" />}
                  title="Native Mobile UX"
                  description="Real-time access to your metrics from anywhere. High-fidelity mobile interface."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-indigo-600" />}
                  title="Infosys-Grade Cloud"
                  description="Banking-standard encryption and automated redundant vaulting for your financial data."
                />
             </div>
          </div>
        </section>

        {/* Deep Feature: Inventory */}
        <section id="inventory" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-6 bg-blue-100/10 rounded-[2rem] blur-[60px]"></div>
                   <div className="relative bg-white p-3 rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory Intelligence" 
                        className="rounded-[2rem] w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-2 bg-blue-600 rounded-lg mb-6 shadow-lg shadow-blue-100">
                      <Database className="text-white w-4 h-4" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">Stock linked to <br /><span className="text-blue-600">Net Margins.</span></h3>
                   <p className="text-slate-600 text-[11px] leading-relaxed mb-8 font-medium">
                      BizSight tracks your unit costs across batches and calculates actual net profit automatically—accounting for GST and operational overheads.
                   </p>
                   <div className="space-y-3">
                      <CheckListItem text="Dynamic COGS Engine" />
                      <CheckListItem text="Batch-wise profitability" />
                      <CheckListItem text="Multi-warehouse sync" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* AI & Analytics */}
        <section id="analytics" className="py-20 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-6xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="animate-reveal">
                    <div className="inline-flex p-2 bg-blue-500 rounded-lg mb-6">
                       <Brain className="text-white w-4 h-4" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight tracking-tight">AI Forecasting for <br /><span className="text-blue-400">Bharat's Economy.</span></h3>
                    <p className="text-blue-100/70 text-[11px] leading-relaxed mb-8 font-medium">
                       Optimized AI analyzing seasonal cycles like Diwali, Holi, and wedding peaks to predict stock velocity.
                    </p>
                    <button 
                      onClick={navigateToStreamlit}
                      className="group bg-white text-slate-900 px-6 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all shadow-xl active:scale-95"
                    >
                       View Forecasts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 <div className="animate-reveal delay-200">
                    <div className="bg-white/5 backdrop-blur-2xl p-3 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                       <img 
                         src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                         alt="Predictive Analytics" 
                         className="rounded-[1.8rem] w-full mix-blend-overlay opacity-40" 
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-3 bg-blue-600/20 rounded-full animate-pulse">
                             <Sparkles className="text-blue-400 w-6 h-6" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-white">
           <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">Predictable scale pricing.</h2>
                 <p className="text-slate-500 font-medium text-[11px]">Designed for the unique scale of Indian micro-commerce.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="For local startups."
                    features={["1k Transactions/Mo", "Basic Stock", "1 User"]}
                 />
                 <PricingCard 
                    tier="Business" 
                    price="₹1,499" 
                    desc="For growing retailers."
                    recommended
                    features={["Unlimited Sales", "AI Forecasts", "GST Automations", "WhatsApp Support"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="₹4,999" 
                    desc="For store chains."
                    features={["Full API Access", "Custom BI Connect", "Dedicated Lead"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]"></div>
           <div className="max-w-2xl mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter leading-tight animate-reveal">Digitize your growth <br />story today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-200">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition shadow-2xl active:scale-95"
                 >
                    Start Now
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/20 px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition active:scale-95"
                 >
                    Consult Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-slate-100">
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-1 bg-blue-600 rounded shadow-md">
                        <BarChart3 className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg font-black text-slate-900 tracking-tighter uppercase">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-6 font-medium leading-relaxed text-[10px]">
                     Intelligent financial infrastructure powering Bharat's micro-enterprises.
                  </p>
                  <img src={INFOSYS_LOGO} alt="Infosys" className="h-2.5 grayscale opacity-30" />
               </div>
               
               <div>
                  <h4 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.4em] mb-4">Platform</h4>
                  <ul className="space-y-2 text-slate-500 font-bold text-[9px] uppercase tracking-widest">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Core Features</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory OS</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Predictions</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[8px] font-black text-slate-900 uppercase tracking-[0.4em] mb-4">Architect</h4>
                  <ul className="space-y-2 text-slate-500 font-bold text-[9px] uppercase tracking-widest">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Tech Status</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Platform Docs</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-[8px] text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2026 BizSight AI • Engineered by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline">Sourish Dey</a>
               </p>
               <div className="flex gap-6 text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-slate-900 transition">Privacy</a>
                  <a href="#" className="hover:text-slate-900 transition">Legal</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-[1.25rem] border border-slate-100 hover:border-blue-200 transition-all shadow-md hover:shadow-blue-50 hover:-translate-y-1 duration-500 group text-left">
    <div className="w-9 h-9 bg-slate-50 rounded-lg flex items-center justify-center mb-5 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[10px]">{description}</p>
  </div>
);

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-6 rounded-[1.5rem] border flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[7px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full shadow-lg">
            Best Seller
         </span>
      )}
      <p className={`text-[8px] font-black uppercase tracking-[0.3em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-5">
         <span className="text-3xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-1 text-[9px]">/mo</span>}
      </div>
      <p className={`text-[10px] mb-8 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-3 mb-10 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-2 text-[9px] font-black tracking-tight uppercase">
               <Check className={`w-3 h-3 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-3 rounded-lg font-black transition-all text-center block text-[10px] uppercase tracking-widest active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Choose Plan
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-2.5 text-[10px] font-black text-slate-700 group cursor-default uppercase tracking-tight">
      <div className="w-3.5 h-3.5 rounded bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <Check className="w-2 h-2 text-blue-600 group-hover:text-white" />
      </div>
      {text}
   </div>
);

const MiniCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="p-2.5 bg-white rounded-lg border border-slate-100 shadow-sm flex items-center gap-2 hover:border-blue-200 hover:-translate-y-1 transition-all">
      <div className="p-1.5 bg-slate-50 rounded-lg">{icon}</div>
      <span className="text-[7px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
   </div>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
