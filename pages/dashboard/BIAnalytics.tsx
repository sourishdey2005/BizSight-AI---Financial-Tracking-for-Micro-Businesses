
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const BIAnalytics: React.FC = () => {
  const streamlitUrl = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 text-blue-900">Business Intelligence Platform</h1>
          <p className="text-slate-500">Advanced deep-dive analytics powered by BizSight AI.</p>
        </div>
        <a 
          href={streamlitUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-black transition"
        >
          Open in New Tab <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="flex-1 min-h-[700px] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl relative">
        <div className="absolute inset-0 bg-slate-50 flex items-center justify-center -z-10">
          <div className="text-center animate-pulse">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-400 font-medium">Loading advanced analytics engine...</p>
          </div>
        </div>
        <iframe 
          src={streamlitUrl}
          className="w-full h-full border-none"
          title="BizSight BI Dashboard"
        />
      </div>
    </div>
  );
};
