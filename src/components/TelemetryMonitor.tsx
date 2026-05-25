import React, { useEffect, useRef } from 'react';
import { useStore } from '../store';
import { Activity, ShieldAlert, Cpu } from 'lucide-react';
import { translations } from '../lib/i18n';

export const TelemetryMonitor = () => {
  const sim = useStore(state => state.simulation);
  const { physics, chemistry, language } = useStore();
  const t = translations[language].monitor;
  const tSim = translations[language].simulation.status;

  const getStatusColor = () => {
    switch (sim?.status) {
      case 'COLLAPSE': 
      case 'DECAY': 
      case 'THERMODYNAMIC_COLLAPSE': return 'text-red-500 border-red-500/20 bg-red-950/20';
      case 'HIGHLY_CONSTRAINED': return 'text-amber-500 border-amber-500/20 bg-amber-950/20';
      case 'STERILE': return 'text-slate-400 border-slate-700 bg-slate-900/50';
      case 'SYSTEM_VIABLE': return 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30';
      default: return 'text-slate-500 bg-slate-900 border-slate-800';
    }
  };

  return (
    <div className="absolute top-0 right-0 p-6 pointer-events-none flex flex-col items-end gap-4 z-10">
      
      {/* Probability Display */}
      <div className={`backdrop-blur-md border px-5 py-4 rounded-sm flex flex-col items-end gap-1 min-w-[280px] shadow-2xl ${getStatusColor()}`}>
         <div className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-1 flex items-center gap-2">
            {sim?.status === 'COLLAPSE' || sim?.status === 'DECAY' || sim?.status === 'THERMODYNAMIC_COLLAPSE' ? <ShieldAlert className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
            {t.systemStatus}: {sim?.status ? tSim[sim.status] : t.boot}
         </div>
         <div className="font-mono text-3xl font-light tracking-tight">
           P_polymer = {sim?.scientificString}
         </div>
         <div className="font-mono text-[10px] opacity-50 mt-1">
           P_polymer = f(ΔG, T, C_conf, α)^N
         </div>
      </div>

      {/* Micro Metrics Panel */}
      <div className="backdrop-blur-md bg-slate-950/50 border border-slate-900 px-4 py-3 rounded-sm flex flex-col gap-3 pointer-events-auto min-w-[280px]">
         <div className="text-[9px] text-slate-500 font-mono flex items-center gap-2">
           <Cpu className="w-3 h-3 text-cyan-500" /> {t.liveMetrics}
         </div>
         <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
            <MetricRow label="dev(SF)" val={Math.abs(physics.strongForce - 0.5).toFixed(3)} />
            <MetricRow label="dev(G)" val={Math.abs(physics.gravity - 0.5).toFixed(3)} />
            <MetricRow label="dev(EM)" val={Math.abs(physics.electronMass - 0.5).toFixed(3)} />
            <MetricRow label={t.thermal} val={`${chemistry.temperatureK}K`} />
         </div>
      </div>

    </div>
  );
};

const MetricRow = ({label, val}: {label:string, val:string}) => (
  <div className="flex justify-between items-baseline gap-4 w-full">
    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">{label}</span>
    <span className="font-mono text-xs text-slate-300">{val}</span>
  </div>
);
