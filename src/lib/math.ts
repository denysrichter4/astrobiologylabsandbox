import { Language, translations } from './i18n';

// Core Mathematics and Thermodynamics Logic for the Simulator
// Abstracted to ensure pure business logic, avoiding UI freezes

export const CONSTANTS = {
  GAS_CONSTANT_R: 0.001987, // kcal/(K*mol)
  FINE_TUNING_TOLERANCE: 0.05, 
};

export interface PhysicsState {
  strongForce: number; // Normalized 0-1, Ideal = 0.5
  gravity: number; // Normalized 0-1, Ideal = 0.5
  electronMass: number; // Normalized 0-1, Ideal = 0.5
}

export interface ChemistryState {
  temperatureK: number; // Range ~0 - 1000 K. Ideal ~300 K
  deltaG: number; // Base energy barrier in kcal/mol
  rnaLength: number; // Target polymer length
  confinementLog: number; // 0 to 12
  autocatalysis: number; // 0.0 to 2.0
  thermalCycles: number; // 0 to 100
}

export interface SimulationResult {
  probability: number;
  scientificString: string;
  isStableUniverse: boolean;
  isLifePossible: boolean;
  status: 'COLLAPSE' | 'DECAY' | 'STERILE' | 'THERMODYNAMIC_COLLAPSE' | 'HIGHLY_CONSTRAINED' | 'SYSTEM_VIABLE';
  telemetryLog: string;
}

// Computes the combined probability of our universe supporting and forming life given the sliders
export function calculateSimulation(physics: PhysicsState, chem: ChemistryState, lang: Language = 'en'): SimulationResult {
  const t = translations[lang].simulation;
  // 1. Fine-Tuning Probability (Gaussian distribution centered at 0.5)
  const dtStrong = Math.abs(physics.strongForce - 0.5);
  const dtGrav = Math.abs(physics.gravity - 0.5);
  const dtElec = Math.abs(physics.electronMass - 0.5);
  
  // If constants deviate too much, the universe inherently fails to form complex structures
  const maxDeviation = Math.max(dtStrong, dtGrav, dtElec);
  const isStableUniverse = maxDeviation < 0.3; // Allow some wide bounds for "sterile" existence

  // Very steep dropoff for fine tuning
  const log10_p_ft = isStableUniverse ? (-150 * (dtStrong**2 + dtGrav**2 + dtElec**2)) / Math.LN10 : -Infinity;

  // 2. Prebiotic Chemistry Probability
  let log10_p_chem = 0;
  let tFactor = 'optimal';
  
  // If extreme temps, chemistry is impossible
  if (chem.temperatureK < 50 || chem.temperatureK > 600) {
    log10_p_chem = -Infinity;
    tFactor = chem.temperatureK < 50 ? t.frozen : t.incinerated;
  } else {
    const exponent = -chem.deltaG / (CONSTANTS.GAS_CONSTANT_R * chem.temperatureK);
    const log10_p_link = exponent / Math.LN10 + chem.confinementLog;
    
    let log10_p_linear = chem.rnaLength * log10_p_link;
    let log10_synergy = (chem.rnaLength / 10) * Math.log10(1 + chem.autocatalysis);
    let log10_cycles = chem.thermalCycles * Math.log10(2);

    log10_p_chem = log10_p_linear + log10_synergy + log10_cycles;
    
    if (log10_p_chem > 0) {
      log10_p_chem = 0; // Cap at 1.0 (log10(1.0) = 0)
    }
  }

  // Final Combined Probability
  let total_log10 = isStableUniverse ? log10_p_ft + log10_p_chem : -Infinity;
  if(total_log10 > 0) total_log10 = 0;
  
  // States and Logs
  let status: SimulationResult['status'] = 'STERILE';
  let logStr = '';
  let isLifePossible = false;
  
  if (!isStableUniverse) {
    status = dtStrong > 0.3 ? 'DECAY' : 'COLLAPSE';
    logStr = t.critInstability(maxDeviation.toFixed(3));
  } else if (log10_p_chem === -Infinity && (chem.temperatureK < 50 || chem.temperatureK > 600)) {
    status = 'STERILE';
    logStr = t.thermalExceeded(tFactor);
  } else if (total_log10 < -50) {
    status = 'THERMODYNAMIC_COLLAPSE';
    logStr = t.thermoCollapse;
  } else if (total_log10 >= -50 && total_log10 < -15) {
    status = 'HIGHLY_CONSTRAINED';
    isLifePossible = true;
    logStr = t.highlyConstrained;
  } else {
    status = 'SYSTEM_VIABLE';
    isLifePossible = true;
    logStr = t.systemViable;
  }

  if (isLifePossible || status === 'THERMODYNAMIC_COLLAPSE' || status === 'HIGHLY_CONSTRAINED') {
    if (chem.autocatalysis >= 0.1) logStr += ' ' + t.autocatalysisLog;
    if (chem.thermalCycles >= 5) logStr += ' ' + t.thermalLog;
    if (chem.confinementLog >= 1) logStr += ' ' + t.confinementLogMsg;
  }

  // Format scientifically directly from log10
  let formatted = '';
  if (total_log10 === -Infinity) {
    formatted = '0.00e+0';
  } else if (total_log10 === 0) {
    formatted = '1.00e+0';
  } else if (total_log10 > -3) {
    formatted = Math.pow(10, total_log10).toFixed(4);
  } else {
    const exponent = Math.floor(total_log10);
    const mantissa = Math.pow(10, total_log10 - exponent);
    formatted = `${mantissa.toFixed(2)}e${exponent}`;
  }

  // Create a probability number for legacy UI stuff that just checks if it's > 0 (even though it's useless for tiny values)
  const numericProbability = total_log10 > -300 ? Math.pow(10, total_log10) : 0;

  return {
    probability: numericProbability,
    scientificString: formatted,
    isStableUniverse,
    isLifePossible,
    status,
    telemetryLog: logStr,
  };
}

