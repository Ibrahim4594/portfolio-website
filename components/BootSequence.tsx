'use client';

import { useState, useEffect } from 'react';

export default function BootSequence() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  const bootLines = [
    '> INITIALIZING SYSTEM...',
    '> LOADING NEURAL NETWORKS...',
    '> CONNECTING TO MATRIX...',
    '> BOOTING AI MODULES...',
    '> SECURITY PROTOCOLS: ACTIVE',
    '> HACKER MODE: ENABLED',
    '> SYSTEM READY.',
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(hideTimeout);
    }
  }, [currentLine, bootLines.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[10000] flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        {bootLines.slice(0, currentLine).map((line, index) => (
          <div
            key={index}
            className="text-[#00ff00] font-mono text-sm mb-2 boot-text"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {line}
          </div>
        ))}
        {currentLine < bootLines.length && (
          <div className="text-[#00ff00] font-mono text-sm terminal-cursor">
            {bootLines[currentLine]}
          </div>
        )}
      </div>
    </div>
  );
}
