const LocationPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <br />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Strand Restaurant
            </h1>
            <br />
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-[0_24px_80px_rgba(61,46,38,0.12)] aspect-[16/10] md:aspect-[16/8]">
            <img
              src="https://www.maxoghelene.no/images/strand.jpeg"
              alt="Strand Restaurant"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
              <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#5c4738]">
                Strandalleen 48, Fra kl. 16:30
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start justify-items-center">
            <section className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Middag og fest
              </div>

              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Det blir servert 3 retters middag, med vin til maten. Etter
                  vielsen kommer det også småretter, og mot slutten av kvelden
                  blir det nattmat for de som blir igjen på festen.
                </p>
                <p>
                  Vi sørger for noen aktiviteter mens brudeparet er på vei fra
                  kirken til festlokalet, slik at det er noe hyggelig å fylle
                  tiden med før middagen starter.
                </p>
              </div>
            </section>

            <section className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="inline-flex w-fit rounded-full border border-amber-900/15 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-900/80">
                Praktisk info
              </div>

              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Strand Restaurant ligger ved Oslofjorden i Bærum, med kort vei
                  fra både Oslo sentrum og Lysaker.
                </p>
                <p>
                  Det er gratis parkering utenfor lokalet, og stedet har også
                  privat gjestebrygge for de som kommer sjøveien.
                </p>
              </div>

              <a
                href="https://www.strandrestaurant.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#f7efe8] px-8 py-4 font-medium text-[#5c4738] transition-colors duration-200 hover:bg-[#efe1d4]"
              >
                Besøk Strand Restaurants nettside for mer informasjon
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
