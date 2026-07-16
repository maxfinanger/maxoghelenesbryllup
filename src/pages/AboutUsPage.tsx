export default function AboutUsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.6),_rgba(248,244,239,0.8))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-amber-900/70">
              Om oss
            </p>
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Max &amp; Helene
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Noen ord om oss og reisen fram til den store dagen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Siden 2022
              </div>

              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Vi møttes første gang i 2022, og siden den dagen har livet
                  vårt vært fylt med eventyr, latter og kjærlighet. Etter mange
                  fine år sammen, er vi klare til å ta det neste store steget i
                  livet vårt.
                </p>
                <p>
                  Vi gleder oss enormt til å dele denne spesielle dagen med
                  dere, og til å fylle den med gode samtaler, gode minner og alt
                  det fine som hører en bryllupsdag til.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-amber-900/5 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(61,46,38,0.12)]">
                <img
                  src="https://maxfinanger.github.io/maxoghelenesbryllup/images/max-og-helene.jpeg"
                  alt="Max og Helene"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
