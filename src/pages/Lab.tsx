import React from 'react';
import { ControlsPanel } from '../components/ControlsPanel';
import { SimulationCanvas } from '../components/SimulationCanvas';
import { TelemetryMonitor } from '../components/TelemetryMonitor';
import { LogTerminal } from '../components/LogTerminal';

export const Lab = () => {
  return (
    <div className="w-full h-full overflow-hidden flex bg-slate-950 font-sans relative text-slate-300">
      
      {/* LEFT PANEL - Controls (approx 350px fixed width) */}
      <div className="w-[350px] shrink-0 h-full relative z-20">
         <ControlsPanel />
      </div>

      {/* CENTER & BOTTOM WRAPPER */}
      <div className="flex-1 flex flex-col h-full relative">
         
         {/* TOP CENTER - Canvas & Monitor */}
         <div className="flex-1 relative w-full h-full overflow-hidden">
            <SimulationCanvas />
            <TelemetryMonitor />
         </div>

         {/* BOTTOM PANEL - Log Terminal (approx 200px fixed height) */}
         <div className="h-[200px] shrink-0 w-full relative z-20">
            <LogTerminal />
         </div>
      </div>
      
    </div>
  );
};
