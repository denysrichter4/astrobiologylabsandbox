import React, { useState } from 'react';
import { useStore } from '../store';
import { translations } from '../lib/i18n';

interface SliderProps {
  label: string;
  val: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
  helperText?: string;
}

const TelemetrySlider: React.FC<SliderProps> = ({ label, val, min, max, step, onChange, format = v => v.toFixed(3), helperText }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-baseline mb-1">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</label>
        <span className="font-mono font-bold text-cyan-400">{format(val)}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={val} 
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-ew-resize accent-cyan-500 hover:accent-cyan-400 transition-all"
      />
      {helperText && (
        <span className="text-[10px] text-slate-600 mt-0.5 leading-snug">{helperText}</span>
      )}
    </div>
  );
};

export const ControlsPanel = () => {
  const { physics, chemistry, setPhysics, setChemistry, language, simulation } = useStore();
  const t = translations[language].controls;

  const [activeTab, setActiveTab] = useState<'cosmology' | 'chemistry' | 'emergent'>('chemistry');
  const isBaryonicCollapse = simulation ? !simulation.isStableUniverse : false;

  // Auto-switch away from disabled tabs if universe collapses
  React.useEffect(() => {
    if (isBaryonicCollapse && activeTab !== 'cosmology') {
      setActiveTab('cosmology');
    }
  }, [isBaryonicCollapse, activeTab]);

  return (
    <div className="w-full h-full bg-[#0a0a0f] border-r border-slate-900/50 flex flex-col pointer-events-auto">
      
      {/* TABS HEADER */}
      <div className="flex border-b border-slate-900/80 bg-[#050508]">
        <button 
          onClick={() => setActiveTab('cosmology')}
          className={`flex-1 py-4 px-2 text-[9px] font-bold uppercase tracking-widest transition-colors border-b-2 flex flex-col items-center gap-1 ${activeTab === 'cosmology' ? 'text-amber-500 border-amber-500 bg-amber-950/10' : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/50'}`}
        >
          <div className={`w-2 h-2 ${activeTab === 'cosmology' ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'} rounded-lg rotate-45`}></div>
          Module A
        </button>
        <button 
          onClick={() => !isBaryonicCollapse && setActiveTab('chemistry')}
          disabled={isBaryonicCollapse}
          className={`flex-1 py-4 px-2 text-[9px] font-bold uppercase tracking-widest transition-colors border-b-2 flex flex-col items-center gap-1 ${activeTab === 'chemistry' ? 'text-cyan-500 border-cyan-500 bg-cyan-950/10' : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/50'} ${isBaryonicCollapse ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <div className={`w-2 h-2 ${activeTab === 'chemistry' ? 'bg-cyan-500' : 'bg-slate-700'} rounded-lg rotate-45`}></div>
          Module B
        </button>
        <button 
          onClick={() => !isBaryonicCollapse && setActiveTab('emergent')}
          disabled={isBaryonicCollapse}
          className={`flex-1 py-4 px-2 text-[9px] font-bold uppercase tracking-widest transition-colors border-b-2 flex flex-col items-center gap-1 ${activeTab === 'emergent' ? 'text-purple-500 border-purple-500 bg-purple-950/10' : 'text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/50'} ${isBaryonicCollapse ? 'opacity-20 cursor-not-allowed' : ''}`}
        >
          <div className={`w-2 h-2 ${activeTab === 'emergent' ? 'bg-purple-500 animate-pulse' : 'bg-slate-700'} rounded-lg rotate-45`}></div>
          Module C
        </button>
      </div>

      <div className="w-full overflow-y-auto flex-1 p-8 scrollbar-hide">
        {activeTab === 'cosmology' && (
          <section className="flex flex-col gap-6 animate-in fade-in duration-300 slide-in-from-bottom-2">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.cosmologicalConstants}</h2>
              <span className="text-[10px] text-amber-500/70 font-mono">MATHEMATICAL MATRIX TENSORS</span>
            </div>
            
            <div className="flex flex-col gap-6 mt-2">
              <TelemetrySlider 
                label={t.strongForce} 
                val={physics.strongForce} min={0} max={1} step={0.001} 
                onChange={(v) => setPhysics('strongForce', v)} 
              />
              <TelemetrySlider 
                label={t.gravity} 
                val={physics.gravity} min={0} max={1} step={0.001} 
                onChange={(v) => setPhysics('gravity', v)} 
              />
              <TelemetrySlider 
                label={t.electronMass} 
                val={physics.electronMass} min={0} max={1} step={0.001} 
                onChange={(v) => setPhysics('electronMass', v)} 
              />
            </div>
          </section>
        )}

        {activeTab === 'chemistry' && (
          <section className="flex flex-col gap-6 animate-in fade-in duration-300 slide-in-from-bottom-2">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.prebioticChemistry}</h2>
              <span className="text-[10px] text-cyan-500/70 font-mono">NON-EQUILIBRIUM THERMODYNAMICS</span>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              <TelemetrySlider 
                label={t.temperature} 
                val={chemistry.temperatureK} min={0} max={1000} step={1} 
                onChange={(v) => setChemistry('temperatureK', v)} 
                format={(v) => `${v.toFixed(0)} K`}
                helperText={t.helperTemp}
              />
              <TelemetrySlider 
                label={t.activationBarrier} 
                val={chemistry.deltaG} min={0} max={40} step={0.1} 
                onChange={(v) => setChemistry('deltaG', v)} 
                format={(v) => `${v.toFixed(1)} kcal`}
                helperText={t.helperBarrier}
              />
              <TelemetrySlider 
                label={t.rnaLength} 
                val={chemistry.rnaLength} min={10} max={300} step={1} 
                onChange={(v) => setChemistry('rnaLength', v)} 
                format={(v) => `${v.toFixed(0)}`}
              />
            </div>
          </section>
        )}

        {activeTab === 'emergent' && (
          <section className="flex flex-col gap-6 animate-in fade-in duration-300 slide-in-from-bottom-2">
            <div className="flex flex-col gap-1 border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.systemAccelerators}</h2>
              <span className="text-[10px] text-purple-500/70 font-mono">NON-LINEAR DYNAMIC AMPLIFIERS</span>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              <TelemetrySlider 
                label={t.confinement} 
                val={chemistry.confinementLog} min={0} max={12} step={0.1} 
                onChange={(v) => setChemistry('confinementLog', v)} 
                format={(v) => `10^${v.toFixed(1)}x`}
                helperText={t.helperConfinement}
              />
              <TelemetrySlider 
                label={t.autocatalysis} 
                val={chemistry.autocatalysis} min={0} max={2} step={0.01} 
                onChange={(v) => setChemistry('autocatalysis', v)} 
                format={(v) => `${(v * 100).toFixed(0)}%`}
                helperText={t.helperAutocatalysis}
              />
              <TelemetrySlider 
                label={t.thermalCycling} 
                val={chemistry.thermalCycles} min={0} max={100} step={1} 
                onChange={(v) => setChemistry('thermalCycles', v)} 
                format={(v) => `${v.toFixed(0)} cycles`}
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
