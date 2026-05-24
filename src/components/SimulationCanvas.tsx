import React, { useEffect, useRef } from 'react';
import { useStore } from '../store';

/**
 * High-performance HTML5 Canvas rendering mathematical fields.
 * Decoupled from React renders once mounted, fetching state directly.
 */
export const SimulationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle System
    const numParticles = 200;
    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      mass: Math.random() * 2 + 1,
    }));

    // Render loop
    const render = (time: number) => {
      // Fetch latest state without causing a React re-render
      const state = useStore.getState();
      const sim = state.simulation;
      const physics = state.physics;
      const chem = state.chemistry;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!sim) {
        animationFrameId.current = requestAnimationFrame(render);
        return;
      }

      const isStable = sim.isStableUniverse;
      const dtGrav = (physics.gravity - 0.5); // ranges -0.5 to 0.5
      const tempFactor = chem.temperatureK / 300; // 1 is Earth

      // Draw Grid/Field
      ctx.strokeStyle = `rgba(10, 30, 40, ${isStable ? 0.3 : 0.05})`;
      ctx.lineWidth = 1;
      const step = 40;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += step) {
        let yOffset = Math.sin((time * 0.001) + x) * (dtGrav * 50);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += step) {
        let xOffset = Math.cos((time * 0.001) + y) * (dtGrav * 50);
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Update & Draw Particles
      ctx.fillStyle = sim.isLifePossible ? 'rgba(0, 255, 200, 0.8)' : (isStable ? 'rgba(100, 150, 255, 0.5)' : 'rgba(255, 50, 50, 0.6)');
      
      particles.forEach(p => {
        // Apply forces based on sliders
        if (!isStable) {
          // Explode or collapse if universe unstable
          p.vx += (Math.random() - 0.5) * 5;
          p.vy += (Math.random() - 0.5) * 5;
        } else {
          // Temperature adds jitter
          p.vx += (Math.random() - 0.5) * (tempFactor * 0.5);
          p.vy += (Math.random() - 0.5) * (tempFactor * 0.5);

          // Gravity pulls to center if > 0.5, repels if < 0.5
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist > 0) {
            p.vx += (dx / dist) * dtGrav * 0.5;
            p.vy += (dy / dist) * dtGrav * 0.5;
          }
           
          // Damping to prevent infinite acceleration
          p.vx *= 0.98;
          p.vy *= 0.98;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.shadowBlur = sim.isLifePossible ? 15 : 0;
        ctx.shadowColor = sim.isLifePossible ? 'rgba(0, 255, 200, 0.8)' : 'transparent';
        ctx.globalCompositeOperation = "screen";

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.mass * (isStable ? 1 : 2), 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections if viable
        if (sim.isLifePossible) {
          particles.forEach(other => {
            const dpSq = (p.x - other.x)**2 + (p.y - other.y)**2;
            if (dpSq > 0 && dpSq < 2000) {
              ctx.strokeStyle = `rgba(0, 255, 200, ${(2000 - dpSq) / 10000})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          });
        }
        
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "source-over";
      });

      animationFrameId.current = requestAnimationFrame(render);
    };
    
    // Initial fetch to ensure simulation state is ready before we start reading it
    useStore.getState().runSimulation();
    
    // Start Loop
    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#050508] overflow-hidden relative">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
