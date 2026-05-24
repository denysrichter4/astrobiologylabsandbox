import React from 'react';
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
}

const TelemetrySlider: React.FC<SliderProps> = ({ label, val, min, max, step, onChange, format = v => v.toFixed(3) }) => {
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
    </div>
  );
};

export const ControlsPanel = () => {
  const { physics, chemistry, setPhysics, setChemistry, language } = useStore();
  const t = translations[language].controls;

  return (
    <div className="w-full h-full overflow-y-auto bg-[#0a0a0f] border-r border-slate-900/50 p-8 flex flex-col gap-10 scrollbar-hide">
      
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <div className="w-3 h-3 bg-amber-500 rounded-lg flex items-center justify-center animate-pulse"><div className="w-1.5 h-1.5 bg-white rounded-sm rotate-45"></div></div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.cosmologicalConstants}</h2>
        </div>
        
        <div className="flex flex-col gap-5">
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

      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <div className="w-3 h-3 bg-cyan-500 rounded-lg flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-sm rotate-45"></div></div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.prebioticChemistry}</h2>
        </div>

        <div className="flex flex-col gap-5">
          <TelemetrySlider 
            label={t.temperature} 
            val={chemistry.temperatureK} min={0} max={1000} step={1} 
            onChange={(v) => setChemistry('temperatureK', v)} 
            format={(v) => `${v.toFixed(0)} K`}
          />
          <TelemetrySlider 
            label={t.activationBarrier} 
            val={chemistry.deltaG} min={0} max={40} step={0.1} 
            onChange={(v) => setChemistry('deltaG', v)} 
            format={(v) => `${v.toFixed(1)} kcal`}
          />
          <TelemetrySlider 
            label={t.rnaLength} 
            val={chemistry.rnaLength} min={10} max={300} step={1} 
            onChange={(v) => setChemistry('rnaLength', v)} 
            format={(v) => `${v.toFixed(0)}`}
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <div className="w-3 h-3 bg-purple-500 rounded-lg flex items-center justify-center animate-pulse"><div className="w-1.5 h-1.5 bg-white rounded-sm rotate-45"></div></div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.systemAccelerators}</h2>
        </div>

        <div className="flex flex-col gap-5">
          <TelemetrySlider 
            label={t.confinement} 
            val={chemistry.confinementLog} min={0} max={12} step={0.1} 
            onChange={(v) => setChemistry('confinementLog', v)} 
            format={(v) => `10^${v.toFixed(1)}x`}
          />
          <TelemetrySlider 
            label={t.autocatalysis} 
            val={chemistry.autocatalysis} min={0} max={2} step={0.01} 
            onChange={(v) => setChemistry('autocatalysis', v)} 
            format={(v) => `${(v * 100).toFixed(0)}%`}
          />
          <TelemetrySlider 
            label={t.thermalCycling} 
            val={chemistry.thermalCycles} min={0} max={100} step={1} 
            onChange={(v) => setChemistry('thermalCycles', v)} 
            format={(v) => `${v.toFixed(0)} cycles`}
          />
        </div>
      </section>

    </div>
  );
};
