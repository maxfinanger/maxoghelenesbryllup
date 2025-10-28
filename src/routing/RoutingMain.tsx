import { Routes, Route } from "react-router-dom";
import { HomePage, AboutUsPage, HelpPage, NotFoundPage } from "../pages";

// Kommentar

export function RoutingMain() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/hjelp" element={<HelpPage />} />
            <Route path="/om-oss" element={<AboutUsPage />} />
        </Routes>
    );
}
