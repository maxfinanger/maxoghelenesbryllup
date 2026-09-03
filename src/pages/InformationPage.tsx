const InformationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-[#2f2621] uppercase">
              Praktisk Informasjon
            </h1>
          </div>

          <div className="grid gap-8 md:gap-10 lg:grid-cols-2 justify-items-center">
            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Vielsen i Fagerborg Kirke
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Vielsen finner sted i Fagerborg Kirke, den ligger mellom bislett og majorstuen. Adressen er pilstredet 72, 0354 Oslo. Vielsen vil ta rundt 1 time.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Festen i Strand Restaurant
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Festen finner sted i Strand Restaurant. Adressen er Strandalleen 48, 1368 Stabekk. Det blir
                servert 3 retters middag, med vin til maten. Etter middagen blir det servert kaffe og kaker, dere må gjerne ta med kake om dere ønsker. Mot slutten av kvelden blir det
                nattmat for de som blir igjen på festen.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Toastmaster
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Kontakt Stian Lind hvis dere ønsker å holde en tale, bidra med et
                innslag eller planlegger noe annet under middagen.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Telefon: 414 79 639
              </p>
                <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Epost: stianlind@hotmail.com
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Dresscode
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Dresscode er black tie. For menn betyr dette smoking eller mørk dress, og for kvinner betyr dette
                ankellange kjoler. Siden det er et sommerbryllup skal dere slippe å møte opp i bunad.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Kollektivtransport
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Det går busser mellom Oslo og Strand. Enkelste vei blir
                antagelig 21-bussen eller trikken til Holbergs plass, deretter
                ta 160-bussen til Strand. Derfra kan man gå ned til
                restauranten.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-14 md:p-20 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Bil og parkering
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Det er mulig å parkere ved kirken og ved Strand Restaurant,
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