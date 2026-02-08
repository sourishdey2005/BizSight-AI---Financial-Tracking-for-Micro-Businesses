
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
  ChevronRight,
  Quote,
  Store,
  ZapOff,
  Briefcase,
  CheckCircle2
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
            <a href="#verticals" className="hover:text-blue-600 transition-colors">Industries</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
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
        <section className="relative pt-24 pb-16 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-[8px] font-black mb-8 animate-reveal border border-blue-100 shadow-sm uppercase tracking-widest">
              <Sparkles className="w-2.5 h-2.5 fill-blue-600" />
              <span>Unified Intelligence for Indian Micro-Enterprises</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed animate-reveal delay-200">
              High-precision transactional tracking and AI-driven growth forecasting engineered to scale small businesses into market leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-xs hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest"
              >
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-black text-xs hover:bg-slate-50 transition-all shadow-sm active:scale-95 uppercase tracking-widest"
              >
                Watch Product Demo
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-reveal delay-400 max-w-4xl mx-auto">
               <MiniCard icon={<SmartphoneNfc className="text-blue-500 w-5 h-5" />} label="One-Tap Logging" />
               <MiniCard icon={<Cpu className="text-indigo-500 w-5 h-5" />} label="Neural P&L Engine" />
               <MiniCard icon={<Fingerprint className="text-emerald-500 w-5 h-5" />} label="Enterprise Vault" />
               <MiniCard icon={<Shield className="text-rose-500 w-5 h-5" />} label="Audit Compliant" />
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>

        {/* Vertical Scroll Platform Capability Section */}
        <section id="platform" className="py-24 bg-slate-50/20">
          <div className="max-w-6xl mx-auto px-4 text-center">
             <div className="mb-16 animate-reveal">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">The ultimate SME ecosystem.</h2>
                <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Centralizing your complex financial operations into one high-performance, beautiful hub.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
                  icon={<Zap className="text-blue-600" />}
                  title="Zero-Lag Recording"
                  description="Log complex transactions in under 2 seconds with enterprise-grade consistency. Optimized for high-frequency retail counters."
                />
                <FeatureCard 
                  image="https://images.unsplash.com/photo-1512428559083-a401a30c9d75?auto=format&fit=crop&q=80&w=800"
                  icon={<Smartphone className="text-emerald-600" />}
                  title="Mobile Intelligence"
                  description="Real-time access to critical metrics from anywhere on the planet. High-fidelity interface optimized for Android and iOS."
                />
                <FeatureCard 
                  image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  icon={<ShieldCheck className="text-indigo-600" />}
                  title="Secure Infrastructure"
                  description="Banking-standard 256-bit encryption and automated redundant cloud vaulting for all your transactional data."
                />
             </div>
          </div>
        </section>

        {/* NEW SECTION: Industry Verticals */}
        <section id="verticals" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Built for your specific <span className="text-blue-600">niche.</span></h2>
              <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Tailored data models and workflow engines for diverse Indian business sectors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <VerticalCard 
                img="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800"
                title="Kirana & FMCG"
                icon={<Store className="w-5 h-5 text-white" />}
                features={["Fast POS Interface", "Expiry Tracking", "Multi-Unit Support"]}
              />
              <VerticalCard 
                img="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800"
                title="Pharmacy & Meds"
                icon={<CheckCircle2 className="w-5 h-5 text-white" />}
                features={["Batch Management", "Schedule H Compliance", "Supplier Sync"]}
              />
              <VerticalCard 
                img="https://images.unsplash.com/photo-1530124566582-a618bc2615ad?auto=format&fit=crop&q=80&w=800"
                title="Hardware & Tools"
                icon={<Layers className="w-5 h-5 text-white" />}
                features={["Bulk Variations", "Project Estimator", "Credit Management"]}
              />
              <VerticalCard 
                img="https://images.unsplash.com/photo-1556740734-7f951478297c?auto=format&fit=crop&q=80&w=800"
                title="Professional Services"
                icon={<Briefcase className="w-5 h-5 text-white" />}
                features={["Service Invoicing", "Client Database", "Time-based Costing"]}
              />
            </div>
          </div>
        </section>

        {/* Outcomes Showcase Section with Swipe Animation */}
        <section id="outcomes" className="py-24 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-reveal">
              <div className="max-w-2xl">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Measurable Success</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Strategic business <span className="text-blue-400">outcomes.</span></h2>
                <p className="text-slate-400 font-medium text-sm md:text-base leading-relaxed">Every feature in BizSight AI is architected to produce measurable results for your bottom line. Swipe through our core operational pillars.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => scroll('left')}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all shadow-sm border border-white/10 active:scale-90"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all shadow-sm border border-white/10 active:scale-90"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {outcomes.map((outcome, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[300px] md:min-w-[420px] snap-start bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all duration-700 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                    {React.cloneElement(outcome.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{outcome.title}</h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6 italic opacity-80 group-hover:opacity-100 transition-opacity">"{outcome.desc}"</p>
                  <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Outcome Verified <Check className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inventory Intelligence - IMAGE MADE LARGE AND FULL PICTURE VISIBLE */}
        <section id="inventory" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group animate-reveal order-2 lg:order-1">
                   <div className="absolute -inset-10 bg-blue-600/5 rounded-[4rem] blur-[80px] group-hover:bg-blue-600/10 transition-colors"></div>
                   <div className="relative bg-slate-50 p-4 rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden ring-1 ring-slate-900/5 flex items-center justify-center min-h-[500px]">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1600" 
                        alt="Inventory intelligence system showcase" 
                        className="rounded-[3rem] w-full h-auto max-h-[600px] object-contain hover:scale-[1.03] transition-transform duration-1000 shadow-xl" 
                      />
                      <div className="absolute top-12 right-12 glass p-6 rounded-[2rem] border border-white/20 shadow-2xl animate-float">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <TrendingUp className="text-white w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Engine</p>
                            <p className="text-base font-black text-slate-900">+18.4% Efficiency</p>
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200 order-1 lg:order-2">
                   <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-8 shadow-xl shadow-blue-100">
                      <Database className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">Stock linked to <br /><span className="text-gradient">Dynamic Margins.</span></h3>
                   <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium max-w-lg">
                      Move beyond simple counts. Our intelligence engine automatically calculates your absolute net profit per unit—accounting for real-time GST, batch costs, and overheads.
                   </p>
                   <div className="space-y-5">
                      <CheckListItem text="Dynamic COGS Precision Engine" />
                      <CheckListItem text="Batch-level profitability tracking" />
                      <CheckListItem text="Global multi-warehouse synchronization" />
                      <CheckListItem text="AI-powered stockout prevention" />
                   </div>
                   <div className="mt-12">
                      <button onClick={navigateToStreamlit} className="flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-[0.2em] hover:translate-x-1 transition-transform group">
                        Explore Inventory Intelligence <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* NEW SECTION: Mobile Experience (Image Focused) */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-center relative">
              <div className="p-12 lg:p-20 lg:w-1/2 relative z-10 text-center lg:text-left">
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Native Mobile Experience</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">Your business, <br />in your pocket.</h2>
                <p className="text-slate-400 text-base md:text-lg mb-12 max-w-md font-medium leading-relaxed">
                  Log sales while walking the floor. Check stock levels from the warehouse. View profit metrics while commuting. The power of a full ERP, stripped down to its most essential, fastest core.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white hover:text-slate-900 transition-all cursor-default">
                    <Smartphone className="w-6 h-6" />
                    <span className="text-xs font-black uppercase tracking-widest">App Store</span>
                  </div>
                  <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 group hover:bg-white hover:text-slate-900 transition-all cursor-default">
                    <Zap className="w-6 h-6" />
                    <span className="text-xs font-black uppercase tracking-widest">Play Store</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center items-end h-[400px] lg:h-[700px] relative">
                <div className="absolute bottom-0 w-[280px] lg:w-[400px] aspect-[9/19] bg-slate-800 rounded-t-[3rem] border-[8px] border-slate-700 shadow-2xl relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200" 
                    alt="Mobile App Interface" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Mock Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                    <div className="glass p-4 rounded-2xl border border-white/20 mb-4 animate-float">
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Today's Revenue</p>
                      <p className="text-xl font-black text-white">₹42,850.00</p>
                    </div>
                  </div>
                </div>
                {/* Decorative floating dots/shapes around the phone */}
                <div className="absolute top-1/2 right-12 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Testimonials */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Loved by <span className="text-blue-600">thousands</span> of shops.</h2>
              <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Real stories from real entrepreneurs scaling with BizSight AI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <TestimonialCard 
                name="Rahul Sharma"
                role="Owner, Sharma Hardware"
                img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                quote="The inventory tracking is a life-saver. I used to lose 5% of stock due to miscalculations. Now my accuracy is 100%."
              />
              <TestimonialCard 
                name="Ananya Iyer"
                role="Proprietor, Wellness Pharm"
                img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                quote="Being able to check my profit margins on my phone while travelling has changed how I run my shop. Truly indispensable."
              />
              <TestimonialCard 
                name="Vikram Singh"
                role="Director, Singh Superstores"
                img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                quote="The AI predictions correctly warned us about a stockout during Diwali. We prepared in advance and doubled our sales."
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-slate-50/50">
           <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-16 animate-reveal">
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter leading-none">Scale-ready pricing.</h2>
                 <p className="text-slate-500 font-medium text-base">Simple plans designed for every stage of your business growth.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="Perfect for local startups and side-hustles."
                    features={["Up to 1,000 Transactions", "Basic Stock Tracker", "1 Admin Access", "Mobile App"]}
                 />
                 <PricingCard 
                    tier="Business" 
                    price="₹1,499" 
                    desc="Everything needed for high-volume retail shops."
                    recommended
                    features={["Unlimited Transactions", "AI Growth Engine", "GST Sync & Compliance", "24/7 Priority Support", "Batch Management"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="₹4,999" 
                    desc="Strategic oversight for large store chains and networks."
                    features={["API Access & Webhooks", "Custom BI Dashboard Connect", "Dedicated Account Lead", "Custom P&L Logic"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-slate-950 text-white text-center relative overflow-hidden">
           <div className="max-w-3xl mx-auto px-4 relative z-10 animate-reveal">
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-[1.05]">Ready to digitize <br />your business story?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-2xl shadow-white/10"
                 >
                    Get Started Now
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
                 >
                    Contact Developer
                 </a>
              </div>
           </div>
           
           {/* Abstract Background for CTA */}
           <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[200px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[200px]"></div>
           </div>
        </section>
      </main>

      <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-16 mb-24">
               <div className="col-span-1 md:col-span-2 space-y-10">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-600 rounded-2xl shadow-2xl shadow-blue-200 group-hover:scale-110 transition-transform">
                        <BarChart3 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-md font-medium leading-relaxed text-lg">
                     Architecting intelligent, high-performance financial infrastructure for the next generation of global SME leaders.
                  </p>
                  
                  {/* LOGO MADE LARGE AND FULL PICTURE VISIBLE - High Visibility Version */}
                  <div className="flex flex-col gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 max-w-lg group hover:bg-white transition-all hover:shadow-2xl hover:shadow-slate-300/40 border-2 border-slate-200/50">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.6em] mb-1 block">Strategic Founding Engineer</span>
                    <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-10 group/partner">
                      <div className="relative">
                        <div className="absolute -inset-6 bg-blue-600/10 rounded-[3rem] blur-2xl group-hover/partner:blur-3xl transition-all opacity-0 group-hover/partner:opacity-100"></div>
                        <img 
                          src={BUILDER_LOGO} 
                          alt="Lead Developer - Sourish Dey" 
                          className="relative h-40 w-40 rounded-[2.5rem] object-contain bg-white shadow-2xl shadow-blue-200 ring-4 ring-white group-hover/partner:scale-105 transition-transform duration-700 p-4" 
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-3xl font-black text-slate-900 leading-tight">Sourish Dey</span>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mt-3">Principal Product Lead</span>
                        <div className="mt-8 flex items-center gap-3 text-sm font-black text-blue-600 uppercase tracking-tighter hover:gap-5 transition-all">
                          Explore Master Portfolio <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </a>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Platform OS</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-sm uppercase tracking-widest">
                     <li><a href="#platform" className="hover:text-blue-600 transition-colors">Platform Capabilities</a></li>
                     <li><a href="#verticals" className="hover:text-blue-600 transition-colors">Vertical Solutions</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory Intelligence</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition-colors">Growth Forecasting</a></li>
                     <li><a href="#outcomes" className="hover:text-blue-600 transition-colors">Success Pillars</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.4em] mb-10">Strategic Links</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-sm uppercase tracking-widest">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition-colors">Developer Portal</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Enterprise Compliance</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Data Security Vault</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Public Status</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition-colors">Technical Docs</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
               <div className="flex items-center gap-8">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.5em]">
                    © 2026 BizSight AI Platform • Engineered in Bharat by
                  </p>
                  <img src={BUILDER_LOGO} alt="Lead Partner" className="h-16 w-auto max-w-[160px] object-contain opacity-100 bg-slate-50 p-2 rounded-xl" />
               </div>
               <div className="flex gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
                  <a href="#" className="hover:text-slate-900 transition-colors">Privacy Charter</a>
                  <a href="#" className="hover:text-slate-900 transition-colors">Legal Terms</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

// Component helper for Industry Verticals
const VerticalCard = ({ img, title, features, icon }: any) => (
  <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl hover:-translate-y-2 transition-all duration-700">
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-white/20">
        {icon}
      </div>
      <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{title}</h3>
      <ul className="space-y-2 mb-2">
        {features.map((f: string) => (
          <li key={f} className="flex items-center gap-2 text-[10px] font-black text-white/70 uppercase tracking-widest">
            <Check className="w-3 h-3 text-blue-400" /> {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Component helper for Testimonials
const TestimonialCard = ({ name, role, img, quote }: any) => (
  <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-50 transition-all duration-700">
    <div className="mb-8 relative">
      <div className="absolute -inset-3 bg-blue-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <img src={img} alt={name} className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform" />
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
        <Quote className="w-4 h-4 text-white fill-white" />
      </div>
    </div>
    <p className="text-slate-600 text-sm font-medium italic mb-8 leading-relaxed">"{quote}"</p>
    <div>
      <h4 className="text-base font-black text-slate-900 tracking-tight uppercase">{name}</h4>
      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">{role}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description, image }: { icon: React.ReactNode, title: string, description: string, image: string }) => (
  <div className="bg-white rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-2xl hover:shadow-blue-50/50 duration-700 group overflow-hidden flex flex-col">
    <div className="h-48 w-full overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-6 left-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
      </div>
    </div>
    <div className="p-10 pt-4 text-left">
      <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium text-sm">{description}</p>
    </div>
  </div>
);

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-10 rounded-[3rem] border flex flex-col transition-all duration-700 relative group ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-2xl z-10 scale-105' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full shadow-2xl animate-pulse">
            Enterprise Choice
         </span>
      )}
      <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-6">
         <span className="text-4xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className={`font-black mb-1 text-xs ${recommended ? 'text-slate-500' : 'text-slate-400'}`}>/month</span>}
      </div>
      <p className={`text-sm mb-10 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-5 mb-12 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3 text-xs font-black tracking-tight uppercase">
               <Check className={`w-4 h-4 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-5 rounded-2xl font-black transition-all text-center block text-xs uppercase tracking-widest active:scale-95 shadow-xl ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Activate {tier}
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-4 text-sm md:text-base font-black text-slate-700 group cursor-default uppercase tracking-tight">
      <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
         <Check className="w-3 h-3 text-blue-600 group-hover:text-white" />
      </div>
      {text}
   </div>
);

const MiniCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
      <div className="p-2 bg-slate-50 rounded-xl">{icon}</div>
      <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
   </div>
);
