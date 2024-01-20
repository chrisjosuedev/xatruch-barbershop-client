import { Navigate, Route, Routes } from "react-router-dom";
import {
  UserBookingsPage,
  UserPage,
  UserPasswordPage,
  UserReviewsPage,
} from "../pages";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/change-password" element={<UserPasswordPage />} />
      <Route path="/reviews" element={<UserReviewsPage />} />
      <Route path="/bookings" element={<UserBookingsPage />} />
      <Route path="/*" element={<Navigate to={"/account"} />} />
    </Routes>
  );
};
