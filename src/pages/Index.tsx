import React, { useState, useEffect, useRef } from 'react';
import TimerDisplay from '@/components/Timer/TimerDisplay';
import TimerControls from '@/components/Timer/TimerControls';
import VideoSection from '@/components/Timer/VideoSection';
import Header from '@/components/Layout/Header';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TIMER_PRESETS = [
  { minutes: 5, videoId: "jfKfPfyJRdk" },
  { minutes: 10, videoId: "5qap5aO4i9A" },
  { minutes: 15, videoId: "DWcJFNfaw9c" },
  { minutes: 20, videoId: "lTRiuFIWV54" },
  { minutes: 25, videoId: "rUxyKA_-grg" },
  { minutes: 30, videoId: "36YnV9STBqc" },
  { minutes: 35, videoId: "n61ULEU7CO0" },
  { minutes: 40, videoId: "qt_urUz42vI" },
  { minutes: 45, videoId: "TNRCvG9YtYI" },
  { minutes: 55, videoId: "esX7SFtEjHg" },
  { minutes: 60, videoId: "Y8HQqh6_hrI" },
];

const Index = () => {
  const [selectedPreset, setSelectedPreset] = useState(TIMER_PRESETS[1]); // 10 minutes default
  const [timeLeft, setTimeLeft] = useState(selectedPreset.minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopwatch, setIsStopwatch] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number>();
  const { toast } = useToast();
  const tickSound = new Audio("/tick.mp3"); // Add tick.mp3 to public folder
  const alarmSound = new Audio("/alarm.mp3"); // Add alarm.mp3 to public folder

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setTimeLeft(selectedPreset.minutes * 60);
  }, [selectedPreset]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            alarmSound.play();
            toast({
              title: "Timer Complete!",
              description: `${selectedPreset.minutes} minute timer is done.`,
            });
            return 0;
          }
          tickSound.play();
          return prev - 1;
        });
      }, 1000);
    }
  };

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = window.setInterval(() => {
        setStopwatchTime((prev) => prev + 10);
      }, 10);
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    if (isStopwatch) {
      setStopwatchTime(0);
      setLaps([]);
    } else {
      setTimeLeft(selectedPreset.minutes * 60);
    }
  };

  const addLap = () => {
    setLaps((prev) => [...prev, stopwatchTime]);
  };

  const toggleMode = () => {
    resetTimer();
    setIsStopwatch((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            onClick={toggleMode}
            className="mb-8"
            variant="outline"
          >
            Switch to {isStopwatch ? 'Timer' : 'Stopwatch'}
          </Button>

          {isStopwatch ? (
            <>
              <TimerDisplay
                minutes={Math.floor(stopwatchTime / 60000)}
                seconds={Math.floor((stopwatchTime % 60000) / 1000)}
                milliseconds={Math.floor((stopwatchTime % 1000) / 10)}
                className="mb-8"
              />
              <TimerControls
                isRunning={isRunning}
                onStart={startStopwatch}
                onPause={pauseTimer}
                onReset={resetTimer}
                onLap={addLap}
                showLap
              />
              {laps.length > 0 && (
                <div className="mt-8 space-y-2">
                  {laps.map((lap, index) => (
                    <div key={index} className="text-lg">
                      Lap {index + 1}: {Math.floor(lap / 60000)}:
                      {String(Math.floor((lap % 60000) / 1000)).padStart(2, '0')}.
                      {String(Math.floor((lap % 1000) / 10)).padStart(2, '0')}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {TIMER_PRESETS.map((preset) => (
                  <Button
                    key={preset.minutes}
                    onClick={() => setSelectedPreset(preset)}
                    variant={selectedPreset.minutes === preset.minutes ? "default" : "outline"}
                    className="text-lg"
                  >
                    {preset.minutes} min
                  </Button>
                ))}
              </div>
              <TimerDisplay
                minutes={Math.floor(timeLeft / 60)}
                seconds={timeLeft % 60}
                className="mb-8"
              />
              <TimerControls
                isRunning={isRunning}
                onStart={startTimer}
                onPause={pauseTimer}
                onReset={resetTimer}
              />
              <VideoSection videoId={selectedPreset.videoId} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;