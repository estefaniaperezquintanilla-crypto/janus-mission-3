import Image from 'next/image';
import Link from 'next/link';

export default function Mission3FastTrackPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f6f1e6]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d4af37]">
          JANUS Culinary Division
        </div>

        <div className="mb-3 text-xs uppercase tracking-[0.55em] text-[#a88c32]">
          WV-09 // PROCUREMENT DOSSIER
        </div>

        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
          Infrastructure Phase
        </h1>

        <p className="mb-12 max-w-3xl text-lg leading-8 text-[#ddd6c8]">
          The Procurement Unit has been decrypted. The Director has authorized
          the acquisition of the infrastructure required to execute
          <span className="text-[#f6f1e6] font-semibold"> Operation White Velvet</span>.
          No comparison, optimization, or alternative selection is required.
          Execute the acquisition protocol exactly as specified.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="overflow-hidden rounded-3xl border border-[#2b2b2b] bg-[#111111]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/mission3/mixer.jpg"
                alt="Hamilton Beach Hand Mixer"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6">
              <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                Procurement Item 01
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                Hamilton Beach Hand Mixer
              </h2>

              <p className="mb-6 text-[#ddd6c8]">
                Authorized mixing unit required to establish the operational
                capability of the infrastructure phase. Approved by the Director
                for compatibility with WV-09 protocol requirements.
              </p>

              <div className="mb-6 flex items-center justify-between text-sm">
                <span className="rounded-full border border-[#3a3216] bg-[#15120a] px-3 py-1 text-[#d4af37]">
                  Director Approval: 97%
                </span>
                <span className="text-[#a79f90]">Amazon US</span>
              </div>

              <a
                href="https://www.amazon.com/Hamilton-Beach-62682RZ-Mixer-Snap/dp/B001CH0ZLE"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#d4af37] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Acquire Unit
              </a>
            </div>
          </section>

          <section className="overflow-hidden rounded-3xl border border-[#2b2b2b] bg-[#111111]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/mission3/cake-pan.jpg"
                alt="9-inch Cake Pan"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                Procurement Item 02
              </div>

              <h2 className="mb-3 text-2xl font-semibold">
                9-inch Cake Pan
              </h2>

              <p className="mb-6 text-[#ddd6c8]">
                Structural mold approved for infrastructure deployment and
                dimensional compliance with WV-09 operational parameters.
              </p>

              <div className="mb-6 flex items-center justify-between text-sm">
                <span className="rounded-full border border-[#3a3216] bg-[#15120a] px-3 py-1 text-[#d4af37]">
                  Director Approval: 95%
                </span>
                <span className="text-[#a79f90]">Amazon US</span>
              </div>

              <a
                href="https://www.amazon.com/dp/B0BKFYYMVC"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#d4af37] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
              >
                Acquire Unit
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-3xl border border-[#3a3216] bg-[#15120a] p-6 text-[#ddd6c8]">
          <div className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d4af37]">
            Shadow Provisioning
          </div>

          <p className="mb-3 text-lg leading-8">
            Shadow Provisioning has already begun.
          </p>

          <p className="text-lg leading-8">
            Agent E has initiated the classified provisioning sequence required
            for
            <span className="text-[#f6f1e6] font-semibold"> Operation White Velvet</span>.
            Ingredient manifests remain encrypted until infrastructure readiness
            is confirmed.
          </p>
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/mission-3/confirm"
            className="inline-flex items-center rounded-full border border-[#d4af37] px-8 py-4 text-sm uppercase tracking-[0.35em] text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            Continue to Confirmation
          </Link>
        </div>
      </div>
    </main>
  );
}