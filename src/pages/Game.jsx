import React, { useState } from 'react';

function getLevelIcon(levelId, size = "w-7 h-7") {
  switch (levelId) {
    case 1:
      // Skenario Pertemanan: Profile / Users Icon (Blue)
      return (
        <svg className={`${size} text-[#53B4FB]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case 2:
      // Skenario Gratifikasi: Gift Icon (Orange)
      return (
        <svg className={`${size} text-[#FF6D00]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      );
    case 3:
      // Skenario Pemerasan: Shield Exclamation / Warning (Red)
      return (
        <svg className={`${size} text-red-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Game({
  gameState,
  setGameState,
  unlockedLevels,
  completedLevels,
  activeLevelId,
  startLevel,
  triggerLevelCompletion,
  gameLevels,
  exitGame
}) {
  const activeLevel = gameLevels.find(lvl => lvl.id === activeLevelId);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-8 animate-fade-in">

      {/* GAME STATE 1: SELECT LEVEL MAP */}
      {gameState === 'select_level' && (
        <div className="space-y-10">

          {/* Header Title */}
          <div className="text-center space-y-2">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800">Laman Game & Kuis Edukasi</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              Mainkan game interaktif siber yang di-import langsung dari Construct 2. Selesaikan tiap level untuk melacak kemajuan belajarmu!
            </p>
          </div>



          {/* Game Levels Map Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameLevels.map(lvl => {
              const isUnlocked = unlockedLevels.includes(lvl.id);
              const isCompleted = completedLevels.includes(lvl.id);

              return (
                <div
                  key={lvl.id}
                  className={`bg-white rounded-3xl p-6 border shadow-sm transition-all duration-300 relative flex flex-col justify-between min-h-[340px] ${isUnlocked
                    ? 'border-blue-100 hover:shadow-xl hover:-translate-y-1'
                    : 'border-gray-200 opacity-70'
                    }`}
                >
                  {/* Lock Status Badge */}
                  <div className="absolute top-4 right-4">
                    {isCompleted ? (
                      <span className="inline-flex items-center space-x-1 bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>SELESAI</span>
                      </span>
                    ) : isUnlocked ? (
                      <span className="inline-flex items-center space-x-1 bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-100 animate-pulse-glow">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 20.25h16.5A2.25 2.25 0 0022.5 18V11.25A2.25 2.25 0 0020.25 9h-1.5V6.75a5.25 5.25 0 00-10.5 0v3.75c-1.242 0-2.25 1.008-2.25 2.25v6.75c0 1.242 1.008 2.25 2.25 2.25z" />
                        </svg>
                        <span>BUKA</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 bg-gray-100 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span>TERKUNCI</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${lvl.id === 1 ? 'bg-blue-50' : lvl.id === 2 ? 'bg-orange-50' : 'bg-red-50'
                      }`}>
                      {getLevelIcon(lvl.id, "w-7 h-7")}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-800">{lvl.title}</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                        Penerbit Game: Construct 2 HTML5
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-50">
                    {isUnlocked ? (
                      <button
                        onClick={() => startLevel(lvl.id)}
                        className="w-full py-3 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-sm rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-md cursor-pointer text-center"
                      >
                        {isCompleted ? 'Mainkan Kembali' : 'Mainkan Game'}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full py-3 bg-gray-100 text-gray-400 font-heading font-bold text-sm rounded-full border-b-4 border-gray-200 cursor-not-allowed text-center flex items-center justify-center space-x-1.5"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span>Selesaikan Level {lvl.id - 1} Dulu</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}



      {/* GAME STATE 3: CONSTRUCT 2 IFRAME SCREEN */}
      {gameState === 'playing' && (
        <div className="space-y-6 animate-fade-in">

          {/* Game Play Header */}
          <div className="bg-white rounded-2xl p-5 border border-blue-100 flex justify-between items-center shadow-sm">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${activeLevel.id === 1 ? 'bg-blue-50' : activeLevel.id === 2 ? 'bg-orange-50' : 'bg-red-50'
                }`}>
                {getLevelIcon(activeLevel.id, "w-5 h-5")}
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-800 text-sm sm:text-base">{activeLevel.title}</h3>
                <p className="text-[10px] text-gray-400">Mainkan game Construct 2 di bawah</p>
              </div>
            </div>
          </div>

          {/* Construct 2 Game Iframe Container */}
          <div className="bg-[#494949] p-3 rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative">
            <div className="bg-[#0a1520] rounded-2xl overflow-hidden aspect-[16/9] w-full max-h-[600px] border border-gray-800 relative">
              <iframe
                src={activeLevel.iframeUrl}
                className="w-full h-full border-0 z-10"
                title={activeLevel.title}
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              ></iframe>
              {isLoading && (
                <div className="absolute inset-0 bg-[#0a1520] flex flex-col items-center justify-center space-y-3 z-0 text-gray-500">
                  <svg className="w-10 h-10 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-xs">Memuat Game...</p>
                </div>
              )}
            </div>
          </div>

          {/* Sleek Action Controls below the Iframe (No instructions, fully professional) */}
          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={exitGame}
              className="flex items-center space-x-1.5 px-6 py-3 bg-white hover:bg-gray-50 text-gray-500 font-heading font-bold text-xs rounded-full border border-gray-200 cursor-pointer transition-colors shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Kembali ke Peta Level</span>
            </button>
          </div>

        </div>
      )}

      {/* LEVEL CLEARED SCREEN */}
      {gameState === 'level_cleared' && (
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-blue-100 shadow-2xl text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 18l3-10 6 5 6-5 3 10H3z" />
            </svg>
          </div>

          <div className="space-y-2">
            <span className="bg-green-100 text-green-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Level {activeLevelId} Selesai
            </span>
            <h3 className="font-heading text-2xl font-bold text-gray-800">
              Misi Berhasil Dituntaskan!
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed px-4">
              Hebat! Kamu berhasil menyelesaikan permainan siber level {activeLevelId} dan melatih strategi pertahanan diri.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-2xl space-y-1">
            <span className="text-[9px] text-green-700 font-bold uppercase tracking-wider">Skor Keamanan Level Ini</span>
            <div className="text-3xl font-heading font-bold text-green-600">100 / 100</div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => {
                setGameState('select_level');
              }}
              className="flex-grow flex items-center justify-center space-x-1.5 py-3.5 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-xs rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Kembali ke Peta Level</span>
            </button>
            {activeLevelId < 3 && (
              <button
                onClick={() => startLevel(activeLevelId + 1)}
                className="flex items-center justify-center space-x-1.5 px-6 py-3.5 bg-[#53B4FB] hover:bg-blue-400 text-white font-heading font-bold text-xs rounded-full border-b-4 border-blue-600 active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer"
              >
                <span>Level Berikutnya</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}



    </div>
  );
}
