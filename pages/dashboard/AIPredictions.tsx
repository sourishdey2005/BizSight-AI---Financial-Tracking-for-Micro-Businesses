
import React from 'react';
import { Brain, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const forecastData = [
  { name: 'Aug', actual: 4000 },
  { name: 'Sep', actual: 4500 },
  { name: 'Oct', actual: 4200 },
  { name: 'Nov', actual: 4800 },
  { name: 'Dec', actual: 5200 },
  { name: 'Jan', forecast: 5500, range: [5100, 5900] },
  { name: 'Feb', forecast: 5900, range: [5300, 6500] },
  { name: 'Mar', forecast: 6200, range: [5500, 6900] },
];

export const AIPredictions: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl shadow-blue-100">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
          <Brain className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Predictive Insights</h1>
          <p className="text-blue-100 opacity-90">Forecasting your business trajectory with 92% historical accuracy.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Projected Sales Volume (Next 3 Months)
            </h3>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold">Strong Growth Trend</span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                />
                <ReferenceLine x="Dec" stroke="#94a3b8" strokeDasharray="3 3" label={{value: 'Forecast Start', fill: '#94a3b8', fontSize: 10}} />
                <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={4} dot={{r: 6, fill: '#3b82f6'}} />
                <Line type="monotone" dataKey="forecast" stroke="#8b5cf6" strokeWidth={4} strokeDasharray="5 5" dot={{r: 6, fill: '#8b5cf6'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-slate-50 rounded-2xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Confidence Insight:</strong> Predictions for Q1 show a strong upward trend due to seasonal holiday demand. Our models suggest stocking up on your top 5 high-turnover items by mid-January.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Strategic Recommendations
            </h3>
            <div className="space-y-4">
              <RecommendationItem 
                title="Optimize Inventory"
                text="Current velocity suggests you'll run out of 'Power Drills' in 12 days. Reorder now."
              />
              <RecommendationItem 
                title="Marketing Opportunity"
                text="Your 'Hardware' sales spike on Wednesdays. Consider a midweek promotion."
              />
              <RecommendationItem 
                title="Expense Warning"
                text="Utility costs have risen 15% month-over-month. Audit energy usage."
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-6 rounded-3xl text-white">
            <h3 className="font-bold mb-2">How it works?</h3>
            <p className="text-slate-300 text-sm mb-4">
              We use a Time-Series Transformer model trained on over 10,000 micro-business cycles to analyze your seasonal patterns and market volatility.
            </p>
            <button className="text-xs font-bold text-blue-300 hover:text-white transition uppercase tracking-widest">
              Read Documentation &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecommendationItem = ({ title, text }: { title: string, text: string }) => (
  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-100 transition cursor-default">
    <p className="text-xs font-bold text-slate-900 uppercase tracking-tight mb-1">{title}</p>
    <p className="text-sm text-slate-600 leading-snug">{text}</p>
  </div>
);
