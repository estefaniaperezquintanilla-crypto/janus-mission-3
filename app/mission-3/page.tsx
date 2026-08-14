'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Mission3OpeningPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setPhase(1), 4000));
    timers.push(window.setTimeout(() => setPhase(2), 8000));
    timers.push(window.setTimeout(() => {
      setPhase(3);
      if (audioRef.current) {
        audioRef.current.volume = 0.65;
        audioRef.current.play().catch(() => {});
      }
    }, 10000));
    timers.push(window.setTimeout(() => setPhase(4), 14000));
    timers.push(window.setTimeout(() => setPhase(5), 20000));
    timers.push(window.setTimeout(() => setPhase(6), 28000));
    timers.push(window.setTimeout(() => setPhase(7), 40000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#f6f1e6]">
      <audio ref={audioRef} src="/audio/mission3-theme.mp3" preload="auto" />

      <div
        className={`absolute inset-0 transition-opacity duration-[3000ms] ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/images/mission3/marble-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.18) contrast(1.15)',
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto mb-8 h-32 w-32 rounded-full border transition-all duration-[2000ms] ${
              phase >= 2
                ? 'scale-100 opacity-100 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.35)]'
                : 'scale-90 opacity-0 border-transparent'
            }`}
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center leading-tight">
                <div className="text-[11px] tracking-[0.35em] text-[#d4af37]">JANUS</div>
                <div className="mx-auto my-2 h-px w-10 bg-[#d4af37]" />
                <div className="text-[10px] tracking-[0.25em] text-[#d4af37]">AUTHORIZED</div>
              </div>
            </div>
          </div>

          <div
            className={`mb-4 text-sm uppercase tracking-[0.45em] text-[#d4af37] transition-all duration-1000 ${
              phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            JANUS Culinary Division
          </div>

          <h1
            className={`mb-8 text-4xl font-semibold tracking-wide text-[#f8f5ef] md:text-6xl transition-all duration-1000 ${
              phase >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Operation: Three Milks
          </h1>

          <div
            className={`space-y-4 text-lg leading-8 text-[#ddd6c8] transition-all duration-1000 ${
              phase >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p>Existen recetas que cualquiera puede preparar.</p>
            <p>Y existen recetas que solo pueden ejecutarse cuando dos agentes operan en perfecta sincronía.</p>
            <p>Una misión compartida. Un objetivo único. Una recompensa reservada para quien complete el protocolo.</p>
          </div>

          <div
            className={`mt-12 transition-all duration-1000 ${
              phase >= 7 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <Link
              href="/mission-3/briefing"
              className="inline-flex items-center rounded-full border border-[#d4af37] px-8 py-4 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Authorize Briefing
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}