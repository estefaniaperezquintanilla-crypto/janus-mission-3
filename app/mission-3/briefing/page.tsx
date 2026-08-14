'use client';

import Link from 'next/link';

export default function Mission3BriefingPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f6f1e6]">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-6 text-sm uppercase tracking-[0.45em] text-[#d4af37]">
          JANUS Culinary Division
        </div>

        <h1 className="mb-8 text-4xl font-semibold md:text-6xl">
          Mission Briefing
        </h1>

        <div className="space-y-6 text-lg leading-8 text-[#ddd6c8]">
          <p>
            Agente Guillermo, el Director ha autorizado una operación de
            naturaleza excepcional.
          </p>

          <p>
            El objetivo no es adquirir herramientas. El objetivo es construir la
            capacidad para ejecutar un protocolo culinario de nivel JANUS:
            <span className="text-[#f6f1e6] font-semibold"> una auténtica torta Tres Leches</span>.
          </p>

          <p>
            Esta misión ha sido clasificada como
            <span className="text-[#d4af37] font-semibold"> operación compartida</span>.
            Ningún agente puede completarla por sí solo.
          </p>
        </div>

        <div className="my-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#2b2b2b] bg-[#111111] p-6">
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Agent G
            </div>
            <h2 className="mb-4 text-2xl font-semibold">Procurement Unit</h2>
            <ul className="space-y-3 text-[#ddd6c8]">
              <li>• Hand Mixer</li>
              <li>• 9-inch Cake Pan</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#2b2b2b] bg-[#111111] p-6">
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Agent E
            </div>
            <h2 className="mb-4 text-2xl font-semibold">Ingredient Division</h2>
            <ul className="space-y-3 text-[#ddd6c8]">
              <li>• Harina</li>
              <li>• Huevos</li>
              <li>• Azúcar</li>
              <li>• Leche condensada</li>
              <li>• Leche evaporada</li>
              <li>• Crema</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-[#3a3216] bg-[#15120a] p-6 text-[#ddd6c8]">
          <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
            Reward classification
          </div>
          <p className="text-lg leading-8">
            Si ambos agentes cumplen sus objetivos, el Director autorizará la
            producción de una
            <span className="text-[#f6f1e6] font-semibold"> torta Tres Leches completa</span>,
            preparada exclusivamente para el Agente Guillermo.
          </p>
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/mission-3/fast-track"
            className="inline-flex items-center rounded-full border border-[#d4af37] px-8 py-4 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            Proceed to Fast Track
          </Link>
        </div>
      </div>
    </main>
  );
}