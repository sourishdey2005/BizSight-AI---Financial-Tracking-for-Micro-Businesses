import React, { useState, useEffect } from 'react';
import { ExternalLink, Loader2, Maximize2, RefreshCw, Layout, Smartphone } from 'lucide-react';

export const BIAnalytics: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const streamlitUrl = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

  useEffect(() => {
    // Artificial buffer to ensure smooth glass transition
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    // Reload logic or just visual feedback
    const timer = setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="h-full flex flex-col space-y-8 animate-reveal">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-blue-900 tracking-tight">BI Dashboard</h1>
          <p className="text-slate-500 font-medium text-lg">Real-time business intelligence engine.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleRefresh}
            className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition shadow-sm"
            title="Refresh BI Data"
          >
            <RefreshCw className={`w-6 h-6 text-slate-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <a 
            href={streamlitUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-[1.25rem] text-sm font-bold hover:bg-blue-600 transition shadow-2xl active:scale-95"
          >
            Open in New Tab <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-[650px] lg:min-h-[850px] bg-white rounded-[3rem] border border-slate-200 overflow-hidden shadow-2xl relative">
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center animate-fade">
            <div className="relative">
                <div className="w-24 h-24 border-8 border-blue-50 border-t-blue-600 rounded-full animate-spin shadow-inner"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Layout className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
            </div>
            <div className="mt-10 text-center">
                <p className="text-2xl font-black text-slate-900">Syncing BI Engine</p>
                <p className="text-slate-500 font-medium mt-2 flex items-center justify-center gap-2">
                    <Smartphone className="w-4 h-4" /> Optimizing mobile layout...
                </p>
            </div>
          </div>
        )}
        
        <iframe 
          src={streamlitUrl}
          className="w-full h-full border-none"
          title="BizSight Intelligence Platform"
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Floating action for mobile to move to native browser */}
        <div className="lg:hidden absolute bottom-8 right-8 z-30">
            <a 
                href={streamlitUrl}
                className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
            >
                <Maximize2 className="w-7 h-7" />
            </a>
        </div>
      </div>
    </div>
  );
};