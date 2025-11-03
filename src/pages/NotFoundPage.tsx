import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-light tracking-tight text-muted-foreground">
                    404
                </h1>
                <p className="text-xl text-muted-foreground">
                    Siden ble ikke funnet
                </p>
                <Link
                    to="/"
                    className="inline-block mt-8 text-sm tracking-wider uppercase text-primary hover:text-primary/80 transition-colors duration-200"
                >
                    Tilbake til forsiden
                </Link>
            </div>
        </div>
    );
}
