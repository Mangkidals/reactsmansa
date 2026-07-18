import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GuideModal from './components/GuideModal';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Game from './pages/Game';

/* ==========================================================================
   GAME LEVELS CONFIGURATION (Iframe Sources for Construct 2)
   ========================================================================== */

const GAME_LEVELS = [
  {
    id: 1,
    title: "Level 1: Siapa Teman Baruku?",
    desc: "Skenario chat awal tentang menyaring informasi pribadi dan mewaspadai permintaan kontak dari orang tak dikenal di game online.",
    badge: "Detektif Pemula",
    iframeUrl: "/OPSI-1.3/index.html",
    opponent: {
      name: "Skenario Pertemanan",
      avatarChar: ""
    }
  },
  {
    id: 2,
    title: "Level 2: Hadiah Misterius",
    desc: "Skenario tentang menolak top-up diamonds/item game gratisan dari orang asing yang berujung pada pemerasan foto wajah.",
    badge: "Penjaga Privasi",
    // iframeUrl: "/game/level2/index.html",
    opponent: {
      name: "Skenario Gratifikasi",
      avatarChar: ""
    }
  },
  {
    id: 3,
    title: "Level 3: Rahasia Kita Berdua",
    desc: "Skenario penolakan video call di kamar pribadi, menolak ancaman pemerasan data, dan melaporkan pelaku ke polisi siber.",
    badge: "Pahlawan Digital",
    // iframeUrl: "/game/level3/index.html",
    opponent: {
      name: "Skenario Pemerasan",
      avatarChar: ""
    }
  }
];



const MODUL_PAGES = [
  {
    title: "Mengenal Cyber Grooming",
    img: "",
    content: "Cyber grooming adalah proses ketika pelaku (biasanya orang dewasa di internet) mencoba berteman, membangun hubungan emosional, dan memanipulasi anak-anak atau remaja agar mempercayai mereka dengan tujuan jahat/eksploitasi di kemudian hari. Mereka bisa menyamar sebagai anak seusiamu dan menyukai game yang sama."
  },
  {
    title: "Tahapan Manipulasi Pelaku",
    img: "",
    content: "Pelaku biasanya menggunakan tahapan terencana: (1) Menjalin pertemanan akrab lewat hobi yang sama, (2) Memberi hadiah gratis seperti top-up game agar korban merasa berutang budi, (3) Meminta memindahkan chat ke platform privat (WhatsApp/Discord), (4) Mulai mengisolasi dengan meminta merahasikan obrolan dari orang tua, (5) Meminta foto/video call sensitif, dan (6) Mengancam jika korban menolak."
  },
  {
    title: "Tanda Bahaya (Red Flags)",
    img: "",
    content: "Segera waspada jika teman online barumu melakukan hal berikut: (1) Meminta rahasia pertemanan dari orang tuamu, (2) Mendesak meminta nomor WA atau Instagram pribadimu, (3) Memberi diamond/skin gratis secara mendadak, (4) Marah atau memeras emosimu jika permintaannya ditolak, (5) Mengajak video call privat di ruang tertutup."
  },
  {
    title: "Cara Melindungi Diri & Melapor",
    img: "",
    content: "Langkah pertahanan terbaikmu: (1) Jangan pernah bagikan informasi pribadi (sekolah, nomor WA, alamat rumah, foto diri), (2) Jangan terima hadiah berharga dari orang asing, (3) Selalu ceritakan chat mencurigakan ke orang tua atau gurumu, (4) Blokir dan Laporkan akun mencurigakan ke CS Game, dan jika ada pemerasan, laporkan ke Polisi Cyber atau Hotline Sahabat Perempuan & Anak KPPPA di 129."
  }
];

const EXPERT_OPINIONS = [
  {
    name: "Dr. Seto Mulyadi (Kak Seto)",
    role: "Ketua Lembaga Perlindungan Anak Indonesia",
    quote: "Kunci utama perlindungan anak di dunia digital adalah keterbukaan komunikasi. Anak harus merasa nyaman untuk bercerita tanpa rasa bersalah kepada orang tua ketika mereka menjumpai interaksi mencurigakan di internet."
  },
  {
    name: "Kompol R. Wahyu (Subdit Cyber Crime)",
    role: "Spesialis Kejahatan Digital",
    quote: "Pelaku cyber grooming sangat lihai memeras korban secara emosional. Anak-anak harus berani memutus komunikasi (block) dan tidak takut akan ancaman penyebaran data, karena pelaku justru memanfaatkan ketakutan tersebut."
  },
  {
    name: "Dra. Elly Risman, Psi.",
    role: "Psikolog Spesialis Parenting & Anak",
    quote: "Pemberian hadiah top-up game instan adalah taktik psikologis pelaku agar anak merasa memiliki hutang budi moral. Sekolah harus aktif mengedukasi siswa untuk tegas menolak gratifikasi digital dari orang tidak dikenal."
  }
];

const ARTICLES = [
  {
    id: 1,
    title: "Ancaman Tersembunyi di Ruang Bermain Digital: Cyber Child Grooming dalam Game Online Anak",
    date: "05 Juni 2026",
    summary: "Meningkatnya popularitas game online dengan fitur obrolan suara dan teks membuka celah bagi pelaku kejahatan digital untuk mendekati anak-anak melalui metode grooming.",
    content: "Meningkatnya popularitas game online yang dilengkapi fitur komunikasi suara dan teks membuat anak semakin sering berinteraksi dengan orang asing tanpa mengetahui identitas sebenarnya. Kondisi ini membuka peluang terjadinya cyber child grooming. Orang tua dan pendidik harus meningkatkan pengawasan dan mengedukasi anak-anak tentang batasan berbagi informasi pribadi di dunia virtual.",
    url: "https://dkis.cirebonkota.go.id/artikel/ancaman-tersembunyi-di-ruang-bermain-digital-cyber-child-grooming-dalam-game-online-anak"
  },
  {
    id: 2,
    title: "Praktik Cyber Grooming: Ketika Ruang Digital Tak Lagi Aman bagi Anak-Anak",
    date: "03 Juni 2026",
    summary: "Predator online kini memanfaatkan kelengahan pengawasan di ruang digital untuk membangun kepercayaan dengan anak-anak sebelum melakukan eksploitasi.",
    content: "Ruang digital kini menyimpan ancaman nyata bagi anak-anak melalui praktik cyber grooming, di mana pelaku membangun kepercayaan korban secara perlahan sebelum melakukan tindakan eksploitasi. Diperlukan sinergi antara sekolah, keluarga, dan penyedia platform untuk mendeteksi dini pola perilaku manipulatif ini.",
    url: "https://ukm-visi.undiksha.ac.id/praktik-cyber-grooming-ketika-ruang-digital-tak-lagi-aman-bagi-anak-anak/"
  },
  {
    id: 3,
    title: "Edukasi Bahaya Cyber Grooming: Kunci Melindungi Anak dari Predator Siber",
    date: "30 Mei 2026",
    summary: "Analisis mengenai urgensi pendampingan orang tua serta edukasi literasi digital bagi anak dalam mendeteksi ancaman manipulasi psikologis di internet.",
    content: "Upaya pencegahan cyber grooming tidak hanya bertumpu pada aspek hukum, tetapi juga pada penguatan karakter anak dan edukasi literasi digital secara dini. Anak-anak perlu diajarkan untuk bersikap skeptis terhadap tawaran mencurigakan dari teman yang baru dikenal di platform online.",
    url: "https://ukm-visi.undiksha.ac.id/praktik-cyber-grooming-ketika-ruang-digital-tak-lagi-aman-bagi-anak-anak/"
  },
  {
    id: 4,
    title: "LPSK Soroti Ancaman Eksploitasi Anak Melalui Cyber Grooming",
    date: "25 Mei 2026",
    summary: "Lembaga Perlindungan Saksi dan Korban (LPSK) menyoroti maraknya kasus child grooming dan pentingnya perlindungan hukum bagi korban eksploitasi seksual anak.",
    content: "Lembaga Perlindungan Saksi dan Korban (LPSK) menegaskan komitmennya dalam mengawal kasus eksploitasi seksual anak yang bermula dari interaksi digital. Kasus cyber grooming memerlukan penanganan hukum yang sensitif terhadap anak agar hak-hak korban terlindungi sepenuhnya selama proses peradilan.",
    url: "https://www.lpsk.go.id/berita/cml0i9g5y00013sxgciwhiudu"
  },
  {
    id: 5,
    title: "Anak Jadi Target Predator di Game Online, Ini Bahaya Cybergrooming yang Perlu Diketahui",
    date: "20 Mei 2026",
    summary: "Kenali bahaya cybergrooming di mana pelaku menyamar menjadi teman mabar anak, memberi hadiah virtual, hingga menjebak anak ke arah eksploitasi.",
    content: "Game online sering kali menjadi pintu masuk bagi predator untuk mendekati anak-anak melalui taktik main bareng (mabar) dan pemberian item game gratis. Artikel ini mengulas bahaya eksploitasi anak di platform game online serta cara mengenali tanda-tanda ketika anak mulai dimanipulasi secara digital.",
    url: "https://www.uib.ac.id/anak-jadi-target-predator-di-game-online-ini-bahaya-cybergrooming-yang-perlu-kamu-tahu/"
  },
  {
    id: 6,
    title: "Membongkar Modus Child Grooming Sebagai Pintu Masuk Eksploitasi Seksual Anak",
    date: "15 Mei 2026",
    summary: "Kajian hukum mengenai bagaimana game online sering dijadikan jebakan dan modus manipulasi pelaku untuk mendekati anak secara emosional dan seksual.",
    content: "Modus child grooming merupakan pintu masuk utama bagi kejahatan eksploitasi seksual anak di ranah daring. Melalui analisis kasus hukum, dipaparkan bagaimana regulasi hukum di Indonesia menjerat pelaku cyber grooming dan langkah hukum konkret yang harus diambil oleh keluarga korban.",
    url: "https://dntlawyers.com/ketika-game-online-menjadi-perangkap-membongkar-modus-child-grooming-sebagai-pintu-masuk-eksploitasi-seksual-anak/"
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Interactive Game State
  const [gameState, setGameState] = useState('select_level'); // select_level | playing | level_cleared

  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [completedLevels, setCompletedLevels] = useState([]);
  const [activeLevelId, setActiveLevelId] = useState(null);
  const [activeLevelSafetyScore, setActiveLevelSafetyScore] = useState(100);
  const [overallSafetyScore, setOverallSafetyScore] = useState(100);

  // Articles & Modul states
  const [activeMateriTab, setActiveMateriTab] = useState('video'); // video | modul | ahli | jurnal
  const [activeModulPage, setActiveModulPage] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Guide Modal state — show on first visit
  const [showGuide, setShowGuide] = useState(() => {
    return !localStorage.getItem('sigma_guide_seen');
  });

  // Construct 2 postMessage Event Listener
  // Dependency array is empty: triggerLevelCompletion uses functional setters internally,
  // so it never needs stale closure values — no need to re-register on every level change.
  useEffect(() => {
    const handleGameMessage = (event) => {
      if (event.data && event.data.type === 'LEVEL_COMPLETE') {
        const rawLevelId = event.data.levelId ?? event.data.level;
        const levelId = Number(rawLevelId);
        const score = event.data.score ?? 100;
        console.log('Processed LEVEL_COMPLETE:', { levelId, score });
        triggerLevelCompletion(levelId, score);
      }
    };
    window.addEventListener('message', handleGameMessage);
    return () => window.removeEventListener('message', handleGameMessage);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const startLevel = (levelId) => {
    setActiveLevelId(levelId);
    setActiveLevelSafetyScore(100);
    setGameState('playing');
  };

  const exitGame = () => {
    setActiveLevelId(null);
    setGameState('select_level');
  };

  const triggerLevelCompletion = (levelId, finalScore) => {
    setActiveLevelSafetyScore(finalScore);
    setGameState('level_cleared');

    if (!completedLevels.includes(levelId)) {
      // Add to completed levels using functional update
      setCompletedLevels(prev => {
        const newCompleted = [...prev, levelId];
        console.log('Completed levels updated:', newCompleted);
        return newCompleted;
      });

      // Unlock next level using functional update
      const nextLvlId = levelId + 1;
      if (GAME_LEVELS.some(lvl => lvl.id === nextLvlId)) {
        setUnlockedLevels(prev => {
          if (!prev.includes(nextLvlId)) {
            const newUnlocked = [...prev, nextLvlId];
            console.log('Unlocked levels updated (functional):', newUnlocked);
            return newUnlocked;
          }
          return prev;
        });
      }

      // Update overall safety score as average of all completed level scores
      setOverallSafetyScore(prev => {
        // Number of levels completed before adding this one
        const completedCount = completedLevels.length;
        // Compute new average including the current level's score
        return Math.round((prev * completedCount + finalScore) / (completedCount + 1));
      });
    }
  };



  const wrapperClass = activePage === 'home' || activePage === 'game'
    ? "min-h-screen bg-gradient-to-b from-[#BBE2FF] via-[#E2F1FF] to-white text-[#494949] flex flex-col font-body antialiased relative overflow-x-hidden transition-all duration-500"
    : activePage === 'materi'
      ? "min-h-screen bg-gradient-to-br from-[#F0F8FF] via-white to-[#EBF5FF] text-[#494949] flex flex-col font-body antialiased relative overflow-x-hidden transition-all duration-500"
      : "min-h-screen bg-[#ECEFFC] text-[#494949] flex flex-col font-body antialiased relative overflow-x-hidden transition-all duration-500";

  return (
    <div className={wrapperClass}>

      {/* Background Decorators */}
      {(activePage === 'home' || activePage === 'game') && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Cloud 1 */}
          <div className="absolute top-[8%] w-full animate-drift-slow" style={{ animationDelay: '0s' }}>
            <svg className="w-28 sm:w-36 h-10 fill-white/85" viewBox="0 0 100 40">
              <path d="M 20, 30 a 10,10 0 0,1 0,-20 a 15,15 0 0,1 22,-5 a 20,20 0 0,1 33,5 a 12,12 0 0,1 10,10 a 10,10 0 0,1 -10,10 Z" />
            </svg>
          </div>
          {/* Cloud 2 */}
          <div className="absolute top-[22%] w-full animate-drift-medium" style={{ animationDelay: '-15s' }}>
            <svg className="w-36 sm:w-48 h-12 fill-white/55" viewBox="0 0 100 40">
              <path d="M 20, 30 a 10,10 0 0,1 0,-20 a 15,15 0 0,1 22,-5 a 20,20 0 0,1 33,5 a 12,12 0 0,1 10,10 a 10,10 0 0,1 -10,10 Z" />
            </svg>
          </div>
          {/* Cloud 3 */}
          <div className="absolute top-[48%] w-full animate-drift-slow" style={{ animationDelay: '-30s' }}>
            <svg className="w-24 sm:w-32 h-8 fill-white/70" viewBox="0 0 100 40">
              <path d="M 20, 30 a 10,10 0 0,1 0,-20 a 15,15 0 0,1 22,-5 a 20,20 0 0,1 33,5 a 12,12 0 0,1 10,10 a 10,10 0 0,1 -10,10 Z" />
            </svg>
          </div>
        </div>
      )}

      {activePage === 'materi' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Organic Blob 1 - Top Right */}
          <svg className="absolute -top-20 -right-20 w-80 h-80 opacity-40 animate-blob-spin" viewBox="0 0 200 200">
            <path fill="#53B4FB" d="M44.7,-60.8C58.3,-50.2,69,-36.8,74.2,-21.2C79.4,-5.6,79.1,12.3,73.1,28.2C67.1,44.2,55.3,58.3,40.3,66.8C25.3,75.3,7.1,78.2,-10.8,75.8C-28.8,73.4,-46.6,65.8,-59,52.8C-71.4,39.9,-78.4,21.7,-78.9,3.7C-79.5,-14.3,-73.6,-32.1,-62,-44.6C-50.5,-57.1,-33.4,-64.4,-16.9,-67.2C-0.3,-70,16.2,-68.3,44.7,-60.8Z" transform="translate(100, 100)" />
          </svg>
          {/* Organic Blob 2 - Middle Left */}
          <svg className="absolute top-[35%] -left-24 w-72 h-72 opacity-30 animate-blob-spin-reverse" viewBox="0 0 200 200">
            <path fill="#C8B6FB" d="M38.5,-52C51.1,-46.2,63.3,-37.2,69.5,-24.8C75.7,-12.3,75.9,3.5,71.2,17.4C66.5,31.4,56.9,43.3,44.7,51.8C32.6,60.2,18,65,-2.9,69C-23.7,73,-50.7,76.2,-65.4,66.4C-80,56.6,-82.3,33.8,-80.6,13.7C-78.8,-6.4,-73.1,-23.7,-62.4,-34C-51.7,-44.3,-36.1,-47.5,-23.1,-52.8C-10.1,-58.1,0.2,-65.6,10.6,-63.9C21.1,-62.3,25.9,-57.7,38.5,-52Z" transform="translate(100, 100)" />
          </svg>
          {/* Organic Blob 3 - Bottom Right */}
          <svg className="absolute bottom-10 -right-16 w-80 h-80 opacity-25 animate-blob-spin" viewBox="0 0 200 200">
            <path fill="#53B4FB" d="M47.7,-63.7C60.3,-53.7,68.1,-37.6,71.7,-21.2C75.3,-4.8,74.7,12,68.7,26.7C62.7,41.4,51.3,54,37,62.2C22.7,70.4,5.6,74.1,-11.2,71.7C-28,69.2,-44.4,60.6,-56.3,48.2C-68.2,35.8,-75.7,19.6,-77.2,2.5C-78.7,-14.7,-74.2,-32.8,-63.4,-44.7C-52.6,-56.6,-35.6,-62.4,-19.1,-65.9C-2.6,-69.3,13.3,-70.5,30.5,-69.1C47.7,-67.7,35,-73.7,47.7,-63.7Z" transform="translate(100, 100)" />
          </svg>
        </div>
      )}

      {/* Navbar Component */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        setGameState={setGameState}
      />

      {/* Pages Switch Router */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 pb-12 md:pb-8">
        {activePage === 'home' && (
          <Home
            setActivePage={setActivePage}
            setGameState={setGameState}
            setActiveMateriTab={setActiveMateriTab}
            setSelectedArticle={setSelectedArticle}
            articles={ARTICLES}
          />
        )}

        {activePage === 'materi' && (
          <Materi
            activeMateriTab={activeMateriTab}
            setActiveMateriTab={setActiveMateriTab}
            activeModulPage={activeModulPage}
            setActiveModulPage={setActiveModulPage}
            setSelectedArticle={setSelectedArticle}
            modulPages={MODUL_PAGES}
            expertOpinions={EXPERT_OPINIONS}
            articles={ARTICLES}
          />
        )}

        {activePage === 'game' && (
          <Game
            gameState={gameState}
            setGameState={setGameState}
            unlockedLevels={unlockedLevels}
            completedLevels={completedLevels}
            activeLevelId={activeLevelId}
            startLevel={startLevel}
            exitGame={exitGame}
            triggerLevelCompletion={triggerLevelCompletion}
            gameLevels={GAME_LEVELS}
          />
        )}
      </main>

      {/* Grassy Hill divider for Home and Game pages */}
      {(activePage === 'home' || activePage === 'game') && (
        <div className="relative w-full z-0 -mt-16 pointer-events-none select-none">
          <svg className="w-full h-16 sm:h-24 fill-[#A5DD9B]" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C320,100 640,20 960,80 C1280,140 1440,60 1440,60 L1440,100 L0,100 Z" />
          </svg>
          {/* Flower Details */}
          <div className="absolute bottom-4 left-[15%] w-3 h-3 bg-white rounded-full shadow-sm animate-float-gentle" style={{ animationDelay: '0s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-8 left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-sm animate-float-gentle" style={{ animationDelay: '1.5s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.2 h-1.2 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-5 left-[78%] w-3.5 h-3.5 bg-white rounded-full shadow-sm animate-float-gentle" style={{ animationDelay: '0.8s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <Footer setActivePage={setActivePage} setGameState={setGameState} />

      {/* MODAL: READ ARTICLE DETAILS */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full border border-blue-100 shadow-2xl max-h-[85vh] flex flex-col justify-between animate-scale-up">

            <div className="flex justify-between items-center border-b border-gray-100 pb-3 shrink-0">
              <div>
                <span className="text-[9px] font-bold text-[#53B4FB] uppercase">{selectedArticle.date}</span>
                <h3 className="font-heading text-lg font-bold text-gray-800 leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto py-4 text-xs leading-relaxed text-gray-600 space-y-3 pl-1 pr-1">
              <p className="font-semibold text-gray-700 italic">
                "{selectedArticle.summary}"
              </p>

              {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="pt-4 border-t border-gray-50 bg-gray-50/50 p-4 rounded-2xl mt-4 space-y-2">
                <h4 className="font-heading font-bold text-[#FF6D00] text-xs">Butuh Bantuan Segera?</h4>
                <p className="text-[10px] text-gray-500">
                  Jika kamu atau temanmu mengalami ancaman eksploitasi online, ceritakan segera pada orang dewasa tepercaya, atau hubungi Hotline Layanan SAPA KPPPA di 129 atau WhatsApp 08111-129-129. Kerahasiaan identitas pelapor dijamin sepenuhnya.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-[#53B4FB] hover:bg-[#349beb] text-white font-heading  text-xs rounded-full cursor-pointer transition-all shadow-md shadow-blue-100 active:scale-95"
              >
                Kembali
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Floating Help Button */}
      {!showGuide && (
        <button
          onClick={() => setShowGuide(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#53B4FB] to-[#349beb] hover:from-[#349beb] hover:to-[#2080d0] text-white rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 flex items-center justify-center transition-colors duration-300 cursor-pointer active:scale-90 group md:bottom-8 md:right-8 animate-fab-bounce hover:animate-none"
          title="Panduan Penggunaan"
        >
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827m0 3h.01" />
            <circle cx="12" cy="12" r="9.5" />
          </svg>
        </button>
      )}

      {/* Guide Modal */}
      <GuideModal isOpen={showGuide} onClose={() => setShowGuide(false)} />

    </div>
  );
}
