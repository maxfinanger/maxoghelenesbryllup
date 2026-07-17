const RsvpPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto text-center space-y-10">
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
          <div className="rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 md:p-10 space-y-6 text-left md:text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Gi beskjed til Max eller Helene om dere har anledning til å komme
              eller ikke. Informer oss også om eventuelle matallergier eller
              andre preferanser.
            </p>
            <br />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-2 mx-auto w-full max-w-2xl px-6 md:px-10 justify-center items-center">
              <div className="w-full md:w-[240px] md:flex-none rounded-md bg-[#f7efe8] px-5 py-4 pl-8 text-sm md:text-base text-[#5c4738] shadow-sm text-center">
                Max: 942 83 152
              </div>
              <div className="w-full md:w-[240px] md:flex-none rounded-md bg-[#f7efe8] px-5 py-4 pr-8 text-sm md:text-base text-[#5c4738] shadow-sm text-center">
                Helene: 481 79 367
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;
