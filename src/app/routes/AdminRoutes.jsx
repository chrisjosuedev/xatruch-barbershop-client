import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanelPage } from "../pages"

export const AdminRoutes = () => {
  // TODO: 
  // * Admin ->
  // *  element Admin Routes
  // *    /reviews [Get all, Enable to show in landing page]
  // *    /bookings [Get all user bookings]
  // *    /services [+Enable to show in landing page]
  // *    /settings [+Enable to show available times]
  // *    /profile [+Enable to show in landing page]

  return (
    <Routes>
      <Route path="/" element={<AdminPanelPage />} />
      <Route path="/*" element={<Navigate to={"/settings"} />} />
    </Routes>
  )
}
