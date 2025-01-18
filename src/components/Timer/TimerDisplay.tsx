import React from 'react';
import { cn } from "@/lib/utils";

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  milliseconds?: number;
  className?: string;
}

const TimerDisplay = ({ minutes, seconds, milliseconds, className }: TimerDisplayProps) => {
  return (
    <div className={cn("font-bold text-timer-display tracking-wider", className)}>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      {milliseconds !== undefined && 
        <span className="text-2xl sm:text-4xl ml-1">.{String(milliseconds).padStart(3, '0')}</span>
      }
    </div>
  );
};

export default TimerDisplay;