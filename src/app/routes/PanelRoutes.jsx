import { Navigate, Route, Routes } from "react-router-dom"

import { PanelPage, UserPage } from "../pages";

export const PanelRoutes = () => {
  const roles = ["ADMIN", "USER"]
  const userRole = roles[0];
  /**
   * TODO: Validate Routes if ADMIN or USER
   * User ->
   *  element User Routes
   *    /panel/user/reviews
   *    /panel/user/bookings
   *    /panel/user/profile
   * Admin ->
   *  element Admin Routes
   *    /panel/admin/reviews [Get all, Enable to show in landing page]
   *    /panel/admin/bookings [Get all user bookings]
   *    /panel/admin/services [+Enable to show in landing page]
   *    /panel/admin/settings [+Enable to show in landing page]
   *    /panel/admin/profile [+Enable to show in landing page]
   */
  return (
    <Routes>
      {
        (userRole === "ADMIN") ?
          <Route path="/admin/*" element={<PanelPage />} /> : 
          <Route path="/user/*" element={<UserPage />} />
      }
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}
