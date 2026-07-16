const RsvpPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center ">
        <div className="w-full max-w-3xl text-center space-y-10">
          <div className="space-y-4">
            <br />
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-[#2f2621]">
              RSVP
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Vi gleder oss til å feire med dere.
            </p>
          </div>
          <br />
          <div className="rounded-[2rem] bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-8 md:p-10 space-y-6 text-left md:text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Gi beskjed til Max eller Helene om dere har anledning til å komme
              eller ikke. Informer oss også om eventuelle matallergier,
              kostholdsønsker eller andre forhold med tanke på mat og drikke for
              kvelden.
            </p>

            <div className="grid gap-4 md:grid-cols-2 pt-2">
              <div className="rounded-2xl bg-[#f7efe8] px-5 py-4 text-sm md:text-base text-[#5c4738]">
                Max: 942 83 152
              </div>
              <div className="rounded-2xl bg-[#f7efe8] px-5 py-4 text-sm md:text-base text-[#5c4738]">
                Helene: 481 79 367
              </div>
            </div>

            <p className="text-sm text-muted-foreground/80">
              Har du spørsmål, er det bare å ta kontakt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;
