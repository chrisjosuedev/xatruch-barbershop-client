import { useDispatch, useSelector } from 'react-redux';
import { getAllUserBookings, getUserBookingDetailById } from '../api/fetch/bookings';
import {
  onLoadingUserBookings,
  onSetActiveUserBooking,
  onSetUserBookingDetail,
} from '../store';

export const useBookingStore = () => {
  const { userBookings, activeBooking, userbookingDetail, isLoadingBookings } =
    useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const startFindUserBookingDetail = async (id) => {
    const bookingDetails = await getUserBookingDetailById(id);
    dispatch(onSetActiveUserBooking(id));
    dispatch(onSetUserBookingDetail(bookingDetails));
  };

  const startLoadingUserBookings = async () => {
    const userBookings = await getAllUserBookings();
    dispatch(onLoadingUserBookings(userBookings));
  };

  return {
    // props
    userBookings,
    userbookingDetail,
    isLoadingBookings,
    activeBooking,

    // methods
    startLoadingUserBookings,
    startFindUserBookingDetail,
  };
};
