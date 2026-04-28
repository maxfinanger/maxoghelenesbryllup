const HomePage = () => {
    return (
        <>
            {/* HERO SECTION - Large & Beautiful */}
            <div className="relative h-screen flex items-center justify-center center-content overflow-hidden">
                <img
                    src="https://maxfinanger.github.io/maxoghelenesbryllup/images/forside.jpeg"   // ← Make sure this file is in your public folder
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

                    <div className="mt-12 flex justify-center">
                        <div className="bg-white/95 backdrop-blur-sm text-foreground px-10 py-5 rounded-3xl shadow-2xl text-center border border-white/50">
                            <p className="text-sm uppercase tracking-[2px] font-medium text-primary">
                                Fagerborg kirke kl. 14:30
                            </p>
                            <p className="text-sm uppercase tracking-[2px] font-medium mt-1">
                                Strand Restaurant fra kl. 16:30
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll prompt */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest flex flex-col items-center gap-1.5">
                    <span>SCROLL NED</span>
                    <div className="w-px h-8 bg-white/40"></div>
                </div>
            </div>

            {/* CONTENT BELOW HERO - Perfectly Centered */}
            <div className="container mx-auto px-6 py-24 max-w-2xl text-center">
                <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
                    <p>
                        Vi gifter oss i Fagerborg kirke kl. 14:30, og feirer videre med middag og fest 
                        på Strand Restaurant ved Oslofjorden.
                    </p>
                    <p>
                        En dag fylt med kjærlighet, latter og gode minner – og vi håper du er med oss!
                    </p>
                </div>

                <div className="mt-16 bg-secondary/10 border border-secondary/30 rounded-3xl p-10 md:p-12">
                    <p className="text-xs uppercase tracking-widest text-primary mb-3">Vielsen • Fest</p>
                    <p className="text-base md:text-lg font-medium">
                        <strong>Fagerborg kirke</strong> kl. 14:30<br />
                        <strong>Strand Restaurant</strong> fra ca. kl. 16:30 – 03:00
                    </p>
                </div>

            </div>
        </>
    );
};

export default HomePage;