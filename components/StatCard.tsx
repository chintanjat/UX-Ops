import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext: string;
  color: 'blue' | 'red' | 'amber';
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const colorStyles = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
};

const textStyles = {
  blue: 'text-blue-900',
  red: 'text-red-900',
  amber: 'text-amber-900',
};

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, color, icon, isHighlighted }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-xl border p-6 shadow-sm bg-white transition-all duration-300 ${
        isHighlighted ? `ring-2 ring-${color}-400 ring-offset-2 scale-[1.02]` : ''
      }`}
    >
      <div className={`absolute top-0 right-0 p-4 opacity-10 ${textStyles[color]}`}>
        {icon}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2">
           <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</p>
           {isHighlighted && (
             <span className={`flex h-2 w-2 rounded-full ${colorStyles[color].split(' ')[0]} animate-pulse`} />
           )}
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className={`text-4xl font-bold ${textStyles[color]}`}>{value}</span>
        </div>
        <div className={`mt-4 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorStyles[color]}`}>
          {subtext}
        </div>
      </div>
    </motion.div>
  );
};