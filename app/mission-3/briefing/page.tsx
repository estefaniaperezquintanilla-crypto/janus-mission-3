import Link from 'next/link';

export default function Mission3BriefingPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f6f1e6]">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d4af37]">
          JANUS Culinary Division
        </div>

        <div className="mb-3 text-xs uppercase tracking-[0.55em] text-[#a88c32]">
          WV-09 // CLASSIFIED DOSSIER
        </div>

        <h1 className="mb-8 text-4xl font-semibold md:text-6xl">
          Mission Briefing
        </h1>

        <div className="space-y-6 text-lg leading-8 text-[#ddd6c8]">
          <p>
            Agent Guillermo, the Director has authorized an operation of
            exceptional classification.
          </p>

          <p>
            The objective is not to acquire equipment. The objective is to build
            the capability required to execute
            <span className="text-[#f6f1e6] font-semibold"> Operation White Velvet</span>,
            a culinary protocol reserved for synchronized agents.
          </p>

          <p>
            This mission has been classified as a
            <span className="text-[#d4af37] font-semibold"> shared operation</span>.
            No single agent can complete it alone.
          </p>
        </div>

        <div className="my-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#2b2b2b] bg-[#111111] p-6">
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Agent G
            </div>

            <h2 className="mb-4 text-2xl font-semibold">Procurement Unit</h2>

            <div className="space-y-3 blur-md select-none text-[#8d8577]">
              <div>Hand Mixer</div>
              <div>9-inch Cake Pan</div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#2b2b2b] bg-[#111111] p-6">
            <div className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
              Agent E
            </div>

            <h2 className="mb-4 text-2xl font-semibold">Ingredient Division</h2>

            <div className="space-y-3 blur-md select-none text-[#8d8577]">
              <div>Flour</div>
              <div>Eggs</div>
              <div>Sugar</div>
              <div>Condensed Milk</div>
              <div>Evaporated Milk</div>
              <div>Cream</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#3a3216] bg-[#15120a] p-6 text-[#ddd6c8]">
          <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
            Operational Directive
          </div>

          <p className="text-lg leading-8">
            Classified details will remain encrypted until the infrastructure
            phase has been initiated. Agent G is authorized to proceed to the
            next stage of the dossier.
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