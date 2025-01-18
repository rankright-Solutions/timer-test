import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Flag } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onLap?: () => void;
  showLap?: boolean;
}

const TimerControls = ({ 
  isRunning, 
  onStart, 
  onPause, 
  onReset,
  onLap,
  showLap 
}: TimerControlsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <Button
        variant="outline"
        size="lg"
        onClick={isRunning ? onPause : onStart}
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
      >
        {isRunning ? <Pause className="h-6 w-6 sm:h-8 sm:w-8" /> : <Play className="h-6 w-6 sm:h-8 sm:w-8" />}
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={onReset}
        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
      >
        <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      {showLap && onLap && (
        <Button
          variant="outline"
          size="lg"
          onClick={onLap}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full"
        >
          <Flag className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      )}
    </div>
  );
};

export default TimerControls;