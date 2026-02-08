
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Package, 
  BarChart3, 
  BrainCircuit, 
  FileText, 
  Settings, 
  ShieldCheck, 
  LogOut,
  Menu,
  X,
  User as UserIcon,
  Search,
  Bell,
  ArrowRight
} from 'lucide-react';
import { User } from '../types';

const BUILDER_LOGO = "https://res.cloudinary.com/dodhvvewu/image/upload/v1770584790/9783222e98b0d5141519b41e7203ff9a_pyjqit.webp";
const PORTFOLIO_URL = "https://sourishdeyportfolio.vercel.app/";

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Overview', path: '/app', icon: LayoutDashboard },
    { name: 'Transactions', path: '/app/transactions', icon: ArrowLeftRight },
    { name: 'Inventory', path: '/app/inventory', icon: Package },
    { name: 'BI Analytics', path: '/app/analytics', icon: BarChart3 },
    { name: 'AI Forecasts', path: '/app/ai', icon: BrainCircuit },
    { name: 'Reports', path: '/app/reports', icon: FileText },
    { name: 'Settings', path: '/app/profile', icon: Settings },
  ];

  if (user.role === 'Admin') {
    navItems.push({ name: 'Admin', path: '/app/admin', icon: ShieldCheck });
  }

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden text-[11px] md:text-[12px]">
      {/* Sidebar for Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-all duration-500 ease-out lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex items-center gap-4">
            <div className="p-2 bg-blue-600 rounded-xl shadow-xl shadow-blue-200">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 tracking-tighter leading-none uppercase">BizSight AI</span>
              <span className="text-[7px] font-black text-blue-600 uppercase tracking-[0.3em] mt-2">Enterprise OS</span>
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-2 mt-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/app'}
                className={({ isActive }) => `
                  group flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[11px] font-black transition-all duration-300 uppercase tracking-tight
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-2xl translate-x-1' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110`} />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm">
                <UserIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-slate-900 truncate">{user.name}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{user.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-95 border border-transparent hover:border-rose-100"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Desktop Top Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-40 hidden lg:flex">
          <div className="relative w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search platform datasets..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold outline-none focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:text-blue-600 transition hover:bg-blue-50 relative group">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-100"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black text-slate-900">{user.name}</p>
                <p className="text-[7px] font-black text-blue-600 uppercase tracking-widest">Enterprise Access</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white text-[10px] font-black">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">BizSight AI</span>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-900 bg-slate-50 rounded-lg">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto space-y-10 animate-reveal">
            <Outlet />
          </div>
          
          <footer className="mt-20 py-20 border-t border-slate-100 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center text-center gap-6 max-w-sm px-6 py-8 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
               <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600">Strategic Engineering Lead</span>
               <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="relative group/partner flex flex-col items-center gap-4">
                 <div className="relative">
                   <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl group-hover/partner:blur-3xl transition-all opacity-0 group-hover/partner:opacity-100"></div>
                   <img 
                      src={BUILDER_LOGO} 
                      alt="Sourish Dey - Lead Developer" 
                      className="relative h-28 w-28 rounded-3xl object-contain bg-white shadow-2xl shadow-slate-200 ring-4 ring-white transition-transform group-hover/partner:scale-105 p-3" 
                   />
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="text-xl font-black text-slate-900 tracking-tight">Sourish Dey</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Founding Strategic Partner</span>
                    <div className="mt-4 flex items-center gap-2 text-[9px] font-black text-blue-600 uppercase tracking-tighter hover:gap-4 transition-all">
                      Visit Developer Portfolio <ArrowRight className="w-3 h-3" />
                    </div>
                 </div>
               </a>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
              © 2026 BizSight AI Platform • Intelligent SME Commerce Ecosystem
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};
