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
  const handlePrevModulPage = () => {
    setActiveModulPage(prev => (prev === 0 ? modulPages.length - 1 : prev - 1));
  };

  const handleNextModulPage = () => {
    setActiveModulPage(prev => (prev === modulPages.length - 1 ? 0 : prev + 1));
  };

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

        {/* Tab 2: Buku Modul Interaktif */}
        {activeMateriTab === 'modul' && (
          <div className="space-y-6">
            <div className="relative w-full px-4 sm:px-12">

              {/* Outer Slider Window */}
              <div className="overflow-hidden rounded-3xl bg-white border border-blue-100 shadow-md">

                {/* Sliding Flex Container */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeModulPage * 100}%)` }}
                >
                  {modulPages.map((page, idx) => {
                    let pageIcon = null;
                    if (idx === 0) {
                      pageIcon = (
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner border border-blue-100/50">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      );
                    } else if (idx === 1) {
                      pageIcon = (
                        <div className="w-14 h-14 bg-orange-50 text-[#FF6D00] rounded-2xl flex items-center justify-center shadow-inner border border-orange-100/50">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      );
                    } else if (idx === 2) {
                      pageIcon = (
                        <div className="w-14 h-14 bg-red-50 text-[#FF5A5F] rounded-2xl flex items-center justify-center shadow-inner border border-red-100/50">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                      );
                    } else {
                      pageIcon = (
                        <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-inner border border-green-100/50">
                          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={idx}
                        className="w-full shrink-0 p-8 flex flex-col justify-between min-h-[300px]"
                      >
                        <div className="space-y-6">
                          <div className="flex justify-between items-center">
                            <span className="bg-[#C8B6FB]/20 text-[#8668ed] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                              Halaman {idx + 1} dari {modulPages.length}
                            </span>
                            {pageIcon}
                          </div>

                          <div className="space-y-3">
                            <h3 className="font-heading text-2xl font-bold text-gray-800 leading-snug">
                              {page.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {page.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Left Arrow Button */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 z-20">
                <button
                  onClick={handlePrevModulPage}
                  className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-md active:scale-90 transition-all hover:bg-blue-50 text-gray-600 cursor-pointer"
                  title="Sebelumnya"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              {/* Right Arrow Button */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 z-20">
                <button
                  onClick={handleNextModulPage}
                  className="w-10 h-10 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-md active:scale-90 transition-all hover:bg-blue-50 text-gray-600 cursor-pointer"
                  title="Selanjutnya"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Carousel Dots Indicators */}
              <div className="flex justify-center items-center space-x-2 mt-5">
                {modulPages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModulPage(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${idx === activeModulPage ? 'w-6 bg-[#FFAB41]' : 'w-2 bg-gray-300'
                      }`}
                  ></button>
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
