const PlanPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
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
          <div className="flex flex-col gap-8 items-center">
            <article className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-10 md:p-12 space-y-6 overflow-visible">
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  14:30 - Vielse i Fagerborg kirke 
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Vi gifter oss i Fagerborg kirke, og vi gleder oss til å dele
                  dette øyeblikket med dere.
                </p>
               
              </div>
              <br />
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  16:30 - Velkomst ved Strand Restaurant
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Vi ønsker alle gjester velkommen til Strand Restaurant for
                  mingling, mat og drikke.
                </p>
              </div>
               <br />
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  17:30 - Middag
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Vi serverer en tre-retters middag, og det blir servert vin til maten. Her blir det også holdt taler.
                </p>
              </div>
               <br />
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  20:30 - Kaffe og Kaker
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Etter middagen blir det servert kaffe og kaker.
                </p>
              </div>
                <br />
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  22:00 - Dansegulv og fest
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Etter kake og kaffe blir det åpnet for dans og fest. Vi håper alle har lyst til å bli med på å feire oss videre inn i natten.
                </p>
              </div>
              <br />
              <div className="space-y-4 text-center">
                <h6 className="text-2xl md:text-3xl font-serif text-[#2f2621]">
                  01:00 - Nattmat
                </h6>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  For de som blir igjen på festen, blir det servert nattmat mot slutten.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
