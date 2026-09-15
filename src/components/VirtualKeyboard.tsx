import React from 'react';
import { soundManager } from '../utils/sound';

interface VirtualKeyboardProps {
  activeKeys?: string[];
  pressedKeys?: string[];
  onKeyClick?: (keyName: string) => void;
  compact?: boolean;
}

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  activeKeys = [],
  pressedKeys = [],
  onKeyClick,
  compact = false,
}) => {
  const normalizedActive = activeKeys.map(k => k.toLowerCase());
  const normalizedPressed = pressedKeys.map(k => k.toLowerCase());

  const isKeyActive = (keyId: string) => {
    const id = keyId.toLowerCase();
    return (
      normalizedActive.includes(id) ||
      (id === 'win' && (normalizedActive.includes('windows') || normalizedActive.includes('⊞ win'))) ||
      (id === 'control' && normalizedActive.includes('ctrl')) ||
      (id === 'ctrl' && normalizedActive.includes('ctrl')) ||
      (id === 'alt' && normalizedActive.includes('alt')) ||
      (id === 'shift' && normalizedActive.includes('shift'))
    );
  };

  const isKeyPressed = (keyId: string) => {
    const id = keyId.toLowerCase();
    return normalizedPressed.includes(id) || (id === 'win' && normalizedPressed.includes('meta'));
  };

  const renderKey = (label: string, id: string, widthClass: string = 'flex-1 min-w-[28px] sm:min-w-[34px]') => {
    const active = isKeyActive(id);
    const pressed = isKeyPressed(id);

    let keyVisual = 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 shadow-sm';
    if (pressed) {
      keyVisual = 'bg-emerald-500 text-white border-emerald-600 shadow-inner scale-95 ring-2 ring-emerald-400';
    } else if (active) {
      keyVisual = 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-400/70 animate-pulse';
    }

    return (
      <button
        key={id}
        type="button"
        onClick={() => {
          soundManager.playClick();
          if (onKeyClick) onKeyClick(id);
        }}
        className={`h-7 sm:h-9 text-[10px] sm:text-xs font-mono font-medium rounded sm:rounded-md border flex items-center justify-center transition-all select-none active:scale-95 ${widthClass} ${keyVisual}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className={`w-full max-w-4xl mx-auto p-2 sm:p-4 rounded-xl bg-slate-200/80 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 shadow-lg ${compact ? 'text-xs' : ''}`}>
      <div className="flex flex-col gap-1 sm:gap-1.5 overflow-x-auto pb-1">
        {/* Row 0: Function Keys */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('Esc', 'Esc', 'w-8 sm:w-12')}
          <div className="w-2 sm:w-4" />
          {renderKey('F1', 'F1')}
          {renderKey('F2', 'F2')}
          {renderKey('F3', 'F3')}
          {renderKey('F4', 'F4')}
          <div className="w-1 sm:w-2" />
          {renderKey('F5', 'F5')}
          {renderKey('F6', 'F6')}
          {renderKey('F7', 'F7')}
          {renderKey('F8', 'F8')}
          <div className="w-1 sm:w-2" />
          {renderKey('F9', 'F9')}
          {renderKey('F10', 'F10')}
          {renderKey('F11', 'F11')}
          {renderKey('F12', 'F12')}
          <div className="w-1 sm:w-2" />
          {renderKey('PrtScn', 'PrtScn', 'w-10 sm:w-14')}
        </div>

        {/* Row 1: Numbers */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('~', '`', 'w-7 sm:w-10')}
          {renderKey('1', '1')}
          {renderKey('2', '2')}
          {renderKey('3', '3')}
          {renderKey('4', '4')}
          {renderKey('5', '5')}
          {renderKey('6', '6')}
          {renderKey('7', '7')}
          {renderKey('8', '8')}
          {renderKey('9', '9')}
          {renderKey('0', '0')}
          {renderKey('-', '-')}
          {renderKey('+', '+')}
          {renderKey('Backspace', 'Backspace', 'w-14 sm:w-20')}
        </div>

        {/* Row 2: QWERTY */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('Tab', 'Tab', 'w-10 sm:w-14')}
          {renderKey('Q', 'Q')}
          {renderKey('W', 'W')}
          {renderKey('E', 'E')}
          {renderKey('R', 'R')}
          {renderKey('T', 'T')}
          {renderKey('Y', 'Y')}
          {renderKey('U', 'U')}
          {renderKey('I', 'I')}
          {renderKey('O', 'O')}
          {renderKey('P', 'P')}
          {renderKey('[', '[')}
          {renderKey(']', ']')}
          {renderKey('\\', '\\', 'w-8 sm:w-12')}
        </div>

        {/* Row 3: ASDF */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('Caps', 'CapsLock', 'w-12 sm:w-16')}
          {renderKey('A', 'A')}
          {renderKey('S', 'S')}
          {renderKey('D', 'D')}
          {renderKey('F', 'F')}
          {renderKey('G', 'G')}
          {renderKey('H', 'H')}
          {renderKey('J', 'J')}
          {renderKey('K', 'K')}
          {renderKey('L', 'L')}
          {renderKey(';', ';')}
          {renderKey("'", "'")}
          {renderKey('Enter', 'Enter', 'w-14 sm:w-20')}
        </div>

        {/* Row 4: ZXCV */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('Shift', 'Shift', 'w-14 sm:w-20')}
          {renderKey('Z', 'Z')}
          {renderKey('X', 'X')}
          {renderKey('C', 'C')}
          {renderKey('V', 'V')}
          {renderKey('B', 'B')}
          {renderKey('N', 'N')}
          {renderKey('M', 'M')}
          {renderKey(',', ',')}
          {renderKey('.', '.')}
          {renderKey('/', '/')}
          {renderKey('Shift', 'Shift', 'w-14 sm:w-20')}
        </div>

        {/* Row 5: Modifiers & Space */}
        <div className="flex gap-1 sm:gap-1.5 w-full">
          {renderKey('Ctrl', 'Ctrl', 'w-10 sm:w-14')}
          {renderKey('⊞ Win', 'Win', 'w-10 sm:w-14')}
          {renderKey('Alt', 'Alt', 'w-10 sm:w-14')}
          {renderKey('Space', 'Space', 'flex-[4] min-w-[80px] sm:min-w-[160px]')}
          {renderKey('Alt', 'Alt', 'w-10 sm:w-14')}
          {renderKey('Ctrl', 'Ctrl', 'w-10 sm:w-14')}
          {renderKey('←', 'Left', 'w-8 sm:w-10')}
          <div className="flex flex-col gap-0.5 w-8 sm:w-10">
            {renderKey('↑', 'Up', 'w-full !h-3 sm:!h-4 text-[8px]')}
            {renderKey('↓', 'Down', 'w-full !h-3 sm:!h-4 text-[8px]')}
          </div>
          {renderKey('→', 'Right', 'w-8 sm:w-10')}
        </div>
      </div>
    </div>
  );
};
