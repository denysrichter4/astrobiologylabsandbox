export type Language = 'en' | 'pt' | 'es';

export const translations = {
  en: {
    nav: {
      lab: "Lab",
      docs: "Docs",
      lang: "Language"
    },
    controls: {
      systemAccelerators: "System Accelerators",
      confinement: "Confinement (Micropores)",
      autocatalysis: "Autocatalytic Feedback",
      thermalCycling: "Thermal Cycling (PCR Effect)",
      cosmologicalConstants: "Cosmological Constants",
      strongForce: "Strong Nuclear Force (SF)",
      gravity: "Gravitational Constant (G)",
      electronMass: "Electron Mass (EM)",
      prebioticChemistry: "Prebiotic Chemistry",
      temperature: "Temperature",
      activationBarrier: "Activation Barrier (ΔG)",
      rnaLength: "RNA Sequence Length (N)"
    },
    monitor: {
      systemStatus: "SYSTEM STATUS",
      boot: "BOOT",
      liveMetrics: "LIVE METRICS",
      thermal: "Thermal"
    },
    terminal: {
      hypothesisLog: "Hypothesis Log // TTY1",
      noHypotheses: "No hypotheses recorded yet. Adjust parameters to begin.",
      hypothesis: "Hypothesis",
      result: "Result"
    },
    simulation: {
      critInstability: (dev: string) => `Critical Instability Detected. Max Deviation: ${dev}. Matter cannot exist in this phase space.`,
      thermalExceeded: (factor: string) => `Thermal boundaries exceeded. Environment is ${factor}. No complex hydrocarbons can form.`,
      belowBorel: "Below Borel's cosmic limit. Complete structural collapse/hydrolysis.",
      statAnomaly: "Statistical anomaly. Life is possible but isolated.",
      stableBio: "Stable biomolecules assembling. Favorable thermodynamic gradient.",
      frozen: "frozen",
      incinerated: "incinerated",
      autocatalysisLog: "Autocatalytic loop detected. Probability increasing via non-linear feedback.",
      thermalLog: "Hydrothermal convection driving exponential PCR-like replication.",
      confinementLogMsg: "Mineral pores concentrating reagents, massively boosting linkage probability.",
      status: {
        COLLAPSE: 'COLLAPSE',
        DECAY: 'DECAY',
        STERILE: 'STERILE',
        IMPOSSIBLE: 'IMPOSSIBLE',
        EXTREMELY_RARE: 'EXTREMELY RARE',
        VIABLE: 'VIABLE'
      }
    },
    docs: {
      title: "On the Thermodynamic Improbability of Prebiotic Polymers in Fine-Tuned Cosmological Matrices",
      author: "Astrobiology Simulation Consortium",
      abstract: "Abstract",
      abstractText: "This document outlines the mathematical foundation of the exact constraints required for stable baryonic matter and subsequent abiogenesis. The simulation engine employs continuous time Markov chains (CTMC) and Maxwell-Boltzmann statistics to derive near-instantaneous probabilities of complex polymer formation.",
      fineTuning: "1. Cosmological Fine-Tuning",
      fineTuningText1: "The stability of the universe relies on a delicate balance of fundamental constants. We model the fine-tuning probability ($P_{FT}$) as a multi-dimensional Gaussian distribution centered at the optimal physical parameters:",
      fineTuningText2: "Where $C_i$ represents the strong nuclear force, gravitational constant, and electron mass. Deviations > 0.3 on our normalized scale result in immediate baryonic decay or structural collapse.",
      combinatorics: "2. Prebiotic Combinatorics and Thermodynamics",
      combinatoricsText1: "Once a stable phase-space is established, we calculate the feasibility of spontaneous RNA chain polymerization. Given a required chain length $N$ and an activation energy barrier $\\Delta G$, the thermodynamic probability is derived from the Boltzmann factor:",
      combinatoricsText2: "At extremes of $T$ (Temperature), either thermal agitation (> 600K) hydrolyzes the bonds instantly, or lack of kinetic energy (< 50K) prevents necessary catalytic collisions.",
      accelerators: "3. Non-Linear System Accelerators",
      acceleratorsIntro: "To cross the stochastic barrier of $10^{-50}$, the engine incorporates three non-linear kinetic tensors as feedback multipliers:",
      accelerators1: "Confinement Factor: Simulates the retention within 2D mineral micropores, amplifying the collision rate by up to $10^{12}$.",
      accelerators2: "Autocatalytic Feedback ($\\alpha$): Introduces a synergy variable where pre-existing oligomers catalyze new homologous strands: $\\text{Synergy} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Thermal Convection Cycles ($\\phi$): Simulates thermocycling behavior of hydrothermal vents. Each cycle exponentially duplicates the stable chains: $\\text{Amplification} = 2^\\phi$.",
      falsifiability: "4. Methodological Limitations and Falsifiability",
      falsifiability1Title: "Dependence on Current Physics:",
      falsifiability1Text: "The model operates strictly within empirical constraints of contemporary thermodynamics. The architecture is modular, allowing the inclusion of new mathematical tensors once validated by reproducible experimental data.",
      falsifiability2Title: "Exclusion of the Multiverse:",
      falsifiability2Text: "Models of cosmological multiplicity or chaotic inflationary cosmology (Multiverse) were not incorporated. This omission is a deliberate methodological guideline grounded in Karl Popper's principle of falsifiability. The simulator requires measurable, testable physical parameters within our observable universe. Metaphysical hypotheses based on non-interactive infinite universes do not provide tractable numerical data and fall outside the scope of empirical modeling.",
      openSource: "Open Source & Support",
      openSourceText: "This interactive journalism piece aims to convey the profound numerical rarity of life. The engine is fully open-source and rendered client-side on HTML5 Canvas at 60fps.",
      github: "GitHub Repository",
      sponsor: "Sponsor via PIX",
      labEnv: "Lab Environment",
      revision: "REVISION_1.0"
    }
  },
  pt: {
    nav: {
      lab: "Laboratório",
      docs: "Teoria",
      lang: "Idioma"
    },
    controls: {
      systemAccelerators: "Aceleradores de Sistema",
      confinement: "Confinamento (Microporos)",
      autocatalysis: "Feedback Autocatalítico",
      thermalCycling: "Ciclagem Térmica (Efeito PCR)",
      cosmologicalConstants: "Constantes Cosmológicas",
      strongForce: "Força Nuclear Forte (SF)",
      gravity: "Constante Gravitacional (G)",
      electronMass: "Massa do Elétron (EM)",
      prebioticChemistry: "Química Prebiótica",
      temperature: "Temperatura",
      activationBarrier: "Barreira de Ativação (ΔG)",
      rnaLength: "Comprimento do RNA (N)"
    },
    monitor: {
      systemStatus: "STATUS DO SISTEMA",
      boot: "INICIAÇÃO",
      liveMetrics: "MÉTRICAS AO VIVO",
      thermal: "Térmico"
    },
    terminal: {
      hypothesisLog: "Log de Hipóteses // TTY1",
      noHypotheses: "Nenhuma hipótese registrada. Ajuste os parâmetros para começar.",
      hypothesis: "Hipótese",
      result: "Resultado"
    },
    simulation: {
      critInstability: (dev: string) => `Instabilidade Crítica Detectada. Desvio Máx: ${dev}. A matéria não pode existir neste espaço de fase.`,
      thermalExceeded: (factor: string) => `Limites térmicos excedidos. Ambiente está ${factor}. Nenhum hidrocarboneto complexo pode se formar.`,
      belowBorel: "Abaixo do limite cósmico de Borel. Colapso estrutural completo/hidrólise.",
      statAnomaly: "Anomalia estatística. A vida é possível, mas isolada.",
      stableBio: "Biomoléculas estáveis em montagem. Gradiente termodinâmico favorável.",
      frozen: "congelado",
      incinerated: "incinerado",
      autocatalysisLog: "Loop autocatalítico detectado. Probabilidade aumentando via feedback não-linear.",
      thermalLog: "Convecção hidrotermal impulsiona replicação exponencial tipo PCR.",
      confinementLogMsg: "Poros minerais concentrando reagentes, aumentando brutalmente a chance de ligação.",
      status: {
        COLLAPSE: 'COLAPSO',
        DECAY: 'DECAIMENTO',
        STERILE: 'ESTÉRIL',
        IMPOSSIBLE: 'IMPOSSÍVEL',
        EXTREMELY_RARE: 'EXTREMAMENTE RARO',
        VIABLE: 'VIÁVEL'
      }
    },
    docs: {
      title: "Sobre a Improbabilidade Termodinâmica de Polímeros Prebióticos em Matrizes Cosmológicas com Ajuste Fino",
      author: "Consórcio de Simulação de Astrobiologia",
      abstract: "Resumo",
      abstractText: "Este documento descreve o fundamento matemático das restrições exatas necessárias para matéria bariônica estável e subsequente abiogênese. O motor de simulação emprega cadeias de Markov em tempo contínuo (CTMC) e estatísticas de Maxwell-Boltzmann para derivar probabilidades quase instantâneas de formação de polímeros complexos.",
      fineTuning: "1. Ajuste Fino Cosmológico",
      fineTuningText1: "A estabilidade do universo depende de um delicado equilíbrio de constantes fundamentais. Modelamos a probabilidade de ajuste fino ($P_{FT}$) como uma distribuição gaussiana multidimensional centrada nos parâmetros físicos ideais:",
      fineTuningText2: "Onde $C_i$ representa a força nuclear forte, a constante gravitacional e a massa do elétron. Desvios > 0.3 em nossa escala normalizada resultam em decaimento bariônico imediato ou colapso estrutural.",
      combinatorics: "2. Combinatória Prebiótica e Termodinâmica",
      combinatoricsText1: "Uma vez estabelecido um espaço de fase estável, calculamos a viabilidade da polimerização espontânea da cadeia de RNA. Dado um comprimento de cadeia necessário $N$ e uma barreira de energia de ativação $\\Delta G$, a probabilidade termodinâmica é derivada do fator de Boltzmann:",
      combinatoricsText2: "Em extremos de $T$ (Temperatura), a agitação térmica (> 600K) hidrolisa as ligações instantaneamente, ou a falta de energia cinética (< 50K) impede as colisões catalíticas necessárias.",
      accelerators: "3. Aceleradores de Sistema Não-Lineares",
      acceleratorsIntro: "Para cruzar a barreira estocástica de $10^{-50}$, o motor incorpora três tensores cinéticos não-lineares como multiplicadores de feedback:",
      accelerators1: "Fator de Confinamento: Simula a retenção dentro de microporos minerais 2D, amplificando a taxa de colisão em até $10^{12}$.",
      accelerators2: "Feedback Autocatalítico ($\\alpha$): Introduz uma variável de sinergia onde oligômeros pré-existentes catalisam novas fitas homólogas: $\\text{Sinergia} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Ciclos de Convecção Térmica ($\\phi$): Simula o comportamento termocíclico de fontes hidrotermais. Cada ciclo duplica exponencialmente as cadeias estáveis: $\\text{Amplificação} = 2^\\phi$.",
      falsifiability: "4. Limitações Metodológicas e Falsificabilidade",
      falsifiability1Title: "Dependência da Física Atual:",
      falsifiability1Text: "O modelo opera estritamente dentro de restrições empíricas da termodinâmica contemporânea. A arquitetura é modular, permitindo a inclusão de novos tensores matemáticos uma vez validados por dados experimentais reprodutíveis.",
      falsifiability2Title: "Exclusão do Multiverso:",
      falsifiability2Text: "Modelos de multiplicidade cosmológica ou cosmologia inflacionária caótica (Multiverso) não foram incorporados. Esta omissão é uma diretriz metodológica deliberada baseada no princípio de falsificabilidade de Karl Popper. O simulador requer parâmetros físicos testáveis e mensuráveis dentro de nosso universo observável. Hipóteses metafísicas baseadas em universos infinitos não-interativos não fornecem dados numéricos tratáveis e caem fora do escopo da modelagem empírica.",
      openSource: "Código Aberto e Apoio",
      openSourceText: "Esta peça de jornalismo interativo visa transmitir a profunda raridade numérica da vida. O motor é totalmente de código aberto e renderizado no cliente em HTML5 Canvas a 60 fps.",
      github: "Repositório GitHub",
      sponsor: "Patrocinar via PIX",
      labEnv: "Ambiente do Lab",
      revision: "REVISÃO_1.0"
    }
  },
  es: {
    nav: {
      lab: "Laboratorio",
      docs: "Teoría",
      lang: "Idioma"
    },
    controls: {
      systemAccelerators: "Aceleradores del Sistema",
      confinement: "Confinamiento (Microporos)",
      autocatalysis: "Retroalimentación Autocatalítica",
      thermalCycling: "Ciclos Térmicos (Efecto PCR)",
      cosmologicalConstants: "Constantes Cosmológicas",
      strongForce: "Fuerza Nuclear Fuerte (SF)",
      gravity: "Constante Gravitacional (G)",
      electronMass: "Masa del Electrón (EM)",
      prebioticChemistry: "Química Prebiótica",
      temperature: "Temperatura",
      activationBarrier: "Barrera de Activación (ΔG)",
      rnaLength: "Longitud del ARN (N)"
    },
    monitor: {
      systemStatus: "ESTADO DEL SISTEMA",
      boot: "INICIO",
      liveMetrics: "MÉTRICAS EN VIVO",
      thermal: "Térmico"
    },
    terminal: {
      hypothesisLog: "Registro de Hipótesis // TTY1",
      noHypotheses: "Aún no hay hipótesis registradas. Ajuste los parámetros para comenzar.",
      hypothesis: "Hipótesis",
      result: "Resultado"
    },
    simulation: {
      critInstability: (dev: string) => `Instabilidad Crítica Detectada. Desviación Máx: ${dev}. La materia no puede existir en este espacio de fase.`,
      thermalExceeded: (factor: string) => `Límites térmicos excedidos. El entorno está ${factor}. No pueden formarse hidrocarburos complejos.`,
      belowBorel: "Por debajo del límite cósmico de Borel. Colapso estructural completo/hidrólisis.",
      statAnomaly: "Anomalía estadística. La vida es posible pero aislada.",
      stableBio: "Biomoléculas estables en ensamblaje. Gradiente termodinámico favorable.",
      frozen: "congelado",
      incinerated: "incinerado",
      autocatalysisLog: "Bucle autocatalítico detectado. Probabilidad aumentada vía retroalimentación no lineal.",
      thermalLog: "Convección hidrotermal impulsando replicación exponencial tipo PCR.",
      confinementLogMsg: "Poros minerales concentrando reactivos, potenciando la probabilidad de enlace.",
      status: {
        COLLAPSE: 'COLAPSO',
        DECAY: 'DESINTEGRACIÓN',
        STERILE: 'ESTÉRIL',
        IMPOSSIBLE: 'IMPOSIBLE',
        EXTREMELY_RARE: 'EXTREMADAMENTE RARO',
        VIABLE: 'VIABLE'
      }
    },
    docs: {
      title: "Sobre la Improbabilidad Termodinámica de los Polímeros Prebióticos en Matrices Cosmológicas Ajustadas",
      author: "Consorcio de Simulación de Astrobiología",
      abstract: "Resumen",
      abstractText: "Este documento describe los fundamentos matemáticos de las restricciones exactas requeridas para la materia bariónica estable y la posterior abiogénesis. El motor de simulación emplea cadenas de Markov de tiempo continuo (CTMC) y estadísticas de Maxwell-Boltzmann para derivar probabilidades casi instantáneas de formación de polímeros complejos.",
      fineTuning: "1. Ajuste Fino Cosmológico",
      fineTuningText1: "La estabilidad del universo se basa en un delicado equilibrio de constantes fundamentales. Modelamos la probabilidad de ajuste fino ($P_{FT}$) como una distribución gaussiana multidimensional centrada en los parámetros físicos óptimos:",
      fineTuningText2: "Donde $C_i$ representa la fuerza nuclear fuerte, la constante gravitacional y la masa del electrón. Desviaciones > 0.3 en nuestra escala normalizada resultan en desintegración bariónica inmediata o colapso estructural.",
      combinatorics: "2. Combinatoria Prebiótica y Termodinámica",
      combinatoricsText1: "Una vez establecido un espacio de fase estable, calculamos la viabilidad de la polimerización espontánea de cadenas de ARN. Dada una longitud de cadena requerida $N$ y una barrera de energía de activación $\\Delta G$, la probabilidad termodinámica se deriva del factor de Boltzmann:",
      combinatoricsText2: "En extremos de $T$ (Temperatura), la agitación térmica (> 600K) hidroliza los enlaces instantáneamente, o la falta de energía cinética (< 50K) previene las colisiones catalíticas necesarias.",
      accelerators: "3. Aceleradores de Sistema No Lineales",
      acceleratorsIntro: "Para cruzar la barrera estocástica de $10^{-50}$, el motor incorpora tres tensores cinéticos no lineales como multiplicadores de retroalimentación:",
      accelerators1: "Factor de Confinamiento: Simula la retención dentro de microporos minerales 2D, amplificando la tasa de colisión en hasta $10^{12}$.",
      accelerators2: "Retroalimentación Autocatalítica ($\\alpha$): Introduce una variable de sinergia donde los oligómeros preexistentes catalizan nuevas cadenas homólogas: $\\text{Sinergia} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Ciclos de Convección Térmica ($\\phi$): Simula el comportamiento termocíclico de los respiraderos hidrotermales. Cada ciclo duplica exponencialmente las cadenas estables: $\\text{Amplificación} = 2^\\phi$.",
      falsifiability: "4. Limitaciones Metodológicas y Falsabilidad",
      falsifiability1Title: "Dependencia de la Física Actual:",
      falsifiability1Text: "El modelo opera estrictamente dentro de las restricciones empíricas de la termodinámica contemporánea. La arquitectura es modular, permitiendo la inclusión de nuevos tensores matemáticos una vez validados por datos experimentales reproducibles.",
      falsifiability2Title: "Exclusión del Multiverso:",
      falsifiability2Text: "Los modelos de multiplicidad cosmológica o cosmología inflacionaria caótica (Multiverso) no fueron incorporados. Esta omisión es una guía metodológica deliberada basada en el principio de falsabilidad de Karl Popper. El simulador requiere parámetros físicos medibles y comprobables dentro de nuestro universo observable. Las hipótesis metafísicas basadas en universos infinitos no interactivos no proporcionan datos numéricos tratables y caen fuera del alcance de la modelización empírica.",
      openSource: "Código Abierto y Apoyo",
      openSourceText: "Esta pieza de periodismo interactivo tiene como objetivo transmitir la profunda rareza numérica de la vida. El motor es de código abierto y se renderiza en el cliente en HTML5 Canvas a 60fps.",
      github: "Repositorio GitHub",
      sponsor: "Patrocinar vía PIX",
      labEnv: "Entorno de Laboratorio",
      revision: "REVISIÓN_1.0"
    }
  }
};
