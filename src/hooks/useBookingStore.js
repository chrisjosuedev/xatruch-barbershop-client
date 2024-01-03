import { useDispatch, useSelector } from 'react-redux';
import { getAllUserBookings } from "../api/fetch/bookings";
import { onLoadingUserBookings } from "../store";

export const useBookingStore = () => {
  const { userBookings, isLoadingBookings } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const startLoadingUserBookings = async () => {
    const userBookings = await getAllUserBookings();
    dispatch(onLoadingUserBookings(userBookings));
  }

  return {
    // props
    userBookings,
    isLoadingBookings,

    // methods
    startLoadingUserBookings
  }
};
