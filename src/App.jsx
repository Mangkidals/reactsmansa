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
    iframeUrl: "/Opsi-1/OPSI-1/index.html",
    opponent: {
      name: "Skenario Pertemanan",
      avatarChar: ""
    }
  },
  // {
  //   id: 2,
  //   title: "Level 2: Hadiah Misterius",
  //   desc: "Skenario tentang menolak top-up diamonds/item game gratisan dari orang asing yang berujung pada pemerasan foto wajah.",
  //   badge: "Penjaga Privasi",
  //   iframeUrl: "/game/level2/index.html",
  //   opponent: {
  //     name: "Skenario Gratifikasi",
  //     avatarChar: ""
  //   }
  // },
  // {
  //   id: 3,
  //   title: "Level 3: Rahasia Kita Berdua",
  //   desc: "Skenario penolakan video call di kamar pribadi, menolak ancaman pemerasan data, dan melaporkan pelaku ke polisi siber.",
  //   badge: "Pahlawan Digital",
  //   iframeUrl: "/game/level3/index.html",
  //   opponent: {
  //     name: "Skenario Pemerasan",
  //     avatarChar: ""
  //   }
  // }
];



const MODUL_PAGES = [
  {
    title: "Mengenal Cyber Grooming",
    img: "📚",
    content: "Cyber grooming adalah proses ketika pelaku (biasanya orang dewasa di internet) mencoba berteman, membangun hubungan emosional, dan memanipulasi anak-anak atau remaja agar mempercayai mereka dengan tujuan jahat/eksploitasi di kemudian hari. Mereka bisa menyamar sebagai anak seusiamu dan menyukai game yang sama."
  },
  {
    title: "Tahapan Manipulasi Pelaku",
    img: "🚨",
    content: "Pelaku biasanya menggunakan tahapan terencana: (1) Menjalin pertemanan akrab lewat hobi yang sama, (2) Memberi hadiah gratis seperti top-up game agar korban merasa berutang budi, (3) Meminta memindahkan chat ke platform privat (WhatsApp/Discord), (4) Mulai mengisolasi dengan meminta merahasikan obrolan dari orang tua, (5) Meminta foto/video call sensitif, dan (6) Mengancam jika korban menolak."
  },
  {
    title: "Tanda Bahaya (Red Flags)",
    img: "⚠️",
    content: "Segera waspada jika teman online barumu melakukan hal berikut: (1) Meminta rahasia pertemanan dari orang tuamu, (2) Mendesak meminta nomor WA atau Instagram pribadimu, (3) Memberi diamond/skin gratis secara mendadak, (4) Marah atau memeras emosimu jika permintaannya ditolak, (5) Mengajak video call privat di ruang tertutup."
  },
  {
    title: "Cara Melindungi Diri & Melapor",
    img: "🛡️",
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
  const [activePage, setActivePage] = useState('home'); // home | materi | game

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
  useEffect(() => {
    const handleGameMessage = (event) => {
      if (event.data && event.data.type === 'LEVEL_COMPLETE') {
        const rawLevelId = event.data.levelId ?? event.data.level;
        const levelId = Number(rawLevelId);
        const score = event.data.score ?? 100;
        console.log('Processed LEVEL_COMPLETE:', {levelId, score});
        triggerLevelCompletion(levelId, score);
      }
    };
    window.addEventListener('message', handleGameMessage);
    return () => window.removeEventListener('message', handleGameMessage);
  }, [completedLevels, unlockedLevels]);

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

      // Calculate average safety score based on latest completed list
      setOverallSafetyScore(prev => {
        // Use the new completed list length (prev not needed directly)
        const currentSum = 100 + (prev === undefined ? 0 : 0); // placeholder, will be overridden below
        return prev; // placeholder to be replaced
      });
    }
  };



  return (
    <div className="min-h-screen bg-[#ECEFFC] text-[#494949] flex flex-col font-body antialiased relative">

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
