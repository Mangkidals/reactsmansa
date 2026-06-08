import React, { useState, useEffect } from 'react';

const GUIDE_STEPS = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Selamat Datang di SIGMA!",
    subtitle: "Strategi Identifikasi Grooming & Monitoring Anak",
    description: "SIGMA adalah web game edukatif yang membantu kamu memahami, mengenali, dan mencegah perilaku manipulatif (cyber grooming) di dunia digital. Berikut panduan singkat untuk memaksimalkan pengalamanmu!",
    color: "#53B4FB",
    bgGradient: "from-blue-50 to-indigo-50",
    tips: [
      "Web ini berisi materi edukasi dan game simulasi interaktif",
      "Direkomendasi untuk anak dibawah umur",
      "Bermain game simulasi terlebih dahulu, lalu baca materi"
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Laman Materi",
    subtitle: "Langkah 1: Pelajari Materi",
    description: "Buka Laman Materi untuk mempelajari apa itu cyber grooming, tahapan manipulasi pelaku, tanda-tanda bahaya, dan cara melindungi diri. Terdapat 4 tab konten:",
    color: "#8668ed",
    bgGradient: "from-purple-50 to-fuchsia-50",
    tips: [
      "Video — Tonton video edukasi interaktif",
      "Modul — Baca materi lengkap dengan navigasi halaman",
      "Pendapat Ahli — Insight dari psikolog & pakar keamanan",
      "Artikel — Bacaan mendalam dan jurnal terbaru"
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Tips Keamanan",
    subtitle: "Langkah 2: Terapkan & Laporkan!",
    description: "Setelah mempelajari materi dan menyelesaikan game, terapkan pengetahuanmu di kehidupan nyata. Ingat langkah keamanan berikut:",
    color: "#4CAF50",
    bgGradient: "from-green-50 to-emerald-50",
    tips: [
      "Jangan bagikan data pribadi ke orang asing di internet",
      "Jangan terima hadiah/top-up dari orang tidak dikenal",
      "Ceritakan chat mencurigakan ke orang tua atau gurumu",
      "Hubungi Hotline SAPA KPPPA di 129 jika ada ancaman"
    ]
  },
    {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M6 12h4M8 10v4M16 11h.01M18 13h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
    title: "Laman Game",
    subtitle: "Langkah 3: Mainkan Game Simulasi",
    description: "Uji pemahaman dan kewaspadaanmu melalui 3 level game simulasi chat interaktif. Setiap level menyajikan skenario berbeda tentang cyber grooming:",
    color: "#FF6D00",
    bgGradient: "from-orange-50 to-amber-50",
    tips: [
      "Level 1 — Siapa Teman Baruku? (skenario pertemanan)",
      "Level 2 — Hadiah Misterius (skenario gratifikasi)",
      "Level 3 — Rahasia Kita Berdua (skenario pemerasan)",
      "Level harus diselesaikan secara berurutan untuk membuka level berikutnya"
    ]
  }
];

export default function GuideModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const goToStep = (stepIdx) => {
    if (isAnimating || stepIdx === currentStep) return;
    setIsAnimating(true);
    setSlideDirection(stepIdx > currentStep ? 'right' : 'left');
    setTimeout(() => {
      setCurrentStep(stepIdx);
      setIsAnimating(false);
    }, 200);
  };

  const handleNext = () => {
    if (currentStep < GUIDE_STEPS.length - 1) {
      goToStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    localStorage.setItem('sigma_guide_seen', 'true');
    onClose();
  };

  if (!isOpen) return null;

  const step = GUIDE_STEPS[currentStep];
  const isLastStep = currentStep === GUIDE_STEPS.length - 1;
  const isFirstStep = currentStep === 0;
  const progress = ((currentStep + 1) / GUIDE_STEPS.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm guide-backdrop-enter"
        onClick={handleFinish}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden guide-modal-enter">

        {/* Progress Bar */}
        <div className="h-1 bg-gray-100 w-full">
          <div
            className="h-full rounded-r-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, backgroundColor: step.color }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={handleFinish}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all cursor-pointer group"
          title="Lewati Panduan"
        >
          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Step Content */}
        <div
          className={`p-6 sm:p-8 transition-all duration-200 ${isAnimating
            ? slideDirection === 'right'
              ? 'opacity-0 translate-x-4'
              : 'opacity-0 -translate-x-4'
            : 'opacity-100 translate-x-0'
            }`}
        >
          {/* Step Header with Icon */}
          <div className={`bg-gradient-to-br ${step.bgGradient} rounded-2xl p-5 mb-5 flex items-center space-x-4`}>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner"
              style={{ backgroundColor: `${step.color}15`, color: step.color }}
            >
              {step.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                {step.title}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: step.color }}>
                {step.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Tips List */}
          <div className="space-y-2.5">
            {step.tips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 bg-gray-50/80 hover:bg-gray-100/80 rounded-xl px-4 py-3 transition-colors"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5"
                  style={{ backgroundColor: step.color }}
                >
                  {idx + 1}
                </div>
                <span className="text-xs text-gray-700 leading-relaxed font-medium">
                  {tip}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex items-center justify-between">
          {/* Step Dots */}
          <div className="flex items-center space-x-1.5">
            {GUIDE_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToStep(idx)}
                className="transition-all duration-300 rounded-full cursor-pointer h-2"
                style={{
                  width: idx === currentStep ? '24px' : '8px',
                  backgroundColor: idx === currentStep ? step.color : '#e5e7eb'
                }}
                title={`Langkah ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center space-x-2">
            {!isFirstStep && (
              <button
                onClick={handlePrev}
                className="flex items-center space-x-1.5 px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Kembali</span>
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center space-x-1.5 px-6 py-2.5 text-xs font-bold text-white rounded-full shadow-md transition-all cursor-pointer active:scale-95 hover:shadow-lg"
              style={{
                backgroundColor: step.color,
                boxShadow: `0 4px 14px ${step.color}40`
              }}
            >
              <span>{isLastStep ? 'Mulai Jelajahi!' : 'Selanjutnya'}</span>
              {isLastStep ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
