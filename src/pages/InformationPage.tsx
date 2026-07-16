const InformationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <br />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Praktisk Informasjon
            </h1>
          </div>
          <br />
          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-8 md:p-10 space-y-5">
              <div className="inline-flex rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Toastmaster
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                Stian Lind
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Kontakt Stian hvis dere ønsker å holde en tale, bidra med et
                innslag eller planlegger noe annet under middagen.
              </p>
            </section>

            <section className="rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-8 md:p-10 space-y-5">
              <div className="inline-flex rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Reise og parkering
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Det går busser mellom Oslo og Strand. Derfra kan man også gå ned
                til restauranten.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Det er også mulig å parkere ved kirken og ved Strand Restaurant.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
