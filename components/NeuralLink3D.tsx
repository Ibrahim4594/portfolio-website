'use client';

import { useState, useEffect } from 'react';

export default function NeuralLink3D() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate continuously
  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 0.6);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full py-12">
        <div className="h-[500px] flex items-center justify-center">
          <div className="text-[#00ff00] font-mono">LOADING_INFO_CAROUSEL...</div>
        </div>
      </div>
    );
  }

  const cards = [
    {
      id: 1,
      label: 'NAME',
      value: 'IBRAHIM SAMAD',
      icon: '👤'
    },
    {
      id: 2,
      label: 'ROLE',
      value: 'AGENTIC AI ARCHITECT',
      icon: '🤖'
    },
    {
      id: 3,
      label: 'LOCATION',
      value: 'KARACHI, PAKISTAN',
      icon: '📍'
    },
    {
      id: 4,
      label: 'EMAIL',
      value: 'ibrahimsamad507@gmail.com',
      icon: '📧'
    },
    {
      id: 5,
      label: 'EXPERTISE',
      value: 'AI & MULTI-AGENT SYSTEMS',
      icon: '⚡'
    },
    {
      id: 6,
      label: 'STATUS',
      value: 'BUILDING THE FUTURE',
      icon: '🚀'
    },
  ];

  return (
    <div className="w-full py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold terminal-text font-mono mb-2 glow-green-text">
          {'>'} INFO_CAROUSEL
        </h3>
        <p className="text-[#00ff00]/60 font-mono text-xs uppercase tracking-wider">
          [AUTO_ROTATING] [6_DATA_CARDS]
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ perspective: '1500px', minHeight: '450px' }}
      >
        {/* Rotating Carousel */}
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Cards */}
          {cards.map((card, index) => {
            const angle = (index / cards.length) * 360 + rotation;
            const angleRad = (angle * Math.PI) / 180;
            const radius = 320;

            const x = Math.sin(angleRad) * radius;
            const z = Math.cos(angleRad) * radius;

            // Calculate opacity based on z position (cards at back are dimmer)
            const opacity = (z + radius) / (radius * 2) * 0.5 + 0.5;

            // Calculate scale (cards at back are smaller)
            const scale = (z + radius) / (radius * 2) * 0.3 + 0.7;

            return (
              <div
                key={card.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, 0px, ${z}px) rotateY(${-angle}deg)`,
                  transformStyle: 'preserve-3d',
                  opacity: opacity,
                  zIndex: Math.floor(z),
                }}
              >
                {/* Info Card */}
                <div
                  className="bg-black/90 backdrop-blur-md border-3 border-[#00ff00] rounded-xl p-8 shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-300"
                  style={{
                    width: '320px',
                    transform: `scale(${scale})`,
                    borderWidth: '3px',
                  }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-[#00ff00]"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-[#00ff00]"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-[#00ff00]"></div>

                  {/* Card Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#00ff00] rounded-full flex items-center justify-center font-mono font-bold text-black text-sm">
                    {card.id}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl text-center mb-4 filter grayscale">
                    {card.icon}
                  </div>

                  {/* Label */}
                  <div className="text-center mb-3">
                    <div className="font-mono text-xs text-[#00ff00]/60 uppercase tracking-wider mb-2">
                      {'>'} {card.label}
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#00ff00] to-transparent"></div>
                  </div>

                  {/* Value */}
                  <div className="text-center">
                    <div className="font-mono text-base text-[#00ff00] font-bold glow-green-text leading-relaxed">
                      {card.value}
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-6 pt-3 border-t border-[#00ff00]/20">
                    <div className="flex items-center justify-center gap-2 text-[8px] font-mono text-[#00ff00]/40">
                      <span className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse"></span>
                      DATA_NODE_{card.id}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center Point Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-4 h-4 rounded-full border-2 border-[#00ff00]/30 animate-pulse"></div>
            <div className="absolute inset-0 w-8 h-8 -translate-x-1/4 -translate-y-1/4 rounded-full border border-[#00ff00]/10"></div>
          </div>
        </div>

        {/* Corner UI Brackets */}
        <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#00ff00]/30 pointer-events-none"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#00ff00]/30 pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#00ff00]/30 pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#00ff00]/30 pointer-events-none"></div>

        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
          <div className="grid-bg h-full w-full"></div>
        </div>
      </div>

      {/* System Stats */}
      <div className="text-center mt-12 font-mono text-xs text-[#00ff00]/60 space-y-1">
        <div>ROTATION: {Math.floor(rotation % 360)}°</div>
        <div>CARDS: [{cards.length}] | STATUS: [AUTO_ROTATING] | SPEED: [SMOOTH]</div>
      </div>
    </div>
  );
}
