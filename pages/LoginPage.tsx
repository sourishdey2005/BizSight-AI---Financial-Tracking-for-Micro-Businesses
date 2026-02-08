
import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader2, CheckCircle2, TrendingUp } from 'lucide-react';
// Import User type
import { User } from '../types';

const INFOSYS_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

// Define props for LoginPage
interface LoginPageProps {
  onLogin: (userData: User) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate auth handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Call onLogin to update app state
      onLogin({
        id: '1',
        name: 'Rahul Sharma',
        email: email,
        role: 'Owner',
        businessId: 'biz_123'
      });
      
      // Load in same window
      window.location.href = STREAMLIT_URL;
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Side: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 gradient-mesh p-16 flex-col justify-between text-white relative">
        <div className="relative z-10">
          <img src={INFOSYS_LOGO} alt="Infosys" className="h-8 brightness-0 invert opacity-90 mb-12" />
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Intelligent tracking <br />for the modern seller.
          </h1>
          <p className="text-blue-100 text-lg max-w-md">
            BizSight AI transforms raw data into actionable insights, helping thousands of Indian sellers scale faster.
          </p>
        </div>

        <div className="relative z-10 glass-panel p-8 rounded-3xl bg-white/10 border-white/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center">
              <TrendingUp className="text-blue-900 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Live Insight</p>
              <p className="text-xl font-bold">Average +22% Profit Growth</p>
            </div>
          </div>
          <p className="text-sm text-blue-100">Across verified BizSight businesses in Q3 2024.</p>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-24 bg-slate-50 relative">
        <div className="w-full max-w-md animate-reveal">
          <div className="lg:hidden mb-12">
             <img src={INFOSYS_LOGO} alt="Infosys" className="h-6 mb-2" />
             <h2 className="text-2xl font-black text-blue-900">BizSight AI</h2>
          </div>

          {isSuccess ? (
            <div className="text-center py-12 animate-reveal">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Access Granted</h2>
              <p className="text-slate-500">Redirecting to your BI Dashboard...</p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
                <p className="text-slate-500 mt-3 font-medium">Please enter your credentials to continue.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-reveal delay-100">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
                      placeholder="rahul@kirana.com"
                    />
                  </div>
                </div>
                
                <div className="animate-reveal delay-200">
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-bold text-slate-700">Password</label>
                    <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">Forgot Password?</a>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-slate-200 disabled:opacity-70 animate-reveal delay-300"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>
                  ) : (
                    <><LogIn className="w-5 h-5" /> Sign In</>
                  )}
                </button>
              </form>

              <div className="mt-10 pt-10 border-t border-slate-200 text-center animate-reveal delay-300">
                <p className="text-sm text-slate-500 font-medium">
                  Don't have an account? <a href={STREAMLIT_URL} className="text-blue-600 font-bold hover:underline">Get Started</a>
                </p>
              </div>
            </>
          )}
        </div>

        <footer className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-xs text-slate-400 font-bold">
              Architected by <a href="https://sourishdeyportfolio.vercel.app/" className="text-slate-600 hover:text-blue-600 transition underline decoration-dotted">Sourish Dey</a>
            </p>
        </footer>
      </div>
    </div>
  );
};
