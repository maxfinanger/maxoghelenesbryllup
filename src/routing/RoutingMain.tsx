import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutUsPage,
  LocationPage,
  NotFoundPage,
  PlanPage,
  WishesPage,
  RsvpPage,
  InformationPage,
} from "../pages";

// Kommentar

export function RoutingMain() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/planen-for-dagen" element={<PlanPage />} />
      <Route path="/festen" element={<LocationPage />} />
      <Route path="/om-oss" element={<AboutUsPage />} />
      <Route path="/ønskeliste" element={<WishesPage />} />
      <Route path="/rsvp" element={<RsvpPage />} />
      <Route path="/informasjon" element={<InformationPage />} />
    </Routes>
  );
}
