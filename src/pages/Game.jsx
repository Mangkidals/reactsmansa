import React from 'react';
import { ExitButton, SubmitButton } from '../components/Button';

export default function Game({
  gameState,
  setGameState,
  unlockedLevels,
  completedLevels,
  activeLevelId,
  startLevel,
  triggerLevelCompletion,
  gameLevels,
  pretestScore,
  posttestScore,
  startTest,
  testQuestions,
  currentTestIndex,
  testSelectedChoice,
  testSubmitted,
  handleSelectTestChoice,
  submitTestAnswer,
  nextTestQuestion,
  pretestQuestions,
  posttestQuestions,
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

          {/* Pretest & Posttest Banner */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <h3 className="font-heading text-lg font-bold text-gray-800">Lengkapi Tes untuk Evaluasi</h3>
              <p className="text-xs text-gray-500">
                Kerjakan <strong>Pre-test</strong> sebelum mulai bermain, dan lakukan <strong>Post-test</strong> setelah kamu menamatkan seluruh skenario game. Perkembangan skormu akan tersimpan untuk evaluasi hasil belajarmu!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button
                onClick={() => startTest('pretest')}
                className={`px-5 py-3 rounded-xl font-heading text-xs font-bold border-b-4 transition-all cursor-pointer ${
                  pretestScore !== null
                    ? 'bg-green-50 border-green-500 text-green-700 cursor-default'
                    : 'bg-[#53B4FB] border-blue-600 text-white hover:bg-blue-400 active:translate-y-0.5'
                }`}
              >
                {pretestScore !== null ? `✓ Pretest Selesai (${pretestScore})` : 'Mulai Pre-test'}
              </button>
              
              <button
                onClick={() => startTest('posttest')}
                disabled={completedLevels.length < 3}
                className={`px-5 py-3 rounded-xl font-heading text-xs font-bold border-b-4 transition-all cursor-pointer ${
                  completedLevels.length < 3
                    ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                    : posttestScore !== null
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-[#C8B6FB] border-[#a58cfc] text-[#494949] hover:bg-[#bfaefc] active:translate-y-0.5'
                }`}
              >
                {posttestScore !== null ? `✓ Post-test Selesai (${posttestScore})` : 'Mulai Post-test'}
              </button>
            </div>
          </div>

          {/* Game Levels Map Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameLevels.map(lvl => {
              const isUnlocked = unlockedLevels.includes(lvl.id);
              const isCompleted = completedLevels.includes(lvl.id);

              return (
                <div
                  key={lvl.id}
                  className={`bg-white rounded-3xl p-6 border shadow-sm transition-all duration-300 relative flex flex-col justify-between min-h-[340px] ${
                    isUnlocked
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

      {/* GAME STATE 2: PRETEST & POSTTEST WIZARD */}
      {(gameState === 'pretest' || gameState === 'posttest') && (
        <div className="max-w-2xl mx-auto space-y-6">
          
          <div className="bg-white rounded-2xl px-6 py-4 border border-blue-100 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-heading font-bold text-gray-800 uppercase text-xs">
                Evaluasi Pembelajaran: {gameState === 'pretest' ? 'Pretest' : 'Posttest'}
              </h3>
              <p className="text-[10px] text-gray-400">Jawab kuis berikut untuk mengevaluasi pemahaman</p>
            </div>
            <ExitButton onClick={() => setGameState('select_level')} />
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#53B4FB] h-full transition-all duration-300"
              style={{ width: `${((currentTestIndex + 1) / testQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl space-y-6">
            
            <div className="space-y-2">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Pertanyaan {currentTestIndex + 1} dari {testQuestions.length}
              </span>
              <h3 className="font-heading text-lg font-bold text-gray-800 leading-snug">
                {testQuestions[currentTestIndex].question}
              </h3>
            </div>

            <div className="space-y-3">
              {testQuestions[currentTestIndex].options.map((option, idx) => {
                const isSelected = testSelectedChoice === idx;
                const isCorrect = idx === testQuestions[currentTestIndex].correctIndex;
                
                let optionStyle = 'border-gray-200 hover:bg-blue-50/50';
                if (testSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-[#4CAF50] bg-green-50 text-green-900 border-2'; // Right answer border
                  } else if (isSelected) {
                    optionStyle = 'border-[#FF5A5F] bg-red-50 text-red-900 border-2'; // Wrong answer border
                  } else {
                    optionStyle = 'border-gray-100 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-[#53B4FB] bg-blue-50/70 border-2';
                }

                return (
                  <button
                    key={idx}
                    disabled={testSubmitted}
                    onClick={() => handleSelectTestChoice(idx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs leading-relaxed transition-all cursor-pointer flex items-center space-x-3 ${optionStyle}`}
                  >
                    <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-xs ${
                      isSelected ? 'bg-[#53B4FB] text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            {testSubmitted && (
              <div className={`p-5 rounded-2xl text-xs leading-relaxed border space-y-2 ${
                testSelectedChoice === testQuestions[currentTestIndex].correctIndex
                  ? 'bg-green-50 border-[#4CAF50]/30 text-green-800'
                  : 'bg-red-50 border-[#FF5A5F]/30 text-red-800'
              }`}>
                <h4 className="font-heading font-bold text-sm">
                  {testSelectedChoice === testQuestions[currentTestIndex].correctIndex ? '🎉 Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}
                </h4>
                <p>{testQuestions[currentTestIndex].explanation}</p>
              </div>
            )}

            <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-6">
              <ExitButton onClick={() => setGameState('select_level')} />

              {testSubmitted ? (
                <SubmitButton
                  onClick={nextTestQuestion}
                  disabled={false}
                />
              ) : (
                <SubmitButton
                  onClick={submitTestAnswer}
                  disabled={testSelectedChoice === null}
                />
              )}
            </div>

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
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center text-4xl">👑</div>
          
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

      {/* GAME STATE 4: PRETEST FINISHED SCREEN */}
      {gameState === 'pretest_finished' && (
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-blue-100 shadow-2xl text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto flex items-center justify-center text-4xl shadow-inner animate-bounce-slow">📝</div>
          
          <div className="space-y-2">
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Pretest Selesai
            </span>
            <h3 className="font-heading text-2xl font-bold text-gray-800">
              Evaluasi Awal Selesai!
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed px-4">
              Terima kasih telah menyelesaikan Pretest. Hasil ini membantu mengukur pemahaman awalmu sebelum menjelajahi materi dan simulasi game SIGMA.
            </p>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl space-y-1">
            <span className="text-[9px] text-[#53B4FB] font-bold uppercase tracking-wider">Skor Pretest Kamu</span>
            <div className="text-3xl font-heading font-bold text-blue-600">{pretestScore} / 100</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <button
              onClick={exitGame}
              className="py-3 px-6 bg-white hover:bg-gray-50 text-gray-500 font-heading font-bold text-xs rounded-full border border-gray-200 cursor-pointer shadow-sm flex-1 text-center transition-colors"
            >
              Kembali ke Peta Level
            </button>
            <button
              onClick={() => startLevel(1)}
              className="py-3.5 px-6 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-xs rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer flex-1 text-center transition-all"
            >
              Mulai Main Level 1
            </button>
          </div>
        </div>
      )}

      {/* GAME STATE 5: POSTTEST FINISHED SCREEN */}
      {gameState === 'posttest_finished' && (
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 border border-blue-100 shadow-2xl text-center space-y-6 animate-fade-in">
          <div className="w-20 h-20 bg-amber-50 rounded-full mx-auto flex items-center justify-center text-4xl shadow-inner animate-pulse-slow">🏆</div>
          
          <div className="space-y-2">
            <span className="bg-[#C8B6FB] text-[#494949] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Posttest Selesai
            </span>
            <h3 className="font-heading text-2xl font-bold text-gray-800">
              Hebat! Kamu Telah Lulus!
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed px-4">
              Kamu telah menyelesaikan seluruh skenario game SIGMA dan mengisi Post-test evaluasi akhir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl text-center">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Skor Pretest</span>
              <span className="text-2xl font-heading font-bold text-gray-600">{pretestScore !== null ? `${pretestScore}` : '-'}</span>
            </div>
            <div className="bg-green-50 border border-green-100 p-4 rounded-2xl text-center">
              <span className="text-[9px] text-green-700 font-bold uppercase tracking-wider block mb-1">Skor Posttest</span>
              <span className="text-2xl font-heading font-bold text-green-600">{posttestScore}</span>
            </div>
          </div>

          {pretestScore !== null && (
            <div className="p-4 rounded-2xl text-xs text-left leading-relaxed bg-[#ECEFFC]/50 border border-blue-50 text-gray-600">
              {posttestScore > pretestScore ? (
                <p>
                  🎉 <strong>Peningkatan yang bagus!</strong> Skormu meningkat sebesar <strong className="text-green-600">+{posttestScore - pretestScore} poin</strong> dari pretest. Ini membuktikan kamu telah memahami strategi identifikasi grooming digital dengan baik!
                </p>
              ) : posttestScore === pretestScore ? (
                <p>
                  ⭐ <strong>Skor Konsisten!</strong> Kamu berhasil mempertahankan pemahamanmu dengan baik. Tetap terapkan ilmu pertahanan diri siber ini di kehidupan sehari-hari ya!
                </p>
              ) : (
                <p>
                  📚 <strong>Terima kasih sudah mencoba!</strong> Pemahamanmu sudah baik, namun jangan ragu untuk kembali membaca materi atau mencoba ulang simulasi level game agar pertahanan dirimu semakin kuat.
                </p>
              )}
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={exitGame}
              className="w-full py-3.5 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-xs rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg cursor-pointer transition-all"
            >
              Kembali ke Peta Level
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
