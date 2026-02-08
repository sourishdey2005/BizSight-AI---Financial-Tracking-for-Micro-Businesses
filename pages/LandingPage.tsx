import React, { useEffect, useRef } from 'react';
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
  Fingerprint,
  ArrowLeftRight,
  PieChart,
  FileText,
  Lock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { User } from '../types';

const BUILDER_LOGO = "https://res.cloudinary.com/dodhvvewu/image/upload/v1770584790/9783222e98b0d5141519b41e7203ff9a_pyjqit.webp";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

export const LandingPage: React.FC<{ user: User | null }> = ({ user }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const outcomes = [
    {
      title: "Sales & Expense Logging",
      desc: "Record every transaction instantly via a streamlined, mobile-first interface designed for high-speed commerce.",
      icon: <ArrowLeftRight className="text-blue-600" />
    },
    {
      title: "Automated Profit Calc",
      desc: "Real-time P&L balancing. Automatically determine your net yield per day, week, or month without manual entry.",
      icon: <Zap className="text-amber-600" />
    },
    {
      title: "Category-wise Analysis",
      desc: "Granular breakdown of costs and revenue. Understand exactly which departments are driving your growth.",
      icon: <PieChart className="text-purple-600" />
    },
    {
      title: "Inventory Adjustment",
      desc: "Dynamic stock linking. Adjust levels on the fly to auto-calculate Cost of Goods Sold (COGS) and margins.",
      icon: <Layers className="text-emerald-600" />
    },
    {
      title: "Report Generation",
      desc: "One-click professional PDF and Excel statements. Audit-ready reports for your accountants or stakeholders.",
      icon: <FileText className="text-rose-600" />
    },
    {
      title: "Predictive Trends",
      desc: "Leverage proprietary AI models to forecast sales peaks and stockouts based on your historical behavior.",
      icon: <Brain className="text-indigo-600" />
    },
    {
      title: "BI Data Dashboard",
      desc: "Visual clarity for complex data. Interact with your business health through high-fidelity charts and heatmaps.",
      icon: <BarChart3 className="text-cyan-600" />
    },
    {
      title: "Secure Enterprise Accounts",
      desc: "Robust RBAC (Role-Based Access Control) for multiple staff logins. Your financial vault is encrypted and audited.",
      icon: <ShieldCheck className="text-slate-900" />
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[10px] md:text-[11px] leading-relaxed">
      
      {/* Top Branding Section (Info Bar) */}
      <div className="bg-slate-50 py-2 px-4 border-b border-slate-100 relative z-[70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2">
               <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Enterprise Platform</span>
             </div>
             <div className="h-3 w-px bg-slate-200 hidden sm:block"></div>
             <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Strategic Intelligence Partner</p>
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
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
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
            <a href="#outcomes" className="hover:text-blue-600 transition-colors">Outcomes</a>
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
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-[7px] font-black mb-6 animate-reveal border border-blue-100 shadow-sm uppercase tracking-widest">
              <Sparkles className="w-2 h-2 fill-blue-600" />
              <span>Enterprise AI Financial Platform</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-[10px] md:text-[11px] text-slate-500 max-w-lg mx-auto mb-8 font-medium leading-relaxed animate-reveal delay-200">
              High-precision transactional tracking and growth forecasting designed for the modern Indian micro-enterprise. Engineered for excellence.
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

        {/* Outcomes Showcase Section with Swipe Animation */}
        <section id="outcomes" className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-reveal">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">Strategic business <span className="text-blue-600">outcomes.</span></h2>
                <p className="text-slate-500 font-medium text-[10px] md:text-[11px] leading-relaxed">Every feature in BizSight AI is architected to produce measurable results for your bottom line. Swipe through our core operational pillars.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm border border-slate-100 active:scale-90"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm border border-slate-100 active:scale-90"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {outcomes.map((outcome, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[280px] md:min-w-[340px] snap-start bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-50 group"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                    {React.cloneElement(outcome.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-3 uppercase tracking-tight">{outcome.title}</h3>
                  <p className="text-slate-500 font-medium text-[10px] md:text-[11px] leading-relaxed italic mb-4">"{outcome.desc}"</p>
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Outcome Verified <Check className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inventory Intelligence - IMAGE MADE LARGE AND CLEARLY VISIBLE */}
        <section id="inventory" className="py-24 bg-slate-50/30 overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-10 bg-blue-600/5 rounded-[4rem] blur-[80px] group-hover:bg-blue-600/10 transition-colors"></div>
                   <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-slate-900/5">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1600" 
                        alt="Inventory intelligence system showcase" 
                        className="rounded-[2.5rem] w-full h-full aspect-[16/10] object-cover hover:scale-[1.02] transition-transform duration-1000" 
                      />
                      <div className="absolute bottom-10 left-10 glass p-5 rounded-2xl border border-white/20 shadow-2xl animate-float">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                            <TrendingUp className="text-white w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Real-time Yield</p>
                            <p className="text-sm font-black text-slate-900">+18.4% Efficiency</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-2 bg-blue-600 rounded-xl mb-6 shadow-xl shadow-blue-100">
                      <Database className="text-white w-5 h-5" />
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">Stock linked to <br /><span className="text-gradient">Dynamic Margins.</span></h3>
                   <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 font-medium max-w-lg">
                      Move beyond simple counts. Our intelligence engine automatically calculates your absolute net profit per unit—accounting for real-time GST, batch costs, and overheads.
                   </p>
                   <div className="space-y-4">
                      <CheckListItem text="Dynamic COGS Precision Engine" />
                      <CheckListItem text="Batch-level profitability tracking" />
                      <CheckListItem text="Global multi-warehouse synchronization" />
                      <CheckListItem text="AI-powered stockout prevention" />
                   </div>
                   <div className="mt-10">
                      <button onClick={navigateToStreamlit} className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform">
                        Explore Inventory OS <ArrowRight className="w-4 h-4" />
                      </button>
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

      <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2 space-y-8">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-blue-600 rounded-xl shadow-xl shadow-blue-200">
                        <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm font-medium leading-relaxed text-base">
                     Building intelligent financial infrastructure for the next generation of global entrepreneurs.
                  </p>
                  
                  {/* LOGO MADE LARGE AND CLEARLY VISIBLE */}
                  <div className="flex flex-col gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 max-w-sm group hover:bg-white transition-all hover:shadow-2xl hover:shadow-slate-300/40">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-1">Strategic Engineering Lead</span>
                    <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-blue-600/10 rounded-3xl blur-md group-hover:blur-xl transition-all"></div>
                        <img 
                          src={BUILDER_LOGO} 
                          alt="Engineering Lead Logo" 
                          className="relative h-20 w-20 rounded-[1.5rem] object-cover shadow-2xl shadow-blue-200 ring-4 ring-white group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900 leading-tight">Sourish Dey</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Founding Partner</span>
                      </div>
                    </a>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8">Platform OS</h4>
                  <ul className="space-y-5 text-slate-500 font-bold text-xs uppercase tracking-widest">
                     <li><a href="#platform" className="hover:text-blue-600 transition-colors">Core Features</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory Intelligence</a></li>
                     <li><a href="#outcomes" className="hover:text-blue-600 transition-colors">Business Outcomes</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition-colors">AI Forecasting</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8">Strategic Links</h4>
                  <ul className="space-y-5 text-slate-500 font-bold text-xs uppercase tracking-widest">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition-colors">Developer Portfolio</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Enterprise Support</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Security Vault</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">API Specification</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-6">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.4em]">
                    © 2026 BizSight AI Platform • Engineered by
                  </p>
                  <img src={BUILDER_LOGO} alt="Partner Logo" className="h-10 opacity-100 rounded-xl shadow-md ring-2 ring-slate-100" />
               </div>
               <div className="flex gap-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-slate-900 transition-colors">Privacy Charter</a>
                  <a href="#" className="hover:text-slate-900 transition-colors">Service Terms</a>
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
            Enterprise Choice
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
         Activate {tier}
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-3 text-xs md:text-sm font-black text-slate-700 group cursor-default uppercase tracking-tight">
      <div className="w-4 h-4 rounded-md bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <Check className="w-2.5 h-2.5 text-blue-600 group-hover:text-white" />
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
