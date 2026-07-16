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

                <div className="bg-white border border-border rounded-3xl p-10 md:p-16 shadow-sm text-center">
                    <div className="space-y-8">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Vennligst fyll ut skjemaet så snart som mulig slik at vi kan planlegge dagen best mulig.
                        </p>

                        <a
                            href="https://no.surveymonkey.com/r/LZ6HRPH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary hover:bg-primary/90 text-white text-xl font-medium px-14 py-6 rounded-2xl transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.97] border border-black"
                        >
                            <p className="text-black">Trykk her for å svare!</p> 
                        </a>

                        <div className="pt-6 border-t border-border text-sm text-muted-foreground">
                            Lenken åpnes i en ny fane.<br />
                            Du kan svare for hele din husstand.
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-muted-foreground">
                    Har du spørsmål? Ta kontakt med oss.<br />
                </div>
            </div>
        </div>
    );
};

export default RsvpPage;