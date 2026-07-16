const RsvpPage = () => {
  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-center mb-8 text-foreground">
          RSVP
        </h1>

        <p className="text-2xl text-muted-foreground text-center mb-12">
          Vi gleder oss til å feire med deg!
        </p>
        <br></br>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Gi beskjed til Max eller Helene om dere har annledning til å komme
          eller ikke. Informer oss også om eventuelle matallergier,
          kostholdsønsker eller andre forhold med tanke på mat og drikke for
          kvelden.
        </p>
        <br></br>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          Har du spørsmål? Ta kontakt med oss.
          <br />
          Max - 942 83 152, Helene - 481 79 367
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;
