import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes";
import { CheckoutRoutes, PanelRoutes } from "../app/routes";

import { LandingPage, ServicesPage } from "../app/pages";

export const AppRouter = () => {

  const authenticated = ["not-authenticated", "authenticated"]
  const status = authenticated[0];

  return (
    <Routes>
      {
        (status === "not-authenticated") ?
          <Route path="/auth/*" element={<AuthRoutes />} />
          :
          (
            <>
              <Route path="/panel/*" element={<PanelRoutes />} />
              <Route path="/checkout/*" element={<CheckoutRoutes />} />
            </>
          )
      }
      <Route path='/' element={<LandingPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  )
}
