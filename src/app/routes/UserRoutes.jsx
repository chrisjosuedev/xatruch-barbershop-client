import { Navigate, Route, Routes } from "react-router-dom"
import { UserPage } from "../pages"

export const UserRoutes = () => {

  // TODO: 
  // User ->
  //  *  element User Routes
  //  *    /reviews
  //  *    /bookings
  //  *    /profile

  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/*" element={<Navigate to={"/account"} />} />
    </Routes>
  )
}
