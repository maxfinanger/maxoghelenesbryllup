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

      <div className="h-2"> </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-8 text-muted-foreground leading-relaxed text-lg">
        <p>
          Det blir servert 3 retters middag, med vin til maten. Det vil også
          være småretter servert etter vielsen og nattmat for de som blir igjen
          på festen til sent på natten. Vi stiller også med noen aktiviter siden
          brudeparet skal ta bilder på veien fra Kirken og til festlokalet.
        </p>

        <div className="text-center mt-12">
          <a
            href="https://www.strandrestaurant.no/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-200 font-medium"
          >
            <p className="text-black">
              Besøk Strand Restaurants nettside for mer informasjon
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
