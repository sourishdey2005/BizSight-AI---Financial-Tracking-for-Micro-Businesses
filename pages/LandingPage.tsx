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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[12px] leading-relaxed">
      {/* Absolute Top Banner Image */}
      <div className="w-full overflow-hidden bg-slate-100">
        <img 
          src={TOP_BANNER_IMAGE} 
          alt="BizSight Banner" 
          className="w-full max-h-[120px] object-cover object-center"
        />
      </div>

      {/* Top Branding Section */}
      <div className="bg-slate-50 py-3 px-4 border-b border-slate-100 relative z-[70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
             <img src={INFOSYS_LOGO} alt="Infosys" className="h-3.5 sm:h-4 opacity-80" />
             <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
             <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Strategic Enterprise Partner</p>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[8px] font-black text-emerald-600 uppercase tracking-widest">
              <ShieldCheck className="w-2.5 h-2.5" /> Secure Banking API
            </span>
            <span className="flex items-center gap-1.5 text-[8px] font-black text-blue-600 uppercase tracking-widest">
              <Globe className="w-2.5 h-2.5" /> 24/7 Global Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-1.5 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <span className="text-[7px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Intelligent Commerce</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#platform" className="hover:text-blue-600 transition-colors relative group">Platform</a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors relative group">Inventory</a>
            <a href="#analytics" className="hover:text-blue-600 transition-colors relative group">Analytics</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors relative group">Pricing</a>
            <button onClick={navigateToStreamlit} className="text-blue-600 flex items-center gap-1 hover:gap-1.5 transition-all">
              Live Demo <ArrowRight className="w-2.5 h-2.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[10px] font-black text-slate-900 hover:text-blue-600 transition px-1">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[10px] font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-30">
            <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-[9px] font-black mb-8 animate-reveal border border-blue-100 shadow-sm">
              <Sparkles className="w-2 h-2 fill-blue-600" />
              <span>Enterprise AI Financial Operating System</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-[12px] md:text-sm text-slate-500 max-w-lg mx-auto mb-10 font-medium leading-relaxed animate-reveal delay-200">
              Track transactions, automate GST, and predict inventory with enterprise intelligence powered by Infosys tech standards.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-lg font-black text-sm hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg font-black text-sm hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                Explore Live BI
              </button>
            </div>

            {/* Visual Feature Grid */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-reveal delay-400 max-w-4xl mx-auto">
               <MiniCard icon={<SmartphoneNfc className="text-blue-500 w-4 h-4" />} label="Quick Tap" />
               <MiniCard icon={<Cpu className="text-indigo-500 w-4 h-4" />} label="AI Logic" />
               <MiniCard icon={<Fingerprint className="text-emerald-500 w-4 h-4" />} label="Secure" />
               <MiniCard icon={<Shield className="text-rose-500 w-4 h-4" />} label="Compliant" />
            </div>

            {/* Dashboard Mockup Section */}
            <div className="mt-20 relative max-w-4xl mx-auto animate-reveal delay-400">
               <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-[3rem] blur-[80px] opacity-40"></div>
               <div className="relative glass p-1 rounded-[2rem] shadow-xl border border-slate-200/30">
                  <div className="relative overflow-hidden rounded-[1.8rem]">
                     <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                       alt="System Interface" 
                       className="w-full object-cover aspect-[16/7] hover:scale-105 transition-transform duration-[4s]" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  </div>
                  <div className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl shadow-lg border border-white/50 hidden md:block animate-float">
                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Live Profit</p>
                     <p className="text-sm font-black text-emerald-600">₹84,250</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="platform" className="py-20 bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-4">
             <div className="text-center mb-12 animate-reveal">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">Enterprise core ecosystem.</h2>
                <p className="text-slate-500 font-medium text-[12px] max-w-md mx-auto leading-relaxed">Centralize sales, stock, and reports in one intelligent hub designed for micro-scale.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard 
                  icon={<Zap className="text-blue-600" />}
                  title="2s Recording"
                  description="Optimized for high-velocity environments. Record transactions with zero friction in real-time."
                />
                <FeatureCard 
                  icon={<Smartphone className="text-emerald-600" />}
                  title="Mobile OS"
                  description="Manage your entire business from your pocket with high-fidelity mobile dashboards."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-indigo-600" />}
                  title="Bank Security"
                  description="Data encrypted with global banking standards and Infosys-grade cloud vaulting."
                />
             </div>
          </div>
        </section>

        {/* Deep Feature: Inventory */}
        <section id="inventory" className="py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-6 bg-blue-100/20 rounded-[2rem] blur-[60px]"></div>
                   <div className="relative bg-white p-3 rounded-[2.5rem] shadow-lg border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory Management" 
                        className="rounded-[2rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl border border-white animate-float delay-200">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                               <AlertCircle className="w-4 h-4" />
                            </div>
                            <div>
                               <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Low Stock</p>
                               <p className="text-[12px] font-black text-slate-900">Havells Cable 90m</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-2.5 bg-blue-600 rounded-xl mb-6 shadow-lg shadow-blue-100">
                      <Database className="text-white w-5 h-5" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">Stock linked to <br /><span className="text-blue-600">Actual Margins.</span></h3>
                   <p className="text-slate-600 text-[12px] leading-relaxed mb-8 font-medium">
                      Tracks unit costs across batches and calculates actual net profit automatically—accounting for GST and operational overheads in real-time.
                   </p>
                   <div className="space-y-3">
                      <CheckListItem text="Automated COGS Engine" />
                      <CheckListItem text="Batch-wise profit tracking" />
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
                 <div className="order-2 lg:order-1 animate-reveal">
                    <div className="inline-flex p-2.5 bg-blue-500 rounded-xl mb-6 shadow-lg shadow-blue-500/20">
                       <Brain className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight tracking-tight">AI Forecasting for <br /><span className="text-blue-400">Indian Seasons.</span></h3>
                    <p className="text-blue-100/70 text-[12px] leading-relaxed mb-8 font-medium">
                       Backed AI analyzes Diwali, Holi, and wedding cycles to predict exactly when to stock up and when to hold onto your cash reserves.
                    </p>
                    <button 
                      onClick={navigateToStreamlit}
                      className="group bg-white text-slate-900 px-6 py-3 rounded-lg font-black text-[12px] flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all shadow-xl active:scale-95"
                    >
                       Live Forecasts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 <div className="order-1 lg:order-2 animate-reveal delay-200">
                    <div className="bg-white/5 backdrop-blur-2xl p-3 rounded-[2rem] border border-white/10 shadow-2xl relative">
                       <img 
                         src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                         alt="Predictive Analytics" 
                         className="rounded-[1.8rem] w-full mix-blend-overlay opacity-60" 
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-3 bg-blue-600/20 rounded-full animate-pulse">
                             <Sparkles className="text-blue-400 w-8 h-8" />
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
                 <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">Simple scale-ready pricing.</h2>
                 <p className="text-slate-500 font-medium text-[12px]">No hidden costs. Scale smoothly without friction.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="For solo entrepreneurs."
                    features={["1,000 Sales/Mo", "Basic Stock", "1 Location", "PDF Bills"]}
                 />
                 <PricingCard 
                    tier="Business" 
                    price="₹1,499" 
                    desc="For growing retailers."
                    recommended
                    features={["Unlimited Sales", "AI Forecasts", "GST Sync", "WhatsApp Help", "Multi-Staff"]}
                 />
                 <PricingCard 
                    tier="Pro" 
                    price="₹4,999" 
                    desc="For multi-store chains."
                    features={["API Connect", "Unlimited Stores", "Dedicated Lead", "White-Label"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-2xl mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight animate-reveal">Digitize your growth <br />story today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-reveal delay-200">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-10 py-4 rounded-lg font-black text-base hover:bg-blue-50 transition shadow-2xl active:scale-95"
                 >
                    Get Started Free
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/20 px-8 py-3.5 rounded-lg font-black text-sm hover:bg-white/10 transition active:scale-95"
                 >
                    Consult Architect
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
                    <div className="p-1.5 bg-blue-600 rounded-lg shadow-md">
                        <BarChart3 className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-6 font-medium leading-relaxed text-[11px]">
                     Building intelligent financial infrastructure for the next generation of Bharat's entrepreneurs.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Powered by</span>
                    <img src={INFOSYS_LOGO} alt="Infosys" className="h-3 grayscale opacity-30" />
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Platform</h4>
                  <ul className="space-y-3 text-slate-500 font-bold text-[10px]">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Core Stack</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory OS</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Engine</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Architect</h4>
                  <ul className="space-y-3 text-slate-500 font-bold text-[10px]">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Tech Log</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Status</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
               <p className="text-[8px] text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2026 BizSight AI • Developed by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline">Sourish Dey</a>
               </p>
               <div className="flex gap-6 text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">
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
  <div className="bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-blue-200 transition-all shadow-md hover:shadow-blue-50 hover:-translate-y-1 duration-500 group text-left">
    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-5 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-5 h-5 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-base font-black text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[11px]">{description}</p>
  </div>
);

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-6 rounded-[2rem] border-2 flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full shadow-lg">
            Best Seller
         </span>
      )}
      <p className={`text-[9px] font-black uppercase tracking-[0.3em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-5">
         <span className="text-4xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-1 text-[10px]">/mo</span>}
      </div>
      <p className={`text-[11px] mb-8 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-3.5 mb-10 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-2.5 text-[10px] font-black tracking-tight">
               <Check className={`w-3 h-3 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-3 rounded-lg font-black transition-all text-center block text-[11px] active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Choose Plan
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-2.5 text-[11px] font-black text-slate-700 group cursor-default">
      <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <Check className="w-2.5 h-2.5 text-blue-600 group-hover:text-white" />
      </div>
      {text}
   </div>
);

const MiniCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-2.5 hover:border-blue-200 hover:-translate-y-1 transition-all">
      <div className="p-1.5 bg-slate-50 rounded-lg">{icon}</div>
      <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
   </div>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
