"use client";

import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#f1f1f1]">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        Hjem
                    </Link>
                    <Link
                        to="/hjelp"
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        Hjelp
                    </Link>
                    <Link
                        to="/om-oss"
                        className="text-gray-600 hover:text-gray-900 transition"
                    >
                        Om oss
                    </Link>
                </div>
            </nav>
        </header>
    );
}
