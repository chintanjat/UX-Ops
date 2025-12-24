import React from 'react';
import { Lightbulb, Trophy } from 'lucide-react';

interface NorthStarProps {
  title: string;
  description: string;
  examples?: string[];
}

export const NorthStarCard: React.FC<NorthStarProps> = ({ title, description, examples }) => {
  return (
    <div className="min-w-[320px] max-w-[360px] rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg shrink-0 snap-center">
      <div className="flex items-center gap-2 mb-3 text-emerald-400">
        <Trophy size={18} />
        <span className="text-xs font-bold uppercase tracking-widest">Best Practice</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{title}</h3>
      <p className="text-slate-200 text-base mb-5 leading-relaxed border-b border-slate-700/60 pb-5">
        {description}
      </p>
      
      {examples && examples.length > 0 && (
        <div className="space-y-3">
          {examples.slice(0, 2).map((ex, i) => (
            <div key={i} className="flex gap-3 items-start">
              <Lightbulb size={16} className="mt-0.5 text-amber-400 shrink-0" />
              <p className="text-sm text-slate-300 leading-snug">{ex}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};