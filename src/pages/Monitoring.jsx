import React from 'react';

export default function Monitoring({
  studentName,
  completedLevels,
  overallSafetyScore,
  pretestScore,
  posttestScore,
  gameLevels
}) {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Laman */}
      <div className="text-center space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800">Laman Monitoring Siswa</h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Evaluasi pemahaman anak terhadap bahaya cyber grooming berdasarkan kuis pretest/posttest dan simulasi pengambilan keputusan.
        </p>
      </div>

      {/* Profile Summary Card */}
      <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        <div className="flex items-center space-x-4 col-span-2">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">👦</div>
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-800">{studentName}</h3>
            <p className="text-xs text-gray-400">Sekolah: SMP Indonesia (Simulation Mode)</p>
            <div className="inline-block mt-1 bg-blue-50 text-[#53B4FB] text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100">
              Siswa Aktif
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-2xl text-center border border-gray-100">
          <span className="text-[9px] text-gray-400 uppercase font-bold">Lencana Diperoleh</span>
          <div className="text-xl font-heading font-bold text-gray-700">{completedLevels.length} / 3</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-2xl text-center border border-gray-100">
          <span className="text-[9px] text-gray-400 uppercase font-bold">Rata-rata Skor Kunci Keamanan</span>
          <div className="text-xl font-heading font-bold text-gray-700">{overallSafetyScore}%</div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Comparative Charts: Pretest vs Posttest */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-6">
          <h3 className="font-heading text-lg font-bold text-gray-800">Perbandingan Pemahaman (Pretest vs Posttest)</h3>
          
          {pretestScore === null && posttestScore === null ? (
            <div className="text-center py-12 text-gray-400 space-y-2">
              <span className="text-4xl">📊</span>
              <p className="text-xs">Belum ada data kuis. Silakan kerjakan Pretest dan Posttest di Laman Game.</p>
            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Visual Bar Chart */}
              <div className="space-y-4 pt-4">
                
                {/* Pretest Bar */}
                {pretestScore !== null && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Pretest Score</span>
                      <span>{pretestScore} / 100</span>
                    </div>
                    <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden flex">
                      <div
                        className="bg-[#53B4FB] h-full transition-all duration-500 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${pretestScore}%` }}
                      >
                        {pretestScore >= 20 && (
                          <span className="text-[9px] font-heading font-bold text-white">{pretestScore}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Posttest Bar */}
                {posttestScore !== null && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Posttest Score</span>
                      <span>{posttestScore} / 100</span>
                    </div>
                    <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden flex">
                      <div
                        className="bg-green-500 h-full transition-all duration-500 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${posttestScore}%` }}
                      >
                        {posttestScore >= 20 && (
                          <span className="text-[9px] font-heading font-bold text-white">{posttestScore}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Progress feedback message */}
              {pretestScore !== null && posttestScore !== null && (
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start space-x-3 text-xs leading-relaxed text-blue-800">
                  <span className="text-lg">📢</span>
                  <div>
                    <strong>Analisis Peningkatan:</strong> 
                    {posttestScore > pretestScore ? (
                      <span> Pemahaman siswa meningkat sebesar <strong>{posttestScore - pretestScore} poin</strong> setelah melalui simulasi game terarah. Ini menunjukkan modul game edukasi SIGMA berhasil tersampaikan dengan baik.</span>
                    ) : posttestScore === pretestScore ? (
                      <span> Skor stabil. Siswa menunjukkan pemahaman yang konsisten sebelum dan sesudah bermain game.</span>
                    ) : (
                      <span> Skor posttest mengalami penurunan. Disarankan agar siswa membaca ulang Buku Modul Interaktif di Laman Materi.</span>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Status Index & Recommendations */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Safety Status Gauge Card */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-4">
            <h3 className="font-heading text-lg font-bold text-gray-800">Indeks Kewaspadaan Anak</h3>
            
            <div className="text-center py-4 space-y-1">
              <span className="text-xs text-gray-400 font-medium">Status Keamanan</span>
              <div className={`text-3xl font-heading font-bold ${
                overallSafetyScore >= 80
                  ? 'text-green-600'
                  : overallSafetyScore >= 60
                  ? 'text-[#FFAB41]'
                  : 'text-[#FF5A5F]'
              }`}>
                {overallSafetyScore >= 80 ? 'SANGAT AMAN' : overallSafetyScore >= 60 ? 'WASPADA' : 'BAHAYA'}
              </div>
              <p className="text-[10px] text-gray-400 px-4">
                Dinilai dari rata-rata keputusan aman yang diambil saat simulasi.
              </p>
            </div>
          </div>

          {/* Recommendations Card */}
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-4">
            <h4 className="font-heading font-bold text-sm text-gray-800">Rekomendasi untuk Orang Tua/Guru:</h4>
            
            <ul className="space-y-3 text-xs leading-relaxed text-gray-600">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500">📌</span>
                <span>
                  {overallSafetyScore >= 85
                    ? "Siswa memiliki kewaspadaan yang baik. Tetap dampingi dan evaluasi obrolan publiknya secara berkala."
                    : "Latih siswa secara langsung mengenai cara memblokir akun mencurigakan di media sosial mereka."}
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500">📌</span>
                <span>
                  Pastikan anak tahu cara menghubungi nomor pengaduan darurat 129 Sahabat Perempuan & Anak KPPPA jika menemui tindak pemerasan online.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Level Achievements List */}
      <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm space-y-6">
        <h3 className="font-heading text-lg font-bold text-gray-800">Rekapitulasi Level & Pembelajaran</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gameLevels.map(lvl => {
            const isCompleted = completedLevels.includes(lvl.id);
            return (
              <div
                key={lvl.id}
                className={`p-4 rounded-2xl border flex items-center space-x-4 ${
                  isCompleted ? 'bg-green-50/50 border-green-200' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="text-3xl shrink-0">{isCompleted ? '🏆' : '🔒'}</div>
                <div>
                  <h4 className="text-xs font-bold text-gray-700">{lvl.title}</h4>
                  <p className="text-[10px] text-gray-400">
                    {isCompleted ? 'Lencana Diperoleh' : 'Belum Selesai'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
