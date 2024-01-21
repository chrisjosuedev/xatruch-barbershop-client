import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes'
import { AdminRoutes, CheckoutRoutes, UserRoutes } from '../app/routes'

import { ServicesPage } from '../app/pages/ServicesPage'
import { LandingPage } from '../app/pages'
import { useAuthStore } from '../hooks'
import { authStatus } from '../data/data'
import { AuthLoader } from '../ui'

export const AppRouter = () => {
  const {
    user: { role },
    currentStatus,
    startCheckingToken,
  } = useAuthStore()

  useEffect(() => {
    startCheckingToken()
  }, [])

  if (currentStatus === authStatus[0]) return <AuthLoader />

  return (
    <Routes>
      {currentStatus === authStatus[2] ? (
        <Route path='/auth/*' element={<AuthRoutes />} />
      ) : (
        <>
          {role === 'ADMIN' && <Route path='/settings/*' element={<AdminRoutes />} />}
          <Route path='/account/*' element={<UserRoutes />} />
          <Route path='/checkout/*' element={<CheckoutRoutes />} />
        </>
      )}
      <Route path='/' element={<LandingPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
