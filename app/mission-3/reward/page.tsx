import Link from 'next/link';

export default function Mission3RewardPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f6f1e6]">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-[32px] border border-[#3a3216] bg-[#101010] p-8 md:p-12 shadow-[0_0_60px_rgba(212,175,55,0.10)]">
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-[#d4af37]">
            JANUS Culinary Division
          </div>

          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            Reward Authorization
          </h1>

          <p className="mb-10 text-lg leading-8 text-[#ddd6c8]">
            La operación ha sido completada. El Director ha aprobado la ejecución
            del protocolo culinario y ha emitido una autorización excepcional.
          </p>

          <div className="rounded-3xl border border-[#3a3216] bg-[#15120a] p-8">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                <div className="text-center leading-tight">
                  <div className="text-[11px] tracking-[0.35em] text-[#d4af37]">JANUS</div>
                  <div className="mx-auto my-2 h-px w-10 bg-[#d4af37]" />
                  <div className="text-[10px] tracking-[0.25em] text-[#d4af37]">AUTHORIZED</div>
                </div>
              </div>

              <div className="text-sm uppercase tracking-[0.45em] text-[#d4af37]">
                Director's Authorization
              </div>
            </div>

            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <p className="text-lg leading-8 text-[#ddd6c8]">
                Por la presente, el Director de JANUS autoriza la producción de
                una
                <span className="text-[#f6f1e6] font-semibold"> Torta Tres Leches exclusiva</span>
                para el Agente Guillermo.
              </p>

              <p className="text-lg leading-8 text-[#ddd6c8]">
                Esta recompensa ha sido concedida debido a la correcta ejecución
                de la fase de infraestructura y a la sincronización operativa con
                la Agente E.
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

              <div className="rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-5 text-start">
                <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                  Authorization record
                </div>

                <div className="space-y-2 text-[#ddd6c8]">
                  <div className="flex items-center justify-between">
                    <span>Operation</span>
                    <span className="text-[#f6f1e6]">Three Milks</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Recipient</span>
                    <span className="text-[#f6f1e6]">Agent Guillermo</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="text-[#d4af37]">Approved</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Issued by</span>
                    <span className="text-[#f6f1e6]">The Director</span>
                  </div>
                </div>
              </div>

              <p className="pt-2 text-[#ddd6c8]">
                La recompensa deberá ser preparada por la Agente E y entregada al
                Agente Guillermo una vez completada la producción del protocolo
                culinario.
              </p>

              <div className="pt-4">
                <div className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                  Signed
                </div>
                <div className="mt-2 text-2xl italic text-[#f6f1e6]" style={{ fontFamily: 'serif' }}>
                  The Director
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm uppercase tracking-[0.3em] text-[#a79f90]">
              Mission completed
            </div>

            <Link
              href="/mission-3"
              className="inline-flex items-center rounded-full border border-[#d4af37] px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              Return to Headquarters
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}