import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanelPage, BarbersPage, BookingsPage, ReviewsPage } from "../pages"
import { ServicesPage } from "../pages/admin/ServicesPage"

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPanelPage />} />
      <Route path="/barbers" element={<BarbersPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/*" element={<Navigate to={"/settings"} />} />
    </Routes>
  )
}
