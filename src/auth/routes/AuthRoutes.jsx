import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages"

export const AuthRoutes = () => {
  /**
   * TODO:
   * /signup
   * /forgot-password/request [+email=...]
   * /forgot-password/recovery [+?token=...]
   */
  return (
    <Routes>
      <Route path="/signin" element={<AuthPage />} />
      <Route path="/*" element={<Navigate to={"/auth/signin"} />} />
    </Routes>
  )
}
