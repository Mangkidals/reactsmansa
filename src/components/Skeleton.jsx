import React from 'react';

/**
 * Skeleton Loader Component containing premium stylized skeleton outlines.
 * Uses pulse animations for smooth visual feedback while external media load.
 */

export function VideoSkeleton() {
  return (
    <div className="w-full bg-[#0a1520] rounded-3xl overflow-hidden aspect-video shadow-2xl relative border-4 border-white animate-pulse">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-slate-900 to-slate-950 flex flex-col items-center justify-center">
        {/* Play button skeleton */}
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-white/30 border-b-8 border-b-transparent ml-1"></div>
        </div>
        
        {/* Progress bar skeleton */}
        <div className="w-2/3 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-blue-400/40 rounded-full"></div>
        </div>
      </div>
      
      {/* Bottom control bar skeleton */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950/80 flex items-center justify-between border-t border-white/5">
        <div className="flex items-center space-x-3 w-1/2">
          <div className="w-4 h-4 bg-white/20 rounded"></div>
          <div className="w-4 h-4 bg-white/20 rounded"></div>
          <div className="h-2 bg-white/20 rounded-full w-24"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-white/20 rounded"></div>
          <div className="w-4 h-4 bg-white/20 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function PdfSkeleton() {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-blue-100 flex flex-col animate-pulse" style={{ height: 'calc(100vh - 220px)', minHeight: '500px' }}>
      {/* Top Header of PDF Viewer */}
      <div className="bg-slate-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3 w-1/3">
          <div className="w-6 h-6 bg-red-200 rounded flex items-center justify-center text-[10px] text-red-500 font-bold">PDF</div>
          <div className="h-3 bg-gray-300 rounded-full w-32"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-6 bg-gray-200 rounded"></div>
          <div className="w-12 h-6 bg-gray-200 rounded"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      
      {/* PDF Content Layout simulation */}
      <div className="flex-grow bg-slate-50 p-8 flex justify-center overflow-hidden">
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-10 space-y-8 border border-gray-100">
          {/* Main Title */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded-full w-3/4"></div>
            <div className="h-3 bg-gray-100 rounded-full w-1/2"></div>
          </div>
          
          {/* Paragraph blocks */}
          <div className="space-y-4">
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
            <div className="h-3 bg-gray-100 rounded-full w-2/3"></div>
          </div>

          {/* Dummy Image/Box */}
          <div className="w-full h-40 bg-gray-100 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* More paragraph blocks */}
          <div className="space-y-4">
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-100 rounded-full w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GameSkeleton() {
  return (
    <div className="bg-[#494949] p-3 rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-pulse">
      <div className="bg-[#0a1520] rounded-2xl overflow-hidden aspect-[16/9] w-full max-h-[600px] border border-gray-800 relative flex flex-col items-center justify-center p-6 text-center">
        {/* Pulsing loading game icon */}
        <div className="w-20 h-20 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex items-center justify-center mb-6 text-orange-500 shadow-lg shadow-orange-500/5">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="3" />
            <path d="M6 12h4M8 10v4M16 11h.01M18 13h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        </div>
        
        {/* Game titles loader */}
        <div className="h-5 bg-white/10 rounded-full w-48 mb-2"></div>
        <div className="h-3 bg-white/5 rounded-full w-32 mb-8"></div>
        
        {/* Game Controller Loading Bar */}
        <div className="w-64 h-3 bg-slate-900 border border-white/10 rounded-full overflow-hidden p-0.5 relative">
          <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full w-2/3 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Hints */}
        <div className="mt-8 text-[11px] text-white/40 max-w-sm">
          Menghubungkan ke server modul Construct 2... Mohon tunggu sebentar.
        </div>
      </div>
    </div>
  );
}
