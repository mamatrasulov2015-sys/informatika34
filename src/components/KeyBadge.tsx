import React from 'react';

interface KeyBadgeProps {
  keyLabel: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  highlighted?: boolean;
  className?: string;
}

export const KeyBadge: React.FC<KeyBadgeProps> = ({
  keyLabel,
  size = 'md',
  active = false,
  highlighted = false,
  className = '',
}) => {
  // Normalize display label
  let display = keyLabel;
  if (keyLabel.toLowerCase() === 'win' || keyLabel.toLowerCase() === 'windows') {
    display = '⊞ Win';
  } else if (keyLabel.toLowerCase() === 'left') {
    display = '←';
  } else if (keyLabel.toLowerCase() === 'right') {
    display = '→';
  } else if (keyLabel.toLowerCase() === 'up') {
    display = '↑';
  } else if (keyLabel.toLowerCase() === 'down') {
    display = '↓';
  }

  const sizeClasses = {
    sm: 'h-6 px-1.5 min-w-6 text-xs rounded',
    md: 'h-8 px-2.5 min-w-8 text-sm rounded-md',
    lg: 'h-10 px-3.5 min-w-10 text-base rounded-lg font-bold',
  };

  const activeStyles = active
    ? 'bg-blue-600 text-white border-blue-700 shadow-inner translate-y-0.5'
    : highlighted
    ? 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-700 ring-2 ring-amber-400/40'
    : 'bg-white text-slate-800 border-slate-300 shadow-[0_2px_0_#cbd5e1] dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 dark:shadow-[0_2px_0_#334155]';

  return (
    <kbd
      className={`inline-flex items-center justify-center font-mono font-semibold tracking-wide border transition-all duration-75 select-none ${sizeClasses[size]} ${activeStyles} ${className}`}
    >
      {display}
    </kbd>
  );
};
