import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../store';
import { Terminal, DatabaseBackup } from 'lucide-react';
import { translations } from '../lib/i18n';

export const LogTerminal = () => {
  const logs = useStore(state => state.logs);
  const sim = useStore(state => state.simulation);
  const { chemistry, language } = useStore();
  const t = translations[language].terminal;
  
  const bottomRef = useRef<HTMLDivElement>(null);
  const [localLogs, setLocalLogs] = useState<{id: number, time: string, text: string, status: string}[]>([]);

  // We append logs artificially for UX to log significant changes rather than spamming on slider drag
  useEffect(() => {
    if (!sim) return;
    
    // Create an artificial entry for demonstration of "recording a hypothesis"
    const timer = setTimeout(() => {
       const now = new Date();
       const timeStr = now.toISOString().split('T')[1].slice(0,8);
       
       const newLog = {
         id: Date.now(),
         time: timeStr,
         status: sim.status,
         text: `[${t.hypothesis}]: RNA N=${chemistry.rnaLength} @ ${chemistry.temperatureK}K. ${t.result} P=${sim.scientificString}. ${sim.telemetryLog}`
       };
       setLocalLogs(prev => [...prev.slice(-49), newLog]); // Keep last 50
    }, 2000); // 2 seconds of rest logs it

    return () => clearTimeout(timer);
  }, [sim?.scientificString, chemistry.rnaLength, chemistry.temperatureK, language]); // specifically trigger when the resulting probability locks in

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [localLogs]);

  return (
    <div className="h-full w-full bg-[#050508] border-t border-slate-900/50 flex flex-col font-mono text-[11px] overflow-hidden">
      
      <div className="flex items-center px-4 py-1.5 bg-[#0a0a0f] border-b border-slate-900/50 text-slate-500 gap-2 shrink-0">
        <Terminal className="w-3 h-3" />
        <span className="uppercase tracking-widest text-[9px]">{t.hypothesisLog}</span>
        <div className="flex-1" />
        <DatabaseBackup className="w-3 h-3 cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setLocalLogs([])}/>
      </div>

      <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden flex flex-col gap-1 text-slate-400 scroll-smooth scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        {localLogs.length === 0 && (
           <div className="text-slate-600 italic">{t.noHypotheses}</div>
        )}
        {localLogs.map((log) => (
          <div key={log.id} className="flex gap-3 leading-relaxed hover:bg-slate-900/30 px-1 -mx-1 transition-colors">
             <span className="text-slate-600 shrink-0">[{log.time}]</span>
             <span className={`${log.status === 'COLLAPSE' || log.status === 'DECAY' || log.status === 'IMPOSSIBLE' ? 'text-red-900' : 'text-slate-500'}`}>
                &gt;
             </span>
             <span className={`break-words ${
                log.status === 'OPTIMAL' ? 'text-emerald-400 font-semibold' :
                log.status === 'VIABLE' ? 'text-cyan-400' :
                log.status === 'EXTREMELY_RARE' ? 'text-amber-500' :
                log.status === 'COLLAPSE' || log.status === 'IMPOSSIBLE' ? 'text-red-500' : 
                'text-slate-400'
             }`}>
               {log.text}
             </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
