import { Routes, Route } from "react-router-dom";
import {
    HomePage,
    AboutUsPage,
    LocationPage,
    NotFoundPage,
    PlanPage,
    WishesPage,
} from "../pages";

// Kommentar

export function RoutingMain() {
    return (
        <Routes>
            <Route path="/maxoghelenesbryllup/" element={<HomePage />} />
            <Route path="/maxoghelenesbryllup/*" element={<NotFoundPage />} />
            <Route
                path="/maxoghelenesbryllup/planen-for-dagen"
                element={<PlanPage />}
            />
            <Route
                path="/maxoghelenesbryllup/om-stedet"
                element={<LocationPage />}
            />
            <Route
                path="/maxoghelenesbryllup/om-oss"
                element={<AboutUsPage />}
            />
            <Route
                path="/maxoghelenesbryllup/ønskeliste"
                element={<WishesPage />}
            />
        </Routes>
    );
}
