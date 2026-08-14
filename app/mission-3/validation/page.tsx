'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Mission3ValidationPage() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1200),
      setTimeout(() => setStep(2), 3200),
      setTimeout(() => setStep(3), 5600),
      setTimeout(() => setStep(4), 8200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const status = [
    'Submitting commitment record...',
    'Director reviewing operational status...',
    'Cross-checking with Agent E logistics...',
    'Authorization approved.',
  ];

  return (
    <main className="min-h-screen bg-[#070707] text-[#f6f1e6]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-3xl border border-[#3a3216] bg-[#101010] p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-[#d4af37]">
            JANUS Validation Protocol
          </div>

          <h1 className="mb-8 text-4xl font-semibold md:text-5xl">
            Director Verification
          </h1>

          <div className="mb-10 flex justify-center">
            <div
              className={`flex h-32 w-32 items-center justify-center rounded-full border transition-all duration-700 ${
                step === 4
                  ? 'border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.35)]'
                  : 'border-[#5a4a18] shadow-[0_0_20px_rgba(212,175,55,0.12)]'
              }`}
            >
              <div className="text-center leading-tight">
                <div className="text-[11px] tracking-[0.35em] text-[#d4af37]">JANUS</div>
                <div className="mx-auto my-2 h-px w-10 bg-[#d4af37]" />
                <div className="text-[10px] tracking-[0.25em] text-[#d4af37]">DIRECTOR</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-5">
            {status.map((line, index) => (
              <div
                key={line}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-all duration-500 ${
                  index < step
                    ? 'border-[#3a3216] bg-[#15120a]'
                    : index === step
                    ? 'border-[#d4af37] bg-[#15120a]'
                    : 'border-[#1b1b1b] bg-[#0b0b0b]'
                }`}
              >
                <span className="text-[#ddd6c8]">{line}</span>

                {index < step ? (
                  <span className="text-[#d4af37]">✓</span>
                ) : index === step ? (
                  <span className="animate-pulse text-[#d4af37]">●</span>
                ) : (
                  <span className="text-[#5a5a5a]">•</span>
                )}
              </div>
            ))}
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Authorization status
            </div>

            <p className="text-lg leading-8 text-[#ddd6c8]">
              {step === 4
                ? 'The Director has verified your operational commitment and synchronized your mission with Agent E. Reward access has been authorized.'
                : 'The Director is reviewing the operational record. Please remain on this secure channel until verification is complete.'}
            </p>
          </div>

          <div className="mt-10 flex justify-end">
            {step === 4 ? (
              <Link
                href="/mission-3/reward"
                className="inline-flex items-center rounded-full border border-[#d4af37] px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Access Reward
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center rounded-full border border-[#5a4a18] px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#7d6a2c] opacity-60 cursor-not-allowed"
              >
                Verifying...
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}