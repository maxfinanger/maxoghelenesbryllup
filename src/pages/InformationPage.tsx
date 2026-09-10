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

          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 justify-items-center">
            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Vielsen i Fagerborg Kirke
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Vielsen vil finne sted i Fagerborg kike. Vi ønsker en mobilfri vielse, da vi har fotograf som vil ta bilder.  
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
              Adressen: Pilestredet 72, 0354 Oslo.               
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Festen i Strand Restaurant
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Festen vil være på Strand Restaurant. Det blir servert 3 retters middag, med vin til maten. Etter middag og dessert blir det dansegulv, med mulighet for å kjøpe drikke i baren. 
                Mot slutten av kvelden blir det nattmat for de som er igjen på festen.
              </p>
               <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Adresse: Strandalleen 48, 1368 Stabekk.
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Toastmaster
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Vi er så heldige som har fått vår venn Stian Lind til å lede oss gjennom denne kvelden. Ønsker du å holde tale eller bidra med noe annet innslag ønsker vi at du tar kontakt med han. 
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Telefon: 414 79 639
              </p>
                <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Epost: stianlind@hotmail.com
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Dresscode
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Dresscode er black tie. For menn betyr dette smoking eller mørk dress, og for kvinner betyr dette ankellange kjoler, gjerne lyse sommerfarger. 
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Bil og parkering
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Det er begrenset med parkeringsplasser utenfor Fagerborg kirke. Vi anbefaler å benytte gateparkering i nærheten. 
                Ved Strand restaurant er det tilgjengelig parkeringsplasser. 
              </p>
            </section>

            <section className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-[#c9a27b]/40 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 sm:p-10 md:p-12 space-y-6 overflow-visible">
              <h5 className="inline-flex w-fit rounded-full py-2 text-lg uppercase tracking-[0.3em] mb-3">
                Kollektivtransport
              </h5>
              <p className="text-base md:text-lg text-muted-foreground leading-loose">
                Det går busser mellom Oslo og Strand. 160-bussen til Strand går fra flere steder i byen, blant annet Holbergs plass, Nationalteateret og Vika. Det tar ca. 10 min å gå bra busstoppet til Strand restaurant. 
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;