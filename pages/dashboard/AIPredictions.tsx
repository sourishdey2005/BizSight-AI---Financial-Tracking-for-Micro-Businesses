import React from 'react';
import { Brain, Sparkles, AlertCircle, TrendingUp, Zap, ChevronRight, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, ComposedChart } from 'recharts';

const forecastData = [
  { name: 'Aug', actual: 4000, confidence: [3800, 4200] },
  { name: 'Sep', actual: 4500, confidence: [4300, 4700] },
  { name: 'Oct', actual: 4200, confidence: [4000, 4400] },
  { name: 'Nov', actual: 4800, confidence: [4500, 5100] },
  { name: 'Dec', actual: 5200, confidence: [4900, 5500] },
  { name: 'Jan', forecast: 5500, range: [5100, 5900] },
  { name: 'Feb', forecast: 5900, range: [5300, 6500] },
  { name: 'Mar', forecast: 6200, range: [5500, 6900] },
];

export const AIPredictions: React.FC = () => {
  return (
    <div className="space-y-10 animate-reveal">
      <div className="relative p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
          <div className="p-5 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl">
            <Brain className="w-12 h-12 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Predictive Intelligence</h1>
            <p className="text-blue-100/70 text-lg font-medium">Forecasting India's SME growth cycles with high-confidence AI models.</p>
          </div>
          <div className="md:ml-auto flex gap-4">
             <div className="px-6 py-4 glass rounded-2xl text-center">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Accuracy</p>
                <p className="text-2xl font-black">92%</p>
             </div>
             <div className="px-6 py-4 glass rounded-2xl text-center">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Reliability</p>
                <p className="text-2xl font-black">High</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <Target className="w-6 h-6 text-blue-600" />
                Growth Trajectory
              </h3>
              <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-widest">3-Month Forecast Projection</p>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-black uppercase tracking-widest">
               <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-3 h-1 bg-blue-600 rounded-full"></div> Actual
               </div>
               <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-3 h-1 bg-indigo-600 rounded-full opacity-50"></div> Forecast
               </div>
            </div>
          </div>
          <div className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 800}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 800}} />
                <Tooltip 
                  contentStyle={{borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '16px'}}
                  formatter={(value) => `₹${value}`}
                />
                <ReferenceLine x="Dec" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" label={{value: 'Forecast Engine Start', fill: '#94a3b8', fontSize: 11, fontWeight: 900, dy: -20}} />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#2563eb" 
                  strokeWidth={6} 
                  dot={{r: 8, fill: '#2563eb', strokeWidth: 4, stroke: '#fff'}} 
                  animationDuration={1500} 
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#6366f1" 
                  strokeWidth={6} 
                  strokeDasharray="10 10" 
                  dot={{r: 8, fill: '#6366f1', strokeWidth: 4, stroke: '#fff'}} 
                  animationDuration={2500} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-10 p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 flex items-start gap-6 group hover:bg-blue-50 transition-colors">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-lg text-blue-900 leading-relaxed font-bold">
                BizSight AI predicts a strong Q1 upward trend for <span className="text-blue-600">Sharma Kirana Store</span>. Historical data suggests a 14% revenue spike starting mid-January.
              </p>
              <button className="mt-4 text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-1 hover:gap-2 transition-all">
                View Full Model Breakdown <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
              Strategic Actions
            </h3>
            <div className="space-y-6">
              <RecommendationCard 
                title="Inventory Optimization"
                text="Current velocity for 'LED Lights' suggests stockout in 8 days. Reorder priority: High."
                urgency="high"
              />
              <RecommendationCard 
                title="Regional Spike"
                text="Lohri festival (Jan 13) historically increases your 'Gifts' sales by 45%. Prepare stock."
                urgency="medium"
              />
              <RecommendationCard 
                title="Profit Leakage"
                text="Electricity costs rising 12% faster than revenue. Audit night-time usage."
                urgency="low"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-950 to-blue-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-4">Neural Network Logic</h3>
              <p className="text-blue-200/80 text-sm mb-8 leading-relaxed font-medium">
                Our model uses a hybrid LSTM-Transformer architecture optimized for micro-commerce seasonal cycles.
              </p>
              <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/10 active:scale-95">
                Model Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendationCard = ({ title, text, urgency }: { title: string, text: string, urgency: 'high' | 'medium' | 'low' }) => (
  <div className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all cursor-default group relative overflow-hidden">
    <div className={`absolute left-0 top-0 w-1.5 h-full ${
       urgency === 'high' ? 'bg-rose-500' : urgency === 'medium' ? 'bg-amber-500' : 'bg-blue-500'
    }`}></div>
    <div className="flex justify-between items-start mb-2">
      <p className="text-xs font-black text-slate-900 uppercase tracking-widest">{title}</p>
      <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full ${
        urgency === 'high' ? 'bg-rose-100 text-rose-700' : urgency === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
      }`}>
        {urgency}
      </span>
    </div>
    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">{text}</p>
  </div>
);