import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, Briefcase, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { User, Role } from '../types';

const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

interface RegisterPageProps {
  onRegister: (userData: User) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Owner',
    businessName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      onRegister({
        id: Math.random().toString(),
        name: formData.name,
        email: formData.email,
        role: formData.role as Role,
        businessId: 'new_biz'
      });

      setTimeout(() => {
        window.location.href = STREAMLIT_URL;
      }, 1500);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden text-[11px] md:text-[12px]">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex w-2/5 gradient-mesh p-16 flex-col justify-between text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-black uppercase tracking-[0.4em]">BizSight AI</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter leading-[1.05] mb-6">
            Join the future of <br />micro-finance.
          </h1>
          <p className="text-blue-100 text-sm max-w-sm font-medium">
            Deploy enterprise-grade intelligence to your business in under 2 minutes.
          </p>
        </div>

        <div className="relative z-10 space-y-4">
            <BenefitItem icon={<ShieldCheck className="w-4 h-4" />} text="Bank-grade encryption" />
            <BenefitItem icon={<CheckCircle2 className="w-4 h-4" />} text="Unlimited logging" />
            <BenefitItem icon={<Briefcase className="w-4 h-4" />} text="Multi-user role access" />
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center px-6 lg:px-24 bg-slate-50">
        <div className="w-full max-w-lg animate-reveal">
          <div className="lg:hidden mb-12 flex items-center justify-between">
             <div className="flex items-center gap-2">
               <h2 className="text-lg font-black text-slate-900 tracking-tighter uppercase">BizSight AI</h2>
             </div>
          </div>

          {isSuccess ? (
            <div className="text-center py-20 animate-reveal">
              <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-50">
                <CheckCircle2 className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Deployment Started</h2>
              <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Personalizing BI Core...</p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-3">Create account</h2>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest opacity-60 italic">Join thousands of intelligent sellers</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-reveal delay-100">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Full Name</label>
                    <div className="relative group">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="animate-reveal delay-100">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Business Name</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" required 
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                        placeholder="Enterprise Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="animate-reveal delay-200">
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Work Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                      placeholder="email@enterprise.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="animate-reveal delay-200">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Role</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all appearance-none uppercase tracking-tight"
                    >
                      <option value="Owner">Business Owner</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Staff">Operations Staff</option>
                    </select>
                  </div>
                  <div className="animate-reveal delay-200">
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="password" required 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold outline-none focus:ring-4 focus:ring-blue-50 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-reveal delay-300 pt-2">
                    <input type="checkbox" required className="mt-1 w-3 h-3 rounded border-slate-300 text-blue-600" />
                    <p className="text-[9px] text-slate-400 leading-relaxed font-black uppercase tracking-widest">
                        Accepting <a href="#" className="text-blue-600 underline">Policies</a> and <a href="#" className="text-blue-600 underline">Terms</a>.
                    </p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>Start Free Trial</>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center animate-reveal delay-300">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                  Existing user? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
                </p>
              </div>
            </>
          )}
        </div>
        
        <footer className="mt-12 flex flex-col items-center gap-2">
           <span className="text-[7px] font-black uppercase tracking-widest text-slate-500 opacity-60">© 2026 BizSight AI Platform</span>
        </footer>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
        <div className="text-blue-300">{icon}</div>
        <span className="text-[10px] font-black uppercase tracking-widest text-white">{text}</span>
    </div>
);