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
  HelpCircle,
  Smartphone,
  Shield,
  Clock
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

export const LandingPage: React.FC<{ user: User | null }> = ({ user }) => {
  // Smooth scroll implementation for anchor links
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
            <div className="p-2 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform">
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
            <a href={STREAMLIT_URL} className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
              Live Demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition px-4">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
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
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-full text-xs font-bold mb-10 animate-reveal border border-blue-100 shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-blue-600" />
              <span>Powering 2,500+ Indian Kirana Stores & SMEs</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter animate-reveal delay-100">
              Your business, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">digitized & decoded.</span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed animate-reveal delay-200">
              The only financial operating system designed for the scale and speed of Indian micro-commerce. Track inventory, manage GST, and predict profits in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-12 py-5 rounded-[2rem] font-bold text-xl hover:bg-slate-50 transition-all shadow-lg active:scale-95"
              >
                Watch Live Demo
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-32 pt-16 border-t border-slate-100 animate-reveal delay-300">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Empowered by Industry Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                <img src={INFOSYS_LOGO} alt="Infosys" className="h-7 hover:scale-105 transition" />
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
                    <Globe className="w-7 h-7 text-blue-600" /> GLOBAL_RETAIL
                </div>
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900 italic">
                    <Zap className="w-7 h-7 fill-blue-600 text-blue-600" /> DHAN_TECH
                </div>
                <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
                    <Database className="w-7 h-7 text-indigo-600" /> DATA_SETU
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Section */}
        <section id="platform" className="py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-24">
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The ultimate SME operating system.</h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">Everything you need to run a professional business without needing an MBA or an IT degree.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Smartphone className="text-blue-600" />}
                  title="Mobile-First Tracking"
                  description="Log sales from your phone while dealing with customers. Lightweight, fast, and works on low-end devices."
                />
                <FeatureCard 
                  icon={<Shield className="text-emerald-600" />}
                  title="GST Ready"
                  description="Automatic tax calculations for every sale. Generate GSTR summaries with a single tap at the end of the month."
                />
                <FeatureCard 
                  icon={<Clock className="text-indigo-600" />}
                  title="24/7 Local Support"
                  description="Stuck? Our expert team is available via WhatsApp and Phone in Hindi, English, and 5 other regional languages."
                />
             </div>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                   <div className="relative bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000" 
                        alt="Retail Inventory Management" 
                        className="rounded-[2.5rem] w-full aspect-square object-cover shadow-inner hover:scale-105 transition-transform duration-700" 
                      />
                   </div>
                </div>
                <div>
                   <div className="inline-flex p-4 bg-blue-600 rounded-3xl mb-8 shadow-2xl shadow-blue-200">
                      <Database className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Smart Inventory with <br />Automatic COGS.</h3>
                   <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                      Linking your stock to your sales has never been easier. BizSight tracks your unit costs across different batches and calculates your actual net profit—after taxes and costs—in real-time.
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                         <p className="text-3xl font-black text-emerald-600 mb-1">Live</p>
                         <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Profit Calculation</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                         <p className="text-3xl font-black text-blue-600 mb-1">Smart</p>
                         <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Reorder Alerts</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                   <div className="inline-flex p-4 bg-indigo-600 rounded-3xl mb-8 shadow-2xl shadow-indigo-200">
                      <Brain className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">AI Forecasting for <br />Seasonal Demands.</h3>
                   <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                      India's commerce runs on seasons. Our AI engine analyzes local festival trends and your historical data to predict exactly when you need more stock and when to hold back.
                   </p>
                   <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-slate-700 font-bold"><Check className="text-blue-600 w-6 h-6" /> 92% Historical Prediction Accuracy</li>
                      <li className="flex items-center gap-3 text-slate-700 font-bold"><Check className="text-blue-600 w-6 h-6" /> Festival Spike Recognition</li>
                      <li className="flex items-center gap-3 text-slate-700 font-bold"><Check className="text-blue-600 w-6 h-6" /> Revenue Milestone Notifications</li>
                   </ul>
                   <button onClick={navigateToStreamlit} className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all">
                      Try AI Forecasting <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
                <div className="order-1 lg:order-2">
                   <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                        alt="Business Intelligence Dashboard" 
                        className="rounded-[2.5rem] w-full" 
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                 <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Fair pricing for Indian SMEs.</h2>
                 <p className="text-slate-500 font-medium text-lg">Scale your plan as your business grows. No hidden charges.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10 items-stretch">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="Perfect for solo vendors and small home setups."
                    features={["Unlimited Transactions", "Basic Inventory", "1 User Profile", "Standard Reports"]}
                 />
                 <PricingCard 
                    tier="Growth Pro" 
                    price="₹1,499" 
                    desc="Advanced intelligence for growing retail stores."
                    recommended
                    features={["Everything in Basic", "AI Forecasting Engine", "GST Report Automations", "Multi-user Roles", "Priority WhatsApp Support"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="Custom" 
                    desc="For multi-location chains and massive operations."
                    features={["Regional Inventory Sync", "Custom AI Models", "Dedicated Manager", "White-label Portal"]}
                 />
              </div>
           </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-slate-900 text-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                 <h2 className="text-5xl font-black mb-6 tracking-tight">Loved by the local community.</h2>
                 <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
                 </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10">
                 <TestimonialCard 
                    quote="BizSight replaced my 4 physical registers. Now I see my real profits on my phone while I'm at the wholesaler."
                    author="Anita Sharma"
                    role="Anita's Fashion Hub, Delhi"
                 />
                 <TestimonialCard 
                    quote="The automated COGS feature showed me that my margins were too thin. I raised prices slightly and my profit grew by 30% in a month."
                    author="Amit Verma"
                    role="Verma Electronics, Bangalore"
                 />
                 <TestimonialCard 
                    quote="Finally a dashboard that isn't confusing. My staff learned how to log entries in 5 minutes."
                    author="Suresh Iyer"
                    role="Iyer's Cafe, Mumbai"
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-blue-600 relative overflow-hidden text-center">
           <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter">Scale your business <br />faster today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-14 py-6 rounded-[2.5rem] font-black text-2xl hover:bg-blue-50 transition shadow-2xl active:scale-95"
                 >
                    Join 2,500+ Businesses
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border-2 border-white/40 px-10 py-5 rounded-[2.5rem] font-bold text-lg hover:bg-white/10 transition active:scale-95"
                 >
                    Contact Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-24 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-blue-600 rounded-xl">
                        <BarChart3 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-8 font-medium leading-relaxed text-lg">
                     The future of intelligent micro-commerce. Empowering the next generation of Indian entrepreneurs.
                  </p>
                  <img src={INFOSYS_LOGO} alt="Infosys Partner" className="h-5 grayscale opacity-30" />
               </div>
               
               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Product</h4>
                  <ul className="space-y-5 text-slate-500 font-bold text-sm">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Platform Overview</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory Tracking</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Forecasting</a></li>
                     <li><a href={STREAMLIT_URL} className="text-blue-600">Live Dashboard</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Community</h4>
                  <ul className="space-y-5 text-slate-500 font-bold text-sm">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Developer Portfolio</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Open Source Repo</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">API Documentation</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
               <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">
                  © 2024 BizSight AI. Designed & Built by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline decoration-blue-600/30">Sourish Dey</a>
               </p>
               <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                  <a href="#" className="hover:text-slate-900 transition">Privacy</a>
                  <a href="#" className="hover:text-slate-900 transition">Terms</a>
                  <a href="#" className="hover:text-slate-900 transition">Cookies</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-10 rounded-[3rem] border-2 flex flex-col transition-all relative ${
      recommended ? 'bg-slate-900 border-slate-900 text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] scale-105 z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-xl'
   }`}>
      {recommended && (
         <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-xl shadow-blue-500/30">
            Most Popular
         </span>
      )}
      <p className={`text-sm font-black uppercase tracking-widest mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-6">
         <span className="text-6xl font-black tracking-tighter">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-2">/mo</span>}
      </div>
      <p className={`text-sm mb-10 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-5 mb-12 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3 text-sm font-bold tracking-tight">
               <div className={`p-1 rounded-full ${recommended ? 'bg-blue-400/20' : 'bg-emerald-50'}`}>
                  <Check className={`w-3 h-3 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               </div> 
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-5 rounded-[1.5rem] font-black transition-all text-center block text-lg ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl shadow-blue-900/50 active:scale-95' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white active:scale-95'
      }`}>
         Choose {tier}
      </a>
   </div>
);

const TestimonialCard = ({ quote, author, role }: any) => (
   <div className="bg-slate-800/50 p-10 rounded-[3rem] border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between group">
      <div>
         <div className="flex gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
         </div>
         <p className="text-slate-200 text-xl font-medium italic leading-relaxed mb-10 group-hover:text-white transition-colors">"{quote}"</p>
      </div>
      <div className="flex items-center gap-5">
         <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-xl">
            {author[0]}
         </div>
         <div>
            <p className="text-lg font-black text-white">{author}</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{role}</p>
         </div>
      </div>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 duration-300">
    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-lg">{description}</p>
  </div>
);