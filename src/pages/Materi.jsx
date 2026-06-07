import React from 'react';

export default function Materi({
  activeMateriTab,
  setActiveMateriTab,
  setSelectedArticle,
  expertOpinions,
  articles
}) {

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Header Laman */}
      <div className="text-center space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800">Laman Materi Edukasi</h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          Pelajari pengetahuan dasar seputar cyber grooming melalui video, buku modul interaktif, dan pandangan ahli psikologi anak.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-b border-blue-100 pb-4">
        {[
          { id: 'video', label: 'Video Edukasi', activeClass: 'border-[#53B4FB] bg-[#53B4FB]/5 text-[#53B4FB]', inactiveClass: 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50' },
          { id: 'modul', label: 'Buku Modul Interaktif', activeClass: 'border-[#FFAB41] bg-[#FFAB41]/5 text-[#FF6D00]', inactiveClass: 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50' },
          { id: 'ahli', label: 'Pandangan Para Ahli', activeClass: 'border-[#C8B6FB] bg-[#C8B6FB]/5 text-[#8668ed]', inactiveClass: 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50' },
          { id: 'jurnal', label: 'Artikel & Jurnal Hukum', activeClass: 'border-green-500 bg-green-500/5 text-green-600', inactiveClass: 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveMateriTab(tab.id)}
            className={`px-4 py-3 font-heading font-bold text-xs sm:text-sm transition-all border-2 rounded-2xl text-center cursor-pointer shadow-sm ${activeMateriTab === tab.id
                ? tab.activeClass
                : tab.inactiveClass
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="pt-4">

        {/* Tab 1: Video Edukasi */}
        {activeMateriTab === 'video' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="bg-[#0a1520] rounded-3xl overflow-hidden aspect-video shadow-2xl relative border-4 border-white group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/yEICaFnlXlg?rel=0"
                  title="Edukasi Cyber Grooming Anak"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-2 text-[10px] text-gray-400 italic text-center">
                *Video milik pihak ketiga untuk tujuan edukasi pencegahan eksploitasi online.
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FFAB41]/10 border border-[#FFAB41]/20 p-4 rounded-2xl flex items-center space-x-3 text-[#FF6D00] text-xs font-bold">
                <span>Menonton video membantu menyelesaikan Kuis Laman Game lebih cepat!</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-gray-800">Video Edukasi: Apa sih Cyber Grooming itu?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Banyak anak tidak sadar bahwa kenalan baru mereka yang menyenangkan di game online atau media sosial sebenarnya adalah orang dewasa dengan niat jahat. Video ini menjelaskan cara mengenali rayuan palsu, ancaman, dan taktik grooming yang sering terjadi di dunia digital dengan bahasa yang mudah dipahami.
              </p>

              <div className="space-y-2">
                <h4 className="font-bold text-xs text-gray-400 uppercase">Poin Utama Video:</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bahaya membagikan nama asli, alamat sekolah, dan nomor WhatsApp.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tanda mencurigakan jika diajak berteman terlalu instan.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bagaimana menolak pemberian hadiah top-up mencurigakan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Buku Modul Interaktif — PDF Viewer */}
        {activeMateriTab === 'modul' && (
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-blue-100" style={{ height: 'calc(100vh - 220px)', minHeight: '500px' }}>
            <iframe
              src="https://drive.google.com/file/d/17OmlBHEUSbOGIGCulojxVmyUg0j_tpwS/view?usp=sharing"
              className="w-full h-full border-0"
              title="Buku Modul SIGMA — Edukasi Cyber Grooming"
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        )}

        {/* Tab 3: Pandangan Para Ahli */}
        {activeMateriTab === 'ahli' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertOpinions.map((opinion, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                    {opinion.avatar}
                  </div>
                  <h4 className="font-heading font-bold text-gray-800 leading-snug">{opinion.name}</h4>
                  <p className="text-[10px] text-blue-500 font-bold uppercase">{opinion.role}</p>
                  <p className="text-xs text-gray-500 italic leading-relaxed pt-2">
                    "{opinion.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Artikel & Jurnal Hukum */}
        {activeMateriTab === 'jurnal' && (
          <div className="space-y-4">
            {articles.map(art => (
              <div
                key={art.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() => setSelectedArticle(art)}
              >
                <div className="space-y-1 max-w-3xl">
                  <div className="text-[10px] font-bold text-gray-400">{art.date}</div>
                  <h4 className="font-heading font-bold text-gray-800 text-lg hover:text-[#53B4FB] transition-colors">{art.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{art.summary}</p>
                </div>

                <div className="shrink-0 flex items-center space-x-2 text-xs font-bold text-[#53B4FB]">
                  <span>Buka Jurnal</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
