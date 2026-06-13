import React from 'react';

export default function Footer({ setActivePage, setGameState }) {
  return (
    <footer className="bg-white border-t border-blue-100 py-8 shrink-0 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-lg text-gray-700">SIGMA Project</h3>
          <p className="text-xs text-gray-400">© 2026 Aku Jaga Diriku 2 - SMANSA. Hak Cipta Dilindungi.</p>
        </div>
        <div className="flex space-x-4 text-xs font-bold text-gray-500">
          <button onClick={() => { setActivePage('home'); setGameState('select_level'); }} className="hover:text-blue-500 cursor-pointer">Beranda</button>
          <button onClick={() => { setActivePage('game'); setGameState('select_level'); }} className="hover:text-blue-500 cursor-pointer">Laman Game</button>
          <button onClick={() => { setActivePage('materi'); setGameState('select_level'); }} className="hover:text-blue-500 cursor-pointer">Laman Materi</button>
        </div>
      </div>
    </footer>
  );
}
