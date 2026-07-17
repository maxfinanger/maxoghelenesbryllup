const InformationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <br />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Praktisk Informasjon
            </h1>
            <br />
          </div>

          <div className="grid gap-8 lg:grid-cols-2 justify-items-center">
            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Vielsen i Fagerborg Kirke
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Vielsen finner sted i Fagerborg Kirke, som ligger i Oslo
                sentrum. Adressen er pilstredet 72, 0354 Oslo.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Festen i Strand Restaurant
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Festen finner sted i Strand Restaurant, som ligger i Oslo
                sentrum. Adressen er Strandalleen 48, 1368 Stabekk. Det blir
                servert 3 retters middag, med vin til maten. Etter vielsen
                kommer det også småretter, og mot slutten av kvelden blir det
                nattmat for de som blir igjen på festen.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
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

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Dresscode
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Vi ønsker at alle gjester kler seg pent til bryllupet. For menn
                betyr dette smoking eller mørk dress, og for kvinner betyr dette
                ankellange kjoler.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Kollektivtransport
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Det går busser mellom Oslo og Strand. Enkelste vei blir
                antagelig 21-bussen eller trikken til Holbergs plass, deretter
                ta 160-bussen til Strand. Derfra kan man også gå ned til
                restauranten.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Bil og parkering
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Det er også mulig å parkere ved kirken og ved Strand Restaurant,
                og stedet har en privat gjestebrygge.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
