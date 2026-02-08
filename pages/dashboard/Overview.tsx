import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight,
  PackageCheck,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, expenses: 2400 },
  { name: 'Tue', sales: 3000, expenses: 1398 },
  { name: 'Wed', sales: 2000, expenses: 9800 },
  { name: 'Thu', sales: 2780, expenses: 3908 },
  { name: 'Fri', sales: 1890, expenses: 4800 },
  { name: 'Sat', sales: 2390, expenses: 3800 },
  { name: 'Sun', sales: 3490, expenses: 4300 },
];

const categoryData = [
  { name: 'Inventory', value: 4000, color: '#2563eb' },
  { name: 'Rent', value: 3000, color: '#4f46e5' },
  { name: 'Utilities', value: 2000, color: '#7c3aed' },
  { name: 'Staff', value: 1500, color: '#db2777' },
];

export const Overview: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-reveal">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Overview</h1>
          <p className="text-slate-500 font-medium text-base mt-1">Real-time health of your Indian SME operations.</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-white border border-slate-100 rounded-xl shadow-sm">
           <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold transition shadow-md">Dashboard</button>
           <button className="px-4 py-2 text-slate-500 hover:text-slate-900 rounded-lg text-xs font-bold transition">Reports</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-reveal delay-100">
        <StatCard 
          label="Total Sales" 
          value="₹1,24,450" 
          change="+12.5%" 
          trend="up" 
          icon={<TrendingUp className="text-blue-600 w-4 h-4" />}
          bgColor="bg-blue-50"
          accentColor="rgba(37, 99, 235, 0.05)"
        />
        <StatCard 
          label="Total Expenses" 
          value="₹52,240" 
          change="-2.1%" 
          trend="down" 
          icon={<TrendingDown className="text-rose-600 w-4 h-4" />}
          bgColor="bg-rose-50"
          accentColor="rgba(225, 29, 72, 0.05)"
        />
        <StatCard 
          label="Net Profit" 
          value="₹72,210" 
          change="+8.4%" 
          trend="up" 
          icon={<Wallet className="text-emerald-600 w-4 h-4" />}
          bgColor="bg-emerald-50"
          accentColor="rgba(16, 185, 129, 0.05)"
        />
        <StatCard 
          label="Low Stock" 
          value="4 Items" 
          change="Urgent" 
          trend="neutral" 
          icon={<PackageCheck className="text-amber-600 w-4 h-4" />}
          bgColor="bg-amber-50"
          accentColor="rgba(217, 119, 6, 0.05)"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-reveal delay-200">
        <div className="lg:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h3 className="text-lg font-black text-slate-900">Weekly Performance</h3>
               <p className="text-xs text-slate-400 font-medium italic">Sales vs Expenses trend</p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg">
              <button className="px-3 py-1.5 bg-white shadow-sm text-blue-600 rounded-md text-[10px] font-black">7D</button>
              <button className="px-3 py-1.5 text-slate-500 rounded-md text-[10px] font-black">30D</button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                <Tooltip 
                  formatter={(value) => `₹${value}`}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 15px 30px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold', fontSize: '12px'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" animationDuration={1800} />
                <Area type="monotone" dataKey="expenses" stroke="#cbd5e1" strokeWidth={2} fillOpacity={0} animationDuration={2200} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-black text-slate-900">Expense Mix</h3>
            <p className="text-xs text-slate-400 font-medium">Spending by category</p>
          </div>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical" margin={{ left: -30, right: 10 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 800}} />
                <Tooltip cursor={{fill: 'rgba(241, 245, 249, 0.4)'}} formatter={(value) => `₹${value}`} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={18}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3 pt-4 border-t border-slate-50">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-[11px] group cursor-default">
                <div className="flex items-center gap-2 text-slate-600">
                  <div className="w-2 h-2 rounded-full shadow-sm" style={{backgroundColor: cat.color}}></div>
                  <span className="font-bold">{cat.name}</span>
                </div>
                <span className="font-black text-slate-900">₹{cat.value.toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, change, trend, icon, bgColor, accentColor }: any) => (
  <div className="bg-white p-6 rounded-[1.75rem] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
    <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{backgroundColor: accentColor}}></div>
    <div className="flex items-start justify-between mb-4 relative z-10">
      <div className={`p-2.5 ${bgColor} rounded-xl shadow-sm group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className={`flex items-center text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
        trend === 'up' ? 'text-emerald-700 bg-emerald-100/40' : 
        trend === 'down' ? 'text-rose-700 bg-rose-100/40' : 'text-slate-600 bg-slate-100/40'
      }`}>
        {trend === 'up' ? <ArrowUpRight className="w-2.5 h-2.5 mr-1" /> : trend === 'down' ? <ArrowDownRight className="w-2.5 h-2.5 mr-1" /> : null}
        {change}
      </div>
    </div>
    <div className="relative z-10">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
      <h4 className="text-xl font-black text-slate-900 tracking-tight">{value}</h4>
    </div>
  </div>
);
