import React, { useState, useEffect } from 'react';
import { ExternalLink, Loader2, Maximize2, RefreshCw } from 'lucide-react';

export const BIAnalytics: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const streamlitUrl = "https://bizsight-ai---business-intelligence-platform.streamlit.app/";

  useEffect(() => {
    // Simulate initial iframe load buffer
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-reveal">
        <div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">BI Dashboard</h1>
          <p className="text-slate-500 font-medium">Real-time business intelligence powered by Streamlit.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleRefresh}
            className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition shadow-sm"
            title="Refresh Data"
          >
            <RefreshCw className={`w-5 h-5 text-slate-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <a 
            href={streamlitUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition shadow-lg active:scale-95"
          >
            Open in New Tab <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-[600px] lg:min-h-[750px] bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl relative animate-reveal delay-100">
        {isLoading && (
          <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-xl font-black text-slate-900">Connecting to BI Engine</p>
                <p className="text-slate-500 font-medium mt-1">Securing handshake with Streamlit servers...</p>
            </div>
          </div>
        )}
        
        <iframe 
          src={streamlitUrl}
          className="w-full h-full border-none"
          title="BizSight BI Dashboard"
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Floating action for mobile to expand or move to browser */}
        <div className="lg:hidden absolute bottom-6 right-6 z-30">
            <a 
                href={streamlitUrl}
                className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
            >
                <Maximize2 className="w-6 h-6" />
            </a>
        </div>
      </div>
    </div>
  );
};
