import { create } from 'zustand';
import { calculateSimulation, PhysicsState, ChemistryState, SimulationResult } from '../lib/math';
import { Language } from '../lib/i18n';

interface LogEntry {
  id: string;
  timestamp: string;
  hypothesis: string;
  resultString: string;
  diagnostics: string;
}

interface AppState {
  language: Language;
  physics: PhysicsState;
  chemistry: ChemistryState;
  simulation: SimulationResult | null;
  logs: LogEntry[];

  // Actions
  setLanguage: (lang: Language) => void;
  setPhysics: (key: keyof PhysicsState, value: number) => void;
  setChemistry: (key: keyof ChemistryState, value: number) => void;
  runSimulation: () => void;
  clearLogs: () => void;
}

const DEFAULT_PHYSICS: PhysicsState = {
  strongForce: 0.5, // 0 to 1
  gravity: 0.5,     // 0 to 1
  electronMass: 0.5 // 0 to 1
};

const DEFAULT_CHEMISTRY: ChemistryState = {
  temperatureK: 300, // K
  deltaG: 15.0,        // kcal/mol
  rnaLength: 150,      // n
  confinementLog: 0,
  autocatalysis: 0,
  thermalCycles: 0
};

export const useStore = create<AppState>((set, get) => ({
  language: 'en',
  physics: { ...DEFAULT_PHYSICS },
  chemistry: { ...DEFAULT_CHEMISTRY },
  simulation: null,
  logs: [],

  setLanguage: (lang) => {
    set({ language: lang });
    get().runSimulation();
  },

  setPhysics: (key, value) => {
    set((state) => ({ physics: { ...state.physics, [key]: value } }));
    get().runSimulation();
  },

  setChemistry: (key, value) => {
    set((state) => ({ chemistry: { ...state.chemistry, [key]: value } }));
    get().runSimulation();
  },

  runSimulation: () => {
    const { physics, chemistry, language } = get();
    const result = calculateSimulation(physics, chemistry, language);
    
    // Add to log if state significantly changed, throttle logging naturally via user interaction
    // We will just update simulation state to keep it fully real-time. We only append log explicitly on button press.
    set({ simulation: result });
  },

  clearLogs: () => set({ logs: [] })
}));
