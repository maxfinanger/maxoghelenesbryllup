const scheduleItems = [
  {
    time: "14:30",
    title: "Vielse i Fagerborg kirke",
    description:
      "Vi gifter oss i Fagerborg kirke, og vi gleder oss til å dele dette øyeblikket med dere.",
  },
  {
    time: "16:30",
    title: "Velkomst ved Strand Restaurant",
    description:
      "Her blir det mingling, og servering av småretter og drikke.",
  },
  {
    time: "17:30",
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
];

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
            <article className="w-full rounded-lg bg-white/80 backdrop-blur-sm border border-white/70 shadow-[0_8px_24px_rgba(61,46,38,0.03)] p-8 md:p-12 overflow-visible">
              <div className="space-y-8">
                {scheduleItems.map((item) => (
                  <div
                    key={item.time}
                    className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-8 items-start"
                  >
                    <div className="text-left md:text-right pt-1">
                      <p className="text-2xl md:text-3xl font-serif text-[#2f2621] tracking-tight">
                        {item.time}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-serif text-[#2f2621]">
                        {item.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
