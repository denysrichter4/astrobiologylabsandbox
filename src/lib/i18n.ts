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
      rnaLength: "RNA Sequence Length (N)",
      helperTemp: "~300K (Open Ocean) / ~350K (Hydrothermal Vent)",
      helperBarrier: "~15-20 kcal (Uncatalyzed Aqueous) / ~2-5 kcal (Fe-S Mineral Catalysis)",
      helperConfinement: "Simulates Alkaline Vent Compartmentalization",
      helperAutocatalysis: "Kauffman's Autocatalytic Sets"
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
      thermoCollapse: "Phase space traversal time exceeds geological bounds. Hydrolysis strictly dominates polymerization.",
      highlyConstrained: "Phase-space viability low. System requires severe micro-environmental calibration to prevent entropic decay.",
      systemViable: "Non-equilibrium survivability achieved. Stable oligomer formation detected. Dissipative adaptation active.",
      frozen: "frozen",
      incinerated: "incinerated",
      autocatalysisLog: "Autocatalytic loop detected. Probability increasing via non-linear feedback.",
      thermalLog: "Hydrothermal convection driving exponential PCR-like replication.",
      confinementLogMsg: "Mineral pores concentrating reagents, massively boosting linkage probability.",
      status: {
        COLLAPSE: 'COLLAPSE',
        DECAY: 'DECAY',
        STERILE: 'STERILE',
        THERMODYNAMIC_COLLAPSE: 'REGIME: HYDROLYSIS DOMINANT',
        HIGHLY_CONSTRAINED: 'REGIME: HIGHLY CONSTRAINED',
        SYSTEM_VIABLE: 'REGIME: STABLE DISSIPATIVE STRUCTURE'
      }
    },
    docs: {
      title: "Parametric Sensitivity in Non-Equilibrium Prebiotic Thermodynamics: A Computational Analysis",
      author: "Astrobiology Simulation Consortium",
      abstract: "Abstract",
      abstractText: "Modern abiogenesis paradigms have largely abandoned unrestrained stochastic polymerization models in open aqueous environments, favoring highly structured, far-from-equilibrium systems such as alkaline hydrothermal vents and autocatalytic networks. This document presents the stochastic computational engine designed to quantify the extreme parametric sensitivity required to traverse the chemical phase space toward stable prebiotic polymers. The model demonstrates that the emergence of dissipative biological structures requires an exceptionally narrow and fragile range of thermodynamic and geometric conditions to prevent entropic collapse.",
      
      kinetic: "1. The Kinetic Bottleneck of Open Systems (Linear Thermodynamics)",
      kineticText1: "The probability of a stable and successful phosphodiester bond ($P_{bond}$) in a given period is modeled using the Boltzmann factor, correlating the absolute temperature of the system with the catalyzed activation energy barrier:",
      kineticText2: "For a polymer of $N$ nucleotides assembling through strictly sequential collisions without spatial confinement, the phase space traversal probability ($P_{linear}$) is expressed as:",
      kineticText3: "At extremes of temperature ($T$), thermal agitation instantly hydrolyzes the bonds, or a lack of kinetic energy prevents necessary catalytic collisions. In unrestrained oceanic environments, hydrolysis strictly dominates polymerization, making the model kinetically inviable.",

      accelerators: "2. Modeling Non-Linear Dissipative Accelerators",
      acceleratorsIntro: "To accurately reflect modern hydrothermal and autocatalytic hypotheses, the engine integrates three non-linear parameters to model chemical selection and concentration:",
      accelerators1: "Confinement Factor ($C_{conf}$): Simulates two-dimensional compartmentalization within mineral micropores, reducing dispersion volume and exponentially increasing local reagent concentration.",
      accelerators2: "Autocatalytic Feedback ($\\alpha$): Represents Kauffman's autocatalytic loops, where the presence of specific oligomers reduces the activation barrier for homologous sequences: $\\text{Synergy} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Thermal Convection Cycles ($\\phi$): Emulates convective thermocycling in hydrothermal vent networks (natural PCR effect): $\\text{Amplification} = 2^\\phi$.",
      acceleratorsOutro: "The unified equation governing the probability of stable structural emergence is defined as:",

      falsifiability: "3. Methodological Limitations and Falsifiability",
      falsifiability1Title: "Dependence on Current Empirical Physics:",
      falsifiability1Text: "The model operates strictly within contemporary measurable thermodynamic constraints. The modular architecture allows the integration of new pre-RNA metabolic pathways (e.g., TNA, PNA dynamics) as they are experimentally validated by physical chemistry.",
      falsifiability2Title: "Exclusion of Non-Falsifiable Conjectures:",
      falsifiability2Text: "The model strictly rejects parameters derived from untestable cosmological hypotheses (such as the Multiverse). Consistent with Popperian falsifiability, the simulator requires parameters grounded within the observable dynamics of this universe's physics, excluding metaphysical hypotheses that do not provide tractable numerical data.",
      
      openSource: "Open Source & Support",
      openSourceText: "This research project aims to convey the profound numerical fragility of the chemical-biological transition. The engine is fully open-source and rendered client-side on HTML5 Canvas at 60fps.",
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
      rnaLength: "Comprimento do RNA (N)",
      helperTemp: "~300K (Oceano Aberto) / ~350K (Fonte Hidrotermal)",
      helperBarrier: "~15-20 kcal (Aquoso Não-Catalisado) / ~2-5 kcal (Catálise Mineral Fe-S)",
      helperConfinement: "Simula Compartimentalização de Fontes Alcalinas",
      helperAutocatalysis: "Conjuntos Autocatalíticos de Kauffman"
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
      thermoCollapse: "Tempo de travessia do espaço de fase excede limites geológicos. A hidrólise domina estritamente a polimerização.",
      highlyConstrained: "Viabilidade do espaço de fase baixa. O sistema requer calibração microambiental severa para evitar decaimento entrópico.",
      systemViable: "Sobrevivência de não-equilíbrio alcançada. Formação estável de oligômeros detectada. Adaptação dissipativa ativa.",
      frozen: "congelado",
      incinerated: "incinerado",
      autocatalysisLog: "Loop autocatalítico detectado. Probabilidade aumentando via feedback não-linear.",
      thermalLog: "Convecção hidrotermal impulsiona replicação exponencial tipo PCR.",
      confinementLogMsg: "Poros minerais concentrando reagentes, aumentando brutalmente a chance de ligação.",
      status: {
        COLLAPSE: 'COLAPSO',
        DECAY: 'DECAIMENTO',
        STERILE: 'ESTÉRIL',
        THERMODYNAMIC_COLLAPSE: 'REGIME: HIDRÓLISE DOMINANTE',
        HIGHLY_CONSTRAINED: 'REGIME: ALTAMENTE RESTRITO',
        SYSTEM_VIABLE: 'REGIME: ESTRUTURA DISSIPATIVA ESTÁVEL'
      }
    },
    docs: {
      title: "Sensibilidade Paramétrica na Termodinâmica Prebiótica de Não-Equilíbrio: Uma Análise Computacional",
      author: "Consórcio de Simulação de Astrobiologia",
      abstract: "Resumo",
      abstractText: "Os paradigmas modernos de abiogênese abandonaram em grande parte os modelos de polimerização estocástica irrestrita em ambientes aquosos abertos, favorecendo sistemas altamente estruturados e distantes do equilíbrio, como fontes hidrotermais alcalinas e redes autocatalíticas. Este documento apresenta o motor computacional estocástico projetado para quantificar a extrema sensibilidade paramétrica necessária para atravessar o espaço de fase químico em direção a polímeros prebióticos estáveis. O modelo demonstra que o surgimento de estruturas biológicas dissipativas requer uma faixa excepcionalmente estreita e frágil de condições termodinâmicas e geométricas para evitar o colapso entrópico.",
      
      kinetic: "1. O Gargalo Cinético de Sistemas Abertos (Termodinâmica Linear)",
      kineticText1: "A probabilidade de uma ligação fosfodiéster estável e bem-sucedida ($P_{bond}$) em um determinado período é modelada usando o fator de Boltzmann, correlacionando a temperatura absoluta do sistema com a barreira de energia de ativação catalisada:",
      kineticText2: "Para um polímero de $N$ nucleotídeos se montando através de colisões estritamente sequenciais sem confinamento espacial, a probabilidade de travessia do espaço de fase ($P_{linear}$) é expressa como:",
      kineticText3: "Em extremos de temperatura ($T$), a agitação térmica hidrolisa as ligações instantaneamente, ou a falta de energia cinética impede as colisões catalíticas necessárias. Em ambientes oceânicos irrestritos, a hidrólise domina estritamente a polimerização, tornando o modelo cineticamente inviável.",

      accelerators: "2. Modelagem de Aceleradores Dissipativos Não-Lineares",
      acceleratorsIntro: "Para refletir com precisão as hipóteses hidrotermais e autocatalíticas modernas, o motor integra três parâmetros não-lineares para modelar a seleção e concentração química:",
      accelerators1: "Fator de Confinamento ($C_{conf}$): Simula a compartimentalização bidimensional dentro de microporos minerais, reduzindo o volume de dispersão e aumentando exponencialmente a concentração local de reagentes.",
      accelerators2: "Feedback Autocatalítico ($\\alpha$): Representa as alças autocatalíticas de Kauffman, onde a presença de oligômeros específicos reduz a barreira de ativação para sequências homólogas: $\\text{Sinergia} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Ciclos de Convecção Térmica ($\\phi$): Emula o termociclismo convectivo em redes de fontes hidrotermais (efeito PCR natural): $\\text{Amplificação} = 2^\\phi$.",
      acceleratorsOutro: "A equação unificada que rege a probabilidade de emergência estrutural estável é definida como:",

      falsifiability: "3. Limitações Metodológicas e Falsificabilidade",
      falsifiability1Title: "Dependência da Física Empírica Atual:",
      falsifiability1Text: "O modelo opera estritamente dentro das restrições termodinâmicas mensuráveis contemporâneas. A arquitetura modular permite a integração de novas vias metabólicas pré-RNA (ex: dinâmica TNA, PNA) à medida que são validadas experimentalmente pela físico-química.",
      falsifiability2Title: "Exclusão de Conjecturas Não-Falsificáveis:",
      falsifiability2Text: "O modelo rejeita estritamente parâmetros derivados de hipóteses cosmológicas não testáveis (como o Multiverso). Consistente com a falsificabilidade Popperiana, o simulador requer parâmetros fundamentados dentro da dinâmica observável da física deste universo, excluindo hipóteses metafísicas que não fornecem dados numéricos tratáveis.",
      
      openSource: "Código Aberto e Apoio",
      openSourceText: "Este projeto de pesquisa visa transmitir a profunda fragilidade numérica da transição químico-biológica. O motor é totalmente de código aberto e renderizado no lado do cliente em HTML5 Canvas a 60fps.",
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
      rnaLength: "Longitud del ARN (N)",
      helperTemp: "~300K (Océano Abierto) / ~350K (Respiradero Hidrotermal)",
      helperBarrier: "~15-20 kcal (Acuoso No Catalizado) / ~2-5 kcal (Catálisis Mineral Fe-S)",
      helperConfinement: "Simula Compartimentación de Respiraderos Alcalinos",
      helperAutocatalysis: "Conjuntos Autocatalíticos de Kauffman"
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
      thermoCollapse: "El tiempo de cruce del espacio de fase excede los límites geológicos. La hidrólisis domina estrictamente la polimerización.",
      highlyConstrained: "Viabilidad del espacio de fase baja. El sistema requiere una calibración microambiental severa para prevenir el decaimiento entrópico.",
      systemViable: "Supervivencia de no equilibrio lograda. Formación estable de oligómeros detectada. Adaptación disipativa activa.",
      frozen: "congelado",
      incinerated: "incinerado",
      autocatalysisLog: "Bucle autocatalítico detectado. Probabilidad aumentada vía retroalimentación no lineal.",
      thermalLog: "Convección hidrotermal impulsando replicación exponencial tipo PCR.",
      confinementLogMsg: "Poros minerales concentrando reactivos, potenciando la probabilidad de enlace.",
      status: {
        COLLAPSE: 'COLAPSO',
        DECAY: 'DESINTEGRACIÓN',
        STERILE: 'ESTÉRIL',
        THERMODYNAMIC_COLLAPSE: 'RÉGIMEN: HIDRÓLISIS DOMINANTE',
        HIGHLY_CONSTRAINED: 'RÉGIMEN: ALTAMENTE RESTRINGIDO',
        SYSTEM_VIABLE: 'RÉGIMEN: ESTRUCTURA DISIPATIVA ESTABLE'
      }
    },
    docs: {
      title: "Sensibilidad Paramétrica en la Termodinámica Prebiótica de No Equilibrio: Un Análisis Computacional",
      author: "Consorcio de Simulación de Astrobiología",
      abstract: "Resumen",
      abstractText: "Los paradigmas modernos de abiogénesis han abandonado en gran medida los modelos de polimerización estocástica sin restricciones en entornos acuosos abiertos, favoreciendo sistemas altamente estructurados y alejados del equilibrio, como los respiraderos hidrotermales alcalinos y las redes autocatalíticas. Este documento presenta el motor computacional estocástico diseñado para cuantificar la extrema sensibilidad paramétrica requerida para atravesar el espacio de fase químico hacia polímeros prebióticos estables. El modelo demuestra que el surgimiento de estructuras biológicas disipativas requiere un rango excepcionalmente estrecho y frágil de condiciones termodinámicas y geométricas para prevenir el colapso entrópico.",
      
      kinetic: "1. El Cuello de Botella Cinético de los Sistemas Abiertos (Termodinámica Lineal)",
      kineticText1: "La probabilidad de un enlace fosfodiéster estable y exitoso ($P_{bond}$) en un período dado se modela usando el factor de Boltzmann, correlacionando la temperatura absoluta del sistema con la barrera de energía de activación catalizada:",
      kineticText2: "Para un polímero de $N$ nucleótidos que se ensambla a través de colisiones estrictamente secuenciales sin confinamiento espacial, la probabilidad de cruzar el espacio de fase ($P_{linear}$) se expresa como:",
      kineticText3: "En extremos de temperatura ($T$), la agitación térmica hidroliza los enlaces instantáneamente, o la falta de energía cinética previene las colisiones catalíticas necesarias. En entornos oceánicos sin restricciones, la hidrólisis domina estrictamente la polimerización, haciendo el modelo cinéticamente inviable.",

      accelerators: "2. Modelado de Aceleradores Disipativos No Lineales",
      acceleratorsIntro: "Para reflejar con precisión las hipótesis hidrotermales y autocatalíticas modernas, el motor integra tres parámetros no lineales para modelar la selección y concentración química:",
      accelerators1: "Factor de Confinamiento ($C_{conf}$): Simula la compartimentación bidimensional dentro de microporos minerales, reduciendo el volumen de dispersión y aumentando exponencialmente la concentración local de reactivos.",
      accelerators2: "Retroalimentación Autocatalítica ($\\alpha$): Representa los bucles autocatalíticos de Kauffman, donde la presencia de oligómeros específicos reduce la barrera de activación para secuencias homólogas: $\\text{Sinergia} = (1 + \\alpha)^{\\frac{N}{10}}$.",
      accelerators3: "Ciclos de Convección Térmica ($\\phi$): Emula el termociclismo convectivo en redes de respiraderos hidrotermales (efecto PCR natural): $\\text{Amplificación} = 2^\\phi$.",
      acceleratorsOutro: "La ecuación unificada que gobierna la probabilidad de surgimiento estructural estable se define como:",

      falsifiability: "3. Limitaciones Metodológicas y Falsabilidad",
      falsifiability1Title: "Dependencia de la Física Empírica Actual:",
      falsifiability1Text: "El modelo opera estrictamente dentro de las restricciones termodinámicas medibles contemporáneas. La arquitectura modular permite la integración de nuevas vías metabólicas pre-ARN (ej. dinámica TNA, PNA) a medida que son validadas experimentalmente por la fisicoquímica.",
      falsifiability2Title: "Exclusión de Conjeturas No Falsables:",
      falsifiability2Text: "El modelo rechaza estrictamente parámetros derivados de hipótesis cosmológicas no comprobables (como el Multiverso). En consistencia con la falsabilidad Popperiana, el simulador requiere parámetros fundamentados dentro de la dinámica observable de la física de este universo, excluyendo hipótesis metafísicas que no proporcionan datos numéricos tratables.",
      
      openSource: "Código Abierto y Apoyo",
      openSourceText: "Este proyecto de investigación tiene como objetivo transmitir la profunda fragilidad numérica de la transición químico-biológica. El motor es de código abierto y se renderiza en el lado del cliente en HTML5 Canvas a 60fps.",
      github: "Repositorio GitHub",
      sponsor: "Patrocinar vía PIX",
      labEnv: "Entorno de Laboratorio",
      revision: "REVISIÓN_1.0"
    }
  }
};
