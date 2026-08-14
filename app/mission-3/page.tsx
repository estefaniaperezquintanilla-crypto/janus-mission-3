'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Mission3OpeningPage() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers: number[] = [];

    timers.push(window.setTimeout(() => setPhase(1), 4000));
    timers.push(window.setTimeout(() => setPhase(2), 8000));
    timers.push(window.setTimeout(() => setPhase(3), 10000));
    timers.push(window.setTimeout(() => setPhase(4), 14000));
    timers.push(window.setTimeout(() => setPhase(5), 20000));
    timers.push(window.setTimeout(() => setPhase(6), 28000));
    timers.push(window.setTimeout(() => setPhase(7), 40000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#f6f1e6]">
      <div
        className={`absolute inset-0 transition-opacity duration-[3000ms] ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'url(/images/mission3/marble-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.22) contrast(1.15)',
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mx-auto mb-8 h-36 w-36 rounded-full border transition-all duration-[2000ms] ${
              phase >= 2
                ? 'scale-100 opacity-100 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.35)]'
                : 'scale-90 opacity-0 border-transparent'
            }`}
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center leading-tight">
                <div className="text-[11px] tracking-[0.35em] text-[#d4af37]">
                  JANUS
                </div>
                <div className="mx-auto my-2 h-px w-10 bg-[#d4af37]" />
                <div className="text-[10px] tracking-[0.25em] text-[#d4af37]">
                  AUTHORIZED
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mb-2 text-sm uppercase tracking-[0.45em] text-[#d4af37] transition-all duration-1000 ${
              phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            JANUS Culinary Division
          </div>

          <div
            className={`mb-4 text-xs uppercase tracking-[0.55em] text-[#a88c32] transition-all duration-1000 ${
              phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            WV-09 // CLASSIFIED DOSSIER
          </div>

          <h1
            className={`mb-8 text-4xl font-semibold tracking-wide text-[#f8f5ef] md:text-6xl transition-all duration-1000 ${
              phase >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Operation White Velvet
          </h1>

          <div
            className={`space-y-4 text-lg leading-8 text-[#ddd6c8] transition-all duration-1000 ${
              phase >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p>Some recipes can be prepared by anyone.</p>
            <p>
              Others can only be executed when two agents operate in perfect
              synchronization.
            </p>
            <p>
              One shared mission. One objective. One reward reserved for the
              agent who completes the protocol.
            </p>
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
              AUTHORIZE BRIEFING
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}