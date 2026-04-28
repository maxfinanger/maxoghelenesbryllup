import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Hjem" },
        { to: "/planen-for-dagen", label: "Planen for dagen" },
        { to: "/festen", label: "Festen" },
        { to: "/ønskeliste", label: "Ønskeliste" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/40 shadow-sm">
                <nav className="container mx-auto px-6 py-8 flex items-center justify-between">
                    
                    {/* Logo / Couple Name */}
                    <div className="flex items-center gap-3">
                        <div>
                            <Link to="/" className="font-serif text-2xl tracking-tight text-gray-900">
                                Max &amp; Helene
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
                                className="text-sm tracking-[1.5px] uppercase font-medium text-muted-foreground hover:text-rose-600 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-rose-600 hover:after:w-full after:transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl hover:bg-gray-100 transition-colors"
                            aria-label="Åpne meny"
                        >
                            <svg
                                className="w-6 h-6 text-gray-700"
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
                    <div className="fixed top-0 right-0 bottom-0 w-72 bg-white z-[9999] shadow-2xl md:hidden">
                        <div className="flex flex-col h-full">
                            <div className="p-6 border-b flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">❤️</div>
                                    <span className="font-serif text-xl">Max &amp; Helene</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 hover:bg-gray-100 rounded-xl"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-8 text-lg">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="uppercase tracking-widest text-gray-700 hover:text-rose-600 transition-colors"
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