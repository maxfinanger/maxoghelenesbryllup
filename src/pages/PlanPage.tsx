const PlanPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <br />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Planen for dagen
            </h1>
            <p className="text-lg font-serif tracking-tight text-[#2f2621]">
              Lørdag 10. juli 2027
            </p>
          </div>
          <br />
          <div className="flex flex-col gap-8">
            <article className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Vielsen
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  Fagerborg kirke
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pilestredet 72, 0354 Oslo
                </p>
                <p className="inline-flex rounded-full bg-[#f7efe8] px-4 py-2 text-sm font-medium tracking-wide text-[#7a5b46]">
                  Fra kl. 14:30 - 15:30
                </p>
              </div>
            </article>

            <article className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Fest og middag
              </div>
              <div className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  Strand Restaurant
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strandalleen 48, 1368 Stabekk
                </p>
                <p className="inline-flex rounded-full bg-[#f7efe8] px-4 py-2 text-sm font-medium tracking-wide text-[#7a5b46]">
                  Fra ca. kl. 16:30 til 03:00
                </p>
                <div className="pt-2 text-base md:text-lg text-muted-foreground leading-relaxed space-y-1">
                  <p>Mingling og aperitiff på terrassen ved sjøen</p>
                  <p>Middag i festsalen</p>
                  <p>Tale, dans og fest ut i de små timer</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
