import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,123,0.12),_transparent_45%),linear-gradient(180deg,_rgba(255,250,247,0.65),_rgba(248,244,239,0.9))]" />

      <div className="relative w-full max-w-2xl text-center space-y-8 rounded-lg border border-white/70 bg-white/80 px-8 py-14 shadow-[0_8px_24px_rgba(61,46,38,0.03)] backdrop-blur-sm">
      <br />
        <h1 className="text-7xl md:text-8xl font-serif tracking-tight text-[#2f2621]">
          404
        </h1>
        <p className="text-xl text-muted-foreground">Siden ble ikke funnet.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-amber-900/15 bg-[#f7efe8] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#5c4738] transition-colors duration-200 hover:bg-[#f3e4d8]"
        >
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}
