import { Route, Routes } from 'react-router-dom'

export const CheckoutRoutes = () => {
  /**
   * If Cart.isEmpty() -> Show Cart Empty View/Component [not continue...]
   * TODO:
   * Checkout routes
   * /checkout/my-cart/ (Empty if nothing...)
   * /checkout/pick-a-time
   * /checkout/purchase (just allow if user picked a schedule...)
   * /checkout/detail [booking detail info]
   */

  return (
    <Routes>
      {/* <Route path="/pick-a-time" element={} />
      <Route path="/purchase" element={} /> */}
      <Route path='/*' element={<Navigate to={'/my-cart'} />} />
    </Routes>
  )
}
