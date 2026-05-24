import React from 'react';
import { FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { translations } from '../lib/i18n';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const renderText = (text: string) => {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index} math={part.slice(1, -1)} />;
    }
    return <span key={index}>{part}</span>;
  });
};

export const Docs = () => {
  const { language } = useStore();
  const t = translations[language].docs;
  const navT = translations[language].nav;

  return (
    <div className="h-full overflow-y-auto bg-slate-950 text-slate-300 selection:bg-cyan-900/40 font-sans">
       
       <article className="max-w-3xl mx-auto px-8 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-100">{t.title}</h1>
          
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-slate-500 mb-12 border-b border-slate-800 pb-8 uppercase tracking-widest">
            <span className="text-cyan-600">D. Richter</span>
            <span>&bull;</span>
            <span>{t.author}</span>
            <span>&bull;</span>
            <span>2026</span>
          </div>

          <div className="flex flex-col gap-10 text-base sm:text-lg">
             
             <section className="flex flex-col gap-3">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.abstract}</h3>
               <p className="font-medium leading-relaxed text-slate-400">
                 {t.abstractText}
               </p>
             </section>

             <section className="flex flex-col gap-4">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.fineTuning}</h3>
               <p className="text-slate-400 leading-relaxed">
                 {renderText(t.fineTuningText1)}
               </p>
               <div className="my-2 px-6 py-6 bg-slate-900/50 rounded-lg text-center overflow-x-auto border border-slate-800 text-cyan-400 shadow-inner">
                  <BlockMath math="P_{FT} = e^{-k \sum (C_i - C_{opt})^2}" />
               </div>
               <p className="text-slate-400 leading-relaxed">
                 {renderText(t.fineTuningText2)}
               </p>
             </section>

             <section className="flex flex-col gap-4">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.combinatorics}</h3>
               <p className="text-slate-400 leading-relaxed">
                 {renderText(t.combinatoricsText1)}
               </p>
               <div className="my-2 px-6 py-6 bg-slate-900/50 rounded-lg text-center overflow-x-auto border border-slate-800 text-cyan-400 shadow-inner">
                  <BlockMath math="P_{chem} = \left( e^{-\frac{\Delta G}{R \cdot T}} \right)^N" />
               </div>
               <p className="text-slate-400 leading-relaxed">
                 {renderText(t.combinatoricsText2)}
               </p>
             </section>
             
             <section className="flex flex-col gap-4">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.accelerators}</h3>
               <p className="text-slate-400 leading-relaxed">
                 {renderText(t.acceleratorsIntro)}
               </p>
               <ul className="list-disc list-inside text-slate-400 leading-relaxed space-y-2 marker:text-cyan-600">
                  <li>{renderText(t.accelerators1)}</li>
                  <li>{renderText(t.accelerators2)}</li>
                  <li>{renderText(t.accelerators3)}</li>
               </ul>
               <div className="my-2 px-6 py-6 bg-slate-900/50 rounded-lg text-center overflow-x-auto border border-slate-800 text-cyan-400 shadow-inner">
                  <BlockMath math="P_{final} = \min\left(1.0, \, \left[e^{-\frac{\Delta G}{R \cdot T}} \cdot P_{geometry} \cdot C_{conf}\right]^N \cdot (1 + \alpha)^{\frac{N}{10}} \cdot 2^\phi\right)" />
               </div>
             </section>

             <section className="flex flex-col gap-4">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.falsifiability}</h3>
               <div className="flex flex-col gap-4 text-slate-400 leading-relaxed">
                  <div>
                    <span className="font-bold text-slate-200">{t.falsifiability1Title}</span> {t.falsifiability1Text}
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">{t.falsifiability2Title}</span> {t.falsifiability2Text}
                  </div>
               </div>
             </section>

             <hr className="my-6 border-slate-800" />

             <section className="flex flex-col gap-3">
               <h3 className="text-xl font-bold text-slate-100 uppercase tracking-widest text-sm">{t.openSource}</h3>
               <p className="text-slate-400 leading-relaxed">
                 {t.openSourceText}
               </p>
             </section>
             
             <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-24 pb-12">
               <a href="#" className="flex items-center justify-center gap-3 bg-cyan-600/20 text-cyan-400 border border-cyan-800/50 hover:bg-cyan-600/30 font-bold px-6 py-3 rounded-lg transition-all font-mono text-sm uppercase tracking-wider">
                  <ExternalLink className="w-4 h-4" /> {t.github}
               </a>
               <a href="#" className="flex items-center justify-center gap-3 bg-slate-900/80 border border-slate-700 text-slate-300 font-bold px-6 py-3 rounded-lg shadow-sm hover:bg-slate-800 transition-all font-mono text-sm uppercase tracking-wider">
                  {t.sponsor}
               </a>
             </div>
          </div>
       </article>

    </div>
  );
};
