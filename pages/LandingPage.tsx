import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ShieldCheck, 
  Layout, 
  ArrowRight,
  Database,
  Brain,
  BarChart3,
  Check,
  Star,
  Globe,
  Users,
  Layers,
  Zap
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infos_logo.svg/250px-Infosys_logo.svg.png";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

export const LandingPage: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href={STREAMLIT_URL} target="_blank" className="hover:text-blue-600 transition">Live Demo</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition px-4">Login</Link>
            <Link to="/register" className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-200">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold mb-8 animate-reveal">
              <Zap className="w-3 h-3" />
              <span>v2.5 Now Live: AI-Powered Inventory Forecasting</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter animate-reveal delay-100">
              Your business, <br /><span className="text-blue-600">digitized & decoded.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed animate-reveal delay-200">
              BizSight AI is the open-source financial operating system for micro-businesses. Track every cent, predict every sale, and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300">
              <a href={STREAMLIT_URL} target="_blank" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-2xl shadow-blue-200 transition flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/login" className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition">
                View Dashboard
              </Link>
            </div>

            {/* Trusted By Section */}
            <div className="mt-24 pt-12 border-t border-slate-100 animate-reveal delay-300">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by industry innovators</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png" alt="Infosys" className="h-6" />
                <div className="flex items-center gap-2 font-black text-2xl text-slate-900">
                    <Globe className="w-6 h-6" /> GLOBAL_BIZ
                </div>
                <div className="flex items-center gap-2 font-black text-2xl text-slate-900 italic">
                    <Zap className="w-6 h-6 fill-current" /> FAST_TRACK
                </div>
                <div className="flex items-center gap-2 font-black text-2xl text-slate-900">
                    <Database className="w-6 h-6" /> DATA_CORE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Built for shop owners, not accountants.</h2>
                <p className="text-slate-500 font-medium">Everything you need to run a professional business without the complexity.</p>
             </div>
             
             <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="order-2 md:order-1">
                   <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-6 shadow-xl shadow-blue-100">
                      <Brain className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4">Predictive Growth Engine</h3>
                   <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                      Our proprietary AI analyzes your historical sales patterns to predict demand spikes before they happen. Never lose a sale due to lack of stock or missed seasonal opportunities.
                   </p>
                   <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5" /> 92% Forecast Accuracy</li>
                      <li className="flex items-center gap-2 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5" /> Seasonal Pattern Recognition</li>
                      <li className="flex items-center gap-2 text-slate-700 font-bold text-sm"><Check className="text-blue-600 w-5 h-5" /> Revenue Milestone Tracking</li>
                   </ul>
                </div>
                <div className="order-1 md:order-2 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Analytics" className="rounded-[2rem] w-full shadow-inner" />
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
                   <img src="https://images.unsplash.com/photo-1586769852044-692d6e3703a0?auto=format&fit=crop&q=80&w=1000" alt="Inventory" className="rounded-[2rem] w-full" />
                </div>
                <div>
                   <div className="inline-flex p-3 bg-emerald-500 rounded-2xl mb-6 shadow-xl shadow-emerald-100">
                      <Database className="text-white w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-black text-slate-900 mb-4">Real-time Inventory Sync</h3>
                   <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                      Automatically link your COGS to every sale. BizSight calculates your net profit in real-time, subtracting supplier costs, taxes, and shipping automatically.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <p className="text-2xl font-black text-emerald-600 mb-1">Live</p>
                         <p className="text-xs font-bold text-slate-400 uppercase">COGS Calculation</p>
                      </div>
                      <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                         <p className="text-2xl font-black text-blue-600 mb-1">Smart</p>
                         <p className="text-xs font-bold text-slate-400 uppercase">Reorder Alerts</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-24 bg-slate-900 text-white">
           <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                 <p className="text-5xl font-black mb-2">$14M+</p>
                 <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Revenue Tracked</p>
              </div>
              <div>
                 <p className="text-5xl font-black mb-2">2.5K</p>
                 <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Micro-Sellers</p>
              </div>
              <div>
                 <p className="text-5xl font-black mb-2">99.9%</p>
                 <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Platform Uptime</p>
              </div>
              <div>
                 <p className="text-5xl font-black mb-2">15+</p>
                 <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Countries</p>
              </div>
           </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Simple, transparent pricing.</h2>
                 <p className="text-slate-500 font-medium">Choose the plan that fits your current business scale.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 <PricingCard 
                    tier="Open Source" 
                    price="Free" 
                    desc="Perfect for solo entrepreneurs and home businesses."
                    features={["Daily Transaction Logging", "Basic Inventory Sync", "Community Support", "1 User Profile"]}
                 />
                 <PricingCard 
                    tier="Business Pro" 
                    price="$19" 
                    desc="Advanced tools for growing shops and retail teams."
                    recommended
                    features={["Everything in Free", "AI Forecasting Engine", "PDF Export Reports", "Multi-user Roles", "Priority Support"]}
                 />
                 <PricingCard 
                    tier="Enterprise" 
                    price="Custom" 
                    desc="Full-scale solution for multi-location franchises."
                    features={["Global Inventory Control", "Custom AI Models", "Dedicated Account Manager", "White-label Dashboard"]}
                 />
              </div>
           </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-slate-50 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                 <div className="max-w-xl">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">The community loves BizSight.</h2>
                    <p className="text-slate-500 font-medium">Real stories from business owners who digitized their operations.</p>
                 </div>
                 <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
                 </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 <TestimonialCard 
                    quote="Before BizSight, I was using three different spreadsheets. Now I have everything in one dashboard. The AI forecast helped me prepare for the Diwali rush!"
                    author="Anita Sharma"
                    role="Anita's Boutique"
                 />
                 <TestimonialCard 
                    quote="As an online seller, tracking unit costs across multiple suppliers was a nightmare. BizSight's automated COGS is a lifesaver for my margins."
                    author="David Chen"
                    role="Chen Electronics"
                 />
                 <TestimonialCard 
                    quote="The clean UI makes it easy for my staff to log sales without any training. Highly recommended for any small business owner."
                    author="Marco Rossi"
                    role="Cafe Del Mar"
                 />
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to scale your business?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                 Join thousands of businesses already tracking their growth with BizSight AI. Start your 14-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href={STREAMLIT_URL} target="_blank" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition shadow-2xl">
                    Create Account Now
                 </a>
                 <a href={PORTFOLIO_URL} target="_blank" className="text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition">
                    Contact Developer
                 </a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white py-20 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-1.5 bg-blue-600 rounded-lg">
                        <BarChart3 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-900 tracking-tighter">BizSight AI</span>
                  </div>
                  <p className="text-slate-500 max-w-sm mb-6 font-medium leading-relaxed">
                     An open-source intelligence platform designed to empower micro-businesses through data-driven financial tracking and AI forecasting.
                  </p>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png" alt="Infosys Partner" className="h-4 grayscale opacity-40" />
               </div>
               
               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Platform</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-sm">
                     <li><a href="#features" className="hover:text-blue-600 transition">Analytics</a></li>
                     <li><a href="#features" className="hover:text-blue-600 transition">Inventory</a></li>
                     <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
                     <li><a href={STREAMLIT_URL} target="_blank" className="hover:text-blue-600 transition">Live Demo</a></li>
                  </ul>
               </div>

               <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Connect</h4>
                  <ul className="space-y-4 text-slate-500 font-bold text-sm">
                     <li><a href={PORTFOLIO_URL} target="_blank" className="hover:text-blue-600 transition">Developer Portfolio</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Github Repository</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">Twitter / X</a></li>
                     <li><a href="#" className="hover:text-blue-600 transition">LinkedIn</a></li>
                  </ul>
               </div>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                  © 2024 BizSight AI. Developed by <a href={PORTFOLIO_URL} target="_blank" className="text-slate-900 hover:text-blue-600 transition">Sourish Dey</a>
               </p>
               <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-slate-900 transition">Privacy Policy</a>
                  <a href="#" className="hover:text-slate-900 transition">Terms of Service</a>
                  <a href="#" className="hover:text-slate-900 transition">Cookie Policy</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ tier, price, desc, features, recommended = false }: any) => (
   <div className={`p-8 rounded-[2.5rem] border-2 transition-all relative ${
      recommended ? 'bg-slate-900 border-slate-900 text-white shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200'
   }`}>
      {recommended && (
         <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
            Recommended
         </span>
      )}
      <p className={`text-sm font-black uppercase tracking-widest mb-2 ${recommended ? 'text-blue-400' : 'text-blue-600'}`}>{tier}</p>
      <div className="flex items-end gap-1 mb-4">
         <span className="text-5xl font-black">{price}</span>
         {price !== 'Free' && price !== 'Custom' && <span className="text-slate-400 font-bold mb-1">/mo</span>}
      </div>
      <p className={`text-sm mb-8 leading-relaxed font-medium ${recommended ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      <ul className="space-y-4 mb-10">
         {features.map((f: string) => (
            <li key={f} className="flex items-center gap-3 text-sm font-bold tracking-tight">
               <Check className={`w-4 h-4 ${recommended ? 'text-blue-400' : 'text-emerald-500'}`} /> {f}
            </li>
         ))}
      </ul>
      <a 
         href={STREAMLIT_URL} 
         target="_blank" 
         className={`w-full py-4 rounded-2xl font-black transition text-center block ${
         recommended ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-900/20' : 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white'
      }`}>
         Choose {tier}
      </a>
   </div>
);

const TestimonialCard = ({ quote, author, role }: any) => (
   <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
         <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
         </div>
         <p className="text-slate-600 font-medium italic leading-relaxed mb-8">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4">
         <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-blue-600">
            {author[0]}
         </div>
         <div>
            <p className="text-sm font-black text-slate-900">{author}</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{role}</p>
         </div>
      </div>
   </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
  </div>
);