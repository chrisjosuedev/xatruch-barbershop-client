import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes";
import { CheckoutRoutes, PanelRoutes } from "../app/routes";

import { LandingPage, ServicesPage } from "../app/pages";
import { useAuthStore } from "../hooks";
import { authStatus } from "../data/data";
import { useEffect } from "react";
import { AuthLoader } from "../ui";

export const AppRouter = () => {

  const { currentStatus, startCheckingToken } = useAuthStore();

  useEffect(() => {
    startCheckingToken();
  }, []);

  if (currentStatus === authStatus[0]) return (<AuthLoader />);

  return (
    <Routes>
      {
        (currentStatus === authStatus[2]) ?
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
