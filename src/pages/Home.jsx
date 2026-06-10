import React, { useState } from 'react';
import heroImage from '../assets/hero.png';
import mainheroImage from '../assets/mainhero.png';
import ScrollReveal from '../components/ScrollReveal';

export default function Home({ setActivePage, setGameState, setActiveMateriTab, setSelectedArticle, articles }) {
  const [activeArtIdx, setActiveArtIdx] = useState(0);

  const handlePrevArticle = () => {
    setActiveArtIdx(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNextArticle = () => {
    setActiveArtIdx(prev => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 md:pt-12">
        <div className="lg:col-span-7">
          <ScrollReveal animation="fade-right" duration={800} delay={100} className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full text-blue-600 font-bold text-xs uppercase tracking-wider">
              <span>Strategi Identifikasi Grooming & Monitoring Anak</span>
            </div>

            {/* Mobile/Tablet Hero Image (Only visible on mobile/tablet - placed under the badge) */}
            <div className="lg:hidden flex justify-center relative py-4">
              <div className="absolute w-48 h-48 bg-blue-200/35 rounded-full blur-2xl z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src={mainheroImage}
                alt="SIGMA Hero Illustration"
                className="w-2/3 sm:w-1/2 max-w-[220px] sm:max-w-[280px] h-auto object-contain z-10 animate-float drop-shadow-2xl"
              />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#494949]">
              Kenali <span className="text-[#53B4FB]">Cyber Grooming</span>,<br />
              Jaga Keamanan Digital Kita!
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              <strong>SIGMA</strong> (Strategi Identifikasi Grooming Anak) merupakan web game edukatif yang dirancang untuk membantu siswa dalam memahami, mengenali, dan mencegah perilaku manipulatif (cyber grooming) di dunia digital.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setActivePage('game')}
                className="px-8 py-4 bg-[#FFAB41] hover:bg-[#FF6D00] text-white font-heading font-bold text-lg rounded-full border-b-4 border-[#D97E0C] active:translate-y-0.5 active:border-b-0 shadow-lg shadow-orange-200 transition-all cursor-pointer"
              >
                Mainkan Game
              </button>
              <button
                onClick={() => { setActivePage('materi'); setActiveMateriTab('modul'); }}
                className="px-8 py-4 bg-[#53B4FB] hover:bg-[#4aa2e1] text-white font-heading font-bold text-lg rounded-full border-b-4 border-[#4290c8] active:translate-y-0.5 active:border-b-0 shadow-lg shadow-blue-200 transition-all cursor-pointer"
              >
                Buka Modul
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Desktop Hero Image (Only visible on desktop) */}
        <div className="hidden lg:flex lg:col-span-5 justify-center relative">
          <ScrollReveal animation="fade-left" duration={800} delay={200}>
            <div className="absolute w-48 h-48 bg-blue-200/35 rounded-full blur-2xl z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={mainheroImage}
              alt="SIGMA Hero Illustration"
              className="w-full max-w-[380px] h-auto object-contain z-10 animate-float drop-shadow-2xl"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* ═══ Bento Grid: Visi & Misi + Quick Access ═══ */}
      <div className="bento-grid pt-8">

        {/* Cell 1 — Visi & Misi (tall, spans 2 rows on desktop) */}
        <ScrollReveal animation="fade-up" duration={800} delay={100} className="bento-cell bento-cell-visi group">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8B6FB]/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#53B4FB]/[0.06] rounded-full -translate-x-8 translate-y-8 group-hover:scale-125 transition-transform duration-700"></div>

          <div className="relative z-10 h-full flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center space-x-1.5 bg-[#C8B6FB]/15 border border-[#C8B6FB]/25 px-3 py-1 rounded-full text-[#8668ed] font-bold text-[10px] uppercase tracking-wider w-fit">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Visi & Misi</span>
            </div>

            {/* Heading */}
            <h3 className="font-heading text-2xl font-bold text-[#494949] mt-4 leading-snug">
              Arah & Tujuan <span className="text-[#8668ed]">SIGMA</span>
            </h3>

            {/* Content */}
            <div className="space-y-5 mt-5 flex-grow">
              {/* Visi Card */}
              <div className="bg-gradient-to-br from-[#C8B6FB]/10 to-transparent p-4 rounded-2xl border border-[#C8B6FB]/15">
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#8668ed] flex items-center space-x-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#8668ed] rounded-full inline-block"></span>
                  <span>Visi</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Menjadi web game edukatif berbasis strategi identifikasi yang inovatif dan interaktif dalam membangun kesadaran, kewaspadaan, serta kemampuan siswa mengenali dan mencegah perilaku cyber grooming.
                </p>
              </div>

              {/* Misi List */}
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#8668ed] flex items-center space-x-1.5 mb-3">
                  <span className="w-1.5 h-1.5 bg-[#8668ed] rounded-full inline-block"></span>
                  <span>Misi Utama</span>
                </h4>
                <ul className="space-y-3">
                  {[
                    'Menyajikan materi edukasi cyber grooming dalam bentuk permainan yang interaktif dan menyenangkan.',
                    'Membantu siswa mengenali tanda, pola, dan tahapan perilaku cyber grooming di media sosial.',
                    'Menumbuhkan sikap berani, peduli, dan tanggap untuk melindungi diri sendiri maupun teman sebaya.'
                  ].map((misi, i) => (
                    <li key={i} className="flex items-start space-x-3 group/item">
                      <span className="shrink-0 w-6 h-6 bg-[#8668ed]/10 text-[#8668ed] rounded-lg flex items-center justify-center text-[10px] font-bold mt-0.5 group-hover/item:bg-[#8668ed] group-hover/item:text-white transition-colors duration-200">
                        {i + 1}
                      </span>
                      <span className="text-xs text-gray-600 leading-relaxed">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cell 2 — Uji Kewaspadaan (top-right) */}
        <ScrollReveal
          animation="fade-up"
          duration={800}
          delay={250}
          className="bento-cell bento-cell-game group cursor-pointer"
          onClick={() => { setActivePage('game'); setGameState('select_level'); }}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFAB41]/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFAB41]/20 to-[#FF6D00]/10 text-[#FF6D00] rounded-2xl flex items-center justify-center shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <path d="M6 12h4M8 10v4M16 11h.01M18 13h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#FF6D00]">Uji Kewaspadaanmu!</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Masuk ke ruang chat simulasi dan pelajari cara mengenali penipu atau pelaku kejahatan siber.
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#FF6D00] pt-4 group-hover:translate-x-1 transition-transform duration-200">
              <span>Masuk ke Laman Game</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Cell 3 — Modul Interaktif (bottom-right) */}
        <ScrollReveal
          animation="fade-up"
          duration={800}
          delay={400}
          className="bento-cell bento-cell-modul group cursor-pointer"
          onClick={() => { setActivePage('materi'); setActiveMateriTab('modul'); }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#53B4FB]/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#53B4FB]/20 to-[#53B4FB]/5 text-[#53B4FB] rounded-2xl flex items-center justify-center shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#4290c8]">Modul Interaktif</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Pelajari apa itu grooming, tanda bahaya, dan langkah aman pelaporan via bacaan interaktif.
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#4290c8] pt-4 group-hover:translate-x-1 transition-transform duration-200">
              <span>Masuk ke Laman Materi</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Articles Section Preview (Full Width Carousel Version) */}
      <ScrollReveal animation="fade-up" duration={800} delay={100} className="space-y-6">
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
                  onClick={() => window.open(art.url, '_blank')}
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
                className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${idx === activeArtIdx ? 'w-6 bg-[#53B4FB]' : 'w-2 bg-gray-300'
                  }`}
              ></button>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
}
