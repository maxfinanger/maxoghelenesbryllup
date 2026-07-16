const WishesPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-4">
            <br />
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2f2621]">
              Ønskeliste
            </h1>
          </div>
          <br />
          <div className="w-full rounded-xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_24px_80px_rgba(61,46,38,0.08)] p-8 md:p-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mx-auto">
            <p>
              Den beste gaven dere kan gi oss er deres tilstedeværelse på vår
              store dag. Om dere ønsker å gi oss en gave, så skal vi publisere
              en ønskeliste med noen forslag. Eventuelt setter vi også pris på
              et bidrag til vår bryllupsreise.
            </p>

            <p className="text-sm text-[#8b6a55]">
              Mer informasjon om dette kommer senere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishesPage;
