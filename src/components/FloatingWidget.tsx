"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Меню кнопок */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Link 
          href="https://wa.me/79809751463" 
          target="_blank"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white p-3 pr-5 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
            </svg>
          </div>
          <span className="font-semibold text-sm">WhatsApp</span>
        </Link>
        
        <Link 
          href="https://t.me/Automigsup" 
          target="_blank"
          className="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b3] text-white p-3 pr-5 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.31-.353-.111l-6.4 4.024-2.76-.86c-.6-.183-.61-.593.125-.88l10.81-4.17c.502-.182.943.102.858.838z"/>
            </svg>
          </div>
          <span className="font-semibold text-sm">Telegram</span>
        </Link>

        <Link 
          href="tel:+79809751463" 
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white p-3 pr-5 rounded-full shadow-lg transition-transform hover:-translate-y-1"
        >
          <div className="w-8 h-8 flex items-center justify-center">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
             </svg>
          </div>
          <span className="font-semibold text-sm">Позвонить</span>
        </Link>
      </div>

      {/* Главная кнопка-пульс */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full text-white shadow-2xl transition-transform hover:scale-110 z-10 ${
          isOpen ? 'bg-slate-700' : 'bg-gradient-to-r from-blue-600 to-blue-500'
        }`}
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-75"></span>
        )}
        
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
