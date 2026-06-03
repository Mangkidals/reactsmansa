import React from 'react';

// Previous Button (Orange Circle with White Back Arrow)
export function PrevButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[#FFAB41] hover:bg-[#FF6D00] border-b-4 border-[#D97E0C] active:translate-y-1 active:border-b-0 shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      title="Sebelumnya"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

// Next Button (Orange Circle with White Forward Arrow)
export function NextButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[#FFAB41] hover:bg-[#FF6D00] border-b-4 border-[#D97E0C] active:translate-y-1 active:border-b-0 shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      title="Selanjutnya"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Setting Button (Orange Circle with Gear)
export function SettingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all bg-[#FFAB41] hover:bg-[#FF6D00] border-b-4 border-[#D97E0C] active:translate-y-1 active:border-b-0 shadow-md"
      title="Pengaturan"
    >
      <svg className="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  );
}

// Exit Button (Orange Circle with "X")
export function ExitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all bg-[#FFAB41] hover:bg-[#FF6D00] border-b-4 border-[#D97E0C] active:translate-y-1 active:border-b-0 shadow-md"
      title="Keluar"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

// Try Again Button (Purple Circle with circular refresh arrow)
export function TryAgainButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all bg-[#C8B6FB] hover:bg-[#a58cfc] border-b-4 border-[#8668ed] active:translate-y-1 active:border-b-0 shadow-md"
      title="Coba Lagi"
    >
      <svg className="w-6 h-6 text-[#494949]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
      </svg>
    </button>
  );
}

// Submit Button (Cyan pill button with a bold green outline and "Submit" text)
export function SubmitButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3 rounded-full font-heading font-semibold text-[#494949] transition-all bg-[#53B4FB] hover:bg-[#349beb] border-4 border-[#4CAF50] active:scale-95 shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      Submit
    </button>
  );
}
