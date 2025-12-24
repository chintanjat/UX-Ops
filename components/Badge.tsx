import React from 'react';
import { clsx } from 'clsx';
import { ImpactLevel, StatusType } from '../types';

interface BadgeProps {
  type: 'impact' | 'status';
  value: ImpactLevel | StatusType;
}

export const Badge: React.FC<BadgeProps> = ({ type, value }) => {
  let styles = '';

  if (type === 'impact') {
    switch (value) {
      case 'High':
        styles = 'bg-slate-800 text-white';
        break;
      case 'Medium':
        styles = 'bg-slate-100 text-slate-700 border border-slate-200';
        break;
      case 'Low':
        styles = 'bg-slate-50 text-slate-500 border border-slate-200';
        break;
    }
  } else {
    // Status
    switch (value) {
      case 'Done':
        styles = 'bg-green-50 text-green-700 border border-green-200';
        break;
      case 'Not Done':
        styles = 'bg-red-50 text-red-700 border border-red-200';
        break;
      case 'Partial':
        styles = 'bg-amber-50 text-amber-700 border border-amber-200';
        break;
      default:
        styles = 'bg-gray-100 text-gray-500';
    }
  }

  return (
    <span className={clsx(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      styles
    )}>
      {value}
    </span>
  );
};