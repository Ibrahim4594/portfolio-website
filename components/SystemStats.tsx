'use client';

import { useState, useEffect } from 'react';

export default function SystemStats() {
  const [time, setTime] = useState('00:00:00');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    const uptimeInterval = setInterval(() => setUptime(prev => prev + 1), 1000);

    return () => {
      clearInterval(interval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-24 right-4 z-[90] font-mono text-xs text-[#00ff00]/60 space-y-1 hidden md:block">
      <div className="bg-black/80 border border-[#00ff00]/30 p-3 backdrop-blur-sm">
        <div className="mb-2 text-[#00ff00] font-bold">[SYSTEM_STATUS]</div>
        <div className="space-y-1">
          <div className="flex justify-between gap-4">
            <span>TIME:</span>
            <span className="text-[#00ff00]">{time}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>UPTIME:</span>
            <span className="text-[#00ff00]">{formatUptime(uptime)}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>STATUS:</span>
            <span className="text-[#00ff00] pulse-green">ONLINE</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>SECURITY:</span>
            <span className="text-[#00ff00]">MAX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
