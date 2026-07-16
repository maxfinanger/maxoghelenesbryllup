const InformationPage = () => {
  return (
    <div className="container mx-auto px-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full">
        <h1 className="text-3xl font-light text-center mb-12 text-foreground">
          Informasjon
        </h1>

        <div>
          <p>
            Toastmaster er Stian Lind, kontakt han om dere ønsker å holde en
            tale. Eller om dere planlegger noe annet under middagen.
          </p>
        </div>
        <div>
          Reise, det går busser mellom Oslo og strand, derfra kan man også gå
          ned til Restauranten. Det er også mulig å parkere ved kirken og ved
          Strand.
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
