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
  Bell
} from 'lucide-react';
import { User } from '../types';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
}

const BUILDER_LOGO = "https://res.cloudinary.com/dodhvvewu/image/upload/v1770584790/9783222e98b0d5141519b41e7203ff9a_pyjqit.webp";

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
        fixed inset-y-0 left-0 z-50 w-60 bg-white border-r border-slate-200 transition-all duration-500 ease-out lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg shadow-md">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-slate-900 tracking-tighter leading-none uppercase">BizSight AI</span>
              <div className="flex items-center gap-1 mt-1 opacity-60 grayscale hover:opacity-100 transition-opacity">
                <span className="text-[6px] font-black uppercase tracking-widest">Built by</span>
                <img src={BUILDER_LOGO} alt="" className="h-2 w-fit" />
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-1 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/app'}
                className={({ isActive }) => `
                  group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[10px] font-black transition-all duration-300 uppercase tracking-tight
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-lg translate-x-1' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className={`w-3.5 h-3.5 transition-transform group-hover:scale-110`} />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-100 shadow-sm mb-3">
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center border border-white shadow-sm">
                <UserIcon className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black text-slate-900 truncate">{user.name}</p>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{user.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-rose-600 hover:bg-rose-50 rounded-lg transition-all active:scale-95"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Desktop Top Header */}
        <header className="h-14 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-40 hidden lg:flex">
          <div className="relative w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search datasets..." 
              className="w-full pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold outline-none focus:bg-white transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-slate-100">
               <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Platform Partner:</span>
               <img src={BUILDER_LOGO} alt="Builder" className="h-3.5 opacity-60 hover:opacity-100 transition-opacity rounded" />
            </div>
            <button className="p-1.5 bg-slate-50 rounded-md text-slate-500 hover:text-blue-600 transition hover:bg-blue-50 relative">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-3 bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-600 rounded-lg">
              <BarChart3 className="text-white w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-black text-slate-900 tracking-tighter uppercase">BizSight</span>
            <img src={BUILDER_LOGO} alt="" className="h-3 ml-1 opacity-50 grayscale" />
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 text-slate-900 bg-slate-50 rounded-lg">
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-6xl mx-auto space-y-6 animate-reveal">
            <Outlet />
          </div>
          
          <footer className="mt-12 py-6 border-t border-slate-100 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 grayscale opacity-20">
               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500">Built by</span>
               <img src={BUILDER_LOGO} alt="Builder Logo" className="h-4" />
            </div>
            <p className="text-slate-400 text-[8px] font-black uppercase tracking-[0.2em]">
              © 2026 BizSight AI Platform
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};
