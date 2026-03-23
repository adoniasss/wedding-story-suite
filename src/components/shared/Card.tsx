import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden', className)}>
    {children}
  </div>
);

export const CardHeader = ({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) => (
  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
);

export const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn('p-6', className)}>{children}</div>
);