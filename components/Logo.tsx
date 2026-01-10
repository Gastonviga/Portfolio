import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', size = 'md' }) => {
  // Size configurations
  const sizes = {
    sm: {
      container: 'p-1',
      pillarHeight: 'h-6',
      pillarWidth: 'w-1.5',
      gap: 'gap-0.5',
      textMain: 'text-xs',
      textSub: 'text-[0.5rem]',
    },
    md: {
      container: 'p-2',
      pillarHeight: 'h-8',
      pillarWidth: 'w-2.5',
      gap: 'gap-1',
      textMain: 'text-lg',
      textSub: 'text-[0.6rem]',
    },
    lg: {
      container: 'p-3',
      pillarHeight: 'h-14',
      pillarWidth: 'w-4',
      gap: 'gap-1.5',
      textMain: 'text-2xl',
      textSub: 'text-xs',
    },
    xl: {
      container: 'p-4',
      pillarHeight: 'h-24',
      pillarWidth: 'w-6',
      gap: 'gap-2',
      textMain: 'text-4xl',
      textSub: 'text-sm',
    }
  };

  const s = sizes[size];

  return (
    <div className={`group flex flex-col items-center justify-center select-none whitespace-nowrap ${s.container} ${className}`}>
      {/* The Structural 'V' Icon */}
      <div className={`relative flex items-end justify-center ${s.gap} ${variant === 'icon-only' ? 'mb-0' : 'mb-1'}`}>
        
        {/* Left Pillar */}
        <div className={`
          relative ${s.pillarWidth} ${s.pillarHeight} 
          bg-neutral-900 dark:bg-white 
          skew-x-12 origin-bottom-right 
          transform transition-all duration-700 ease-out
          group-hover:translate-x-[2px] group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200
          overflow-hidden
        `}>
          {/* Metallic Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
        </div>

        {/* Right Pillar */}
        <div className={`
          relative ${s.pillarWidth} ${s.pillarHeight} 
          bg-neutral-900 dark:bg-white 
          -skew-x-12 origin-bottom-left
          transform transition-all duration-700 ease-out
          group-hover:-translate-x-[2px] group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200
          overflow-hidden
        `}>
          {/* Metallic Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite] delay-75" />
        </div>

      </div>

      {/* Text Branding */}
      {variant === 'full' && (
        <div className="flex flex-col items-center leading-none">
          <span className={`font-black tracking-tighter text-neutral-900 dark:text-white ${s.textMain}`}>
            VIGA
          </span>
          <span className={`font-medium tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase ${s.textSub}`}>
            STUDIO
          </span>
        </div>
      )}
    </div>
  );
};
