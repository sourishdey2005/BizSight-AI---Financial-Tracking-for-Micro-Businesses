
import React from 'react';
import { Users, Activity, Settings as SettingsIcon, ShieldCheck } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Admin Dashboard</h1>
          <p className="text-slate-500">Platform-wide oversight and user management.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-amber-200">
          <ShieldCheck className="w-4 h-4" /> Admin Access
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AdminStat cardTitle="Total Users" value="1,452" trend="+12% this month" icon={<Users className="text-blue-600" />} />
        <AdminStat cardTitle="Active Businesses" value="840" trend="+5% this month" icon={<Activity className="text-emerald-600" />} />
        <AdminStat cardTitle="API Uptime" value="99.98%" trend="Operational" icon={<SettingsIcon className="text-slate-600" />} />
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-900">Recent Platform Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            <ActivityLogItem user="John Doe" action="Created new business profile" time="2 mins ago" />
            <ActivityLogItem user="Sarah Smith" action="Exported annual tax summary" time="15 mins ago" />
            <ActivityLogItem user="Tech Store Inc" action="Logged 100+ transactions via API" time="1 hour ago" />
            <ActivityLogItem user="Mike Ross" action="Role updated to Accountant" time="3 hours ago" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminStat = ({ cardTitle, value, trend, icon }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{trend}</span>
    </div>
    <p className="text-sm font-medium text-slate-500">{cardTitle}</p>
    <p className="text-3xl font-extrabold text-slate-900 mt-1">{value}</p>
  </div>
);

const ActivityLogItem = ({ user, action, time }: any) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">
        {user.split(' ').map((n: string) => n[0]).join('')}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{user} <span className="font-normal text-slate-500">{action}</span></p>
        <p className="text-xs text-slate-400">{time}</p>
      </div>
    </div>
  </div>
);
