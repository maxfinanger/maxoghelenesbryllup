export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center space-y-14">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Om oss
        </h1>

        {/* Photo - same width as other pages use */}
        <div className="max-w-2xl mx-auto">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://maxfinanger.github.io/maxoghelenesbryllup/images/max-og-helene.jpeg"
              alt="Max og Helene"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-2xl mx-auto space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Vi møttes første gang i 2022, og siden den dagen har livet vårt vært
            fylt med eventyr, latter og kjærlighet. Etter mange fine år sammen,
            er vi klare til å ta det neste store steget i livet vårt.
          </p>
          <p>Vi gleder oss enormt til å dele denne spesielle dagen med dere.</p>
        </div>
      </div>
    </div>
  );
}
