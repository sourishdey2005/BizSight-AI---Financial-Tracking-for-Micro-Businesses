import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader2, CheckCircle2, TrendingUp } from 'lucide-react';
import { User } from '../types';

const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

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
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      onLogin({
        id: '1',
        name: 'Rahul Sharma',
        email: email,
        role: 'Owner',
        businessId: 'biz_123'
      });
      
      window.location.href = STREAMLIT_URL;
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden text-[11px] md:text-[12px]">
      {/* Left Side: Visual/Branding */}
      <div className="hidden lg:flex w-1/2 gradient-mesh p-16 flex-col justify-between text-white relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-black uppercase tracking-[0.4em]">BizSight AI</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter leading-[1.05] mb-6">
            Intelligent tracking <br />for the modern seller.
          </h1>
          <p className="text-blue-100 text-sm max-w-md font-medium">
            Deploy high-fidelity financial intelligence to your enterprise and scale with precision and speed.
          </p>
        </div>

        <div className="relative z-10 glass p-8 rounded-[2rem] border border-white/20 bg-white/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-emerald-400/20 rounded-xl flex items-center justify-center border border-emerald-400/30">
              <TrendingUp className="text-emerald-400 w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black opacity-80 uppercase tracking-widest text-emerald-300">Live Insight</p>
              <p className="text-lg font-black tracking-tight">+22% Net Revenue Yield</p>
            </div>
          </div>
          <p className="text-[11px] text-blue-100/70 font-medium italic">Verified performance metrics across retail portfolio sectors.</p>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-24 bg-slate-50 relative">
        <div className="w-full max-w-sm animate-reveal">
          <div className="lg:hidden mb-12 flex items-center gap-3">
             <h2 className="text-lg font-black text-slate-900 tracking-tighter uppercase">BizSight AI</h2>
          </div>

          {isSuccess ? (
            <div className="text-center py-12 animate-reveal">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-50">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">Access Granted</h2>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Syncing with BI Engine...</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-3">Welcome back</h2>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest opacity-60">Authentication required</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="animate-reveal delay-100">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Work Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                      placeholder="user@business.com"
                    />
                  </div>
                </div>
                
                <div className="animate-reveal delay-200">
                  <div className="flex justify-between mb-1.5">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                    <a href="#" className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:underline">Reset?</a>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Sign In <LogIn className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200 text-center animate-reveal delay-300">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                  New to platform? <a href={STREAMLIT_URL} className="text-blue-600 hover:underline">Register</a>
                </p>
              </div>
            </>
          )}
        </div>

        <footer className="absolute bottom-6 left-0 right-0 text-center flex flex-col items-center gap-2">
            <span className="text-[7px] font-black uppercase tracking-widest text-slate-500 opacity-60">© 2026 BizSight AI Platform</span>
        </footer>
      </div>
    </div>
  );
};