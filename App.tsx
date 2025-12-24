import React, { useState, useMemo } from 'react';
import { auditData } from './data';
import { Activity, AlertTriangle, CheckCircle, Search, Filter, PieChart, Target } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { NorthStarCard } from './components/NorthStarCard';
import { FunctionGroupCard } from './components/FunctionGroupCard';
import { PriorityFeed } from './components/PriorityFeed';
import { FunctionGroup } from './types';

function App() {
  const [filterMode, setFilterMode] = useState<'all' | 'critical' | 'stable'>('all');

  // Filter Data
  const filteredData = useMemo(() => {
    if (filterMode === 'all') return auditData;
    
    return auditData.map(group => {
      const filteredSubs = group.subFunctions.filter(sub => {
        if (filterMode === 'critical') return sub.status === 'Not Done' && sub.impact === 'High';
        if (filterMode === 'stable') return sub.status === 'Done';
        return true;
      });
      
      // Only return groups that have items after filtering
      if (filteredSubs.length === 0) return null;
      
      return {
        ...group,
        subFunctions: filteredSubs
      };
    }).filter(Boolean) as FunctionGroup[];
  }, [filterMode]);

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm backdrop-blur-md bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-md shadow-slate-900/20">
                <Activity className="text-white" size={18} />
             </div>
             <h1 className="text-lg font-bold text-slate-900 tracking-tight">DesignOps Health Check</h1>
          </div>
          <div className="flex items-center gap-2">
             <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-medium text-slate-500">Live Audit</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* 1. FY25 Roadmap (Replacing Executive Summary) */}
        <div className="mb-12">
            <PriorityFeed />
        </div>

        {/* 2. North Star Benchmarks */}
        <div className="mb-12">
           <div className="flex items-center justify-between mb-6">
              <div>
                  <h2 className="text-xl font-bold text-slate-900">Industry Benchmarks</h2>
                  <p className="text-sm text-slate-500 mt-1">Comparisons with top-tier design teams.</p>
              </div>
           </div>
           
           {/* Horizontal Scroll Container with improved masking */}
           <div className="relative group">
               <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none group-hover:from-slate-100 transition-colors" />
               <div className="flex overflow-x-auto gap-5 pb-6 pt-2 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth">
                  {auditData.map(group => (
                    <NorthStarCard 
                      key={group.id} 
                      title={group.title} 
                      description={group.northStar.description}
                      examples={group.northStar.examples}
                    />
                  ))}
               </div>
           </div>
        </div>

        {/* 3. The Audit Roadmap (Controls) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sticky top-20 z-30 bg-slate-50/95 backdrop-blur py-4 border-b border-slate-200/50 sm:border-none">
          <div>
              <h2 className="text-xl font-bold text-slate-900">Detailed Audit</h2>
              <p className="text-sm text-slate-500">Breakdown by functional area.</p>
          </div>
          
          <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
            <button 
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all ${filterMode === 'all' ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              All Items
            </button>
            <button 
              onClick={() => setFilterMode('critical')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all flex items-center gap-2 ${filterMode === 'critical' ? 'bg-red-50 text-red-700 shadow-sm ring-1 ring-red-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <AlertTriangle size={14} />
              Critical Gaps
            </button>
             <button 
              onClick={() => setFilterMode('stable')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all flex items-center gap-2 ${filterMode === 'stable' ? 'bg-green-50 text-green-700 shadow-sm ring-1 ring-green-100' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <CheckCircle size={14} />
              Quick Wins
            </button>
          </div>
        </div>

        {/* 4. The Data List (Accordion Pattern) */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
               <div className="mx-auto h-12 w-12 text-slate-300 mb-3">
                 <Search size={48} strokeWidth={1} />
               </div>
               <p className="text-slate-900 font-medium">No items match current filters.</p>
               <p className="text-slate-500 text-sm mt-1">Try changing the filter settings above.</p>
               <button onClick={() => setFilterMode('all')} className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">Clear Filters</button>
            </div>
          ) : (
            filteredData.map((group) => (
              <FunctionGroupCard 
                key={group.id} 
                group={group} 
                // Auto-expand if filtering is active, otherwise keep collapsed for clean overview
                defaultOpen={filterMode !== 'all'} 
              />
            ))
          )}
        </div>

      </main>
    </div>
  );
}

export default App;