import { useDispatch, useSelector } from 'react-redux'
import {
  getAllBookings,
  getAllUserBookings,
  getBookingDetailById,
  getUserBookingDetailById,
} from '../api/fetch/bookings'
import {
  onLoadBookings,
  onLoadingUserBookings,
  onSetActiveBooking,
  onSetActiveUserBooking,
  onSetUserBookingDetail,
  onSetView,
} from '../store'

export const useBookingStore = () => {
  const {
    userBookings,
    activeBooking,
    userbookingDetail,
    isLoadingBookings,
    bookings,
    admin,
  } = useSelector((state) => state.booking)
  const dispatch = useDispatch()

  const startFindUserBookingDetail = async (id, admin) => {
    if (!admin) {
      const bookingUserDetails = await getUserBookingDetailById(id)
      dispatch(onSetActiveUserBooking(id))
      dispatch(onSetUserBookingDetail(bookingUserDetails))
      return
    }
    const bookingDetails = await getBookingDetailById(id)
    dispatch(onSetActiveBooking(id))
    dispatch(onSetUserBookingDetail(bookingDetails))
  }

  const startLoadingUserBookings = async (adminView) => {
    if (!adminView) {
      const userBookings = await getAllUserBookings()
      dispatch(onLoadingUserBookings(userBookings))
      dispatch(onSetView(false))
      return
    }
    const bookings = await getAllBookings()
    dispatch(onLoadBookings(bookings))
    dispatch(onSetView(true))
  }

  return {
    // props
    userBookings,
    userbookingDetail,
    isLoadingBookings,
    activeBooking,
    bookings,
    admin,

    // methods
    startLoadingUserBookings,
    startFindUserBookingDetail,
  }
}
