export function Footer() {
    return (
        <footer className="border-t py-12 w-full bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-sm text-gray-600">
                            Max og Helenes Bryllup{" "}
                        </p>
                        <p className="text-xs text-gray-500 mt-4 max-w-sm">
                            10.07.2027
                        </p>
                    </div>

                    <div>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/hjelp"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Hjelp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/hjem"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Hjem
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Om Oss</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/om-oss"
                                    className="text-sm text-gray-600 hover:text-primary"
                                >
                                    Om oss
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
