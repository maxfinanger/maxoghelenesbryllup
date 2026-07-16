const HomePage = () => {
  return (
    <>
      {/* HERO SECTION - Large & Beautiful */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://maxfinanger.github.io/maxoghelenesbryllup/images/forside.jpeg" // ← Make sure this file is in your public folder
          alt="Max og Helene"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif text-white tracking-tight drop-shadow-lg">
            Max &amp; Helene
          </h1>
          <p className="mt-4 text-3xl md:text-4xl text-white/90 font-light tracking-wide">
            10. juli 2027
          </p>

          <div className="mt-20 md:mt-24 flex justify-center">
            <div className="text-foreground px-10 py-5 text-center">
              <p className="text-sm uppercase text-white tracking-[2px] font-medium">
                Fagerborg kirke kl. 14:30
              </p>
              <p className="text-sm uppercase text-white tracking-[2px] font-medium mt-1">
                Strand Restaurant fra kl. 16:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
