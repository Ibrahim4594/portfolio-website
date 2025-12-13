'use client';

import { useState, useRef, useEffect } from 'react';

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output' | 'error'; text: string }[]>([
    { type: 'output', text: 'Welcome to Ibrahim\'s Terminal v2.0' },
    { type: 'output', text: 'Type "help" for available commands' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();

    const commands: { [key: string]: () => void } = {
      help: () => {
        addOutput([
          'Available commands:',
          '  help       - Show this help message',
          '  about      - About Ibrahim',
          '  skills     - List technical skills',
          '  projects   - Show projects',
          '  contact    - Contact information',
          '  secret     - Find the secret',
          '  clear      - Clear terminal',
          '  exit       - Close terminal',
        ]);
      },
      about: () => {
        addOutput([
          'IBRAHIM SAMAD',
          'Agentic AI Architect',
          'Location: Karachi, Pakistan',
          'Building the future with AI & Multi-Agent Systems',
        ]);
      },
      skills: () => {
        addOutput([
          'Technical Skills:',
          '  ▸ AI & Machine Learning',
          '  ▸ Multi-Agent Systems',
          '  ▸ Python, JavaScript, TypeScript',
          '  ▸ React, Next.js, FastAPI',
          '  ▸ LangChain, RAG Systems',
        ]);
      },
      projects: () => {
        addOutput([
          'Featured Projects:',
          '  1. AI-Driven Development Platform',
          '  2. Invoice Processing Agent',
          '  3. ResearchGenie (RAG)',
          '  4. BloomSphere (NASA Winner)',
          '  5. CYBER-3D-FORGE',
          '  6. Neural RX',
        ]);
      },
      contact: () => {
        addOutput([
          'Contact Information:',
          '  Email: ibrahimsamad507@gmail.com',
          '  GitHub: github.com/Ibrahim4594',
          '  LinkedIn: linkedin.com/in/ibrahim-samad-525240342',
        ]);
      },
      secret: () => {
        addOutput([
          '🎉 SECRET UNLOCKED! 🎉',
          '',
          'You found the easter egg!',
          'Here\'s a secret:',
          '',
          '  ╔═══════════════════════════╗',
          '  ║  THE CAKE IS A LIE! 🎂   ║',
          '  ╚═══════════════════════════╝',
        ]);
        triggerConfetti();
      },
      clear: () => {
        setHistory([]);
      },
      exit: () => {
        setIsOpen(false);
        setHistory([
          { type: 'output', text: 'Welcome to Ibrahim\'s Terminal v2.0' },
          { type: 'output', text: 'Type "help" for available commands' },
        ]);
      },
      ls: () => {
        addOutput([
          'projects/',
          'skills/',
          'achievements/',
          'contact.txt',
          'resume.pdf',
          'secret.exe',
        ]);
      },
      whoami: () => {
        addOutput(['ibrahim.samad']);
      },
    };

    if (commands[command]) {
      commands[command]();
    } else if (command === '') {
      // Do nothing for empty input
    } else {
      addError(`Command not found: ${cmd}. Type "help" for available commands.`);
    }
  };

  const addOutput = (lines: string[]) => {
    setHistory(prev => [...prev, ...lines.map(text => ({ type: 'output' as const, text }))]);
  };

  const addError = (text: string) => {
    setHistory(prev => [...prev, { type: 'error', text }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setHistory(prev => [...prev, { type: 'input', text: input }]);
    executeCommand(input);
    setInput('');
  };

  const playConfettiSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      // Create multiple "pops" for richer sound
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          // Vary frequency for each pop
          const baseFreq = 600 + Math.random() * 400;
          oscillator.frequency.setValueAtTime(baseFreq, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.08);

          gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);

          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.08);
        }, i * 30); // Stagger pops by 30ms
      }
    } catch (error) {
      // Audio context not supported or blocked, silently continue
      console.log('Audio not available');
    }
  };

  const triggerConfetti = () => {
    const CONFETTI_COLORS = ['#FF4757', '#3742FA', '#FFC312', '#FF6B9D', '#A55EEA', '#FF6348'];
    const CONFETTI_SHAPES = ['🎉', '🎊', 'rect', 'circle'];
    const CONFETTI_COUNT = 100;

    // Play sound
    playConfettiSound();

    // Create confetti pieces
    for (let i = 0; i < CONFETTI_COUNT; i++) {
      const confetti = document.createElement('div');
      const shape = CONFETTI_SHAPES[Math.floor(Math.random() * CONFETTI_SHAPES.length)];
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const leftPos = 20 + Math.random() * 60; // 20% - 80%
      const drift = (Math.random() - 0.5) * 200; // -100px to +100px
      const duration = 2.5 + Math.random() * 1.5; // 2.5s - 4s
      const rotation = 360 + Math.random() * 720; // 360deg - 1080deg

      if (shape === '🎉' || shape === '🎊') {
        // Emoji confetti
        confetti.textContent = shape;
        confetti.style.fontSize = '20px';
      } else if (shape === 'rect') {
        // Rectangular confetti
        confetti.style.width = '8px';
        confetti.style.height = '15px';
        confetti.style.background = color;
      } else {
        // Circular confetti
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.borderRadius = '50%';
        confetti.style.background = color;
      }

      confetti.style.cssText += `
        position: fixed;
        left: ${leftPos}%;
        top: -20px;
        z-index: 10000;
        pointer-events: none;
        --drift: ${drift}px;
        --rotation: ${rotation}deg;
        animation: confetti-fall ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      `;

      document.body.appendChild(confetti);

      // Cleanup
      setTimeout(() => confetti.remove(), duration * 1000 + 100);
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] bg-black border-2 border-[#00ff00] text-[#00ff00] px-4 py-2 rounded font-mono text-sm hover:bg-[#00ff00] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.8)]"
      >
        {isOpen ? '[CLOSE_TERMINAL]' : '[OPEN_TERMINAL]'}
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[600px] max-w-[90vw] h-[400px] bg-black/95 backdrop-blur-md border-2 border-[#00ff00] rounded-lg shadow-[0_0_40px_rgba(0,255,0,0.4)] z-[9999] flex flex-col font-mono">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#00ff00]/30 bg-[#00ff00]/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[#00ff00] text-xs">terminal@ibrahim:~</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#00ff00] hover:text-red-500 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 overflow-y-auto p-4 text-sm space-y-1"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#00ff00 transparent',
            }}
          >
            {history.map((line, i) => (
              <div key={i} className={`${
                line.type === 'input' ? 'text-white' :
                line.type === 'error' ? 'text-red-400' :
                'text-[#00ff00]'
              }`}>
                {line.type === 'input' && <span className="text-[#00ff00]">{'>'} </span>}
                {line.text}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2 border-t border-[#00ff00]/30 bg-black/50">
            <span className="text-[#00ff00]">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-[#00ff00] outline-none"
              placeholder="Type a command..."
              autoComplete="off"
            />
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) translateX(0) rotateZ(0deg);
            opacity: 1;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotateZ(var(--rotation));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
