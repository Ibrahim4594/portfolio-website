'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;
    const trail: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    const mouse = { x: 0, y: 0 };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add trail particles on mouse move
      for (let i = 0; i < 3; i++) {
        trail.push({
          x: mouse.x + (Math.random() - 0.5) * 10,
          y: mouse.y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail
      for (let i = trail.length - 1; i >= 0; i--) {
        const particle = trail[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.02;

        if (particle.life <= 0) {
          trail.splice(i, 1);
          continue;
        }

        const size = particle.life * 8;
        const opacity = particle.life * 0.6;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        );
        gradient.addColorStop(0, `rgba(0, 255, 0, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 0, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw main cursor glow
      const mainGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 30
      );
      mainGlow.addColorStop(0, 'rgba(0, 255, 0, 0.4)');
      mainGlow.addColorStop(0.5, 'rgba(0, 255, 0, 0.2)');
      mainGlow.addColorStop(1, 'rgba(0, 255, 0, 0)');

      ctx.fillStyle = mainGlow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9998, mixBlendMode: 'screen' }}
    />
  );
}
