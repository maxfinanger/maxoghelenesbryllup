const scheduleItems = [
  {
    time: "13:00",
    title: "Vielse i Fagerborg kirke",
    description:
      "Vi gifter oss i Fagerborg kirke, og vi gleder oss til å dele dette øyeblikket med dere.",
  },
  {
    time: "15:00",
    title: "Velkomst ved Strand Restaurant",
    description: "Her blir det mingling, og servering av småretter og drikke.",
  },
  {
    time: "17:00",
    title: "Middag",
    description:
      "Vi serverer en tre-retters middag med vin til maten, og det blir holdt taler underveis.",
  },
  {
    time: "20:30",
    title: "Kaffe og kaker",
    description: "Etter middagen blir det servert kaffe og kaker.",
  },
  {
    time: "22:00",
    title: "Dansegulv og fest",
    description:
      "Etter kake og kaffe åpner vi for dans og fest. Vi håper alle har lyst til å bli med videre inn i natten.",
  },
  {
    time: "01:00",
    title: "Nattmat",
    description:
      "For de som blir igjen på festen, blir det servert nattmat mot slutten.",
  },
  {
    time: "02.00",
    title: "Avslutning av festen",
    description: "Festet avsluttes, og vi takker alle for en fantastisk dag og kveld.",
  }
];

const PlanPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-3xl md:max-w-4xl mx-auto space-y-12 w-full">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl uppercase font-serif tracking-tight text-[#2f2621]">
              Plan For Dagen
            </h1>
            <p className="text-lg font-serif tracking-tight text-[#2f2621]">
              Lørdag 10. juli 2027
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <article className="sm:w-auto md:w-165 lg:w-165 rounded-lg bg-white/80 backdrop-blur-sm border border-white/70">
              <div className="rounded-md border border-[#c9a27b]/40">
                <div className="mx-auto">
                  <br />
                    {scheduleItems.map((item) => (
                      <div
                        key={item.time}
                        className="grid grid-cols-[64px_1fr] gap-4 items-baseline md:grid-cols-[110px_1fr] md:gap-10"
                      >
                        <div className="text-right pt-1">
                          <p className="text-base md:text-2xl font-serif text-[#2f2621] tracking-tight">
                            {item.time}
                          </p>
                        </div>

                        <div className="min-w-0">
                          <h2 className="text-base md:text-2xl font-serif uppercase text-[#2f2621]">
                            {item.title}
                          </h2>
                        </div>
                        <div />
                      </div>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;