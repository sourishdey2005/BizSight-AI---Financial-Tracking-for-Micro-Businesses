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
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 text-[13px] leading-relaxed">
      {/* Top Branding Section */}
      <div className="bg-slate-50 py-4 px-4 border-b border-slate-100 relative z-[70]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             <img src={INFOSYS_LOGO} alt="Infosys" className="h-4 sm:h-5 opacity-80" />
             <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden sm:block">Strategic Enterprise Partner</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[9px] font-black text-emerald-600 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> Secure Banking API
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-black text-blue-600 uppercase tracking-widest">
              <Globe className="w-3 h-3" /> 24/7 Global Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full glass z-50 border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="p-2 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest mt-1">Intelligent Commerce</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black text-slate-500 uppercase tracking-widest">
            <a href="#platform" className="hover:text-blue-600 transition-colors relative group">Platform</a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors relative group">Inventory</a>
            <a href="#analytics" className="hover:text-blue-600 transition-colors relative group">Analytics</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors relative group">Pricing</a>
            <button onClick={navigateToStreamlit} className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
              Live Demo <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={navigateToStreamlit} className="hidden sm:block text-[11px] font-black text-slate-900 hover:text-blue-600 transition px-2">
              Login
            </button>
            <button 
              onClick={navigateToStreamlit}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[11px] font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
            <div className="absolute top-0 left-10 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[130px]"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-[10px] font-black mb-10 animate-reveal border border-blue-100 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 fill-blue-600" />
              <span>Next-Gen AI Powered Financial Operating System</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter animate-reveal delay-100">
              Modern commerce, <br /><span className="text-gradient">intelligently simplified.</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-12 font-medium leading-relaxed animate-reveal delay-200">
              Track every transaction, automate your GST compliance, and predict inventory needs with enterprise-grade intelligence powered by Infosys tech standards.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300">
              <button 
                onClick={navigateToStreamlit}
                className="group w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-base hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={navigateToStreamlit}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-black text-base hover:bg-slate-50 transition-all shadow-md active:scale-95"
              >
                Explore Live BI
              </button>
            </div>

            {/* Visual Feature Grid */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-reveal delay-400 max-w-6xl mx-auto">
               <MiniCard icon={<SmartphoneNfc className="text-blue-500" />} label="Quick Tap Sales" />
               <MiniCard icon={<Cpu className="text-indigo-500" />} label="AI Forecasting" />
               <MiniCard icon={<Fingerprint className="text-emerald-500" />} label="Secure Access" />
               <MiniCard icon={<Shield className="text-rose-500" />} label="Audit-Ready" />
            </div>

            {/* Dashboard Mockup Section */}
            <div className="mt-24 relative max-w-5xl mx-auto animate-reveal delay-400">
               <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-[4rem] blur-[100px] opacity-50"></div>
               <div className="relative glass p-1.5 rounded-[2.5rem] shadow-2xl border border-slate-200/40">
                  <div className="relative overflow-hidden rounded-[2.2rem]">
                     <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                       alt="System Interface" 
                       className="w-full object-cover aspect-[16/7] hover:scale-105 transition-transform duration-[3s]" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  </div>
                  {/* Floating Metric */}
                  <div className="absolute -top-6 -right-6 glass p-5 rounded-2xl shadow-2xl border border-white/50 hidden md:block animate-float">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Profit</p>
                     <p className="text-xl font-black text-emerald-600">₹84,250.00</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section id="platform" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16 animate-reveal">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">The ultimate ecosystem.</h2>
                <p className="text-slate-500 font-medium text-sm max-w-lg mx-auto leading-relaxed">Centralize your sales, stock, and reports in one intelligent hub designed for scale.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<Zap className="text-blue-600" />}
                  title="Real-Time Logging"
                  description="Optimized for high-velocity environments. Record sales and expenses in under 2 seconds with zero friction."
                />
                <FeatureCard 
                  icon={<Smartphone className="text-emerald-600" />}
                  title="Mobile-First Dashboard"
                  description="Manage your entire business from your pocket. High-fidelity mobile interface with instant notifications."
                />
                <FeatureCard 
                  icon={<ShieldCheck className="text-indigo-600" />}
                  title="Enterprise Security"
                  description="Your data is encrypted using global banking standards. Regular backups and Infosys-grade cloud vaulting."
                />
             </div>
          </div>
        </section>

        {/* Deep Feature: Inventory */}
        <section id="inventory" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative group animate-reveal">
                   <div className="absolute -inset-10 bg-blue-100/30 rounded-[3rem] blur-[80px] group-hover:bg-blue-200/30 transition-colors duration-1000"></div>
                   <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Inventory Management" 
                        className="rounded-[2.5rem] w-full aspect-[4/3] object-cover shadow-inner hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute -bottom-8 -left-8 glass p-6 rounded-3xl shadow-2xl border border-white animate-float delay-200">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                               <AlertCircle className="text-rose-600 w-5 h-5" />
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Low Stock</p>
                               <p className="text-sm font-black text-slate-900">Havells Cable 90m</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="animate-reveal delay-200">
                   <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-8 shadow-xl shadow-blue-100">
                      <Database className="text-white w-6 h-6" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">Stock linked directly to <br /><span className="text-blue-600">Profit Margins.</span></h3>
                   <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 font-medium">
                      Most inventory tools are just lists. BizSight tracks your unit costs across batches and calculates actual net profit automatically—accounting for GST and operational overheads in real-time.
                   </p>
                   <div className="space-y-4">
                      <CheckListItem text="Automated COGS calculation" />
                      <CheckListItem text="Batch-wise profit tracking" />
                      <CheckListItem text="Multi-warehouse synchronization" />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* AI & Analytics */}
        <section id="analytics" className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="order-2 lg:order-1 animate-reveal">
                    <div className="inline-flex p-3 bg-blue-500 rounded-2xl mb-8 shadow-xl shadow-blue-500/20">
                       <Brain className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight tracking-tight">AI Forecasting for <br /><span className="text-blue-400">Bharat's Economy.</span></h3>
                    <p className="text-blue-100/70 text-sm md:text-base leading-relaxed mb-10 font-medium">
                       Our Infosys-backed AI analyzes seasonal cycles like Diwali, Holi, and wedding seasons to predict exactly when you'll need more stock and when to hold onto your cash.
                    </p>
                    <button 
                      onClick={navigateToStreamlit}
                      className="group bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-sm flex items-center gap-3 hover:bg-blue-400 hover:text-white transition-all shadow-2xl active:scale-95"
                    >
                       View Live Forecasts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 <div className="order-1 lg:order-2 animate-reveal delay-200">
                    <div className="bg-white/5 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/10 shadow-2xl">
                       <img 
                         src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1200" 
                         alt="Predictive Analytics" 
                         className="rounded-[2rem] w-full mix-blend-overlay opacity-60" 
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-4 bg-blue-600/20 rounded-full animate-pulse">
                             <Sparkles className="text-blue-400 w-10 h-10" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Tailored for every scale.</h2>
                 <p className="text-slate-500 font-medium text-sm">Scale up smoothly without hidden costs or sudden jumps.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                 <PricingCard 
                    tier="Basic" 
                    price="Free" 
                    desc="Perfect for solo entrepreneurs."
                    features={["1,000 Sales/Mo", "Basic Stock", "1 Location", "PDF Invoices"]}
                 />
                 <PricingCard 
                    tier="Business" 
                    price="₹1,499" 
                    desc="Built for growing retail shops."
                    recommended
                    features={["Unlimited Sales", "AI Predictions", "GST Automations", "WhatsApp Support", "Multi-User Roles"]}
                 />
                 <PricingCard 
                    tier="Pro" 
                    price="₹4,999" 
                    desc="For multi-store enterprises."
                    features={["Custom BI Connect", "Unlimited Stores", "Dedicated Manager", "White-Label Ready"]}
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-slate-950 text-white relative overflow-hidden text-center">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight animate-reveal">Digitize your growth <br />story today.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-200">
                 <button 
                  onClick={navigateToStreamlit}
                  className="bg-white text-blue-600 px-12 py-4.5 rounded-xl font-black text-lg hover:bg-blue-50 transition shadow-2xl active:scale-95"
                 >
                    Get Started Free
                 </button>
                 <a 
                  href={PORTFOLIO_URL} 
                  target="_blank" 
                  className="text-white border border-white/30 px-10 py-4 rounded-xl font-black text-base hover:bg-white/10 transition active:scale-95"
                 >
                    Consult Architect
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3.5 mb-8">
                    <div className="p-1.5 bg-blue-600 rounded-lg shadow-md">
                        <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-8 font-medium leading-relaxed text-[12px]">
                     Intelligent financial tracking and inventory management for the next generation of Indian micro-commerce.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Powered by</span>
                    <img src={INFOSYS_LOGO} alt="Infosys" className="h-4 grayscale opacity-40 hover:opacity-100 transition-opacity" />
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-6">Explore</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-[12px]">
                     <li><a href="#platform" className="hover:text-blue-600 transition">Core Features</a></li>
                     <li><a href="#inventory" className="hover:text-blue-600 transition">Inventory OS</a></li>
                     <li><a href="#analytics" className="hover:text-blue-600 transition">AI Predictions</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.4em] mb-6">Contact</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-[12px]">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Sourish Dey</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Technical Blog</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Platform Status</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.5em]">
                  © 2024 BizSight AI • Developed by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition underline">Sourish Dey</a>
               </p>
               <div className="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-[0.5em]">
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
  <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all shadow-lg hover:shadow-blue-50 hover:-translate-y-2 duration-500 group text-left">
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:bg-blue-50 transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-6 h-6 group-hover:scale-110 transition-transform' })}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium text-[12px]">{description}</p>
  </div>
);

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-8 rounded-[2.5rem] border-2 flex flex-col transition-all duration-500 relative group hover-lift ${
      recommended ? 'bg-slate-950 border-slate-900 text-white shadow-2xl z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200 shadow-sm'
   }`}>
      {recommended && (
         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full shadow-lg">
            Best Seller
         </span>
      )}
      <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-6">
         <span className="text-4xl font-black tracking-tighter leading-none">{price}</span>
         {price.includes('₹') && <span className="text-slate-400 font-bold mb-1.5 text-xs">/mo</span>}
      </div>
      <p className={`text-[12px] mb-10 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-4 mb-10 flex-1">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3 text-[11px] font-black tracking-tight">
               <Check className={`w-3.5 h-3.5 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} />
               {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         className={`w-full py-4 rounded-xl font-black transition-all text-center block text-[13px] active:scale-95 ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/40' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Choose Plan
      </a>
   </div>
);

const CheckListItem = ({ text }: { text: string }) => (
   <div className="flex items-center gap-3 text-[12px] font-black text-slate-700 group cursor-default">
      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
         <Check className="w-3 h-3 text-blue-600 group-hover:text-white" />
      </div>
      {text}
   </div>
);

const MiniCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
   <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 hover:border-blue-200 hover:-translate-y-1 transition-all">
      <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{label}</span>
   </div>
);

const AlertCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
