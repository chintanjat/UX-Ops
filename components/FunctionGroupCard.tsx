import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertTriangle, CheckCircle2, Circle } from 'lucide-react';
import { FunctionGroup } from '../types';
import { AuditRow } from './AuditRow';
import { clsx } from 'clsx';

interface FunctionGroupCardProps {
  group: FunctionGroup;
  defaultOpen?: boolean;
}

export const FunctionGroupCard: React.FC<FunctionGroupCardProps> = ({ group, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Update internal state if defaultOpen changes (e.g. when filtering)
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  const totalItems = group.subFunctions.length;
  const doneItems = group.subFunctions.filter(i => i.status === 'Done').length;
  const criticalItems = group.subFunctions.filter(i => i.status === 'Not Done' && i.impact === 'High').length;
  const partialItems = group.subFunctions.filter(i => i.status === 'Partial').length;
  
  const completionPercentage = Math.round((doneItems / totalItems) * 100);

  // Status Logic
  const hasCriticalRisks = criticalItems > 0;
  const isFullyComplete = doneItems === totalItems;

  return (
    <div className={clsx(
      "bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden",
      hasCriticalRisks ? "border-red-100 shadow-red-50/50" : "border-slate-200",
      isOpen ? "ring-1 ring-indigo-50 border-indigo-100 shadow-md" : "hover:border-slate-300"
    )}>
      {/* Header / Summary */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white relative"
      >
        {/* Left: Title & basic info */}
        <div className="flex items-center gap-4">
            <div className={clsx(
                "hidden sm:flex h-10 w-10 rounded-lg items-center justify-center text-sm font-bold font-mono transition-colors",
                hasCriticalRisks ? "bg-red-50 text-red-600" : 
                isFullyComplete ? "bg-green-50 text-green-600" : "bg-slate-100 text-slate-500"
            )}>
                {group.sno}
            </div>
            <div>
                <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span>{totalItems} Sub-functions</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                                className={clsx("h-full rounded-full", hasCriticalRisks ? "bg-red-500" : "bg-green-500")} 
                                style={{ width: `${completionPercentage}%` }}
                            />
                        </div>
                        <span className="font-medium">{completionPercentage}%</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right: Risk Badges & Toggle */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
             <div className="flex gap-2">
                {hasCriticalRisks && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
                        <AlertTriangle size={12} className="fill-red-700/10" />
                        {criticalItems} Critical
                    </span>
                )}
                {!hasCriticalRisks && !isFullyComplete && (
                     <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        <Circle size={10} className="fill-slate-400 text-transparent" />
                        {totalItems - doneItems} Remaining
                    </span>
                )}
                {isFullyComplete && (
                     <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
                        <CheckCircle2 size={12} className="fill-green-700/10" />
                        Healthy
                    </span>
                )}
             </div>

             <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400"
             >
                 <ChevronDown size={20} />
             </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Header Labels for Desktop */}
                <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-2 bg-slate-50 border-y border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="col-span-5 pl-2">Sub-Function</div>
                  <div className="col-span-2 text-center">Impact</div>
                  <div className="col-span-5">Audit & Action</div>
                </div>

                <div className="bg-white">
                    {group.subFunctions.map((sub, idx) => (
                        <AuditRow key={sub.id} item={sub} isLast={idx === group.subFunctions.length - 1} />
                    ))}
                </div>
                
                {/* Footer of the card */}
                {group.northStar && (
                    <div className="bg-slate-50 p-4 border-t border-slate-100">
                         <div className="flex gap-2">
                             <div className="w-1 bg-indigo-500 rounded-full h-auto my-1 opacity-20"></div>
                             <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">North Star Goal</p>
                                <p className="text-sm text-slate-600 italic">"{group.northStar.description}"</p>
                             </div>
                         </div>
                    </div>
                )}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};