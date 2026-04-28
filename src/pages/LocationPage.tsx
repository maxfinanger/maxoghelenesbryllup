const LocationPage = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-3xl font-serif text-center mb-12 text-foreground">
                Festen
            </h1>

            {/* Hero Image */}
            <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl">
                <img
                    src="https://maxfinanger.github.io/maxoghelenesbryllup/images/strand.jpeg"
                    alt="Strand Restaurant"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Optional dark overlay for better text if you want to add title later */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto space-y-8 text-muted-foreground leading-relaxed text-lg">
                <p>
                    Etter vielsen i kirken fortsetter feiringen på Strand
                    Restaurant. Stedet ligger ved Oslofjorden i Bærum, med
                    adresse Strandalleen 48, 1368 Stabekk. Det er ca. 15
                    minutter fra Oslo sentrum med bil og 3 minutter fra Lysaker.
                </p>
                <p>
                    For å komme dit med bil: Kjør fra Oslo sentrum via E18 mot
                    Drammen, ta avkjøring mot Lysaker og følg skiltene til
                    Stabekk. Det er gratis parkering med rikelig plass. Med
                    offentlig transport: 21 bussen eller trikken til Holbersplass, deretter ta 160 bussen til strand. Deretter kan man gå til lokalet.
                    Stedet har en privat gjestebrygge for ankomst med båt.
                </p>
                <p>
                    Det blir servert 3 retters middag, med vin på stedet. Det vil også være småretter servert etter vielsen og nattmat for de som blir igjen på festen til sent på natten.
                </p>
                <p>
                    Fasiliteter inkluderer lydanlegg, mikrofoner, projektor,
                    musikkanlegg og piano. Lokalet er HC-tilpasset med
                    tilgjengelig inngang. 
                </p>

                <div className="text-center mt-12">
                    <a
                        href="https://www.strandrestaurant.no/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                        Besøk Strand Restaurants nettside →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;