import Link from 'next/link';

export default function Mission3ConfirmPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f6f1e6]">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-3xl border border-[#3a3216] bg-[#111111] p-8 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-[#d4af37]">
            JANUS Culinary Division
          </div>

          <div className="mb-3 text-xs uppercase tracking-[0.55em] text-[#a88c32]">
            WV-09 // AUTHORIZATION DOSSIER
          </div>

          <h1 className="mb-6 text-4xl font-semibold md:text-5xl">
            Mission Confirmation
          </h1>

          <div className="space-y-5 text-lg leading-8 text-[#ddd6c8]">
            <p>
              The procurement dossier has been decrypted and the infrastructure
              route has been authorized by the Director.
            </p>

            <p>
              By proceeding, you formally accept the
              <span className="text-[#f6f1e6] font-semibold"> Infrastructure Phase</span>
              of
              <span className="text-[#f6f1e6] font-semibold"> Operation White Velvet</span>.
            </p>

            <p>
              This confirmation activates the synchronized operational protocol
              between
              <span className="text-[#f6f1e6] font-semibold"> Agent G</span> and
              <span className="text-[#f6f1e6] font-semibold"> Agent E</span>.
            </p>

            <p>
              Once accepted, the Director will register your commitment and
              initiate the final verification sequence for
              <span className="text-[#f6f1e6] font-semibold"> WV-09</span>.
            </p>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Authorization Record
            </div>

            <div className="space-y-2 text-[#ddd6c8]">
              <div className="flex items-center justify-between">
                <span>Operation</span>
                <span className="text-[#f6f1e6]">White Velvet</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Protocol</span>
                <span className="text-[#f6f1e6]">WV-09</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Agent</span>
                <span className="text-[#f6f1e6]">Guillermo</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="text-[#d4af37]">Awaiting Acceptance</span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/mission-3/fast-track"
              className="inline-flex items-center justify-center rounded-full border border-[#3a3216] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#a79f90] transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Return
            </Link>

            <Link
              href="/mission-3/validation"
              className="inline-flex items-center justify-center rounded-full border border-[#d4af37] px-8 py-3 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
            >
              I ACCEPT THE MISSION
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}