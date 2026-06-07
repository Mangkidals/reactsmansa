import React, { useState } from 'react';

const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/7bN4laaeGGw?rel=0',
    title: 'Apa Itu Cyber Grooming? Kenali Bahayanya!',
    badge: 'Pengenalan',
    description:
      'Video ini memperkenalkan konsep cyber grooming secara menyeluruh — mulai dari definisi, siapa saja pelakunya, hingga platform digital yang paling sering digunakan sebagai tempat kejahatan ini berlangsung.',
    points: [
      'Definisi dan arti cyber grooming bagi anak-anak',
      'Platform yang paling rentan: game online & media sosial',
      'Pola pendekatan awal yang dilakukan pelaku',
    ],
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/PKfVcMsQkMo?rel=0',
    title: 'Tanda-Tanda Anak Menjadi Korban Grooming',
    badge: 'Deteksi Dini',
    description:
      'Pelajari sinyal-sinyal peringatan yang harus diwaspadai orang tua maupun guru. Video ini membahas perubahan perilaku, pola komunikasi mencurigakan, dan bagaimana membuka percakapan yang aman dengan anak.',
    points: [
      'Perubahan perilaku anak yang perlu diwaspadai',
      'Cara pelaku membangun kepercayaan secara bertahap',
      'Tips orang tua membuka dialog yang aman dengan anak',
    ],
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/oVc2gC3-hNM?rel=0',
    title: 'Cara Melindungi Diri dari Cyber Grooming',
    badge: 'Pencegahan',
    description:
      'Panduan praktis bagi anak-anak dan remaja untuk melindungi diri di dunia digital. Video ini mengajarkan langkah konkret menolak, melaporkan, dan mencari bantuan saat merasa tidak nyaman.',
    points: [
      'Langkah menolak dengan tegas tanpa rasa takut',
      'Cara melaporkan kepada orang tua dan pihak berwenang',
      'Pengaturan privasi akun media sosial yang aman',
    ],
  },
];

export default function Materi({
  activeMateriTab,
  setActiveMateriTab,
  setSelectedArticle,
  expertOpinions,
  articles
}) {
  const [activeArtIdx, setActiveArtIdx] = useState(0);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  const handlePrevArticle = () => {
    setActiveArtIdx(prev => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNextArticle = () => {
    setActiveArtIdx(prev => (prev === articles.length - 1 ? 0 : prev + 1));
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

        {/* Tab 1: Video Edukasi — Carousel */}
        {activeMateriTab === 'video' && (
          <div className="space-y-6">

            {/* Video + Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left: Video Carousel */}
              <div className="lg:col-span-7 relative">
                <div className="overflow-hidden rounded-3xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeVideoIdx * 100}%)` }}
                  >
                    {videos.map((video) => (
                      <div key={video.id} className="w-full shrink-0">
                        <div className="bg-[#0a1520] rounded-3xl overflow-hidden aspect-video shadow-2xl relative border-4 border-white">
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={video.src}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Buttons over the video */}
                <button
                  onClick={() => setActiveVideoIdx(prev => (prev === 0 ? videos.length - 1 : prev - 1))}
                  className="absolute top-1/2 -translate-y-1/2 left-2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white border border-gray-200 flex items-center justify-center shadow-lg active:scale-90 transition-all cursor-pointer"
                  title="Video Sebelumnya"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveVideoIdx(prev => (prev === videos.length - 1 ? 0 : prev + 1))}
                  className="absolute top-1/2 -translate-y-1/2 right-2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white border border-gray-200 flex items-center justify-center shadow-lg active:scale-90 transition-all cursor-pointer"
                  title="Video Selanjutnya"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Disclaimer */}
                <div className="mt-2 text-[10px] text-gray-400 italic text-center">
                  *Video milik pihak ketiga untuk tujuan edukasi pencegahan eksploitasi online.
                </div>
              </div>

              {/* Right: Dynamic Info Panel */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-[#FFAB41]/10 border border-[#FFAB41]/20 p-4 rounded-2xl flex items-center space-x-3 text-[#FF6D00] text-xs font-bold">
                  <span>Menonton video membantu menyelesaikan Kuis Laman Game lebih cepat!</span>
                </div>

                {/* Badge */}
                <span className="inline-block bg-[#53B4FB]/10 text-[#53B4FB] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {videos[activeVideoIdx].badge} — Video {activeVideoIdx + 1} dari {videos.length}
                </span>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-gray-800 transition-all duration-300">
                  {videos[activeVideoIdx].title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed transition-all duration-300">
                  {videos[activeVideoIdx].description}
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <h4 className="font-bold text-xs text-gray-400 uppercase">Poin Utama Video:</h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    {videos[activeVideoIdx].points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center space-x-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideoIdx(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer h-2 ${idx === activeVideoIdx ? 'w-6 bg-[#53B4FB]' : 'w-2 bg-gray-300'
                    }`}
                ></button>
              ))}
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
                  {/* <div className="w-12 h-12 bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                    {opinion.avatar}
                  </div> */}
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

            {/* Carousel Dots Indicators */}
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
        )}

      </div>

    </div>
  );
}
