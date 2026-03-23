import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger', size?: 'sm' | 'md' | 'lg' | 'icon' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm',
      secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-500 shadow-sm',
      outline: 'bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50',
      ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
          variants[variant as keyof typeof variants] || variants.primary,
          sizes[size as keyof typeof sizes] || sizes.md,
          className
        )}
        {...props}
      />
    );
  }
);

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden', className)}>
    {children}
  </div>
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all',
        className
      )}
      {...props}
    />
  )
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all',
        className
      )}
      {...props}
    />
  )
);

export const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn('text-sm font-medium text-slate-700 mb-1.5 block', className)} {...props}>
    {children}
  </label>
);

export const RadioGroup = ({ children, className, defaultValue, ...props }: { children: React.ReactNode; className?: string; defaultValue?: string }) => (
  <div className={cn('grid gap-2', className)} {...props}>
    {children}
  </div>
);

export const RadioGroupItem = ({ value, id, className, ...props }: { value: string; id: string; className?: string }) => (
  <div className="flex items-center space-x-2">
    <input
      type="radio"
      id={id}
      value={value}
      name="radio-group"
      className={cn(
        'h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-600',
        className
      )}
      {...props}
    />
  </div>
);

export const Badge = ({ children, variant = 'default', className }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'secondary', className?: string }) => {
  const styles = {
    default: 'bg-slate-100 text-slate-800',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-rose-100 text-rose-800',
    info: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-slate-800 text-slate-100',
  };
  return <span className={cn('px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center', styles[variant as keyof typeof styles] || styles.default, className)}>{children}</span>;
};

export const Table = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className="w-full overflow-auto">
    <table className={cn("w-full text-sm text-left", className)}>{children}</table>
  </div>
);

export const THead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">{children}</thead>
);

export const TBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y divide-slate-100">{children}</tbody>
);

export const TR = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <tr className={cn("hover:bg-slate-50/50 transition-colors", className)}>{children}</tr>
);

export const TH = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <th className={cn("px-6 py-4 font-semibold text-slate-600", className)}>{children}</th>
);

export const TD = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <td className={cn("px-6 py-4 text-slate-600", className)}>{children}</td>
);

export const Tabs = ({ tabs, activeTab, onTabChange }: { tabs: string[], activeTab: string, onTabChange: (tab: string) => void }) => (
  <div className="flex border-b border-slate-200">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={cn(
          "px-4 py-2 text-sm font-medium transition-colors relative",
          activeTab === tab ? "text-indigo-600" : "text-slate-500 hover:text-slate-700"
        )}
      >
        {tab}
        {activeTab === tab && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
        )}
      </button>
    ))}
  </div>
);