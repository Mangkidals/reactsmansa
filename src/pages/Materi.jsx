import React from 'react';
import { PrevButton, NextButton } from '../components/Button';

export default function Materi({
  activeMateriTab,
  setActiveMateriTab,
  activeModulPage,
  setActiveModulPage,
  setSelectedArticle,
  modulPages,
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
            className={`px-4 py-3 font-heading font-bold text-xs sm:text-sm transition-all border-2 rounded-2xl text-center cursor-pointer shadow-sm ${
              activeMateriTab === tab.id
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
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/P88k0oE-Htc"
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
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✔</span>
                    <span>Bahaya membagikan nama asli, alamat sekolah, dan nomor WhatsApp.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✔</span>
                    <span>Tanda mencurigakan jika diajak berteman terlalu instan.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✔</span>
                    <span>Bagaimana menolak pemberian hadiah top-up mencurigakan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Buku Modul Interaktif */}
        {activeMateriTab === 'modul' && (
          <div className="max-w-3xl mx-auto space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-xl relative min-h-[300px] flex flex-col justify-between">
              
              <div className="absolute top-6 right-6 bg-[#C8B6FB] text-[#494949] font-heading font-semibold text-xs px-3 py-1 rounded-full">
                Halaman {activeModulPage + 1} dari {modulPages.length}
              </div>

              <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-blue-100/50 rounded-r-md"></div>

              <div className="space-y-6 pl-4">
                <div className="text-5xl">{modulPages[activeModulPage].img}</div>
                <h3 className="font-heading text-2xl font-bold text-gray-800">
                  {modulPages[activeModulPage].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {modulPages[activeModulPage].content}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-gray-100 pt-6 mt-6">
                <PrevButton
                  onClick={() => setActiveModulPage(prev => Math.max(0, prev - 1))}
                  disabled={activeModulPage === 0}
                />
                
                <div className="flex space-x-1.5">
                  {modulPages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === activeModulPage ? 'bg-[#53B4FB]' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>

                <NextButton
                  onClick={() => setActiveModulPage(prev => Math.min(modulPages.length - 1, prev + 1))}
                  disabled={activeModulPage === modulPages.length - 1}
                />
              </div>

            </div>

            {/* Icon guideline representation */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-gray-400 text-center">
                Topik Panduan Edukasi Kami (Icons Guideline)
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 text-center">
                {[
                  { label: "Cerita Anak", icon: "🎬" },
                  { label: "Lagu", icon: "🎵" },
                  { label: "Permainan", icon: "🎮" },
                  { label: "Body Puzzle", icon: "🧩" },
                  { label: "Boys & Girls", icon: "👫" },
                  { label: "Good/Bad Touch", icon: "🤝" },
                  { label: "Let's Shower", icon: "🚿" },
                  { label: "Words & Dress", icon: "🧸" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 group">
                    <div className="w-10 h-10 bg-[#C8B6FB] rounded-full mx-auto flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="text-[9px] font-bold text-gray-500 leading-tight truncate">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Pandangan Para Ahli */}
        {activeMateriTab === 'ahli' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertOpinions.map((opinion, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl">{opinion.avatar}</div>
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
