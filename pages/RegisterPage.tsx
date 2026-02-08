
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User as UserIcon, Briefcase, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
// Import User and Role types
import { User, Role } from '../types';

const INFOSYS_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/250px-Infosys_logo.svg.png";
const STREAMLIT_URL = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

// Define props for RegisterPage
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
      
      // Update app state before redirecting
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
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Side: Branding */}
      <div className="hidden lg:flex w-2/5 gradient-mesh p-16 flex-col justify-between text-white relative overflow-hidden">
        <div className="relative z-10">
          <img src={INFOSYS_LOGO} alt="Infosys" className="h-8 brightness-0 invert opacity-90 mb-12" />
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Join the future of <br />micro-finance.
          </h1>
          <p className="text-blue-100 text-lg max-w-md">
            Setup your business in under 2 minutes and unlock AI-powered forecasting tools immediately.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
            <BenefitItem icon={<ShieldCheck />} text="Bank-grade data encryption" />
            <BenefitItem icon={<CheckCircle2 />} text="Unlimited transaction logging" />
            <BenefitItem icon={<Briefcase />} text="Multi-user role access" />
        </div>

        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center px-6 lg:px-24 bg-slate-50">
        <div className="w-full max-w-xl animate-reveal">
          <div className="lg:hidden mb-12 flex items-center justify-between">
             <img src={INFOSYS_LOGO} alt="Infosys" className="h-6" />
             <h2 className="text-xl font-black text-blue-900">BizSight AI</h2>
          </div>

          {isSuccess ? (
            <div className="text-center py-20 animate-reveal">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-50">
                <CheckCircle2 className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Account Created!</h2>
              <p className="text-slate-500 text-lg">Initializing your personalized BI dashboard...</p>
              <div className="mt-8 flex justify-center gap-2">
                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Create your account</h2>
                <p className="text-slate-500 mt-3 font-medium">Join 2,500+ businesses using BizSight AI daily.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-reveal delay-100">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <div className="relative group">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="animate-reveal delay-100">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Name</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" required 
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                        placeholder="My Awesome Shop"
                      />
                    </div>
                  </div>
                </div>

                <div className="animate-reveal delay-200">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@business.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-reveal delay-200">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Role</label>
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none"
                    >
                      <option value="Owner">Business Owner</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Staff">Operations Staff</option>
                    </select>
                  </div>
                  <div className="animate-reveal delay-200">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="password" required 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-reveal delay-300">
                    <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        I agree to the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
                    </p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 disabled:opacity-70 animate-reveal delay-300"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Finalizing Profile...</>
                  ) : (
                    <>Start Free Trial</>
                  )}
                </button>
              </form>

              <div className="mt-10 text-center animate-reveal delay-300">
                <p className="text-sm text-slate-500 font-medium">
                  Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log In</Link>
                </p>
              </div>
            </>
          )}
        </div>
        
        <div className="mt-12">
           <p className="text-xs text-slate-400 font-medium text-center">
              Designed by <a href="https://sourishdeyportfolio.vercel.app/" className="text-slate-600 hover:text-blue-600 transition underline decoration-dotted">Sourish Dey</a>
            </p>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
        <div className="text-blue-300 w-5 h-5">{icon}</div>
        <span className="text-sm font-semibold tracking-wide">{text}</span>
    </div>
);
