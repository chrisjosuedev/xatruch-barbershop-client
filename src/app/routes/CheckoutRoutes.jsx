import { Navigate, Route, Routes } from 'react-router-dom'
import { CartPage } from '../pages/checkout/CartPage'
import { PickTimePage } from '../pages/checkout/PickTime'
import { useCartStore } from '../../hooks/useCartStore'

export const CheckoutRoutes = () => {
  const { cart } = useCartStore()

  return (
    <Routes>
      <Route path='/my-cart' element={<CartPage />} />
      {cart.length > 0 && <Route path='/pick-a-time' element={<PickTimePage />} />}
      <Route path='/*' element={<Navigate to={'/my-cart'} />} />
    </Routes>
  )
}
