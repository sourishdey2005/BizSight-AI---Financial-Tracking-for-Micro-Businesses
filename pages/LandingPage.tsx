
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  TrendingUp, 
  ShieldCheck, 
  Layout, 
  ArrowRight,
  Database,
  Brain,
  BarChart3
} from 'lucide-react';
import { User } from '../types';

const INFOSYS_LOGO = "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc";

export const LandingPage: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={INFOSYS_LOGO} alt="Infosys" className="h-6" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">BizSight AI</span>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Link to="/app" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-slate-600 font-medium hover:text-blue-600 transition">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Smart Finance Tracking for <span className="text-blue-600">Small Businesses</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            The open-source, intuitive platform for shop owners and online sellers to manage transactions, inventory, and predict future growth with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://bizsight-ai---business-intelligence-platform.streamlit.app/" target="_blank" className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50">
              Explore Demo
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<TrendingUp className="text-blue-600" />}
            title="Sales & Expense Tracking"
            description="Log daily transactions with ease. Categorize expenses like rent, utilities, and marketing in seconds."
          />
          <FeatureCard 
            icon={<BarChart3 className="text-blue-600" />}
            title="Profit Analytics"
            description="Get automatic calculations of your net profit and gross margins without needing a calculator."
          />
          <FeatureCard 
            icon={<Brain className="text-blue-600" />}
            title="AI Forecasting"
            description="Our smart engine predicts your next month's sales based on historical trends and seasonal shifts."
          />
          <FeatureCard 
            icon={<Database className="text-blue-600" />}
            title="Inventory Management"
            description="Track stock levels and automatically link COGS to your sales for accurate profit reporting."
          />
          <FeatureCard 
            icon={<ShieldCheck className="text-blue-600" />}
            title="Role-Based Access"
            description="Separate views for owners, accountants, and staff to keep your sensitive financial data secure."
          />
          <FeatureCard 
            icon={<Layout className="text-blue-600" />}
            title="Simple Reporting"
            description="Generate weekly and monthly reports in PDF or Excel formats for easy sharing and tax filing."
          />
        </div>

        {/* Portfolio Link */}
        <div className="bg-blue-900 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Open Source & Community Driven</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto px-4">
            Designed for the small shop owners of tomorrow. Developed with love by 
            <a href="https://sourishdeyportfolio.vercel.app/" target="_blank" className="font-bold text-blue-400 hover:text-white transition ml-1">
              Sourish Dey
            </a>.
          </p>
          <img src={INFOSYS_LOGO} alt="Infosys Partner" className="h-10 mx-auto opacity-50 grayscale brightness-200" />
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);
