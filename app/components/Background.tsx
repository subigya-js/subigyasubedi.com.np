"use client"

import { useEffect, useRef, useState } from 'react';

interface VantaNetConfig {
  el: HTMLElement;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  backgroundColor: number;
  points: number;
  maxDistance: number;
  spacing: number;
}

type VantaNetEffect = {
  destroy: () => void;
  resize: () => void;
};

declare global {
  interface Window {
    VANTA: {
      NET: (config: VantaNetConfig) => VantaNetEffect;
    };
  }
}

const Background = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaNetEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && backgroundRef.current && typeof window !== 'undefined' && window.VANTA) {
      setVantaEffect(
        window.VANTA.NET({
          el: backgroundRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.00,
          minWidth: 100.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f3f3f,
          backgroundColor: 0x0,
          points: 8.00,
          maxDistance: 18.00,
          spacing: 16.00
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect) {
        vantaEffect.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [vantaEffect]);

  return (
    <div 
      ref={backgroundRef} 
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        backgroundColor: '#000', // Fallback background color
      }}
    />
  );
};

export default Background;
