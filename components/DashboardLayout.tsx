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

const INFOSYS_LOGO = "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc";

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
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden text-[13px]">
      {/* Sidebar for Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-all duration-500 ease-out lg:static lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="p-1.5 bg-blue-600 rounded-lg shadow-md">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-900 tracking-tighter leading-none">BizSight AI</span>
              <img src={INFOSYS_LOGO} alt="Infosys" className="h-2 w-fit mt-0.5 grayscale opacity-50" />
            </div>
          </div>
          
          <nav className="flex-1 px-4 space-y-1 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/app'}
                className={({ isActive }) => `
                  group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 translate-x-1' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110`} />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-5 border-t border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm">
                <UserIcon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-black text-slate-900 truncate">{user.name}</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{user.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-[12px] font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-all active:scale-95"
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
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-40 hidden lg:flex">
          <div className="relative w-80 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search data, reports..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[12px] font-medium outline-none focus:ring-4 focus:ring-blue-50 focus:bg-white transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-slate-100">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Partner:</span>
               <img src={INFOSYS_LOGO} alt="Infosys" className="h-4 grayscale opacity-40 hover:opacity-100 transition-opacity" />
            </div>
            <button className="p-2 bg-slate-50 rounded-lg text-slate-500 hover:text-blue-600 transition hover:bg-blue-50 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-3 bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-600 rounded-lg">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <span className="font-black text-slate-900 tracking-tighter">BizSight AI</span>
            <img src={INFOSYS_LOGO} alt="Infosys" className="h-2 ml-1 opacity-50 grayscale" />
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-900 bg-slate-50 rounded-xl">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-reveal">
            <Outlet />
          </div>
          
          <footer className="mt-16 py-8 border-t border-slate-100 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 grayscale opacity-30">
               <img src={INFOSYS_LOGO} alt="Infosys" className="h-3" />
               <div className="w-px h-3 bg-slate-300"></div>
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Enterprise AI Grade</span>
            </div>
            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">
              Designed & Built by <a href="https://sourishdeyportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-blue-600 transition underline decoration-dotted">Sourish Dey</a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};
