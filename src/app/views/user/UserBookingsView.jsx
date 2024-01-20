import { useEffect, useMemo } from "react";
import { useBookingStore } from "../../../hooks/useBookingStore";
import { Message, SpinnerLoader } from "../../components";
import { BookingsTable } from "../../components/Bookings/BookingsTable";
import { BookingsModal } from "../../components/Bookings";

export const UserBookingsView = () => {
  const { startLoadingUserBookings, isLoadingBookings, userBookings } =
    useBookingStore();

  useEffect(() => {
    startLoadingUserBookings();
  }, []);

  // Render Messages or User Bookings
  const renderUserBookings = useMemo(() => {
    if (userBookings.length === 0)
      return (
        <Message message={"No parece haber nada por aquí... 😔"} type="dark" />
      );
    return <BookingsTable data={userBookings} />;
  }, [userBookings]);

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Bookings</h3>
        <hr />
      </div>
      <div className="col-md-12">
        {isLoadingBookings ? <SpinnerLoader /> : renderUserBookings}
      </div>
      <BookingsModal />
    </div>
  );
};
