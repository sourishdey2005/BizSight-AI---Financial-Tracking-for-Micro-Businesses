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
  ArrowUpRight
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
      {/* Strategic Partnership Header */}
      <div className="bg-slate-950 py-2.5 px-4 text-center relative z-[70] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">Official Strategic Partnership</span>
          <div className="h-3 w-px bg-white/20 mx-1"></div>
          <img src={INFOSYS_LOGO} alt="Infosys" className="h-3 brightness-0 invert opacity-90" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-2 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-1">Bharat Fintech</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold text-slate-600">
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
          </div>

          <div className="flex items-center gap-4">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[12px] font-black text-slate-900 hover:text-blue-600 transition px-2">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[12px] font-black hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-50">
            <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[11px] font-black mb-10 animate-reveal border border-blue-100 shadow-sm">
              <Sparkles className="w-3 h-3 fill-blue-600" />
              <span>India's Most Advanced AI Financial Operating System</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter animate-reveal delay-100">
              Your business, <br /><span className="text-gradient">smartly decoded.</span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed animate-reveal delay-200">
              The financial OS designed for the scale and speed of Indian micro-commerce. Track every paisa, automate GST, and predict profits with Infosys-grade intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-lg active:scale-95"
              >
                Live BI Dashboard
              </button>
            </div>

            {/* Dashboard Preview Mockup */}
            <div className="mt-24 relative max-w-5xl mx-auto animate-reveal delay-400">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3rem] blur-3xl opacity-10"></div>
               <div className="relative glass p-2 rounded-[2.5rem] shadow-2xl border border-slate-200/50">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                    alt="Analytics Dashboard Preview" 
                    className="rounded-[2.25rem] shadow-inner border border-white/50 w-full object-cover aspect-[21/9]" 
                  />
                  <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-2xl border border-slate-200 hidden md:block animate-float">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                           <TrendingUp className="text-emerald-600 w-6 h-6" />
                        </div>
                        <div className="text-left">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Forecast</p>
                           <p className="text-2xl font-black text-slate-900">+14.2%</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-32 pt-16 border-t border-slate-100 animate-reveal delay-400">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-12">Engineered with Global Standards</p>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-6" />
                <div className="flex items-center gap-2.5 font-black text-xl text-slate-900 tracking-tighter">
                    <Globe className="w-5 h-5 text-blue-600" /> BHARAT_FLOW
                </div>
                <div className="flex items-center gap-2.5 font-black text-xl text-slate-900 tracking-tighter italic">
                    <Shield className="w-5 h-5 text-indigo-600" /> SECURE_SETU
                </div>
                <div className="flex items-center gap-2.5 font-black text-xl text-slate-900 tracking-tighter">
                    <Database className="w-5 h-5 text-emerald-600" /> CLOUD_VAULT
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Platform Section */}
        <section id="platform" className="py-32 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-24 animate-reveal">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The ultimate SME ecosystem.</h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed italic">"Transforming Kirana stores into data-driven enterprises with the flick of a switch."</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-10">
                <FeatureCard 
                  icon={<Smartphone className="text-blue-600" />}
                  title="Counter-Speed UX"
                  description="Optimized for the chaos of Indian markets. Log any transaction in 2 taps. High accessibility mode included."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-emerald-600" />}
                  title="Tax & GST Engine"
                  description="Real-time GST compliance. Generate Monthly/Quarterly reports ready for your accountant in one click."
                />
                <FeatureCard 
                  icon={<Layers className="text-indigo-600" />}
                  title="Batch Intelligence"
                  description="Smart batch tracking. Never lose money to expired stock again with automated proximity alerts."
                />
             </div>
          </div>
        </section>

        {/* Inventory Deep-Dive Section */}
        <section id="inventory" className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-8 bg-blue-100 rounded-[4rem] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="relative bg-white p-5 rounded-[3.5rem] shadow-2xl border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Retail Inventory Intelligence" 
                        className="rounded-[2.75rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute bottom-12 left-12 right-12 p-6 glass rounded-3xl shadow-2xl animate-float">
                         <div className="flex items-center justify-between mb-2">
                            <p className="font-black text-slate-900 text-sm">Low Stock Alert: Havells LED</p>
                            <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">Urgent</span>
                         </div>
                         <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div className="bg-rose-500 h-full w-[15%] rounded-full"></div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-4 bg-blue-600 rounded-[2rem] mb-10 shadow-2xl shadow-blue-200">
                      <Database className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-5xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tight">Inventory Linked to <br /><span className="text-blue-600">Actual Cashflow.</span></h3>
                   <p className="text-slate-600 text-xl leading-relaxed mb-12 font-medium">
                      Linking your stock to your sales has never been more powerful. BizSight tracks your unit costs across batches and calculates actual net profit automatically—after GST and operational overheads.
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <ArrowUpRight className="w-12 h-12" />
                         </div>
                         <p className="text-4xl font-black text-emerald-600 mb-2 tracking-tighter">Live</p>
                         <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">COGS Engine</p>
                      </div>
                      <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover-lift relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Clock className="w-12 h-12" />
                         </div>
                         <p className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">99%</p>
                         <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Sync Uptime</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* AI Forecasting Section */}
        <section id="analytics" className="py-32 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div className="order-2 lg:order-1 animate-reveal">
                    <div className="inline-flex p-4 bg-blue-500 rounded-[2rem] mb-10 shadow-2xl shadow-blue-500/20">
                       <Brain className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-5xl font-black text-white mb-8 leading-[1.05] tracking-tight">AI Forecasting for <br /><span className="text-blue-400">Bharat's Seasons.</span></h3>
                    <p className="text-blue-100/70 text-xl leading-relaxed mb-12 font-medium">
                       Indian commerce runs on seasons. Our Infosys-backed AI analyzes Diwali, Holi, and wedding cycles to predict exactly when to stock up and when to save cash.
                    </p>
                    <div className="space-y-6">
                       <BenefitRow text="92.4% Sales Forecast Accuracy" />
                       <BenefitRow text="Automated Festive Stock Analysis" />
                       <BenefitRow text="Smart Profit Leakage Detection" />
                    </div>
                    <button 
                      onClick={navigateToStreamlit}
                      className="mt-14 group bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-blue-400 hover:text-white transition-all shadow-2xl active:scale-95"
                    >
                       Launch AI Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 <div className="order-1 lg:order-2 animate-reveal delay-200">
                    <div className="relative">
                       <div className="absolute -inset-10 bg-blue-400/20 rounded-full blur-[100px] opacity-50"></div>
                       <div className="relative bg-white/5 backdrop-blur-3xl p-6 rounded-[3.5rem] border border-white/10 shadow-2xl">
                          <img 
                            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                            alt="AI Predictive Charts" 
                            className="rounded-[2.75rem] w-full mix-blend-lighten opacity-80" 
                          />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                             <div className="p-6 glass rounded-full animate-pulse border-white/20">
                                <Sparkles className="text-blue-400 w-12 h-12" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-24">
                 <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple pricing, scaled for you.</h2>
                 <p className="text-slate-500 font-medium text-lg">No hidden costs. No confusing tiers. Enterprise features for every shop.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10 items-stretch">
                 <PricingCard 
                    tier="Rising Star" 
                    price="Free" 
                    desc="For local vendors and side-hustles starting out."
                    features={["Unlimited Sales Log", "Basic Inventory", "1 User Profile", "Standard Reports"]}
                 />
                 <PricingCard 
                    tier="Business Pro" 
                    price="₹1,499" 
                    desc="The complete suite for high-velocity retailers."
                    recommended
                    features={["AI Demand Forecast", "Automated GST Summaries", "Multi-User Roles", "Priority WhatsApp Support", "Advanced BI Dashboard"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="Custom" 
                    desc="For massive multi-state operations and chains."
                    features={["Custom AI Models", "Unlimited Locations", "Dedicated Strategist", "White-Label Dashboard"]}
                 />
              </div>
           </div>
        </section>

        {/* Final High-Impact CTA */}
        <section className="py-40 bg-slate-950 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="text-7xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] animate-reveal">Ready to own <br />your data?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal delay-200">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-16 py-7 rounded-[2.5rem] font-black text-2xl hover:bg-blue-50 transition shadow-[0_20px_80px_-15px_rgba(37,99,235,0.4)] active:scale-95"
                 >
                    Get Started Free
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border-2 border-white/20 px-12 py-6 rounded-[2.5rem] font-black text-xl hover:bg-white/10 transition active:scale-95"
                 >
                    Talk to Architect
                 </a>
              </div>
              <p className="mt-12 text-slate-500 font-black text-[10px] uppercase tracking-[0.5em] opacity-50">Join 2,500+ verified Indian businesses</p>
           </div>
        </section>
      </main>

      <footer className="bg-white py-24 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-20 mb-24">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3.5 mb-8">
                    <div className="p-2.5 bg-blue-600 rounded-2xl shadow-lg">
                        <BarChart3 className="text-white w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-12 font-medium leading-relaxed text-lg italic">
                     Building the intelligent financial infrastructure for Bharat's next billion entrepreneurs.
                  </p>
                  <div className="flex items-center gap-4">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Powered by</span>
                     <img src={INFOSYS_LOGO} alt="Infosys" className="h-5 grayscale opacity-30" />
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Platform</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-[13px]">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Tech Stack</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory OS</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Predictions</a></li>
                     <li><button onClick={navigateToStreamlit} className="text-blue-600 font-black">Live Dashboard</button></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Architect</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-[13px]">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Engineering Log</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">System Status</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Privacy Vault</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">
                  © 2024 BizSight AI • Designed & Engineered by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline decoration-blue-600/20">Sourish Dey</a>
               </p>
               <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
                  <a href="#" className="hover:text-slate-900 transition">Security</a>
                  <a href="#" className="hover:text-slate-900 transition">Legal</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-10 rounded-[3rem] border-2 flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-2xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-xl'
   }`}>
      {recommended && (
         <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.4em] px-6 py-3 rounded-full shadow-2xl shadow-blue-500/50 flex items-center gap-2">
            <Zap className="w-3 h-3 fill-white" /> Recommended
         </div>
      )}
      <p className={`text-[11px] font-black uppercase tracking-[0.4em] mb-6 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-8">
         <span className="text-6xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-2 text-sm">/mo</span>}
      </div>
      <p className={`text-[13px] mb-12 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-6 mb-16 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3.5 text-[12px] font-black tracking-tight">
               <Check className={`w-4 h-4 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-5 rounded-2xl font-black transition-all text-center block text-lg active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-900/40' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Start Trial
      </a>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2.75rem] border border-slate-100 hover:border-blue-200 transition-all shadow-xl hover:shadow-blue-50 hover:-translate-y-2 duration-500 group text-left relative overflow-hidden">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
    <div className="w-16 h-16 bg-slate-50 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-inner group-hover:bg-blue-50 transition-colors relative z-10">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-8 h-8 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[13px] relative z-10">{description}</p>
  </div>
);

const BenefitRow = ({ text }: { text: string }) => (
   <div className="flex items-center gap-4 text-blue-100 font-black text-sm group">
      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
         <Check className="w-3 h-3 text-blue-400 group-hover:text-white" />
      </div>
      {text}
   </div>
);
