import React from 'react';

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
                      <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        ✓ SELESAI
                      </span>
                    ) : isUnlocked ? (
                      <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full animate-pulse-glow">
                        BUKA
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                      {lvl.opponent.avatarChar}
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
                        {isCompleted ? 'Main Ulang Game' : 'Mulai Game'}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full py-3 bg-gray-100 text-gray-400 font-heading font-bold text-sm rounded-full border-b-4 border-gray-200 cursor-not-allowed text-center"
                      >
                        Selesaikan Level {lvl.id - 1} Dulu
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
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">
                {activeLevel.opponent.avatarChar}
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
              ></iframe>

              <div className="absolute inset-0 bg-[#0a1520] flex flex-col items-center justify-center space-y-3 z-0 pointer-events-none text-gray-500">
                <span className="text-3xl animate-spin">⏳</span>
                <p className="text-xs">Memuat Game...</p>
              </div>
            </div>
          </div>

          {/* Sleek Action Controls below the Iframe (No instructions, fully professional) */}
          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={exitGame}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-500 font-heading font-bold text-xs rounded-full border border-gray-200 cursor-pointer transition-colors shadow-sm"
            >
              ← Kembali ke Peta Level
            </button>

            <button
              onClick={() => triggerLevelCompletion(activeLevelId, 100)}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-heading font-bold text-xs rounded-full border-b-4 border-green-700 active:translate-y-0.5 active:border-b-0 shadow-md cursor-pointer transition-all"
            >
              Tandai Level Selesai ✔
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
              className="flex-grow py-3.5 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-xs rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer"
            >
              Kembali ke Peta Level
            </button>
            {activeLevelId < 3 && (
              <button
                onClick={() => startLevel(activeLevelId + 1)}
                className="px-6 py-3.5 bg-[#53B4FB] hover:bg-blue-400 text-white font-heading font-bold text-xs rounded-full border-b-4 border-blue-600 active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer"
              >
                Level Berikutnya
              </button>
            )}
          </div>
        </div>
      )}



    </div>
  );
}
