import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Hjem" },
    { to: "/plan-for-dagen", label: "Plan for dagen" },
    //{ to: "/festen", label: "Festen" },
    { to: "/informasjon", label: "Informasjon" },
    { to: "/ønskeliste", label: "Ønskeliste" },
    { to: "/rsvp", label: "RSVP" },
    //{ to: "/om-oss", label: "Om oss" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/75 backdrop-blur-xl shadow-[0_10px_30px_rgba(61,46,38,0.06)]">
        <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
          {/* Logo / Couple Name */}
          <div className="flex items-center gap-3">
            <div>
              <Link
                to="/"
                className="font-serif text-2xl tracking-tight text-[#2f2621]"
              >
                Helene &amp; Max
              </Link>
              <p className="text-[10px] uppercase tracking-[1px] text-muted-foreground -mt-1">
                10. juli 2027
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm tracking-[1.5px] uppercase font-medium text-muted-foreground hover:text-amber-800 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-amber-800 hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl hover:bg-black/5 transition-colors"
              aria-label="Åpne meny"
            >
              <svg
                className="w-6 h-6 text-[#4a3a32]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[9998] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-[#fffaf7] z-[9999] shadow-2xl md:hidden">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b flex items-center justify-between">
                <div className="font-serif text-xl text-[#2f2621]">
                  Max &amp; Helene
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 hover:bg-black/5 rounded-xl text-[#4a3a32]"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-8 text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="uppercase tracking-widest text-[#4a3a32] hover:text-amber-800 transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
