const InformationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <br />
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Praktisk Informasjon
            </h1>
            <br />
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
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

            <section className="rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Reise og parkering
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Etter vielsen i kirken fortsetter feiringen på Strand
                Restaurant. Stedet ligger ved Oslofjorden i Bærum, med adresse
                Strandalleen 48, 1368 Stabekk. Det er ca. 15 minutter fra Oslo
                sentrum med bil og 3 minutter fra Lysaker.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                For de som kommer dit med bil. Det er gratis parkering utenfor
                lokalet med masse plass. Med offentlig transport: 21 bussen
                eller trikken til Holbersplass, deretter ta 160 bussen til
                strand. Deretter kan man gå til lokalet. Stedet har en privat
                gjestebrygge for ankomst med båt.
              </p>
            </section>

            <section className="lg:col-span-2 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-8 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Transport og ankomst
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-[#f7efe8] p-6 md:p-7 space-y-3 text-[#5c4738]">
                  <h3 className="text-lg md:text-xl font-serif text-[#2f2621]">
                    Kollektivtransport
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Det går busser mellom Oslo og Strand. Derfra kan man også gå
                    ned til restauranten.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7efe8] p-6 md:p-7 space-y-3 text-[#5c4738]">
                  <h3 className="text-lg md:text-xl font-serif text-[#2f2621]">
                    Bil og parkering
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Det er også mulig å parkere ved kirken og ved Strand
                    Restaurant, og stedet har en privat gjestebrygge.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
