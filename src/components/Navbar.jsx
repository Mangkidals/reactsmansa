import React from 'react';
import logoImage from '../assets/hero.png';
import { SettingButton } from './Button';

export default function Navbar({ activePage, setActivePage, setGameState, studentName, setTempName, setSettingsOpen }) {
  const menuItems = [
    { id: 'home', label: 'Beranda', icon: '🏠' },
    { id: 'materi', label: 'Laman Materi', icon: '📖' },
    { id: 'game', label: 'Laman Game', icon: '🎮' },
    { id: 'monitoring', label: 'Monitoring Anak', icon: '📊' }
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-blue-100/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

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
                  Cyber Grooming Shield
                </p>
              </div>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    if (item.id !== 'game') {
                      setGameState('select_level');
                    }
                  }}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm flex items-center space-x-2 cursor-pointer ${activePage === item.id
                      ? 'bg-[#53B4FB] text-white shadow-md shadow-blue-200 scale-105'
                      : 'hover:bg-blue-50 text-[#494949]'
                    }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Profile & Setting Panel Trigger */}
            <div className="flex items-center space-x-2">
              <div className="hidden lg:block text-right pr-2">
                <p className="text-xs text-gray-400 font-medium leading-tight">Selamat Datang,</p>
                <p className="text-xs font-bold text-gray-700 leading-tight mt-0.5">{studentName}</p>
              </div>
              <SettingButton onClick={() => {
                setTempName(studentName);
                setSettingsOpen(true);
              }} />
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile navigation bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-blue-100 z-40 px-2 py-2 flex justify-around shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id);
              if (item.id !== 'game') {
                setGameState('select_level');
              }
            }}
            className={`flex flex-col items-center py-1.5 px-3 rounded-xl transition-all ${activePage === item.id ? 'text-[#53B4FB] font-bold' : 'text-gray-400'
              }`}
          >
            <span className="text-xl mb-0.5">{item.icon}</span>
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
