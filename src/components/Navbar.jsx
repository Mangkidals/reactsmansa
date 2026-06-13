import React, { useState } from 'react';
import logoImage from '../assets/hero.png';

export default function Navbar({ activePage, setActivePage, setGameState }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'game', label: 'Mainkan Game' },
    { id: 'materi', label: 'Baca Materi' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-100/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center">

            {/* Logo Group with Construct Image Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('home')}>
              <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center p-0.5 shadow-sm border border-blue-100">
                <img
                  src={logoImage}
                  alt="SIGMA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-heading text-xl font-bold tracking-tight text-[#494949]">
                  SIGMA
                </h1>
                <p className="text-[9px] uppercase tracking-wider text-blue-500 font-bold leading-none mt-0.5">
                  Web Game Edukatif & Interaktif
                </p>
              </div>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden md:flex items-center space-x-1 ml-auto">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    if (item.id !== 'game') {
                      setGameState('select_level');
                    }
                  }}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm flex items-center justify-center cursor-pointer ${activePage === item.id
                    ? 'bg-[#53B4FB] text-white shadow-md shadow-blue-200 scale-105'
                    : 'hover:bg-blue-50 text-[#494949]'
                    }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button (pushed to right) */}
            <div className="flex md:hidden items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-2xl text-gray-500 hover:text-[#53B4FB] hover:bg-blue-50/50 transition-all cursor-pointer border border-transparent active:scale-95"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile navigation dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-blue-100/50 bg-white/95 backdrop-blur-md px-4 py-4 flex flex-col space-y-2 shadow-lg animate-fade-in">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  if (item.id !== 'game') {
                    setGameState('select_level');
                  }
                  setIsOpen(false);
                }}
                className={`w-full px-5 py-3.5 rounded-2xl font-heading font-bold text-left transition-all duration-200 text-sm flex items-center space-x-3 cursor-pointer ${activePage === item.id
                  ? 'bg-[#53B4FB] text-white shadow-md shadow-blue-200'
                  : 'hover:bg-blue-50/70 text-[#494949]'
                  }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
