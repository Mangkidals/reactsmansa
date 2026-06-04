import React, { useState } from 'react';
import heroImage from '../assets/hero.png';
import mainheroImage from '../assets/mainhero.png';

export default function Home({ setActivePage, setGameState, setActiveMateriTab, setSelectedArticle, articles }) {
  const [activeArtIdx, setActiveArtIdx] = useState(0);

  const handlePrevArticle = () => {
    setActiveArtIdx(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNextArticle = () => {
    setActiveArtIdx(prev => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-16 animate-fade-in">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
            <span>Strategi Identifikasi & Edukasi Digital</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#494949]">
            Kenali <span className="text-[#53B4FB]">Cyber Grooming</span>,<br />
            Jaga Keamanan Digital Kita!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            <strong>SIGMA</strong> (Strategi Identifikasi Grooming Anak) merupakan web game edukatif yang dirancang untuk membantu siswa dalam memahami, mengenali, dan mencegah perilaku manipulatif (cyber grooming) di dunia digital.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActivePage('game')}
              className="px-8 py-4 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-lg rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg shadow-orange-200 transition-all cursor-pointer"
            >
            Mulai Bermain Game
            </button>
            <button
              onClick={() => { setActivePage('materi'); setActiveMateriTab('modul'); }}
              className="px-8 py-4 bg-white hover:bg-blue-50 text-[#53B4FB] border-2 border-[#53B4FB] font-heading font-bold text-lg rounded-full transition-all shadow-sm cursor-pointer"
            >
            Baca Modul Belajar
            </button>
          </div>
        </div>

        {/* Infinite-child Image Illustration */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="absolute -inset-4 bg-blue-200/30 rounded-full blur-2xl z-0"></div>
          <img
            src={mainheroImage}
            alt="SIGMA Hero Illustration"
            className="w-full max-w-[380px] h-auto object-contain z-10 animate-float drop-shadow-2xl"
          />
          
          <div className="absolute -bottom-2 -left-2 bg-white/90 backdrop-blur border border-blue-100 p-3 rounded-2xl shadow-lg flex items-center space-x-3 z-20">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-700">100% Aman</h4>
              <p className="text-[10px] text-gray-400">Direkomendasikan Guru</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Penjelasan / Visi & Misi Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        
        {/* Card Penjelasan */}
        <div className="premium-card rounded-3xl p-8 space-y-4">
          <h3 className="font-heading text-2xl font-bold text-blue-600 flex items-center space-x-2">
            <span>Tentang SIGMA</span>
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Melalui berbagai skenario dan tantangan di dalam permainan simulasi, siswa diajak untuk menganalisis situasi obrolan, menentukan keputusan yang tepat, serta meningkatkan kewaspadaan terhadap interaksi mencurigakan di media sosial maupun platform game.
          </p>
        </div>

        {/* Card Visi & Misi */}
        <div className="premium-card rounded-3xl p-8 space-y-4 border-l-4 border-l-[#C8B6FB]">
          <h3 className="font-heading text-2xl font-bold text-[#b099f7] flex items-center space-x-2">
            <span>Visi & Misi</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400">Visi</h4>
              <p className="text-xs text-gray-600 italic mt-0.5">
                "Menjadi web game edukatif berbasis strategi identifikasi yang inovatif dan interaktif dalam membangun kesadaran, kewaspadaan, serta kemampuan siswa mengenali dan mencegah perilaku cyber grooming."
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Misi Utama</h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FFAB41]">1.</span>
                  <span>Menyajikan materi edukasi cyber grooming dalam bentuk permainan yang interaktif dan menyenangkan.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FFAB41]">2.</span>
                  <span>Membantu siswa mengenali tanda, pola, dan tahapan perilaku cyber grooming di media sosial.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FFAB41]">3.</span>
                  <span>Menumbuhkan sikap berani, peduli, dan tanggap untuk melindungi diri sendiri maupun teman sebaya.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Access Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Access Game */}
        <div className="premium-card rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden group premium-card-hover border border-blue-100">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFAB41]/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-300"></div>
          <div className="w-14 h-14 bg-[#FFAB41]/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner shrink-0">🎮</div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl font-bold text-gray-800">Uji Kewaspadaanmu!</h3>
            <p className="text-xs text-gray-500">Masuk ke ruang chat simulasi dan pelajari cara mengenali penipu atau pelaku kejahatan siber.</p>
            <button
              onClick={() => { setActivePage('game'); setGameState('select_level'); }}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#FF6D00] hover:underline pt-1 cursor-pointer bg-transparent border-0"
            >
              <span>Masuk ke Laman Game</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Access Modul */}
        <div className="premium-card rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden group premium-card-hover border border-blue-100">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8B6FB]/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-300"></div>
          <div className="w-14 h-14 bg-[#C8B6FB]/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner shrink-0">📖</div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl font-bold text-gray-800">Modul Interaktif</h3>
            <p className="text-xs text-gray-500">Pelajari apa itu grooming, tanda bahaya, dan langkah aman pelaporan via bacaan interaktif.</p>
            <button
              onClick={() => { setActivePage('materi'); setActiveMateriTab('modul'); }}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#b099f7] hover:underline pt-1 cursor-pointer bg-transparent border-0"
            >
              <span>Masuk ke Laman Materi</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>

      {/* Articles Section Preview (Full Width Carousel Version) */}
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-blue-100 pb-3">
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-800">Artikel & Jurnal Edukasi</h2>
            <p className="text-xs text-gray-400">Dapatkan wawasan seputar pola kejahatan digital terhadap anak</p>
          </div>
          <button
            onClick={() => { setActivePage('materi'); setActiveMateriTab('jurnal'); }}
            className="text-xs font-bold text-[#53B4FB] hover:underline cursor-pointer bg-transparent border-0"
          >
            Lihat Semua Artikel →
          </button>
        </div>

        {/* Sliding Full-Width Carousel Container */}
        <div className="relative w-full px-4 sm:px-12">
          
          {/* Outer Slider Window */}
          <div className="overflow-hidden rounded-3xl bg-white border border-blue-100 shadow-md">
            
            {/* Sliding Flex Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeArtIdx * 100}%)` }}
            >
              {articles.map((art, idx) => (
                <div
                  key={art.id}
                  className="w-full shrink-0 p-8 flex flex-col justify-between min-h-[240px] cursor-pointer hover:bg-gray-50/40 transition-colors group"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                        {art.date}
                      </span>
                      <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        Artikel {idx + 1} dari {articles.length}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-[#494949] text-xl sm:text-2xl group-hover:text-[#53B4FB] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-bold text-gray-700">
                    <span>Baca Selengkapnya</span>
                    <span className="ml-1 text-[#53B4FB] group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Left Arrow Button */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 z-20">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevArticle(); }}
              className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 border border-blue-100 flex items-center justify-center shadow-md hover:shadow-lg active:scale-90 transition-all cursor-pointer"
              title="Artikel Sebelumnya"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Right Arrow Button */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 z-20">
            <button
              onClick={(e) => { e.stopPropagation(); handleNextArticle(); }}
              className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 border border-blue-100 flex items-center justify-center shadow-md hover:shadow-lg active:scale-90 transition-all cursor-pointer"
              title="Artikel Selanjutnya"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Dots Indicators (Premium Morphing Pill) */}
          <div className="flex justify-center items-center space-x-2 mt-5">
            {articles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveArtIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${
                  idx === activeArtIdx ? 'w-6 bg-[#53B4FB]' : 'w-2 bg-gray-300'
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
