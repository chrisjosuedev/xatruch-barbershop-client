import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart, getCart } from '../api'
import { onAddToCart, onDeleteFromCart, onLoadCart } from '../store'
import { onClearMessage } from '../store/cart/cartSlice'

export const useCartStore = () => {
  const { cart, message } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  // Start Loading Cart
  const startLoadingCart = async () => {
    const cart = await getCart()
    dispatch(onLoadCart(cart))
  }

  // Start Adding to Cart
  const startAddingToCart = async (id) => {
    const service = await addToCart(id)
    dispatch(onAddToCart(service))
  }

  // Start Deleting From Cart
  const startDeletingFromCart = async (id) => {
    const message = await deleteFromCart(id)
    dispatch(onDeleteFromCart({ id, message }))
    setTimeout(() => {
      dispatch(onClearMessage())
    }, 3)
  }

  // Star Check in Cart
  const checkServiceInCart = (id) => {
    return cart.some((item) => item.serviceId === id)
  }

  return {
    // props
    cart,
    message,

    // methods
    startAddingToCart,
    checkServiceInCart,
    startLoadingCart,
    startDeletingFromCart,
  }
}
