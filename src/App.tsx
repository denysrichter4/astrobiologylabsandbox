import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FileText, Microscope, Globe } from 'lucide-react';
import { Lab } from './pages/Lab';
import { Docs } from './pages/Docs';
import { useStore } from './store';
import { translations, Language } from './lib/i18n';

// Global top bar
const TopBar = () => {
  const location = useLocation();
  const isLab = location.pathname === '/';
  const { language, setLanguage } = useStore();
  const t = translations[language].nav;

  const cycleLanguage = () => {
    const langs: Language[] = ['en', 'pt', 'es'];
    const currentIndex = langs.indexOf(language);
    setLanguage(langs[(currentIndex + 1) % langs.length]);
  };

  return (
    <header className="h-14 w-full flex items-center justify-between px-6 bg-[#050508] border-b border-slate-900/80 shrink-0 z-50">
       <div className="flex items-center gap-3">
         <div className="w-6 h-6 bg-cyan-600 rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#050508] rotate-45 rounded-sm"></div>
         </div>
         <span className="font-bold text-slate-300 tracking-widest text-[11px] uppercase font-mono">ASTROBIOLOGY_LAB</span>
       </div>
       <div className="flex gap-2">
           <button
             onClick={cycleLanguage}
             className="px-3 py-1.5 rounded-sm font-mono text-xs uppercase font-bold text-slate-400 hover:bg-slate-900 hover:text-cyan-400 transition-colors flex items-center justify-center"
             title={t.lang}
             style={{ width: '40px' }}
           >
             {language}
           </button>
           <Link 
             to="/" 
             className={`px-3 py-1.5 rounded-sm transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${
               isLab 
                 ? 'bg-cyan-950/40 text-cyan-400' 
                 : 'hover:bg-slate-900 text-slate-500 hover:text-slate-300'
             }`}
           >
             <Microscope className="w-3.5 h-3.5" /> {t.lab}
           </Link>
           <Link 
             to="/docs" 
             className={`px-3 py-1.5 rounded-sm transition-colors text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${
               !isLab 
                 ? 'bg-cyan-950/40 text-cyan-400' 
                 : 'hover:bg-slate-900 text-slate-500 hover:text-slate-300'
             }`}
           >
             <FileText className="w-3.5 h-3.5" /> {t.docs}
           </Link>
       </div>
    </header>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full flex flex-col bg-[#050508] overflow-hidden">
        <TopBar />
        <div className="flex-1 min-h-0 relative overflow-hidden">
          <Routes>
             <Route path="/" element={<Lab />} />
             <Route path="/docs" element={<Docs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
