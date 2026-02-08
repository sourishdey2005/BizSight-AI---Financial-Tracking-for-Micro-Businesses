
import React from 'react';
import { FileText, Download, Mail, Calendar, CheckCircle2 } from 'lucide-react';

export const Reports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Financial Reports</h1>
        <p className="text-slate-500">Generate professional statements for your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportActionCard 
          title="Profit & Loss" 
          desc="Summary of revenue and expenses for a period." 
          icon={<FileText className="text-blue-600" />}
        />
        <ReportActionCard 
          title="Inventory Report" 
          desc="Current stock levels, value, and turnover rates." 
          icon={<Calendar className="text-emerald-600" />}
        />
        <ReportActionCard 
          title="Tax Summary" 
          desc="Estimated tax liabilities based on net income." 
          icon={<CheckCircle2 className="text-amber-600" />}
        />
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Recent Generated Reports</h3>
          <button className="text-sm text-blue-600 font-semibold hover:underline">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
          <ReportRow name="Monthly_Summary_Oct_2023.pdf" date="Nov 01, 2023" size="1.2 MB" />
          <ReportRow name="Inventory_Audit_Q3.xlsx" date="Oct 15, 2023" size="450 KB" />
          <ReportRow name="Sales_Forecast_2024.pdf" date="Oct 10, 2023" size="2.4 MB" />
          <ReportRow name="Expense_Log_Utilities.pdf" date="Sep 28, 2023" size="890 KB" />
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-blue-900">Email Scheduling</h3>
            <p className="text-blue-700">Receive automated weekly reports directly in your inbox every Monday at 8:00 AM.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            Configure Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

const ReportActionCard = ({ title, desc, icon }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-400 transition cursor-pointer group shadow-sm">
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition">
      {icon}
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 mb-6 leading-relaxed">{desc}</p>
    <div className="flex items-center gap-2">
      <button className="flex-1 py-2 text-xs font-bold bg-slate-900 text-white rounded-lg hover:bg-black transition">Generate PDF</button>
      <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><Download className="w-4 h-4 text-slate-600" /></button>
    </div>
  </div>
);

const ReportRow = ({ name, date, size }: any) => (
  <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
        <FileText className="w-5 h-5 text-slate-400" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition">{name}</p>
        <p className="text-xs text-slate-400">{date} • {size}</p>
      </div>
    </div>
    <button className="p-2 text-slate-400 hover:text-slate-900 transition">
      <Download className="w-5 h-5" />
    </button>
  </div>
);
