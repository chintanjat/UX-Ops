
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auditData } from '../data';
import { SubFunction } from '../types';
import { ArrowUpRight } from 'lucide-react';

// 1. Flatten and filter data to get the "To Improve" list
const getPriorityItems = () => {
  const items: { sub: SubFunction; groupTitle: string; champion: string }[] = [];

  auditData.forEach(group => {
    group.subFunctions.forEach(sub => {
      // Logic: High Impact AND (Not Done OR Partial)
      if (sub.impact === 'High' && (sub.status === 'Not Done' || sub.status === 'Partial')) {
        items.push({
          sub,
          groupTitle: group.title,
          // Use the actual champion from the data, fallback if missing
          champion: group.champion || "Unassigned"
        });
      }
    });
  });
  return items;
};

export const PriorityFeed: React.FC = () => {
  const priorities = getPriorityItems();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % priorities.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(timer);
  }, [priorities.length]);

  // We show 3 items at a time: current, next, and the one after
  // Handle edge cases where priorities list might be small
  const visibleItems = [];
  if (priorities.length > 0) {
      for (let i = 0; i < Math.min(3, priorities.length); i++) {
          visibleItems.push(priorities[(index + i) % priorities.length]);
      }
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl overflow-hidden relative">
      <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4 relative z-20 bg-slate-900">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-amber-500 animate-pulse"></span>
            FY26 Improvement Roadmap
          </h2>
          <p className="text-slate-400 text-sm mt-1">Live feed of high-priority initiatives & owners</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
          {priorities.length} Active Initiatives
        </div>
      </div>

      {/* The Ticker Area */}
      <div className="h-[280px] relative overflow-hidden mask-linear-fade">
        {/* Gradient overlays to smooth entrance/exit */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-3 relative z-0">
          {priorities.length === 0 ? (
             <div className="flex items-center justify-center h-40 text-slate-500 text-sm">No critical items found.</div>
          ) : (
            <AnimatePresence mode='popLayout'>
                {visibleItems.map((item, i) => {
                // Create a unique key based on the item ID and the current index to force animation on cycle
                const uniqueKey = `${item.sub.id}-${index + i}`; 
                
                return (
                    <motion.div
                    key={uniqueKey}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95, transition: { duration: 0.4 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    layout
                    className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl flex items-center justify-between group hover:bg-slate-800 transition-colors"
                    >
                    <div className="flex-1 min-w-0 mr-4">
                        <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                            {item.groupTitle}
                        </span>
                        {item.sub.status === 'Partial' && (
                            <span className="text-[10px] text-amber-400 font-medium">In Progress</span>
                        )}
                        </div>
                        <h3 className="text-base font-medium text-slate-100 truncate pr-4">
                        {item.sub.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">
                        {item.sub.actionItems?.[0] || item.sub.currentProcess || "Process definition required"}
                        </p>
                    </div>

                    {/* Champion Section */}
                    <div className="flex flex-col items-end shrink-0 pl-4 border-l border-slate-700/50">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-1">Owner</span>
                        <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white border border-slate-600">
                            {item.champion.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs font-medium text-slate-300 hidden sm:block">{item.champion}</span>
                        </div>
                    </div>
                    
                    <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={14} className="text-slate-500" />
                    </div>
                    </motion.div>
                );
                })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};
