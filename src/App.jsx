import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Game from './pages/Game';
import { ExitButton } from './components/Button';

/* ==========================================================================
   GAME LEVELS CONFIGURATION (Iframe Sources for Construct 2)
   ========================================================================== */

const GAME_LEVELS = [
  {
    id: 1,
    title: "Level 1: Siapa Teman Baruku?",
    desc: "Skenario chat awal tentang menyaring informasi pribadi dan mewaspadai permintaan kontak dari orang tak dikenal di game online.",
    badge: "Detektif Pemula",
    iframeUrl: "/game/level1/index.html",
    opponent: {
      name: "Skenario Pertemanan",
      avatarChar: "👦"
    }
  },
  {
    id: 2,
    title: "Level 2: Hadiah Misterius",
    desc: "Skenario tentang menolak top-up diamonds/item game gratisan dari orang asing yang berujung pada pemerasan foto wajah.",
    badge: "Penjaga Privasi",
    iframeUrl: "/game/level2/index.html",
    opponent: {
      name: "Skenario Gratifikasi",
      avatarChar: "🦊"
    }
  },
  {
    id: 3,
    title: "Level 3: Rahasia Kita Berdua",
    desc: "Skenario penolakan video call di kamar pribadi, menolak ancaman pemerasan data, dan melaporkan pelaku ke polisi siber.",
    badge: "Pahlawan Digital",
    iframeUrl: "/game/level3/index.html",
    opponent: {
      name: "Skenario Pemerasan",
      avatarChar: "👹"
    }
  }
];

/* ==========================================================================
   PRETEST & POSTTEST QUESTIONS
   ========================================================================== */

const PRETEST_QUESTIONS = [
  {
    question: "Apa definisi dari Cyber Grooming di dunia digital?",
    options: [
      "Upaya seseorang di internet untuk mendekati dan memanipulasi anak-anak demi tujuan eksploitasi atau kejahatan.",
      "Proses mengunduh dan memperbarui perangkat lunak game edukasi secara berkala.",
      "Membagikan konten edukasi yang bermanfaat di media sosial sekolah.",
      "Cara bermain game online bersama teman-teman sekelas."
    ],
    correctIndex: 0,
    explanation: "Cyber grooming adalah upaya pelaku di internet untuk menjalin hubungan dan memanipulasi korban (terutama anak-anak/remaja) agar tunduk pada keinginan mereka, yang seringkali berujung pada eksploitasi."
  },
  {
    question: "Manakah yang merupakan tanda awal (red flag) bahwa kamu sedang berhadapan dengan pelaku cyber grooming?",
    options: [
      "Mereka menanyakan hobi game kamu tanpa menanyakan informasi pribadi.",
      "Mereka sangat ramah, memberi hadiah gratis (seperti top-up game), dan meminta nomor kontak pribadi dengan cepat.",
      "Mereka menyuruh kamu belajar kelompok bersama teman sekolah.",
      "Mereka mengabaikan pesanmu ketika kamu menolak bermain."
    ],
    correctIndex: 1,
    explanation: "Pelaku sering menggunakan kedok memberikan hadiah gratis (seperti diamond, skin, uang) dan menuntut komunikasi berpindah ke aplikasi privat (seperti WhatsApp/Discord) untuk jebak korban."
  },
  {
    question: "Apa yang harus kamu lakukan jika orang asing yang baru dikenal secara online meminta foto pribadimu?",
    options: [
      "Mengirimkannya saja karena dia berjanji tidak akan menyebarkannya.",
      "Meminta bayaran terlebih dahulu baru mengirimkannya.",
      "Menolak dengan tegas, memblokir akunnya, dan segera melaporkannya ke orang tua atau guru.",
      "Mengirimkan foto orang lain yang diambil dari Google."
    ],
    correctIndex: 2,
    explanation: "Jangan pernah membagikan foto atau informasi pribadi kepada orang asing di internet. Jika mereka memaksa, segera tolak, blokir, dan ceritakan kepada orang dewasa tepercaya."
  },
  {
    question: "Mengapa pelaku cyber grooming meminta kamu merahasiakan hubungan pertemanan kalian dari orang tua?",
    options: [
      "Karena mereka ingin memberikan kejutan hadiah ulang tahun untuk orang tuamu.",
      "Agar orang tuamu tidak mengetahui manipulasi mereka dan mencegah mereka diekspos.",
      "Karena mereka malu mengobrol dengan orang dewasa.",
      "Agar koneksi internet kalian tidak terganggu."
    ],
    correctIndex: 1,
    explanation: "Pelaku sengaja mengisolasi korban dari sistem pendukungnya (orang tua, guru) agar korban merasa sendirian dan lebih mudah dikendalikan."
  },
  {
    question: "Jika kamu diancam akan disebarkan foto/informasi rahasiamu jika tidak menuruti kemauan orang online, langkah terbaik adalah...",
    options: [
      "Mengikuti semua keinginannya agar ancamannya tidak terbukti.",
      "Membayar uang pemerasan menggunakan uang jajan.",
      "Segera tutup obrolan, simpan bukti screenshot, dan laporkan langsung ke orang tua, guru, atau pihak berwajib.",
      "Membalas dengan ancaman yang lebih kejam."
    ],
    correctIndex: 2,
    explanation: "Jangan pernah menuruti ancaman pelaku (blackmail). Semakin kamu turuti, tuntutan mereka akan semakin besar. Simpan bukti chat, blokir, dan segera laporkan ke orang tua atau kepolisian."
  }
];

const POSTTEST_QUESTIONS = [
  {
    question: "Bagaimana tahapan umum yang sering digunakan pelaku cyber grooming untuk mendekati anak-anak?",
    options: [
      "Mengajak mabar -> memberikan hadiah -> meminta kontak privat -> meminta foto/video call -> mengancam/memeras.",
      "Langsung meminta uang -> mengajak bertemu -> memblokir akun.",
      "Melaporkan akun korban -> mengirim virus -> meretas komputer.",
      "Mengajak belajar bersama -> memberikan buku gratis -> mengenalkan ke orang tua."
    ],
    correctIndex: 0,
    explanation: "Tahapan cyber grooming biasanya dimulai dari pendekatan bersahabat (mabar), pemberian hadiah (top-up), memindahkan obrolan ke ruang privat, meminta hal sensitif, dan diakhiri dengan ancaman jika korban menolak."
  },
  {
    question: "Jika seorang teman online mengirimkan skin atau diamond game mahal tanpa alasan yang jelas, sikap terbaik adalah...",
    options: [
      "Langsung menerima dan menjadikannya sahabat terbaik.",
      "Waspada dan menolak pemberian tersebut jika disertai syarat-syarat yang mencurigakan (seperti meminta foto/nomor WA).",
      "Memamerkannya di media sosial sekolah.",
      "Menerimanya lalu langsung memblokir dia tanpa berterima kasih."
    ],
    correctIndex: 1,
    explanation: "Pemberian hadiah secara cuma-cuma adalah salah satu taktik pembentukan utang budi (grooming gift). Selalu bersikap waspada terhadap hadiah dari orang tak dikenal di internet."
  },
  {
    question: "Mengapa penting bagi kita untuk menetapkan batas privasi di media sosial dan game online?",
    options: [
      "Agar akun kita terlihat misterius dan keren.",
      "Untuk melindungi data pribadi (alamat, sekolah, foto diri) agar tidak disalahgunakan oleh pelaku kejahatan.",
      "Agar tidak ada orang yang bisa melihat skor game kita.",
      "Supaya game berjalan lebih cepat."
    ],
    correctIndex: 1,
    explanation: "Membatasi informasi publik di media sosial mencegah pelaku cyber grooming mempelajari kebiasaan, sekolah, dan info pribadimu untuk dijadikan bahan pendekatan manipulatif."
  },
  {
    question: "Apa arti pesan 'Jangan bilang siapa-siapa ya tentang obrolan kita' dari teman online?",
    options: [
      "Tanda bahwa dia adalah sahabat sejati yang menjaga rahasia.",
      "Peringatan bahaya (red flag) isolasi untuk membuatmu merasa bersalah jika melapor.",
      "Permintaan biasa yang tidak memiliki arti khusus.",
      "Cara menjaga keamanan akun dari hacker."
    ],
    correctIndex: 1,
    explanation: "Permintaan merahasiakan obrolan online adalah tanda manipulasi (secrecy tactic) yang bertujuan menjauhkanmu dari perlindungan orang tua atau guru."
  },
  {
    question: "Siapakah yang pertama kali harus kamu hubungi jika merasa tidak nyaman atau diancam oleh seseorang di internet?",
    options: [
      "Teman sebaya di sekolah agar bisa curhat bersama.",
      "Orang tua, guru, atau orang dewasa tepercaya yang bisa melindungimu.",
      "Akun gosip media sosial agar viral.",
      "Tidak ada siapa-siapa, lebih baik dipendam sendiri."
    ],
    correctIndex: 1,
    explanation: "Orang tua, guru, atau konselor adalah pihak terbaik yang bisa segera mengambil tindakan hukum dan melindungi keselamatan fisik maupun mentalmu dari ancaman online."
  }
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
    avatar: "👨‍🏫",
    quote: "Kunci utama perlindungan anak di dunia digital adalah keterbukaan komunikasi. Anak harus merasa nyaman untuk bercerita tanpa rasa bersalah kepada orang tua ketika mereka menjumpai interaksi mencurigakan di internet."
  },
  {
    name: "Kompol R. Wahyu (Subdit Cyber Crime)",
    role: "Spesialis Kejahatan Digital",
    avatar: "👮‍♂️",
    quote: "Pelaku cyber grooming sangat lihai memeras korban secara emosional. Anak-anak harus berani memutus komunikasi (block) dan tidak takut akan ancaman penyebaran data, karena pelaku justru memanfaatkan ketakutan tersebut."
  },
  {
    name: "Dra. Elly Risman, Psi.",
    role: "Psikolog Spesialis Parenting & Anak",
    avatar: "👩‍⚕️",
    quote: "Pemberian hadiah top-up game instan adalah taktik psikologis pelaku agar anak merasa memiliki hutang budi moral. Sekolah harus aktif mengedukasi siswa untuk tegas menolak gratifikasi digital dari orang tidak dikenal."
  }
];

const ARTICLES = [
  {
    id: 1,
    title: "Mengapa Game Online Menjadi Lahan Empuk Cyber Grooming?",
    date: "01 Juni 2026",
    summary: "Game online memiliki room chat interaktif dan fitur pengiriman item yang sering dieksploitasi oleh pelaku untuk mendekati anak-anak dengan menyamar sebagai sesama gamer.",
    content: "Penelitian menunjukkan bahwa lebih dari 60% anak-anak berinteraksi dengan orang tidak dikenal saat bermain game online multipemain. Fitur chatting, voice chat, dan pengiriman hadiah virtual (seperti diamond, skin, atau koin) mempermudah pelaku cyber grooming menyusup ke lingkungan bermain anak. Mereka menghabiskan waktu berhari-hari bahkan berbulan-bulan berpura-pura menjadi pelindung atau rekan bermain game yang hebat. Untuk mencegah hal ini, orang tua disarankan membatasi obrolan publik dan membiasakan anak bermain dengan teman sebaya yang terverifikasi."
  },
  {
    id: 2,
    title: "Panduan Orang Tua: Membaca Sinyal Isolasi Online pada Anak",
    date: "28 Mei 2026",
    summary: "Pelaku grooming selalu mencoba memisahkan anak dari pengawasan orang tuanya. Kenali tanda-tanda anak mulai menyembunyikan layar gadget dan bersikap cemas.",
    content: "Salah satu indikasi kuat anak sedang masuk ke dalam lingkaran cyber grooming adalah perubahan perilaku yang drastis. Anak cenderung mengunci pintu kamar, langsung menutup layar handphone ketika dihampiri, cemas berlebihan saat mendengar notifikasi masuk, atau meminta uang saku ekstra dengan alasan tidak jelas (mungkin digunakan untuk menebus ancaman). Mengajarkan anak bahwa mereka tidak perlu menyembuyenikan rahasia internet dari orang tua adalah langkah awal pencegahan manipulasi digital."
  },
  {
    id: 3,
    title: "Langkah Hukum dan Saluran Pengaduan Cyber Grooming di Indonesia",
    date: "15 Mei 2026",
    summary: "Ketahui ke mana harus melapor jika anak mengalami ancaman, intimidasi, atau eksploitasi online oleh pelaku cyber grooming di media sosial.",
    content: "Di Indonesia, cyber grooming dan eksploitasi anak secara online melanggar UU ITE serta UU Perlindungan Anak dengan ancaman hukuman penjara hingga 15 tahun. Jika menemukan indikasi pemerasan visual atau ancaman, jangan menghapus chat tersebut. Simpan tangkapan layar (screenshot) nomor pelaku, nama akun, dan transaksi transfer jika ada. Laporkan segera melalui Hotline Sahabat Perempuan dan Anak (SAPA) di nomor telepon 129, WhatsApp di 08111-129-129, atau aduan konten Kementerian Kominfo."
  }
];

export default function App() {
  const [activePage, setActivePage] = useState('home'); // home | materi | game

  // Interactive Game State
  const [gameState, setGameState] = useState('select_level'); // select_level | pretest | posttest | playing | level_cleared | pretest_finished | posttest_finished
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [completedLevels, setCompletedLevels] = useState([]);
  const [activeLevelId, setActiveLevelId] = useState(null);
  const [activeLevelSafetyScore, setActiveLevelSafetyScore] = useState(100);
  const [overallSafetyScore, setOverallSafetyScore] = useState(100);

  // Test states
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [testSelectedChoice, setTestSelectedChoice] = useState(null);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [pretestScore, setPretestScore] = useState(null);
  const [posttestScore, setPosttestScore] = useState(null);
  const [testCorrectAnswers, setTestCorrectAnswers] = useState(0);

  // Articles & Modul states
  const [activeMateriTab, setActiveMateriTab] = useState('video'); // video | modul | ahli | jurnal
  const [activeModulPage, setActiveModulPage] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Construct 2 postMessage Event Listener
  useEffect(() => {
    const handleGameMessage = (event) => {
      if (event.data && event.data.type === 'SIGMA_LEVEL_COMPLETED') {
        const { levelId, score } = event.data;
        triggerLevelCompletion(levelId, score || 100);
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
      const updatedCompleted = [...completedLevels, levelId];
      setCompletedLevels(updatedCompleted);

      // Unlock next level
      const nextLvlId = levelId + 1;
      if (GAME_LEVELS.some(lvl => lvl.id === nextLvlId) && !unlockedLevels.includes(nextLvlId)) {
        setUnlockedLevels([...unlockedLevels, nextLvlId]);
      }

      // Calculate average safety score
      const currentSum = 100 + updatedCompleted.reduce((acc, curr) => acc + (curr === levelId ? finalScore : 90), 0);
      setOverallSafetyScore(Math.round(currentSum / (updatedCompleted.length + 1)));
    }
  };

  const startTest = (type) => {
    setGameState(type);
    setTestQuestions(type === 'pretest' ? PRETEST_QUESTIONS : POSTTEST_QUESTIONS);
    setCurrentTestIndex(0);
    setTestSelectedChoice(null);
    setTestSubmitted(false);
    setTestCorrectAnswers(0);
  };

  const handleSelectTestChoice = (index) => {
    if (testSubmitted) return;
    setTestSelectedChoice(index);
  };

  const submitTestAnswer = () => {
    if (testSelectedChoice === null || testSubmitted) return;
    setTestSubmitted(true);

    const isCorrect = testSelectedChoice === testQuestions[currentTestIndex].correctIndex;
    if (isCorrect) {
      setTestCorrectAnswers(prev => prev + 1);
    }
  };

  const nextTestQuestion = () => {
    const nextIndex = currentTestIndex + 1;
    if (nextIndex < testQuestions.length) {
      setCurrentTestIndex(nextIndex);
      setTestSelectedChoice(null);
      setTestSubmitted(false);
    } else {
      const finalScore = Math.round((testCorrectAnswers / testQuestions.length) * 100);
      if (gameState === 'pretest') {
        setPretestScore(finalScore);
        setGameState('pretest_finished');
      } else {
        setPosttestScore(finalScore);
        setGameState('posttest_finished');
      }
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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-10 pb-24 md:pb-8">
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
            pretestScore={pretestScore}
            posttestScore={posttestScore}
            startTest={startTest}
            testQuestions={testQuestions}
            currentTestIndex={currentTestIndex}
            testSelectedChoice={testSelectedChoice}
            testSubmitted={testSubmitted}
            handleSelectTestChoice={handleSelectTestChoice}
            submitTestAnswer={submitTestAnswer}
            nextTestQuestion={nextTestQuestion}
            pretestQuestions={PRETEST_QUESTIONS}
            posttestQuestions={POSTTEST_QUESTIONS}
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
              <ExitButton onClick={() => setSelectedArticle(null)} />
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
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-heading font-bold text-xs rounded-full cursor-pointer"
              >
                Tutup Bacaan
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
