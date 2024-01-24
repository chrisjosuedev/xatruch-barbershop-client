import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  createBooking,
  deleteFromCart,
  getBarbersAvailability,
  getCart,
} from '../api'
import { onAddToCart, onDeleteFromCart, onLoadCart } from '../store'
import {
  onAddSession,
  onClearMessage,
  onLoadAvailableBarbers,
  onProcessing,
} from '../store/cart/cartSlice'

export const useCartStore = () => {
  const { cart, message, availableBarbers, sessionBooked, isProcessing } = useSelector(
    (state) => state.cart
  )
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

  // Check in Cart
  const checkServiceInCart = (id) => {
    return cart.some((item) => item.serviceId === id)
  }

  // Start Loading Barbers
  const startLoadingAvailableBarbers = async (barberId, date) => {
    const barbers = await getBarbersAvailability(barberId, date)
    dispatch(onLoadAvailableBarbers(barbers))
  }

  // Start Adding Booking Session
  const startAddingSession = async (session) => {
    dispatch(onProcessing())
    try {
      const { sessionBooking, message } = await createBooking(session)
      dispatch(
        onAddSession({
          sessionBooked: sessionBooking,
          message: `${message} Detalle con código ${sessionBooking.id} enviado a su correo electrónico.`,
        })
      )
      setTimeout(() => {
        dispatch(onClearMessage())
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    // props
    cart,
    message,
    availableBarbers,
    sessionBooked,
    isProcessing,

    // methods
    startAddingToCart,
    checkServiceInCart,
    startLoadingCart,
    startDeletingFromCart,
    startLoadingAvailableBarbers,
    startAddingSession,
  }
}
