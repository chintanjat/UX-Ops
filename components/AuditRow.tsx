import React from 'react';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, CornerDownRight } from 'lucide-react';
import { SubFunction } from '../types';
import { Badge } from './Badge';
import { clsx } from 'clsx';

interface AuditRowProps {
  item: SubFunction;
  isLast?: boolean;
}

export const AuditRow: React.FC<AuditRowProps> = ({ item, isLast }) => {
  const isCriticalRisk = item.impact === 'High' && item.status === 'Not Done';
  const isOptimization = item.impact === 'High' && item.status === 'Partial';
  const isStable = item.status === 'Done';

  return (
    <div className={clsx(
      "group relative flex flex-col sm:grid sm:grid-cols-12 gap-y-3 gap-x-4 p-5 transition-colors duration-200",
      isLast ? "" : "border-b border-slate-100",
      isCriticalRisk ? "bg-red-50/30 hover:bg-red-50/50" : "hover:bg-slate-50/80"
    )}>
      {/* Critical Indicator Strip */}
      {isCriticalRisk && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-md" />
      )}

      {/* Function Name & Details */}
      <div className="sm:col-span-5 pl-2">
        <div className="flex items-start gap-3">
           <div className={clsx("mt-0.5", isStable ? "opacity-100" : "opacity-100")}>
             {item.status === 'Done' && <CheckCircle2 size={18} className="text-green-600" />}
             {item.status === 'Not Done' && <XCircle size={18} className="text-red-500" />}
             {item.status === 'Partial' && <AlertCircle size={18} className="text-amber-500" />}
           </div>
           <div>
             <h4 className={clsx("font-medium text-sm leading-snug", isStable ? "text-slate-600" : "text-slate-900")}>
              {item.name}
            </h4>
            {item.currentProcess && !isStable && (
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  <span className="font-medium text-slate-400">Current:</span> {item.currentProcess}
                </p>
            )}
           </div>
        </div>
      </div>

      {/* Impact Badge */}
      <div className="sm:col-span-2 flex items-start sm:justify-center">
        <Badge type="impact" value={item.impact} />
      </div>

      {/* Action / Insight */}
      <div className="sm:col-span-5">
        {isCriticalRisk ? (
           <div className="flex items-start gap-2 bg-red-50 p-3 rounded-lg border border-red-100">
             <AlertCircle size={14} className="text-red-700 mt-0.5 shrink-0" />
             <div className="space-y-1">
                <p className="text-xs font-bold text-red-800 uppercase tracking-wider">Critical Gap</p>
                <p className="text-xs text-red-700 leading-relaxed">{item.actionItems?.[0] || 'Process undefined. Define immediate owner.'}</p>
             </div>
           </div>
        ) : isOptimization ? (
            <div className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-lg border border-amber-100/50">
                <ArrowRight size={14} className="text-amber-600 mt-0.5 shrink-0" />
                <div className="space-y-1">
                   <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">FY25 Priority</p>
                   <p className="text-xs text-amber-700">{item.metric ? `Metric: ${item.metric}` : 'Standardize this process.'}</p>
                </div>
            </div>
        ) : (
          <div className="pl-2 border-l-2 border-slate-100 py-1">
            {item.metric ? (
               <p className="text-xs text-slate-500">
                 <span className="font-medium text-slate-700">Tracking:</span> {item.metric}
               </p>
            ) : (
               <p className="text-xs text-slate-400 italic">Operational</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};