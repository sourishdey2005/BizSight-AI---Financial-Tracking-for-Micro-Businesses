import React, { useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Database,
  Brain,
  BarChart3,
  Check,
  Star,
  Globe,
  Zap,
  Smartphone,
  Shield,
  Clock,
  Layout,
  Layers
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png";
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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-2xl z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-2 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-500">
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
              Live Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition px-4">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-7 py-3 rounded-[1.25rem] text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-indigo-400/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full text-xs font-bold mb-10 animate-reveal border border-blue-100 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-blue-600" />
              <span>Scale with India's Smartest Kirana Intelligence Platform</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 leading-[0.82] tracking-tighter animate-reveal delay-100">
              Grow your <br /><span className="text-gradient">business by 2x.</span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed animate-reveal delay-200">
              The financial OS built for the speed of Indian SME commerce. Track stock, manage cashflow, and predict profits with 92% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-14 py-6 rounded-[2.5rem] font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-12 py-6 rounded-[2.5rem] font-bold text-xl hover:bg-slate-50 transition-all shadow-lg active:scale-95"
              >
                Launch Demo
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-32 pt-16 border-t border-slate-100 animate-reveal delay-300">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Trusted by Indian Market Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-7" />
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
                    <Globe className="w-7 h-7 text-blue-600" /> BHARAT_COMMERCE
                </div>
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900 italic">
                    <Zap className="w-7 h-7 fill-blue-600 text-blue-600" /> QUICK_PAY
                </div>
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
                    <Database className="w-7 h-7 text-indigo-600" /> SME_CORE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-32 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-24 animate-reveal">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">One Platform. Total Control.</h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">Stop using paper logs and messy WhatsApp groups. Centralize your operations today.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-10">
                <FeatureCard 
                  icon={<Smartphone className="text-blue-600" />}
                  title="Kirana-Ready UI"
                  description="Optimized for busy store counters. Log sales in under 3 seconds with one-tap category selection."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-emerald-600" />}
                  title="GST & Tax Ready"
                  description="Automatic GSTIN parsing and monthly tax summaries. Stay compliant without expensive accounting software."
                />
                <FeatureCard 
                  icon={<Layers className="text-indigo-600" />}
                  title="Multi-Store Sync"
                  description="Manage inventory across 5+ locations from a single dashboard. Real-time stock transfer tracking."
                />
             </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-6 bg-blue-100 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="relative bg-white p-6 rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory Intelligence" 
                        className="rounded-[2.75rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute bottom-10 left-10 right-10 p-6 glass-panel rounded-3xl animate-float">
                         <div className="flex items-center justify-between">
                            <p className="font-black text-blue-900">Stock Alert: LED Lights</p>
                            <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[10px] font-bold">Only 5 left</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-4 bg-blue-600 rounded-3xl mb-8 shadow-2xl shadow-blue-200">
                      <Database className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">Real-time Stock <br />Tracking with COGS.</h3>
                   <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">
                      Linking your stock to your sales has never been easier. BizSight tracks your unit costs across different batches and calculates your actual net profit automatically.
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
                         <p className="text-4xl font-black text-emerald-600 mb-2">Live</p>
                         <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Profit Calc</p>
                      </div>
                      <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-400 hover:bg-white transition-all shadow-sm">
                         <p className="text-4xl font-black text-blue-600 mb-2">Smart</p>
                         <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Batch Sync</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 animate-reveal">
                   <div className="inline-flex p-4 bg-indigo-600 rounded-3xl mb-8 shadow-2xl shadow-indigo-200">
                      <Brain className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">Predict Your Success <br />with BizSight AI.</h3>
                   <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">
                      India's commerce is seasonal. Our AI analyzes regional festival trends and your history to predict exactly when to stock up on Diwali lights or Holi colors.
                   </p>
                   <ul className="space-y-5 mb-10">
                      <li className="flex items-center gap-4 text-slate-700 font-bold text-lg"><Check className="text-blue-600 w-7 h-7 bg-blue-50 p-1.5 rounded-full" /> 92% Sales Forecast Accuracy</li>
                      <li className="flex items-center gap-4 text-slate-700 font-bold text-lg"><Check className="text-blue-600 w-7 h-7 bg-blue-50 p-1.5 rounded-full" /> Market Trend Analysis</li>
                      <li className="flex items-center gap-4 text-slate-700 font-bold text-lg"><Check className="text-blue-600 w-7 h-7 bg-blue-50 p-1.5 rounded-full" /> Automated Growth Path</li>
                   </ul>
                   <button onClick={navigateToStreamlit} className="group bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-bold text-xl flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-2xl active:scale-95">
                      Explore AI Insights <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
                <div className="order-1 lg:order-2 animate-reveal delay-200">
                   <div className="bg-white p-6 rounded-[3.5rem] shadow-2xl border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                        alt="AI Analytics Dashboard" 
                        className="rounded-[2.75rem] w-full" 
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-24">
                 <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Fair pricing. No BS.</h2>
                 <p className="text-slate-500 font-medium text-lg">Choose a plan that matches your current business stage.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10 items-stretch">
                 <PricingCard 
                    tier="Community" 
                    price="Free" 
                    desc="For the rising stars starting their journey."
                    features={["Unlimited Transactions", "Basic Inventory", "1 Location", "PDF Invoices"]}
                 />
                 <PricingCard 
                    tier="Business Pro" 
                    price="₹1,499" 
                    desc="Everything you need to dominate your market."
                    recommended
                    features={["AI Demand Forecast", "GST Automations", "Multi-Store Sync", "Priority WhatsApp Support", "Advanced Analytics"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="Custom" 
                    desc="For chains and multi-region franchises."
                    features={["Custom AI Models", "Unlimited Locations", "Dedicated Manager", "White-label Dashboard"]}
                 />
              </div>
           </div>
        </section>

        {/* Live Demo Redirect section */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-tight">See the Future <br />of Retail.</h2>
              <p className="text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-medium">
                 Experience the live dashboard used by thousands of SMEs across India. Interactive charts, real-time logging, and predictive insights.
              </p>
              <button 
                onClick={navigateToStreamlit}
                className="bg-white text-blue-600 px-16 py-7 rounded-[3rem] font-black text-2xl hover:bg-blue-50 transition shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] active:scale-95"
              >
                Launch Live Demo Now
              </button>
           </div>
        </section>
      </main>

      <footer className="bg-white py-24 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-20 mb-24">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-blue-600 rounded-2xl shadow-lg shadow-blue-100">
                        <BarChart3 className="text-white w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed text-lg">
                     Building the next generation of financial tools for India's 60M+ small business entrepreneurs.
                  </p>
                  <img src={INFOSYS_LOGO} alt="Infosys Partner" className="h-6 grayscale opacity-20" />
               </div>
               
               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-10">Resources</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-sm">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Platform Guide</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory Mastery</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Documentation</a></li>
                     <li><button onClick={navigateToStreamlit} className="text-blue-600">Dashboard Demo</button></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-10">Company</h4>
                  <ul className="space-y-6 text-slate-500 font-bold text-sm">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Engineering Blog</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Open Source</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
               <p className="text-xs text-slate-400 font-black uppercase tracking-[0.4em]">
                  © 2024 BizSight AI. Engineered by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline decoration-blue-600/20">Sourish Dey</a>
               </p>
               <div className="flex gap-12 text-xs font-black text-slate-400 uppercase tracking-[0.4em]">
                  <a href="#" className="hover:text-slate-900 transition">Privacy</a>
                  <a href="#" className="hover:text-slate-900 transition">Terms</a>
                  <a href="#" className="hover:text-slate-900 transition">Security</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-12 rounded-[3.5rem] border-2 flex flex-col transition-all duration-500 relative group ${
      recommended ? 'bg-slate-900 border-slate-900 text-white shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-xl'
   }`}>
      {recommended && (
         <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-2xl shadow-blue-500/50">
            Most Selected
         </span>
      )}
      <p className={`text-sm font-black uppercase tracking-[0.3em] mb-6 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-8">
         <span className="text-7xl font-black tracking-tighter">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-3">/month</span>}
      </div>
      <p className={`text-sm mb-12 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-6 mb-16 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-4 text-sm font-bold tracking-tight">
               <div className={`p-1.5 rounded-full ${recommended ? 'bg-blue-400/20' : 'bg-emerald-50'}`}>
                  <Check className={`w-3.5 h-3.5 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               </div> 
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-6 rounded-[1.75rem] font-black transition-all text-center block text-xl active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-900/50' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Start Free Trial
      </a>
   </div>
);

const TestimonialCard = ({ quote, author, role }: any) => (
   <div className="bg-slate-800/40 p-12 rounded-[3.5rem] border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 flex flex-col justify-between group">
      <div>
         <div className="flex gap-1.5 mb-10">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
         </div>
         <p className="text-slate-200 text-2xl font-medium italic leading-[1.6] mb-12 group-hover:text-white transition-colors">"{quote}"</p>
      </div>
      <div className="flex items-center gap-6">
         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center font-black text-white text-2xl shadow-xl">
            {author[0]}
         </div>
         <div>
            <p className="text-xl font-black text-white">{author}</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{role}</p>
         </div>
      </div>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-12 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all shadow-2xl shadow-slate-200/50 hover:shadow-blue-100 hover:-translate-y-3 duration-500">
    <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-10 h-10' })}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-5">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-lg">{description}</p>
  </div>
);