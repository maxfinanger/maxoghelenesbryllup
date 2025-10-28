import type React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">
                404 - Siden finnes ikke!
            </h1>
            <p className="text-xl mb-8">Oops! Denne siden finnes ikke.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                Gå tilbake til hjemmesiden
            </Link>
        </div>
    );
};

export default NotFoundPage;
